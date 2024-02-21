const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
const SECRET = "iocz6mDD5J18fz8MOnLNmY6TegnWgp"; // random 문자열

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "rekey", age: 18 };

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
// jwt 생성
app.post("/login", (req, res) => {
  try {
    console.log(req.body);

    const { id, pw } = req.body;
    const { id: realID, pw: realPW } = userInfo;
    if (id === realID && pw === realPW) {
      // const token = jwt.sign(payload, secretOrPrivateKey, option)
      const token = jwt.sign({ id: id }, SECRET);
      console.log(token);
      res.send({ result: true, token: token });
    } else {
      res.send({ result: false, msg: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// 토큰 정보 확인
app.post("/token", (req, res) => {});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
