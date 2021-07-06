const fetch = require("node-fetch");
const httpCall = ({url, method = 'POST', data = {}}) => {
    // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        ...["POST", 'PUT', "PATCH", "UPDATE"].includes(method) && {body: data}, // body data type must match "Content-Type" header
    }).then(response => response.json()).catch(err => err);
}
module.exports = httpCall;
