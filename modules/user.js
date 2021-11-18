const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("user", Schema);
