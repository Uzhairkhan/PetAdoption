const { User } = require("../models/User");

module.exports = authenticateUser = (req, res, next) => {
  const token = req.header("x-auth");

  User.findByToken(token)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => res.status(401).send(err));
};
