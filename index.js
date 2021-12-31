const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
app.use(express.json());

//Here we are connecting to the Routes
app.use(require("./route/auth"));

const Local = "mongodb://localhost:27017/hostel_mess";
const DB = process.env.DB;
// ("mongodb+srv://hitman:zaeem123@cluster0.rmbcl.mongodb.net/Hostel_Mess?retryWrites=true&w=majority");
// // "mongodb+srv://hitman:zaeem123@cluster0.rmbcl.mongodb.net/Cluster0?retryWrites=true&w=majority";

// Getting User schema
const User = require("./model/userSchema");
// Connecting to MongoDB
// creating Connection with MongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully Connected to MongoDB"))
  .catch((err) => {
    `Error in Connection ${err}`;
  });

// For Heroku

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  console.log(`Hostel Mess is listening at http://localhost:${port}`);
});
