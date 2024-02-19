const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "ctywo9631!",
  database: "visitors",
});
exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Visitor.js: ", rows);
    cb(rows);
  });
};
//방명록 등록
exports.insert = (name, comment, cb) => {
  var sql =
    "INSERT INTO visitor (name, comment) VALUES ('" +
    name +
    "', '" +
    comment +
    "');";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);

    cb(rows.insertId);
  });
};

//방명록 단일 정보 조회
exports.get_visitor = (id, cb) => {
  // id 컬럼의 값이 id인 데이터를 1개만 검색한다.
  conn.query(`SELECT * FROM visitor Where id= ${id} limit 1;`, (err, rows) => {
    if (err) throw err;
    console.log(rows);

    cb(rows);
  });
};

//방명록 정보 수정
exports.update = (data, cb) => {
  var sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);

    cb(rows);
  });
};

//방명록 정보 삭제
exports.delete = (id, cb) => {
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log(rows);

    cb(rows);
  });
};
