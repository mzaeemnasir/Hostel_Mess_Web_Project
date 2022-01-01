const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
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

const Admin = mongoose.model("Admin", bookingSchema);
module.exports = Admin;
