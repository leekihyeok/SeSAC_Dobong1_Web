const express = require("express");
const app = express();
const dotenv = require("dotenv");

// env에서 만들어둔 환경병수를 읽어오기 위한 설정
console.log(process.env);
dotenv.config();

app.get("/", (req, res) => {
  console.log("mysql pw", process.env.MYSQL_PASSWORD);
  console.log("api key", process.env.API_KEY);
  res.send("응답완료");
});

app.listen(8080, () => {
  console.log("8080 is open");
});
