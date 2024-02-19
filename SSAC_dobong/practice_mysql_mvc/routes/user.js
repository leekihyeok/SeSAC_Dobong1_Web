// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");
//

// GET /user
router.get("/", controller.main);
// GET /user/signin
router.get("/signin", controller.getSignin);
// GET /user/signup
router.get("/signup", controller.getSignup);

// POST /user/signup
router.post("/signup", controller.postSignup);
// POST / user / signin;
router.post("/signin", controller.postSignin);
// POST /user/profile
router.post("/profile", controller.postProfile);
// POST /user/profile/edit
router.post("/profile/edit", controller.editProfile);
// POST /user/profile/delete
router.post("/profile/delete", controller.deleteProfile);

module.exports = router;
