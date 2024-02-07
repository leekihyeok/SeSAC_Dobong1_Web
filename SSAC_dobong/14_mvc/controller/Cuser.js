const User = require("../model/User");
// controller 에서는 model에서 받은 데이터를
// localhost:8080/

exports.user = (req, res) => {
  res.render("user", { userInfo: User.userInfo() });
};
