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
exports.PurchaseOrdersNullClientV1 = void 0;
class PurchaseOrdersNullClientV1 {
    getOrders(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getOrderById(correlationId, order_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    createOrder(correlationId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    updateOrder(correlationId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteOrderById(correlationId, order_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.PurchaseOrdersNullClientV1 = PurchaseOrdersNullClientV1;
//# sourceMappingURL=PurchaseOrdersNullClientV1.js.map