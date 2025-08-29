const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
async function registerFunc(req, res) {
  try {
    const { username, email, password } = req.body;

    const existing = await userModel.findOne({
      username,
    });

    if (existing) {
      return res.status(400).json({
        message: "user already exist with this username!!",
      });
    }

    const user = await userModel.create({
      username: username,
      email: email,
      password: await bcrypt.hash(password,10),
    });

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.json({
      message: "You registered successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

async function loginFunc(req, res) {
    const { username, password } = req.body;

    console.log(req.body);

    const isuserexist = await userModel.findOne({
      username,
    });

    if (!isuserexist) {
      return res.status(400).json({
        message: "Invalid email!!",
      });
    }

    const isPassword = await bcrypt.compare(password, isuserexist.password);

    if (!isPassword) {
      return res.status(400).json({
        message: "Password Invalid!!",
      });
    }

    const token = jwt.sign({ id: isuserexist._id }, process.env.SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.json({
      message: "Login successfully",
      token: token,
      isuserexist
    });
}

module.exports = {
  loginFunc,
  registerFunc,
};
