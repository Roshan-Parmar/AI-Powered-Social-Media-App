const express = require("express");
const router = express.Router();
const {loginFunc , registerFunc} = require("../controllers/auth.controller")

router.post("/register",registerFunc);

router.post("/login",loginFunc);


module.exports = router;