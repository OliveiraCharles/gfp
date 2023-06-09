/*
Responsável por encaminhar as rotas /users
*/
const router = require("express").Router();
const userController = require("@controllers/crud/userController");

router.post("/", userController.create.bind(userController));
router.post("/login", userController.login.bind(userController));
router.get("/", userController.getAll.bind(userController));
router.get("/id/:id", userController.getOne.bind(userController));
router.put("/edit/:id", userController.updateOne.bind(userController));
router.delete("/edit/:id", userController.deleteOne.bind(userController));


module.exports = router;
