import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { IPurchaseOrdersClientV1 } from './IPurchaseOrdersClientV1';
import { PurchaseOrderV1 } from 'service-purchaseorders-node';
export declare class PurchaseOrdersDirectClientV1 extends DirectClient<any> implements IPurchaseOrdersClientV1 {
    constructor(config?: any);
    getOrders(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PurchaseOrderV1>>;
    getOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1>;
    createOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1>;
    updateOrder(correlationId: string, order: PurchaseOrderV1): Promise<PurchaseOrderV1>;
    deleteOrderById(correlationId: string, order_id: string, customer_id: string): Promise<PurchaseOrderV1>;
}
