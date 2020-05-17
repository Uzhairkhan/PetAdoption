const express = require("express");
const router = express.Router();
const petsController = require("../../App/controllers/petsController");
const authenticateUser = require("../../App/middleware/authentication");

//@route GET pets/test
//@desc test
//@access Public
router.get("/test", (req, res) => res.send("pets test"));

//@route GET pets/list
//@desc Listing of pets
//@access Public
router.get("/list", petsController.list);

//@route POST pets/add
//@desc Adding pets
//@access Private
router.post("/add", petsController.create);

//@route GET pets/show/:id
//@desc Display a particular pet
//@access Private
router.get("/show/:id", petsController.show);

//@route PUT pets/update/:id
//@desc Updating info of pets
//@access Private
router.put("/update/:id", petsController.update);

//@route DELETE pets/delete/:id
//@desc Deleting pets
//@access Private
router.delete("/delete/:id", petsController.delete);

module.exports = {
  router,
};
