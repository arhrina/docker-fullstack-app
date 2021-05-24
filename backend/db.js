const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'test',
    database: 'myapp'
});

exports.pool = pool; // pool을 사용할 수 있게 exports