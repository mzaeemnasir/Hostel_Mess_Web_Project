const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      }, // Token for User
    },
  ],
});

adminSchema.methods.generateAuthToken = async function () {
  try {
    // Generating Token for User
    const token = jwt.sign({ _id: this._id }, "thisismysecretkey");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
