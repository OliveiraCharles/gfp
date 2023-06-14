const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  name: {
    type: String,
    required: true,
  },
  lastName: String,
  email: String,
  passwordHash: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
