const router = require("express").Router();
const homeController = require("@controllers/homeController");

router.get("/", homeController.hello);
router.get("/error", homeController.errorTest);

module.exports = router;
