const FormData = require('form-data');

const paymentInitDataProcess = (data) => {
    let postData = {};
    /*  Integration Required Parameters */
    //required//
    postData['store_id'] = data.store_id;
    postData['store_passwd'] = data.store_passwd;
    postData['productcategory'] = data.productcategory;
    postData['tran_id'] = data.tran_id;
    postData['total_amount'] = data.total_amount;
    postData['currency'] = data.currency;
    postData['success_url'] = data.success_url;
    postData['fail_url'] = data.fail_url;
    postData['cancel_url'] = data.cancel_url;
    //optional//
    postData['ipn_url'] = data.ipn_url;
    postData['multi_card_name'] = data.multi_card_name;
    postData['allowed_bin'] = data.allowed_bin;

    /* Parameters to Handle EMI Transaction */
    // required//
    postData['emi_option'] = data.emi_option;
    //optional//
    postData['emi_max_inst_option'] = data.emi_max_inst_option;
    postData['emi_selected_inst'] = data.emi_selected_inst;

    /* Customer Information */
    //required
    postData['cus_name'] = data.cus_name;
    postData['cus_email'] = data.cus_email;
    postData['cus_add1'] = data.cus_add1;
    postData['cus_add2'] = data.cus_add2;
    postData['cus_city'] = data.cus_city;
    postData['cus_state'] = data.cus_state;
    postData['cus_postcode'] = data.cus_postcode;
    postData['cus_country'] = data.cus_country;
    postData['cus_phone'] = data.cus_phone;
    //optional
    postData['cus_fax'] = data.cus_fax;

    /* Shipment Information */
    //required
    postData['shipping_method'] = data.shipping_method;
    postData['num_of_item'] = data.num_of_item;
    //optional
    postData['ship_name'] = data.ship_name;
    postData['shipcity'] = data.shipcity;
    postData['ship_add1'] = data.ship_add1;
    postData['ship_add2'] = data.ship_add2;
    postData['ship_city'] = data.ship_city;
    postData['ship_state'] = data.ship_state;
    postData['ship_postcode'] = data.ship_postcode;
    postData['ship_country'] = data.ship_country;

    /* Product Information */
    //required
    postData['product_name'] = data.product_name;
    postData['product_category'] = data.product_category;
    postData['product_profile'] = data.product_profile;
    //optional
    postData['hours_till_departure'] = data.hours_till_departure;
    postData['flight_type'] = data.flight_type;
    postData['pnr'] = data.pnr;
    postData['journey_from_to'] = data.journey_from_to;
    postData['third_party_booking'] = data.third_party_booking;
    postData['hotel_name'] = data.hotel_name;
    postData['length_of_stay'] = data.length_of_stay;
    postData['check_in_time'] = data.check_in_time;
    postData['hotel_city'] = data.hotel_city;
    postData['product_type'] = data.product_type;
    postData['topup_number'] = data.topup_number;
    postData['country_topup'] = data.country_topup;
    postData['cart'] = data.cart;
    postData['product_amount'] = data.product_amount;
    postData['discount_amount'] = data.discount_amount;
    postData['convenience_fee'] = data.convenience_fee;

    /* Customized or Additional Parameters */
    //optional
    postData['value_a'] = data.value_a;
    postData['value_b'] = data.value_b;
    postData['value_c'] = data.value_c;
    postData['value_d'] = data.value_d;

    const fdata = new FormData();
    for (const a in postData) {
        fdata.append(a, postData[a] ? postData[a] : '');
    }

    return fdata;
}
module.exports = paymentInitDataProcess;
