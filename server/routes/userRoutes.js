/*
Responsável por encaminhar as rotas /users
*/
const router = require("express").Router();
const userController = require("@controllers/userController");

router.post("/", userController.create.bind(userController));
router.get("/", userController.getAll.bind(userController));
router.get("/:id", userController.getOne.bind(userController));
router.put("/:id", userController.updateOne.bind(userController));
router.delete("/:id", userController.deleteOne.bind(userController));

module.exports = router;
