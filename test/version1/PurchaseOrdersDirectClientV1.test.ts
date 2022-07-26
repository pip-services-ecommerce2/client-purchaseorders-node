import { Descriptor, ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PurchaseOrdersMemoryPersistence } from 'service-purchaseorders-node';
import { PurchaseOrdersController } from 'service-purchaseorders-node';
import { PurchaseOrdersDirectClientV1 } from '../../src/version1/PurchaseOrdersDirectClientV1';
import { PurchaseOrdersClientFixtureV1 } from './PurchaseOrdersClientFixtureV1';

suite('PurchaseOrdersDirectClientV1', () => {
    let client: PurchaseOrdersDirectClientV1;
    let fixture: PurchaseOrdersClientFixtureV1;

    suiteSetup(async () => {
        
        let logger = new ConsoleLogger();
        let paymentmethodsPersistence = new PurchaseOrdersMemoryPersistence();

        let controller = new PurchaseOrdersController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-purchaseorders', 'persistence', 'memory', 'default', '1.0'), paymentmethodsPersistence,
            new Descriptor('service-purchaseorders', 'controller', 'default', 'default', '1.0'), controller,
        );

        paymentmethodsPersistence.setReferences(references);
        controller.setReferences(references);

        client = new PurchaseOrdersDirectClientV1();
        client.setReferences(references);

        fixture = new PurchaseOrdersClientFixtureV1(client);

        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
