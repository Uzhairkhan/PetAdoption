const express = require("express");
const router = express.Router();
const usersController = require("../../App/controllers/userController");
const authenticateUser = require("../../App/middleware/authentication");

//@route GET users/test
//@desc test
//@access Public
router.get("/test", (req, res) => res.json({ msg: "users test" }));

//@route POST users/register
//@desc Register a user
//@access Public
router.post("/register", usersController.register);

//@route POST users/login
//@desc login a user
//@access Public
router.post("/login", usersController.login);

//@route GET users/account
//@desc private user route
//@access Private
router.get("/account", authenticateUser, usersController.account);

module.exports = {
  router,
};
