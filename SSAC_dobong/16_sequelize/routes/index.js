const express=require('express')
const router=express.Router();

const controller=require('../controller/Cmain')

router.get("/",controller.main)
router.get("/visitors", controller.visitor);

router.get("/visitor/:id", controller.getVisitorById);

router.post("/visitors",controller.postVisitor);
router.delete("/visitors", controller.deleteVisitor);
router.patch("/visitors", controller.patchVisitor);


module.exports=router;