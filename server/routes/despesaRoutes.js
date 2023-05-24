const router = require("express").Router();
const DespesaController = require("@controllers/despesaController");

router.post("/", DespesaController.create.bind(DespesaController));
router.get("/", DespesaController.getAll.bind(DespesaController));
router.get("/:id", DespesaController.getOne.bind(DespesaController));
router.put("/:id", DespesaController.updateOne.bind(DespesaController));
router.delete("/:id", DespesaController.deleteOne.bind(DespesaController));

module.exports = router;
