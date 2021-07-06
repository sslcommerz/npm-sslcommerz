### SSLCommerz - NodeJs NPM

### Installation

```
npm i sslcommerz

```

### How to use:

To call the `SSLCommerzPayment` class, just pass the required parameters as like below (in JSON format):

##### demo:

this the mail class new SSLCommerzPayment(store_id, store_passwd,is_live) you can access all property of this Class and also can override

```
const express = require('express')
const SSLCommerzPayment = require('sslcommerz')
const app = express()
const port = 3030
//sslcommerz init
app.get('/init', (req, res) => {
    const data = {
        total_amount: 100,
        currency: 'EUR',
        tran_id: 'REF123',
        success_url: 'http://yoursite.com/success',
        fail_url: 'http://yoursite.com/fail',
        cancel_url: 'http://yoursite.com/cancel',
        ipn_url: 'http://yoursite.com/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'cust@yahoo.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    };
    const sslcommer = new SSLCommerzPayment('testbox', 'qwerty',true) //true for live default false for sandbox
    sslcommer.init(data).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
```

```
//sslcommerz validation 
// you also use this as internal method
app.get('/validate', (req, res) => {
    const data = {
        val_id:ADGAHHGDAKJ456454 //that you go from sslcommerz response
    };
    const sslcommer = new SSLCommerzPayment('testbox', 'qwerty') //true for live default false for sandbox
    sslcommer.validate(data).then(data => {
        //process the response that got from sslcommerz 
       // https://developer.sslcommerz.com/doc/v4/#order-validation-api
    });
}) 
```

```
//SSLCommerz initiateRefund
// you also use this as internal method
app.get('/initiate-refund', (req, res) => {
    const data = {
        refund_amount:10,
        refund_remarks:'',
        bank_tran_id:CB5464321445456456,
        refe_id:EASY5645415455,
    };
    const sslcommer = new SSLCommerzPayment('testbox', 'qwerty')
    sslcommer.initiateRefund(data).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#initiate-the-refund
    });
})
```

```
//SSLCommerz refundQuery
//you also use this as internal method
app.get('/refund-query', (req, res) => {
    const data = {
        refund_ref_id:SL4561445410,
    };
    const sslcommer = new SSLCommerzPayment('testbox', 'qwerty')
    sslcommer.refundQuery(data).then(data => {
        //process the response that got from sslcommerz
        //https://developer.sslcommerz.com/doc/v4/#initiate-the-refund
    });
})
```

```
//SSLCommerz transactionQueryBySessionId
//you also use this as internal method
app.get('/transaction-query-by-session-id', (req, res) => {
    const data = {
        sessionkey:AKHLAKJS5456454,
    };
    const sslcommer = new SSLCommerzPayment('testbox', 'qwerty')
    sslcommer.transactionQueryBySessionId(data).then(data => {
        //process the response that got from sslcommerz
        //https://developer.sslcommerz.com/doc/v4/#by-session-id
    });
})
```

```
//SSLCommerz transactionQueryByTransactionId
//you also use this as internal method
app.get('/transaction-query-by-transaction-id', (req, res) => {
    const data = {
        tran_id:AKHLAKJS5456454,
    };
    const sslcommer = new SSLCommerzPayment('testbox', 'qwerty')
    sslcommer.transactionQueryByTransactionId(data).then(data => {
        //process the response that got from sslcommerz
        //https://developer.sslcommerz.com/doc/v4/#by-session-id
    });
})
```

- Find more details in [SSLCommerz Developer's Guide](https://developer.sslcommerz.com/)
- Team Email: integration@sslcommerz.com (For any query)

© 2019 SSLCOMMERZ ALL RIGHTS RESERVED

