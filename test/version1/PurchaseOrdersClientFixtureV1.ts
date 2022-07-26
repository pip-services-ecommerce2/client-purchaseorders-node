const assert = require('chai').assert;

import { IPurchaseOrdersClientV1 } from '../../src/version1/IPurchaseOrdersClientV1';
import { TestModel } from '../data/TestModel';
import { PagingParams } from 'pip-services3-commons-nodex';
import { PurchaseOrderStateV1 } from 'service-purchaseorders-node';
import { PurchaseOrderV1 } from 'service-purchaseorders-node';

let PURCHASE_ORDER1: PurchaseOrderV1 = TestModel.createPurchaseOrder1();
let PURCHASE_ORDER2: PurchaseOrderV1 = TestModel.createPurchaseOrder2();

export class PurchaseOrdersClientFixtureV1 {
    private _client: IPurchaseOrdersClientV1;

    constructor(client: IPurchaseOrdersClientV1) {
        this._client = client;
    }

    public async testCrudOperations() {
        let purchaseOrder1, purchaseOrder2: PurchaseOrderV1;

        // Create one payment method
        let purchaseOrder = await this._client.createOrder(null, PURCHASE_ORDER1);

        assert.isObject(purchaseOrder);
        TestModel.assertEqualPurchaseOrder(purchaseOrder, PURCHASE_ORDER1);

        purchaseOrder1 = purchaseOrder;

        // Create another credit_card
        purchaseOrder = await this._client.createOrder(null, PURCHASE_ORDER2);

        assert.isObject(purchaseOrder);
        TestModel.assertEqualPurchaseOrder(purchaseOrder, PURCHASE_ORDER2);

        purchaseOrder2 = purchaseOrder;

        // Get all purchase orders
        let page = await this._client.getOrders(
            null,
            null,
            new PagingParams(0, 5, false)
        );

        assert.isObject(page);
        assert.isTrue(page.data.length >= 2);

        // Update the purchase order
        purchaseOrder1.state = PurchaseOrderStateV1.Paid;

        purchaseOrder = await this._client.updateOrder(null, purchaseOrder1);

        assert.isObject(purchaseOrder);
        assert.equal(purchaseOrder.state, PurchaseOrderStateV1.Paid);
        assert.equal(purchaseOrder.id, PURCHASE_ORDER1.id);

        purchaseOrder1 = purchaseOrder;

        // Delete purchase order
        await this._client.deleteOrderById(
            null,
            purchaseOrder1.id,
            purchaseOrder1.customer_id
        );

        // Try to get deleted payment method
        purchaseOrder = await this._client.getOrderById(
            null,
            purchaseOrder1.id,
            purchaseOrder1.customer_id
        );
        
        assert.isNull(purchaseOrder || null);
    }
}
