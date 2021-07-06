const SslCommerzPayment = require("./api/payment-controller");

class SSLCommerzPayment extends SslCommerzPayment {
    constructor(store_id, store_password, live = false) {
        super(store_id, store_password, live);
    }
}

module.exports = SSLCommerzPayment;
