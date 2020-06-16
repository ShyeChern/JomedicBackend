var mysql = require('mysql');
require('dotenv').config();
var pool = mysql.createPool({
  connectionLimit: 100,
  host: '157.245.148.221',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true
});

module.exports = pool;