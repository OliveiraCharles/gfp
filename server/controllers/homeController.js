const homeController = {
  hello(req, res) {
    res.status(200).send("Server Works!");
  },

  errorTest(req, res) {
    res.sendError("Error test", 500);
  },
};
module.exports = homeController;
