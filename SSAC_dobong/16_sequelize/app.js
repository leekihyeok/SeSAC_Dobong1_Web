const express = require("express");
const mainRouter = require("./routes/index");
const userRouter = require("./routes/user");
const app = express();
const PORT = 8080;
const db=require('./models/index')

// View Engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 경로 설정
app.use("/static", express.static(__dirname + "/static"));

// Body Parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 서버 리스닝
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result); // 동기화 결과에 대한 정보가 출력됩니다.
  console.log("db연결 성공"); // 동기화가 완료되면 출력됩니다.
});

// 라우터 설정
app.use("/", mainRouter);

app.use("/user",userRouter);
// app.use("/visitors", mainRouter);

app.use("*",(req,res)=>{
    res.render('404')
})
