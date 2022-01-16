const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    console.log(token);
    alert(token);
    const VerifiedToken = jwt.verify(token, "thisismysecretkey");
    const rootUser = await User.findOne({
      _id: VerifiedToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User Not Found");
    }
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
