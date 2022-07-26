import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IPurchaseOrdersClientV1 } from './IPurchaseOrdersClientV1';
import { PurchaseOrderV1 } from 'service-purchaseorders-node';

export class PurchaseOrdersDirectClientV1 extends DirectClient<any> implements IPurchaseOrdersClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor('service-purchaseorders', 'controller', '*', '*', '*'));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getOrders(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PurchaseOrderV1>> {
        let timing = this.instrument(correlationId, 'purchaseorders.get_orders');
        
        try {
            return await this._controller.getOrders(correlationId, filter, paging);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1> {
        let timing = this.instrument(correlationId, 'purchaseorders.get_order_by_id');
        
        try {
            return await this._controller.getOrderById(correlationId, order_id, customer_id);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1> {
        let timing = this.instrument(correlationId, 'purchaseorders.create_order');
        
        try {
            return await this._controller.createOrder(correlationId, order);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1> {
        let timing = this.instrument(correlationId, 'purchaseorders.update_order');
        
        try {
            return await this._controller.updateOrder(correlationId, order);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1> {
        let timing = this.instrument(correlationId, 'purchaseorders.delete_order_by_id');
        
        try {
            return await this._controller.deleteOrderById(correlationId, order_id, customer_id);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}