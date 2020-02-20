const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(bodyParser.json({limit: '200mb', extended: true}));

require('./app/index.js')(app,{});

app.listen(port,()=>{
    console.log("im aliveeeee -> "+port);
});




