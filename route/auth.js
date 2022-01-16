const express = require("express");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Users = require("../model/userSchema");
const Admin = require("../model/adminSchema");
const nodemailer = require("nodemailer");

// Register User Router
router.post("/register", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  if (!name || !email || !password || !phoneNumber) {
    return res.status(400).json({ error: "Error in Registering User" });
  }

  try {
    const user = await Users.findOne({ email: email });
    if (user) {
      return res.status(422).json({ error: "User Already Exists" });
    }
    const newUser = new Users({ name, email, password, phoneNumber });
    await newUser.save();
    res.status(201).json({ success: "User Registered Successfully" });
    console.log(
      `User => ${name}  using Email => ${email}Registered Successfully`
    );
  } catch (err) {
    console.log(err);
  }
});

// Login User Router
router.post("/login", async (req, res) => {
  let token;
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please Fill are the Required Fields" });
  }
  console.log(email, password);
  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    const token = await user.generateAuthToken();
    // The Token for the user is generated
    // The Token will expire after 15 minutes
    res.cookie("Student_Token", token, {
      expires: new Date(Date.now() + 900000),
      httpsOnly: true,
    });
    if (user.password !== password) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    res.status(201).json({ success: "User Logged In Successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/forget", async (req, res) => {
  // send email to user of the password
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Please Enter Your Email" });
  }
  try {
    const user = await Users.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ error: "Invalid Email" });
    }

    //node mailer Code HERe

    console.log(user.password);
  } catch (err) {
    console.log(err);
  }
});

// Admin Login Router
router.post("/admin", async (req, res) => {
  let token;
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please Fill are the Required Fields" });
  }
  console.log(email, password);
  try {
    const admin = await Admin.findOne({ email: email });
    console.log(admin);
    if (!admin) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    const token = await admin.generateAuthToken();
    // The Token for the user is generated
    // The Token will expire after 15 minutes
    res.cookie("Admin_Token", token, {
      expires: new Date(Date.now() + 900000),
      httpsOnly: true,
    });

    console.log(token);
    if (admin.password !== password) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    res.status(201).json({ success: "User Logged In Successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/home", (res, req) => {
  console.log("Authenticated");
});
module.exports = router;
