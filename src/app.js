const express = require("express");
const userRouter = require("../routes/user.route");
const postRouter = require("../routes/post.route");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser())

app.use(express.json());

app.use("/auth", userRouter);
app.use("/auth/post",postRouter);

module.exports = app;