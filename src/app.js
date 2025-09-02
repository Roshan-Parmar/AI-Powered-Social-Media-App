const express = require("express");
const userRouter = require("../routes/user.route");
const postRouter = require("../routes/post.route");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const app = express();

app.use(cors({
  origin: "https://ai-powered-social-media-app-frontend-y9sw.onrender.com",
  credentials: true, // if using cookies or auth headers
}));

app.use(cookieParser())

app.use(express.json());

app.use("/auth", userRouter);
app.use("/auth/post",postRouter);

module.exports = app;