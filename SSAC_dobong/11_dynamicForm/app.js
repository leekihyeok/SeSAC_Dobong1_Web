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

app.get("/prAxiosGet", function (req, res) {
    res.render("practice1");
  });
  
  app.get("/prAxiosPost", function (req, res) {
    res.render("practice2");
  });

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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
