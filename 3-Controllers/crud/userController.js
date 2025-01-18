const User = require("@models/userModel");
const CrudController = require("@controllers/crud/crudController");
const jwt = require("jsonwebtoken");

class UserController extends CrudController {
  constructor(User) {
    super(User, "Users");
  }

  // Métodos adicionais específicos de UserController
  async login(req, res) {
    try {
      const { name, passwordHash } = req.body;

      const user = await User.find({ name: name }).exec();

      if (!user) {
        return res.status(402).send("Usuário não encontrado");
      }

      console.log(passwordHash, user[0].passwordHash);
      if (passwordHash === user[0].passwordHash) {
        const token = jwt.sign(
          { id: user._id, name: user.name },
          process.env.JWT_PASSWORD,
          { expiresIn: "2d" }
        );

        return res.status(200).json({
          name: user.name,
          token: token,
        });
      } else {
        return res.status(401).send("Senha incorreta!");
      }
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
      return res.status(500).send("Erro interno do servidor");
    }
  }
}

module.exports = new UserController(User);
