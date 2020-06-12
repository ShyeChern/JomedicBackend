const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

const port = 3000;

const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
app.use(bodyParser.json({ limit: '200mb', extended: true }));

require('./app/index.js')(app, {});


io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", (message, orderNo) => {

        let bodyData = {
            transactionCode: 'TEST',
            timestamp: new Date(),
            data: {
                Message:message,
                OrderNo:orderNo
            }
        };

        fetch('http://192.168.1.5:3000/realtimequery', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        }).then((response) => response.json())
            .then(responseJson => console.log(responseJson))
            .catch((error) => {
                console.log(error);
            });

        console.log(message);
        console.log(orderNo);

        // save in db
        // db ask
        io.emit("chat message", message);
    });
});

server.listen(port, () => console.log("server running on port:" + port));


