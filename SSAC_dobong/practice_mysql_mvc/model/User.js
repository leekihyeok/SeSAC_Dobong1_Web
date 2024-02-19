// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "ctywo9631!",
  database: "sesac",
});

// 1. 뷰에서 요청
// 2. 컨트롤러에서 정보를 받음(req.body, req.params....)
// 3. 모델에서 DB로 요청
// 4. 데이터 삽입/삭제/조회/.. 결과값을 컨트롤러로 응답
// 5. 컨트롤러에서는 res 객체를 통해 뷰로 응답
//    뷰>>컨트롤러>>모델>>DB>>모델>>컨트롤러>>뷰

// TODO: 모델 코드
// POST /user/signup
// 특정 회원정보 등록
exports.postSignup = (data, cb) => {
  console.log("model", data); // {userid, name, pw}

  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}');`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);
    cb();
  });
};

// POST /user/signin
// 특정 회원정보를 "조회"
exports.postSignin = (data, cb) => {
  console.log("model", data); // {userid, pw}
  const sql = `SELECT * FROM user WHERE userid = '${data.userid}' and pw = '${data.pw}' LIMIT 1`;
  // LIMIT 1 걸어주는 이유 -> 회원가입시 중복id 검사하지 않아서(select의 결과가 여러 개 일 수 있음)
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows); // {id, userid, name, pw} or []
    cb(rows);
  });
};

exports.postProfile = (id, cb) => {
  console.log("model userid", id); // id = 'allie'
  const sql = `SELECT * FROM user WHERE userid = '${id}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("model", rows); // [{id, userid, name, pw}] 무조건 빈배열이 아님
    cb(rows[0]);
  });
};

exports.updateProfile = (data, cb) => {
  var sql = `UPDATE user SET pw='${data.pw}', name='${data.name}' WHERE userid='${data.userid}'`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);

    cb(rows);
  });
};

//방명록 정보 삭제
exports.deleteProfile = (id, cb) => {
  conn.query(`DELETE FROM user WHERE userid='${id}'`, (err, rows) => {
    if (err) throw err;
    console.log(rows);

    cb(rows);
  });
};
