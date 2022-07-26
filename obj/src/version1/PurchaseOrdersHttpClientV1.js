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
exports.PurchaseOrdersHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class PurchaseOrdersHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/purchase_orders');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getOrders(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'purchaseorders.get_orders');
            try {
                return yield this.callCommand('get_orders', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getOrderById(correlationId, order_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'purchaseorders.get_order_by_id');
            try {
                return yield this.callCommand('get_order_by_id', correlationId, {
                    order_id: order_id,
                    customer_id: customer_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createOrder(correlationId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'purchaseorders.create_order');
            try {
                return yield this.callCommand('create_order', correlationId, {
                    order: order
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateOrder(correlationId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'purchaseorders.update_order');
            try {
                return yield this.callCommand('update_order', correlationId, {
                    order: order
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteOrderById(correlationId, order_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'purchaseorders.delete_order_by_id');
            try {
                return yield this.callCommand('delete_order_by_id', correlationId, {
                    order_id: order_id,
                    customer_id: customer_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.PurchaseOrdersHttpClientV1 = PurchaseOrdersHttpClientV1;
//# sourceMappingURL=PurchaseOrdersHttpClientV1.js.map