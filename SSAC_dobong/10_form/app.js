const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.get("/", function (req, res) {
  res.render("index");
  // res.render("practice1");
  // res.render("practice2");
});

app.get("/getform", function (req, res) {
  console.log(req.query);
  //   res.send("데이터 잘 받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query,
    // res.render('뷰', {보내줄 데이터})
  });
});

app.post("/postForm", function (req, res) {
  // post 요청은 request.body에 담겨져 있음
  console.log(req.body);
  //   res.send("POST 요청 성공");
  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
});

app.get("/practice1", function (req, res) {
  // console.log(req.query);
  //   res.send("데이터 잘 받았습니다.");
  res.render("practice/practice1.ejs");
});

app.get("/practice2", function (req, res) {
  // console.log(req.query);
  //   res.send("데이터 잘 받았습니다.");
  res.render("practice/practice2.ejs");
});

app.get("/practice", function (req, res) {
  console.log(req.query);
  //   res.send("데이터 잘 받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query,
    addInfo: false,
    // res.render('뷰', {보내줄 데이터})
  });
});

app.post("/practice", function (req, res) {
  // post 요청은 request.body에 담겨져 있음
  console.log(req.body);
  //   res.send("POST 요청 성공");
  res.render("result", {
    title: "POST",
    userInfo: req.body,
    addInfo: true,
  });
});

//-------

app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation 응답");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
