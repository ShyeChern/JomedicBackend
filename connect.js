var mysql = require('mysql');
var pool = require('./config/connV2.js');
// var con = mysql.createConnection({
//     host: "157.245.148.221",
//     user: "root",
//     password: "#@!321Cba",
//     database: 'emedica'
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO jlk_users (user_id) VALUES ('1')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });

// for trying purpose

pool.getConnection(function (err, con) {
    if (err) throw err; 

    var sql = "INSERT INTO jlk_users (user_id) VALUES ('1')";
    con.query(sql, function (err, res) {
        if (err) {
            con.destroy();
        } else {
            con.destroy();
            console.log('done');
        }
    });
});