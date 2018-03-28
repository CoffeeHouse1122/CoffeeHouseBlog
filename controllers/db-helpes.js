const mysql = require("mysql");
const moment = require("moment");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1009',
    database: 'coffeehouse'
});

connection.connect();

module.exports = connection;