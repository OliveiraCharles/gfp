// movimentoRoutes.js
const router = require("express").Router();
const MovimentoController = require("@controllers/crud/movimentoController");
const auth = require("@services/auth");

// console.log("MovimentoController:", MovimentoController);

router.post("/", MovimentoController.create.bind(MovimentoController));
router.get("/", MovimentoController.getAll.bind(MovimentoController));
router.get("/id/:id", MovimentoController.getOne.bind(MovimentoController));
router.get(
  "/by-month/:year/:month",
  MovimentoController.getByMonth.bind(MovimentoController)
);
router.put("/:id", MovimentoController.updateOne.bind(MovimentoController));
router.delete("/:id", MovimentoController.deleteOne.bind(MovimentoController));

module.exports = router;
