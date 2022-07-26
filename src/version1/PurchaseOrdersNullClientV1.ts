import { IPurchaseOrdersClientV1 } from './IPurchaseOrdersClientV1';

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { PurchaseOrderV1 } from 'service-purchaseorders-node';

export class PurchaseOrdersNullClientV1 implements IPurchaseOrdersClientV1 {
    public async getOrders(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PurchaseOrderV1>> {
        return null;
    }

    public async getOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1> {
        return null;
    }

    public async createOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1> {
        return null;
    }

    public async updateOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1> {
        return null;
    }
    
    public async deleteOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1> {
        return null;
    }
}
