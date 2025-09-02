const express = require("express");
const router = express.Router();
const postMiddleware = require("../middlewares/post.middleware");
const {getpostController , postController} = require("../controllers/post.controller");
const multer = require("multer");

const upload = multer({storage : multer.memoryStorage()});

router.post("/",postMiddleware,upload.single("image"),postController);
router.get("/getpost", getpostController)

module.exports = router;