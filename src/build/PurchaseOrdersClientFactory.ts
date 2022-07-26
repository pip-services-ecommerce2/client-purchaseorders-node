import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { PurchaseOrdersNullClientV1 } from '../version1/PurchaseOrdersNullClientV1';
import { PurchaseOrdersMemoryClientV1 } from '../version1/PurchaseOrdersMemoryClientV1';
import { PurchaseOrdersDirectClientV1 } from '../version1/PurchaseOrdersDirectClientV1';
import { PurchaseOrdersHttpClientV1 } from '../version1/PurchaseOrdersHttpClientV1';

export class PurchaseOrdersClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-purchaseorders', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-purchaseorders', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('service-purchaseorders', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-purchaseorders', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-purchaseorders', 'client', 'http', 'default', '1.0');

	constructor() {
		super();

		this.registerAsType(PurchaseOrdersClientFactory.NullClientV1Descriptor, PurchaseOrdersNullClientV1);
		this.registerAsType(PurchaseOrdersClientFactory.MemoryClientV1Descriptor, PurchaseOrdersMemoryClientV1);
		this.registerAsType(PurchaseOrdersClientFactory.DirectClientV1Descriptor, PurchaseOrdersDirectClientV1);
		this.registerAsType(PurchaseOrdersClientFactory.HttpClientV1Descriptor, PurchaseOrdersHttpClientV1);
	}

}
