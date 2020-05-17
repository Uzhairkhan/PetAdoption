const { User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../config/keys");

module.exports.register = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      } else {
        const newUser = new User(req.body);

        //generate the salt value
        //salt value taken in the callback
        //callback has two parameter salt value and err == if there is an err
        bcrypt.genSalt(10, (err, salt) => {
          //generating hash using the salt value
          //use plain text password, salt value
          //the callback function gives an err if there is an error
          //else gives hash value
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            //if err throw err
            if (err) throw err;
            //assign the hashed password to the plain user password
            newUser.password = hash;
            //save the user
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => res.send(err));
          });
        });
      }
    })
    .catch((err) => res.send(err));
};

module.exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  (!email || !password) &&
    res.status(400).json({ msg: "Field cannot be empty" });

  User.findByCredentials(email, password)
    .then((user) => {
      const payload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.mobile,
        createdAt: Number(new Date()),
      };

      jwt.sign(payload, key.secretOrKeys, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: token,
        });
      });
    })

    .catch((err) => res.send(err));
};

module.exports.account = (req, res) => {
  res.send(req.user);
};
