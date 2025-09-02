const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function postMiddleware(req, res, next) {
//   const token = req.cookies.token;
//   console.log(token);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(400).json({
      message: "Unautharized access , please Login first!!!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await userModel.findOne({
      id: decoded._id,
    });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token , please login again",
    });
  }
}

module.exports = postMiddleware;
