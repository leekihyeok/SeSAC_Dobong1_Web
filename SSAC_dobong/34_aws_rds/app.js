const express = require("express");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();
const PORT = process.env.PORT;
const app = express();

const userModel = require("./models/User");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const User = userModel(sequelize);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("안녕하세요");
});

app.post("/api/users", async (req, res) => {
  try {
    const newUser = await User.create({
      username: "rekey",
      email: "789rlgur@naver.con",
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error while creating user:", error);
    res.status(500).json({ error: "Error while creating user" });
  }
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("테이블 생성 완료");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/api`);
    });
  })
  .catch((err) => {
    console.log("sync err!!!!!!");
    console.log(err);
  });
