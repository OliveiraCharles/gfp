const router = require("express").Router();

const UserController = require("@controllers/userController");

router
  .post("/", UserController.create)
  .get("/", UserController.getAll)
  .get("/:id", UserController.getOne)
  .put("/:id", UserController.updateOne)
  .delete("/:id", UserController.deleteOne);

module.exports = router;
