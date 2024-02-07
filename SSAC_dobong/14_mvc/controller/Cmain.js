const Comment = require("../model/Comment");
// controller 에서는 model에서 받은 데이터를
// localhost:8080/

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  console.log(Comment.commentsInfo());
  res.render("comments", { commentInfo: Comment.commentsInfo() });
};

exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; // 1,2,3,4
  let commentsInfo = Comment.commentsInfo();

  console.log(commentId, "commentID");
  if (!commentsInfo[commentId - 1]) return res.render("404");

  res.render("comment", { commentInfo: commentsInfo[commentId - 1] });
};
