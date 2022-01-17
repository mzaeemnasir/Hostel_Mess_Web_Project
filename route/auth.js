const express = require("express");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Users = require("../model/userSchema");
const Admin = require("../model/adminSchema");
const nodemailer = require("nodemailer");
const authenticate = require("../middleware/authenticate");
var smtpTransport = require("nodemailer-smtp-transport"); // this is important

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

router.get("/home", authenticate, (res, req) => {
  console.log("Authenticated");
  req.send(res.rootUser);
});

router.post("/reset", async (req, res) => {
  const { email } = req.body;
  console.log("User Email ", email, " Wants to Reset Password");
  if (!email) {
    return res.status(400).json({ error: "Please Enter Your Email" });
  }
  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      console.log("User Not Found");
      return res.status(422).json({ error: "Invalid Email" });
    }
    //Node Mailer // Send Email to the user
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "mzaeemnasir07@gmail.com" /* Email */,
        pass: "zaeem@123@" /* Password */,
      },
    });

    const mailOptions = {
      from: "mzaeemnasir07@gmail.com",
      to: email,
      subject: "Hostel Mess Reset Password",
      text: "Your Password is " + user.password,
    };

    console.log("User Found Sending Email");
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(422).json({ error: "Error in Sending Email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(201).json({ success: "Email Sent" });
      }
    });
    // Send Email to the user
    console.log(user.password);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
