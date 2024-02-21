const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser("secretKey"));

const cookieConfig = {
  maxAge: 60 * 1000 * 24 * 60,
  httpOnly: true,
  signed: true,
  path: "/",
};

app.get("/", (req, res) => {
  // TODO: index.ejs 두번째 인자로 popup key에 쿠키 값 보내기
  //   res.render("index", { popup: 쿠키 값 보내기 });
  res.render("index", { popup: req.signedCookies.popup });
  console.log("server >> ");
  console.log(req.signedCookies);
});

app.post("/setCookie", (req, res) => {
  // TODO: 쿠키 생성
  // 쿠키 이름 'popup', 쿠키값: 'hide'
  res.cookie("popup", "hide", cookieConfig);
  res.send("쿠키 설정 성공");
});

/*
    req 객체
    - req.cookie: 쿠키 정보 담김
    - req.signedCookies: 암호화된 쿠키 정보 담김
    
    res 객체
    - res.cookie(키, 값, 옵션): 쿠키 설정
    - res.clearCookie(키, 값, 옵션): 쿠키 제거
*/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
