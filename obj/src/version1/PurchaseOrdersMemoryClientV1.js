"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrdersMemoryClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_4 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_5 = require("pip-services3-commons-nodex");
class PurchaseOrdersMemoryClientV1 {
    constructor(...orders) {
        this._maxPageSize = 100;
        this._orders = [];
        this._orders = orders;
    }
    getOrders(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let filterCurl = this.composeFilter(filter);
            let orders = this._orders.filter(filterCurl);
            // Extract a page
            paging = paging != null ? paging : new pip_services3_commons_nodex_4.PagingParams();
            let skip = paging.getSkip(-1);
            let take = paging.getTake(this._maxPageSize);
            let total = null;
            if (paging.total)
                total = orders.length;
            if (skip > 0)
                orders = orders.slice(skip);
            orders = orders.slice(0, take);
            let page = new pip_services3_commons_nodex_5.DataPage(orders, total);
            return page;
        });
    }
    getOrderById(correlationId, order_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let orders = this._orders.filter(x => x.id == order_id && customer_id == customer_id);
            let order = orders.length > 0 ? orders[0] : null;
            return order;
        });
    }
    createOrder(correlationId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            if (order == null) {
                return null;
            }
            let oldOrders = this._orders.filter(x => x.id == order.id);
            if (oldOrders.length) {
                throw new pip_services3_commons_nodex_2.BadRequestException(correlationId, "ORDER_ALREADY_EXIST", "order " + order.id + " already exists");
            }
            order = Object.assign({}, order);
            order.id = order.id || pip_services3_commons_nodex_1.IdGenerator.nextLong();
            this._orders.push(order);
            return order;
        });
    }
    updateOrder(correlationId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = this._orders.map(x => x.id).indexOf(order.id);
            if (index < 0) {
                return null;
            }
            order = Object.assign({}, order);
            this._orders[index] = order;
            return order;
        });
    }
    deleteOrderById(correlationId, order_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var index = this._orders.map(x => x.id).indexOf(order_id);
            var item = this._orders[index];
            if (index < 0) {
                return null;
            }
            this._orders.splice(index, 1);
            return item;
        });
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_nodex_3.FilterParams();
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
        return (item) => {
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
exports.PurchaseOrdersMemoryClientV1 = PurchaseOrdersMemoryClientV1;
//# sourceMappingURL=PurchaseOrdersMemoryClientV1.js.map