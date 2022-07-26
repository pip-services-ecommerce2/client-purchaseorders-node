import { PurchaseOrdersClientFixtureV1 } from './PurchaseOrdersClientFixtureV1';
import { PurchaseOrdersMemoryClientV1 } from '../../src/version1/PurchaseOrdersMemoryClientV1';

suite('PurchaseOrdersMemoryClientV1', () => {
    let client: PurchaseOrdersMemoryClientV1;
    let fixture: PurchaseOrdersClientFixtureV1;

    suiteSetup(() => {
        client = new PurchaseOrdersMemoryClientV1();

        fixture = new PurchaseOrdersClientFixtureV1(client);

    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
