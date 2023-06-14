/*
Responsável por encaminhar as rotas /Relatorios
*/
const router = require("express").Router();
const RelatorioController = require("@controllers/crud/relatorioController");

// router.post("/", RelatorioController.create.bind(RelatorioController));
// router.get("/a", RelatorioController.getAll.bind(RelatorioController));
// router.get("/:id", RelatorioController.getOne.bind(RelatorioController));
// router.put("/:id", RelatorioController.updateOne.bind(RelatorioController));
// router.delete("/:id", RelatorioController.deleteOne.bind(RelatorioController));
router.get("/", RelatorioController.calculo.bind(RelatorioController));

module.exports = router;
