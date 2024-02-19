// TODO: 컨트롤러 코드
const User = require("../model/User");

// GET /user
exports.main = (req, res) => {
  res.render("index");
};
// GET /user/signin
exports.getSignin = (req, res) => {
  res.render("signin");
};
// GET /user/signup
exports.getSignup = (req, res) => {
  res.render("signup");
};

// 회원가입 요청
exports.postSignup = (req, res) => {
  console.log("controller", req.body); // {userid, name, pw}
  User.postSignup(req.body, () => {
    res.end();
  });
};
exports.postSignin = (req, res) => {
  console.log("controller", req.body);
  // {userid, pw}
  User.postSignin(req.body, (result) => {
    console.log("controller", result);
    // 로그인 성공시 true
    // 로그인 실패시 false
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};
exports.postProfile = (req, res) => {
  console.log("req.body", req.body);
  // {userid}
  User.postProfile(req.body.userid, (result) => {
    console.log(result); // {id userid name pw}
    res.render("profile", { data: result });
  });
};

exports.editProfile = (req, res) => {
  User.editProfile(req.body, function (result) {
    res.send("success Update!");
  });
};

exports.deleteProfile = (req, res) => {
  console.log("req.body", req.body);
  User.deleteProfile(req.body.userid, function (result) {
    res.send("success Delete");
  });
};
