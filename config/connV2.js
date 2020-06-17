var mysql = require('mysql');
require('dotenv').config();
var pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
  dateStrings:true,
});

module.exports = pool;