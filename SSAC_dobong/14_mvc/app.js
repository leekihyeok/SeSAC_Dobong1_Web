const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// localhost:8080/ 경로를 기본하는 경로는 indexRouter에서 처리
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
// /user는 userRouter에서 처리
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// // 임시 DB
// const comments = [
//   {
//     id: 1,
//     user_id: "apple",
//     date: "2020-10-31",
//     comment: "안녕하세요~",
//   },
//   {
//     id: 2,
//     user_id: "banana",
//     date: "2022-11-29",
//     comment: "바나나는 맛있어",
//   },
//   {
//     id: 3,
//     user_id: "cocoa",
//     date: "2023-12-25",
//     comment: "내 귀에 초콜릿",
//   },
//   {
//     id: 4,
//     user_id: "donut",
//     date: "2021-09-24",
//     comment: "도넛아 두넛아 세넛아",
//   },
// ];

// app.get("/", (req, res) => {
//   res.render("index");
// });

// // GET /comments
// app.get("/comments", (req, res) => {
//   console.log(comments);
//   res.render("comments", { commentInfo: comments });
// });

// // GET /comments/:id (params 사용) >> comment.ejs
// app.get("/comment/:id", (req, res) => {
//   console.log(req.params);
//   const commentId = req.params.id; // 1,2,3,4

//   // 404 page
//   //   (1)
//   //   if (commentId < 1 || commentId > commentId.length) return res.render("404");
//   //   if (isNaN(commentId)) return res.render("404");
//   //   (2)
//   if (!comments[commentId - 1]) return res.render("404");

//   res.render("comment", { commentInfo: comments[commentId - 1] });
// });
