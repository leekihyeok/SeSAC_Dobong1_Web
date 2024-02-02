const express = require("express");
const app = express();
const PORT = 8080;
// multer
const multer = require("multer");
// 내장 모듈
const path = require("path");

//미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use("/이 이름으로 사용", express.static(실제 폴더 경로))
// console.log("현재 위치한 폴더의 경로", __dirname);

// 미들웨어 body-parser
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// 미들웨어 multer
const upload = multer({
  dest: "uploads/",
});
// 멀티 파일 및 파일 이름 경로 지장 ver1
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
// multer 디테일 설정
// storage - 저장공간 정보
// - diskStorage - 파일을 저장하기 위한 모든 제어기능 제공
// - destination - 저장 경로
// - filename - 파일 이름 관련 정보
// limits - 파일 제한 관련 정보
// - fileSize - 파일 사이즈를 바이트 잔위로 제한

app.get("/", (req, res) => {
  res.render("index");
});

// 단일 파일 업로드
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload");
});
// 여러 파일 업로드 ver1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload");
});
// 여러 파일 업로드 ver2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload");
  }
);

// 동적 파일 보내기
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
