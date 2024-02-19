// const visitors = require("../model/Visitor");
// const visitors=require('../models/Visitor');
const models = require("../models");

exports.main = (req, res) => {
  res.render("index/index");
};

exports.visitor = (req, res) => {
  // res.render("visitor/visitor",{visitorList:visitorList.getVisitor()});

  //2 db 연결후
  // visitors.getVistors((result) => {
  //   // console.log("cvisitor.js 전체목록:", res);
  //   res.render("visitor/visitor", { visitorList: result });
  // });

  //3 sequelize 연결
  models.Visitor.findAll().then((result) => {
    console.log("findAll", result);
    res.render("visitor/visitor", { visitorList: result });
  });
};

exports.getVisitorById = (req, res) => {
  //berfore sequelize
  // visitors.getVisitor(req.params.id, (result) => {
  //   console.log(result);
  //   res.send(result);
  // });

  // affter sequelize
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

exports.postVisitor = (req, res) => {
  console.log("req.body", req.body);

  //berfore sequelize
  // visitors.postVisitors(req.body, (result) => {
  //   console.log("id", result);
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });

  // affter sequelize

  models.Visitor.create({
    name: req.body.name,
    comment: req.body.commet,
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
  // });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  // visitors.deleteVisitor(req.body.id, (result) => {
  //   console.log("cmain.js delete", result);
  //   res.send("몇번 방명록 삭제 완료!");
  // });
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log(result);
    res.end();
  });
};

exports.patchVisitor = (req, res) => {
  // visitors.patchVisitor(req.body, (result) => {
  //   res.send("수정완료");
  // });
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.end();
  });
};
