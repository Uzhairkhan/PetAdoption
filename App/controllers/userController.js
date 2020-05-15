const { User } = require("../models/User");

module.exports.register = (req, res) => {
  res.send(req.body);
};
