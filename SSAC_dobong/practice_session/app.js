const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  secret: "secretKey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 10, //10분 뒤 세션 종료
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

const userInfo = { userId: "cocoa", userPw: "1234" };

app.get("/", (req, res) => {
  // 로그인이 된 유저라면 isLogin:true, user:user
  // 로그인이 안된 유저라면 isLogin:false
  // TODO user session 불러오는 부분
  // user가 로그인됐는지 안됐는지 검사하는 부분
  if (req.session.user === userInfo.userId) {
    console.log(req.session.user);
    res.render("index", { isLogin: true, user: userInfo });
  } else {
    res.render("index", { isLogin: false });
  }
});

// 세션 설정하기
app.get("/login", (req, res) => {
  res.render("login");
});

// TODO: 로그인 기능
app.post("/login", (req, res) => {
  // 세션 설정
  console.log(req.body);
  if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
    req.session.user = req.body.id;
    console.log(req.session);
    console.log(req.sessionID);
    res.redirect("/");
  } else {
    res.send(`
    <script>
        alert('아이디 또는 비밀번호 일치하지 않습니다.);
        document.location.href = '/login';
    </script>
    `);
  }
});

// TODO: 로그아웃 기능
app.get("/logout", (req, res) => {
  const user = req.session.user;
  if (user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("server err");
        throw err;
      }
      //   console.log(req.session);
      res.redirect("/");
    });
  } else {
    // 세션 만료된 회원
    res.send(`
        <script>
            alert('이미 세션이 완료되었습니다');
            document.location = '/';
        </script>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
