import { IPurchaseOrdersClientV1 } from './IPurchaseOrdersClientV1';

import { IdGenerator } from "pip-services3-commons-nodex";
import { BadRequestException } from "pip-services3-commons-nodex";

import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { PurchaseOrderV1 } from "service-purchaseorders-node";

export class PurchaseOrdersMemoryClientV1  implements IPurchaseOrdersClientV1 {
    private _maxPageSize: number = 100;
    private _orders: PurchaseOrderV1[] = [];

    public constructor(...orders: PurchaseOrderV1[]) {
        this._orders = orders;
    }

    public async getOrders(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PurchaseOrderV1>> {
        let filterCurl = this.composeFilter(filter);
        let orders = this._orders.filter(filterCurl);

        // Extract a page
        paging = paging != null ? paging : new PagingParams();
        let skip = paging.getSkip(-1);
        let take = paging.getTake(this._maxPageSize);

        let total = null;
        if (paging.total)
            total = orders.length;
        
        if (skip > 0)
            orders = orders.slice(skip);
        orders = orders.slice(0, take);
        
        let page = new DataPage<PurchaseOrderV1>(orders, total);
        return page;
    }

    public async getOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1> {
        let orders = this._orders.filter(x => x.id == order_id && customer_id == customer_id);
        let order = orders.length > 0 ? orders[0] : null;

        return order;
    }

    public async createOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1> {
        if (order == null) {
            return null;
        }

        let oldOrders = this._orders.filter(x => x.id == order.id);
        if (oldOrders.length) {
            throw new BadRequestException(correlationId, "ORDER_ALREADY_EXIST", "order " + order.id + " already exists");
        }

        order = Object.assign({}, order);
        order.id = order.id || IdGenerator.nextLong();

        this._orders.push(order);

        return order;
    }

    public async updateOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1> {
        let index = this._orders.map(x => x.id).indexOf(order.id);

        if (index < 0) {
            return null;
        }

        order = Object.assign({}, order);
        this._orders[index] = order;

        return order;
    }

    public async deleteOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1> {
        var index = this._orders.map(x => x.id).indexOf(order_id);
        var item = this._orders[index];
        
        if (index < 0) {
            return null;
        }

        this._orders.splice(index, 1);

        return item;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let id = filter.getAsNullableString('id');
        let state = filter.getAsNullableString('state');
        let customerId = filter.getAsNullableString('customer_id');
        let ids = filter.getAsObject('ids');
        let createdFrom = filter.getAsNullableDateTime('created_from');
        let createdTo = filter.getAsNullableDateTime('created_to');
        let productId = filter.getAsNullableString('product_id');

        // Process ids filter
        if (typeof ids === 'string')
            ids = ids.split(',');
        if (!Array.isArray(ids))
            ids = null;

        return (item: PurchaseOrderV1) => {
            if (id && item.id != id)
                return false;
            if (ids && ids.indexOf(item.id) < 0)
                return false;
            if (state && item.state != state)
                return false;
            if (customerId && item.customer_id != customerId)
                return false;
            if (createdFrom && item.create_time && item.create_time < createdFrom)
                return false;
            if (createdTo && item.create_time && item.create_time > createdTo)
                return false;
            if (productId && item.items && item.items.filter(x => x.product_id == productId).length == 0)
                return false;

            return true;
        };
    }
}