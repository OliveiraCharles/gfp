/*
Responsável por encaminhar as rotas /estabelecimento
*/
const router = require("express").Router();
const estabelecimentoController = require("@controllers/crud/estabelecimentoController");

router.post(
  "/",
  estabelecimentoController.create.bind(estabelecimentoController)
);
router.get(
  "/",
  estabelecimentoController.getAll.bind(estabelecimentoController)
);
router.get(
  "/:id",
  estabelecimentoController.getOne.bind(estabelecimentoController)
);
router.put(
  "/:id",
  estabelecimentoController.updateOne.bind(estabelecimentoController)
);
router.delete(
  "/:id",
  estabelecimentoController.deleteOne.bind(estabelecimentoController)
);

module.exports = router;
