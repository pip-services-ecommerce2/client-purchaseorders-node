# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Payments Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-purchaseorders-node](https://github.com/pip-services-ecommerce2/service-purchaseorders-node) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client (see https://aws.amazon.com/lambda)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-purchaseorders-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-purchaseorders-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.PurchaseOrdersHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
    ...
```

Now the client is ready to perform operations
```javascript
// Create a new purchase_order
let purchase_order = {
    id: '1',
    customer_id: '1',
    currency_code: 'USD',
    total: 100,
    state: PurchaseOrderStateV1.New,
    items: [{
        price: 40,
        product_id: 'product-1',
        product_name: 'product name 1',
        quantity: 2,
        total: 80,
        description: 'desctiption for product 1',
    },
    {
        price: 20,
        product_id: 'product-2',
        product_name: 'product name 2',
        quantity: 1,
        total: 20,
        description: 'desctiption for product 2',
    }]
};

purchase_order = await client.createOrder(
    null,
    purchase_order
);
```

```javascript
// Get the list of purchase_orders
let page = await client.getOrders(
    null,
    {
        customer_id: '1',
        state: 'new'
    },
    {
        total: true,
        skip: 0,
        take: 10
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

