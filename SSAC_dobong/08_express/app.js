const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.send("hello express!! 안녕하세요 익스프레스");

  // render 두번째 인자에서
  // index.ejs 에서 사용할 정보 전달

  res.render("index.ejs", {
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "rekey",
      msg: "What a nice day!",
    },
  });
});

// 라우팅
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
// page not found, 404 페이지는 맨 마지막에
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});
