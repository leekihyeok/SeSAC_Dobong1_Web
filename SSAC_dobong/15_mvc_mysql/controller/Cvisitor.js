const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js: ", result);
    res.render("visitor", { data: result });
  });
};

//방명록 등록
exports.post_comment = (req, res) => {
  Visitor.insert(req.body.name, req.body.comment, function (result) {
    res.send({ id: result });
  });
};

//방명록 단일 정보 조회
exports.get_visitor = (req, res) => {
  Visitor.get_visitor(req.query.id, function (result) {
    res.send({ result: result[0] });
  });
};

//방명록 정보 수정
exports.patch_comment = (req, res) => {
  Visitor.update(req.body, function (result) {
    res.send("success Update!");
  });
};

//방명록 정보 삭제
exports.delete_comment = (req, res) => {
  Visitor.delete(req.body.id, function (result) {
    res.send("success Delete!");
  });
};
