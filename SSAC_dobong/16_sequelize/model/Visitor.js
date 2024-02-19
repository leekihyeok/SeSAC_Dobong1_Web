// exports.getVisitor=()=>{
//     return[
//         {id:1,name:'allie',comment:'안녕하세요'},
//         {id:2,name:'홍길동',comment:'반가워요'},
//         {id:3,name:'둘리',comment:'호이호이'},
//         {id:4,name:'흰둥이',comment:'멍멍'},
//         {id:5,name:'짱구',comment:'울라울라~'}
//     ]
// }

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "sessac",
  password: "1234",
  database: "sessac",
});

// 전체데이터 조회
//get /visitor 진입시

exports.getVistors = (cb) => {
  // conn.query('sql문',(err,rows)=>{})
  conn.query("select * from visitor", (err, rows) => {
    if (err) throw err;

    // console.log("Visitor.js 전체목록::", rows);

    cb(rows);
  });
};

//데이터 조회
exports.getVisitor = (id, cb) => {
  conn.query(`select * from visitor where id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("ddddd");
    cb(rows[0]);
  });
};
//데이터 등록

exports.postVisitors = (data,cb) => {
  conn.query(
    `insert into visitor (name, comment) values ('${data.name}', '${data.comment}')`,
    (err, rows) => {
      console.log(rows.insertId);
      if (err) throw err;

      cb(rows.insertId);
      
    }
  );
};

//데이터 삭제
exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`delete from visitor where id=${id}`, (err, rows) => {
    if (err) throw err;

    cb(rows);
  });
};

//데이터 수정
exports.patchVisitor = (data, cb) => {
  conn.query(
    `update visitor set name='${data.name}', comment='${data.comment}' where id=${data.id}`,
    (err, rows) => {
      if (err) throw err;

      cb(rows);
    }
  );
};
