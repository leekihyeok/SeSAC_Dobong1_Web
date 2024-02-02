const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use(express.json());

// app.use(express.static("/static", express.static(__dirname + "/uploads")));

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(express.static("./views/css"));
app.use(express.static("./img"));

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const filename = `${path.basename(file.originalname, ext)}_${
        req.body.id
      }${ext}`;
      done(null, filename);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("profile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  const data = req.body;
  res.render("result", {
    name: data.name,
    id: data.id,
    pw: data.pw,
    age: data.age,
    imgPath: req.file.path,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
