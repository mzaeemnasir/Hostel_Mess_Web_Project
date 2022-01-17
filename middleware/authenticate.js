const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const cookies = require("cookie-parser");
const { append } = require("express/lib/response");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.Student_Token;
    console.log(token);
    const VerifiedToken = jwt.verify(token, "thisismysecretkey");
    const rootUser = await User.findOne({
      _id: VerifiedToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      console.log("Invalid Token");
      throw new Error("User Not Found");
    }
    console.log("Valid Token");
    req.rootUser = rootUser;
    req.token = token;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized: User not found");
    console.log(err);
  }
};

module.exports = authenticate;
