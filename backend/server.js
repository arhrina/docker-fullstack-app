// 필요한 모듈 가져오기
const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db');

// Express 서버 생성
const app = express();

// json 형태로 오는 요청의 본문을 해석해줄 수 있게 body parser 등록
app.use(bodyParser.json);

// 테이블 생성
db.pool.query(
    `CREATE TABLE lists(
        id INTEGER AUTO_INCREMENT,
        value TEXT,
        PRIMARY KEY (id)
    )`, (err, results, field) => {
        console.log('results: ', results);
    }
)


// db lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values', function(req, res) {
    // 데이터베이스에서 모든 데이터를 가져오기
    db.pool.query("SELECT * FROM lists;", 
    (err, results, fields) => {
        if(err)
            return res.status(500).send(err);
        else
            return res.json(results);
    });
})

// client에서 입력한 값을 db lists 테이블에 insert
app.post('/api/value', function(req, res, next) {
    // DB에 값 넣기
    db.pool.query(`INSERT INTO lists (value) VALUES('${req.body.value}')`,
    (err, results, field) => {
        if(err)
            return res.status(500).send(err);
        else
            return res.json({success: true, value: req.body.value});
    })
})


// 서버 설정
app.listen(5000, () => {
    console.log("application starts port 5000");
})