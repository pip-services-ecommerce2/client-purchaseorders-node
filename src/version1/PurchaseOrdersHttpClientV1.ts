import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { IPurchaseOrdersClientV1 } from './IPurchaseOrdersClientV1';
import { PurchaseOrderV1 } from 'service-purchaseorders-node';

export class PurchaseOrdersHttpClientV1 extends CommandableHttpClient implements IPurchaseOrdersClientV1 {

    constructor(config?: any) {
        super('v1/purchase_orders');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getOrders(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PurchaseOrderV1>> {
        let timing = this.instrument(correlationId, 'purchaseorders.get_orders');

        try {
            return await this.callCommand(
                'get_orders',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
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
            return await this.callCommand(
                'get_order_by_id',
                correlationId,
                {
                    order_id: order_id,
                    customer_id: customer_id
                }
            );
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
            return await this.callCommand(
                'create_order',
                correlationId,
                {
                    order: order
                }
            );
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
            return await this.callCommand(
                'update_order',
                correlationId,
                {
                    order: order
                }
            );
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
            return await this.callCommand(
                'delete_order_by_id',
                correlationId,
                {
                    order_id: order_id,
                    customer_id: customer_id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
