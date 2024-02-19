const express = require("express");
const controller = require("../controller/Cvisitor.js");
const router = express.Router();

router.get("/", controller.main);
router.get("/visitor", controller.getVisitors);
router.post("/write", controller.post_comment);
router.get("/get", controller.get_visitor);
router.patch("/edit", controller.patch_comment);
router.delete("/delete", controller.delete_comment);
module.exports = router;
