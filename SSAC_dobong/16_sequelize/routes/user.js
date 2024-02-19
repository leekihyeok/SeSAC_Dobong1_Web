const express = require("express");
const router = express.Router();

const controller = require("../controller/Cuser");

router.get("/signin", controller.getSignin);
router.get("/signup", controller.getSignup);
router.get("/findAll", controller.findAll);

router.post("/signin", controller.postSignin);
router.post("/profile", controller.postProfile);
router.post("/signup", controller.postSignup);
router.post("/profile/edit", controller.postEdit);
router.post("/profile/delete", controller.postDelete);

module.exports = router;
