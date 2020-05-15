const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  currentAdress: {
    type: String,
    required: true,
  },
  permanentAdress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 128,
  },
  confirmPassword: {
    type: String,
    required: true,
    minLength: 8,
    maxlength: 128,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
