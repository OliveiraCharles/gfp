/*
Responsável por encaminhar as rotas /Categorias
*/
const router = require("express").Router();
const CategoriaController = require("@controllers/crud/CategoriaController");

router.post("/", CategoriaController.create.bind(CategoriaController));
router.get("/", CategoriaController.getAll.bind(CategoriaController));
router.get("/id/:id", CategoriaController.getOne.bind(CategoriaController));
router.put("/:id", CategoriaController.updateOne.bind(CategoriaController));
router.delete("/:id", CategoriaController.deleteOne.bind(CategoriaController));

module.exports = router;
