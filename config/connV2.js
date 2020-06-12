var mysql = require('mysql');
require('dotenv').config();
var pool  = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
  });

  module.exports = pool;