const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    // docker-compose 환경변수로 등록한 값을 가져오도록
    // host: 'mysql',
    host: process.env.MYSQL_HOST,
    // user: 'root',
    user: process.env.MYSQL_USER,
    // password: 'test',
    password: process.env.MYSQL_ROOT_PASSWORD,
    // database: 'myapp'
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

exports.pool = pool; // pool을 사용할 수 있게 exports