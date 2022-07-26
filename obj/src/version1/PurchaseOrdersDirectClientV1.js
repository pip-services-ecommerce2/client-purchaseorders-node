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
exports.PurchaseOrdersDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class PurchaseOrdersDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor('service-purchaseorders', 'controller', '*', '*', '*'));
        if (config)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getOrders(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'purchaseorders.get_orders');
            try {
                return yield this._controller.getOrders(correlationId, filter, paging);
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
                return yield this._controller.getOrderById(correlationId, order_id, customer_id);
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
                return yield this._controller.createOrder(correlationId, order);
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
                return yield this._controller.updateOrder(correlationId, order);
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
                return yield this._controller.deleteOrderById(correlationId, order_id, customer_id);
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
exports.PurchaseOrdersDirectClientV1 = PurchaseOrdersDirectClientV1;
//# sourceMappingURL=PurchaseOrdersDirectClientV1.js.map