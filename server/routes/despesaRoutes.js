const router = require("express").Router();

const DespesaController = require("@controllers/despesaController");

router
  .post("/", DespesaController.create)
  .get("/", DespesaController.getAll)
  .get("/:id", DespesaController.getOne)
  .put("/:id", DespesaController.updateOne)
  .delete("/:id", DespesaController.deleteOne);

module.exports = router;
