const router = require("express").Router();

const UserController = require("@controllers/userController");


router
    .get("/", UserController.hello)

module.exports = router;
