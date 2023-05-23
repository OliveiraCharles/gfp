const router = require("express").Router();

const UserController = require("@controller/userController");


router
    .get("/", UserController.hello)

    .post("/users", UserController.create)

    .get("/users/", UserController.getAll)
    .get("/users/:id", UserController.getOne)

    .put("/users/:id", UserController.updateOne)

    .delete("/users/:id", UserController.deleteOne)

module.exports = router;
