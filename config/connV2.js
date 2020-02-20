var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password        : '#@!321Cba',
    database        : 'emedica'
  });

  module.exports = pool;