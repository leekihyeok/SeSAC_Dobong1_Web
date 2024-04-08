const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const app = express();
dotenv.config();
const PORT = process.env.PORT;

// 미들웨어 설정
app.set("view engine", "ejs");

// aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_SECRET_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

// s3 관련 멀터 설정
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

// GET / index.ejs 렌더링
app.get("/", (req, res) => {
  res.render("index", { imgUrl: "" });
});

// POST /upload
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  //   res.send("이미지 업로드 중...");
  //   {
  //     fieldname: 'image',
  //     originalname: 'ë\x8F\x99ë\x8C\x80ë¬¸.png',
  //     encoding: '7bit',
  //     mimetype: 'image/png',
  //     size: 627892,
  //     bucket: 'myawsrekey',
  //     key: '1712555332678-ë\x8F\x99ë\x8C\x80ë¬¸.png',
  //     acl: 'public-read',
  //     contentType: 'application/octet-stream',
  //     contentDisposition: null,
  //     contentEncoding: null,
  //     storageClass: 'STANDARD',
  //     serverSideEncryption: null,
  //     metadata: null,
  //     location: 'https://myawsrekey.s3.ap-northeast-2.amazonaws.com/1712555332678-%C3%AB%C2%8F%C2%99%C3%AB%C2%8C%C2%80%C3%AB%C2%AC%C2%B8.png',
  //     etag: '"d82978d94c24133477003fc0ae11f60d"',
  //     versionId: undefined
  //   }
  res.render("index", { imgUrl: req.file.location });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
