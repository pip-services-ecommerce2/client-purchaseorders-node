import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PurchaseOrdersMemoryPersistence } from 'service-purchaseorders-node';
import { PurchaseOrdersController } from 'service-purchaseorders-node';
import { PurchaseOrdersHttpServiceV1 } from 'service-purchaseorders-node';
import { PurchaseOrdersHttpClientV1 } from '../../src/version1/PurchaseOrdersHttpClientV1';
import { PurchaseOrdersClientFixtureV1 } from './PurchaseOrdersClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PurchaseOrdersHttpClientV1', () => {
    let service: PurchaseOrdersHttpServiceV1;
    let client: PurchaseOrdersHttpClientV1;
    let fixture: PurchaseOrdersClientFixtureV1;

    suiteSetup(async () => {

        let logger = new ConsoleLogger();
        let persistence = new PurchaseOrdersMemoryPersistence();
        let controller = new PurchaseOrdersController();

        service = new PurchaseOrdersHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-purchaseorders', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-purchaseorders', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-purchaseorders', 'service', 'http', 'default', '1.0'), service
        );

        persistence.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new PurchaseOrdersHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new PurchaseOrdersClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
