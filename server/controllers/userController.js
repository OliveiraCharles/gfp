const User = require("@models/userModel");

const UserController = {
  hello(req, res) {
    res.send("Server Works!");
    // res.sendError("erro test", 500);
  },

  // Criar um novo usuário
  create(req, res) {
    const user = new User(req.body);

    user
      .save()
      .then(() => {
        res.status(201).send(user);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getAll(req, res) {
    User.find()
      .then((users) => {
        res.send(users);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  // Obter um usuário pelo ID
  getOne(req, res) {
    const id = req.params.id;

    User.findById(id)
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: "Usuário não encontrado" });
        } else {
          res.send(user);
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },

  // Atualizar um usuário pelo ID
  updateOne(req, res) {
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { new: true })
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: "Usuário não encontrado" });
        } else {
          res.send(user);
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },

  // Excluir um usuário pelo ID
  deleteOne(req, res) {
    const id = req.params.id;

    User.findByIdAndRemove(id)
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: "Usuário não encontrado" });
        } else {
          res.send({ message: "Usuário excluído com sucesso" });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};
module.exports = UserController;
