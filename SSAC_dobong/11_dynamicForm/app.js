const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("ajax 응답완료");
  //   res.send({
  //     name: req.query.name,
  //     gender: req.query.gender,
  //   });
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//axios
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
  //   res.send("fetch 응답 완료");
});
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/open-api", function (req, res) {
  res.render("api");
});

//실습 문제
app.get("/prAxiosGet", function (req, res) {
  res.render("practice1");
});

app.get("/prAxiosPost", function (req, res) {
  res.render("practice2");
});

//login시 아이디 비번
const MYID = "dlrlgur789";
const MYPW = "789562dlrl";

app.post("/login", function (req, res) {
  const id = req.body.id;
  const pw = req.body.pw;
  console.log(id, pw);
  if (id === MYID && pw === MYPW) {
    res.send(true);
  } else {
    res.send(false);
  }
});

//쌤이랑 같이 하는 실습문제
app.get("/axios-practice1", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

const ID = "pororo";
const PW = "1234";
app.post("/axios-practice2", (req, res) => {
  console.log(req.body);

  // 서버의 계정 정보와, 클라이언트의 계정 정보가 일치하는지 검사
  const { id: clientId, pw: clientPw } = req.body;
  if (clientId === ID && clientPw === PW) {
    res.send({
      userInfo: req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
