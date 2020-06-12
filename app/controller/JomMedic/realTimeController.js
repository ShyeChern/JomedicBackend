var customerModel = require('../../model/customerModel');

var format = require('date-fns/format');
const fetch = require('node-fetch');
require('dotenv').config();


const realtimefunction = function (req, res) {
    var transactionCode, data, timestamp;
    transactionCode = req.body['transactionCode'];
    data = req.body['data'];
    timestamp = req.body['timestamp'];

    function generateId(UNQ) {
        let bodyData = {
            txn_cd: 'UNQGEN',
            tstamp: format(new Date(), 'yyyy-mm-dd HH:MM:ss'),
            data: {
                UNQ: UNQ,
            }
        };

        return fetch('http://157.245.148.221:3001/UNQ', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        }).then((response) => response.text())

    }

    if (!transactionCode || transactionCode === "" || !timestamp || timestamp === "" || !data) {

        let responseData = {
            result: false,
            value: "Fail to Make Request",
        }
        res.send(responseData);
        res.end();
    }
    else {

        switch (transactionCode) {

            case 'TEST':
                if (!data.Message || !data.OrderNo) {
                    let responseData = {
                        result: false,
                        value: "Please fill in all the field",
                    }
                    res.send(responseData);
                    res.end();
                }
                else {
                    console.log('reach' + data.Message + data.OrderNo);
                    res.send(data);
                    res.end();
                }
                break;

            default:
                let responseData = {
                    result: false,
                    value: "Wrong Transaction Code",
                }

                res.send(responseData);
                res.end();
                break;
        }
    }
}

module.exports = {
    realtimefunction: realtimefunction
};