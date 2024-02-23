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
app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization);

    if (req.headers.authorization) {
      // 인증 정보 들어왔을 때
      // token만을 저장하기 위해서
      const token = req.headers.authorization.split(" ")[1];
      try {
        console.log(token);

        const auth = jwt.verify(token, SECRET);
        console.log("auth ", auth);
        // verify() 리턴 값: auth  { id: 'cocoa', iat: 1708656028 }
        // - iat - issued at, 발급된 시간

        if (userInfo.id === auth.id) {
          res.send({ result: true, name: userInfo.name });
        }
      } catch (err) {
        // 잘못된 정보 들어왔을때
        console.log("토큰 인증 에러", err);
        res.send({ result: false, msg: "인증된 회원이 아닙니다" });
      }
    } else {
      // 인증 정보 없을 때
      res.redirect("/login");
    }
  } catch (err) {
    console.log("POST /token", err);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
