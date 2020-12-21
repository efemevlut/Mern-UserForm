const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const validations = require("../middleware/validationMiddleware")


router.post("/addUser", validations.userValidation,UserController.addUser);

router.get('/', UserController.getUsers);


module.exports = router;