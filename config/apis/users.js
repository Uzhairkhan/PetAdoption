const express = require("express");
const router = express.Router();
const usersController = require("../../App/controllers/userController");

//@route GET users/test
//@desc test
//@access Public
router.get("/test", (req, res) => res.json({ msg: "users test" }));

//@route GET users/register
//@desc Register a user
//@access Public
router.post("/register", usersController.register);

module.exports = {
  router,
};
