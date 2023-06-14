/*
Responsável por encaminhar as rotas /movimentos
*/
const router = require("express").Router();
const MovimentoFinanceiroController = require("@controllers/movimentoFinanceiroController");

router.post(
  "/",
  MovimentoFinanceiroController.create.bind(MovimentoFinanceiroController)
);
router.get(
  "/",
  MovimentoFinanceiroController.getAll.bind(MovimentoFinanceiroController)
);
router.get(
  "/:id",
  MovimentoFinanceiroController.getOne.bind(MovimentoFinanceiroController)
);
router.put(
  "/:id",
  MovimentoFinanceiroController.updateOne.bind(MovimentoFinanceiroController)
);
router.delete(
  "/:id",
  MovimentoFinanceiroController.deleteOne.bind(MovimentoFinanceiroController)
);

module.exports = router;
