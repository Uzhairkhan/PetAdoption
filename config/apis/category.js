const express = require("express");
const router = express.Router();
const categoryController = require("../../App/controllers/categoryController");
const authenticateUser = require("../../App/middleware/authentication");

//@route GET category/test
//@desc test
//@access Public
router.get("/test", (req, res) => res.send("category test"));

//@route GET category/list
//@desc Listing of category
//@access Public
router.get("/list", categoryController.list);

//@route POST category/add
//@desc Adding category
//@access Private
router.post("/add", categoryController.create);

//@route GET category/show/:id
//@desc Display a particular category
//@access Private
router.get("/show/:id", categoryController.show);

//@route PUT category/update/:id
//@desc Updating info of category
//@access Private
router.put("/update/:id", categoryController.update);

//@route DELETE category/delete/:id
//@desc Deleting category
//@access Private
router.delete("/delete/:id", categoryController.delete);

module.exports = {
  router,
};
