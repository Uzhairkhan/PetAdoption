const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../config/keys");

const Schema = mongoose.Schema;

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
    validate: {
      validator: function (email) {
        return validator.isEmail(email);
      },
      message: function () {
        return "Invalid email format";
      },
    },
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
  // confirmPassword: {
  //   type: String,
  //   required: true,
  //   minLength: 8,
  //   maxlength: 128,
  // },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//Static method
userSchema.statics.findByCredentials = function (email, password) {
  const User = this;

  return User.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject("Invalid Email / Password");
      }

      return bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            return Promise.resolve(user);
          } else {
            return Promise.reject("Invalid Email / Password");
          }
        })
        .catch((err) => Promise.reject(err));
    })
    .catch((err) => Promise.reject(err));
};

//find by token
userSchema.statics.findByToken = function (token) {
  const User = this;
  let tokenData;

  try {
    tokenData = jwt.verify(token, key.secretOrKeys);
  } catch (err) {
    return Promise.reject(err);
  }

  return User.findOne({ _id: tokenData.id });
};

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
