import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';
export declare class PurchaseOrdersClientFactory extends Factory {
    static Descriptor: Descriptor;
    static NullClientV1Descriptor: Descriptor;
    static MemoryClientV1Descriptor: Descriptor;
    static DirectClientV1Descriptor: Descriptor;
    static HttpClientV1Descriptor: Descriptor;
    constructor();
}
