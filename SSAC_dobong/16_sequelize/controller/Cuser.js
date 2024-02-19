const models = require("../models");

exports.getSignin = (req, res) => {
  res.render("user/signin");
};

exports.getSignup = (req, res) => {
  res.render("user/signup");
};

exports.findAll = (req, res) => {
  models.User.findAll().then((result) => {
    res.render("user/userList", { userList: result });
  });
};

exports.postSignin = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

exports.postSignup = (req, res) => {
  console.log(req.body);
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then((result) => {
    res.end();
  });
};

exports.postProfile = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log(result);
    res.render("user/profile", { user: result });
  });
};


exports.postEdit = (req, res) => {
  models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.end();
  });
};

exports.postDelete = (req, res) => {
    console.log(req.body)
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    res.end();
  });
};
