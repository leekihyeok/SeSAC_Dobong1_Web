const express = require("express");
const app = express();
const PORT = 8080;
const router = require("./routes");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
