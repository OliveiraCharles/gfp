const User = require("@models/userModel");
const CrudController = require("@controllers/crud/crudController");

class UserController extends CrudController {
  constructor(User) {
    super(User);
  }

  // Métodos adicionais específicos de UserController
}

module.exports = new UserController(User);
