const Login = require("../model/Login");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  console.log(Login.loginInfo());

  const { id: clientId, pw: clientPw } = req.body;
  console.log(clientPw);
  if (clientId === Login.loginInfo().id && clientPw === Login.loginInfo().pw) {
    res.send({
      userInfo: req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};
