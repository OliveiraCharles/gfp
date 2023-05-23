const Despesa = require("@models/despesaModel");

const despesaController = {
  
  // Criar um novo despesa
  create(req, res) {
    const despesa = new Despesa(req.body);

    despesa
      .save()
      .then(() => {
        res.status(201).send(despesa);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getAll(req, res) {
    Despesa.find()
      .then((despesas) => {
        res.send(despesas);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  // Obter um despesa pelo ID
  getOne(req, res) {
    const id = req.params.id;

    Despesa.findById(id)
      .then((despesa) => {
        if (!despesa) {
          res.status(404).send({ message: "despesa não encontrada" });
        } else {
          res.send(despesa);
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },

  // Atualizar um despesa pelo ID
  updateOne(req, res) {
    const id = req.params.id;

    Despesa.findByIdAndUpdate(id, req.body, { new: true })
      .then((despesa) => {
        if (!despesa) {
          res.status(404).send({ message: "despesa não encontrada" });
        } else {
          res.send(despesa);
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },

  // Excluir um despesa pelo ID
  deleteOne(req, res) {
    const id = req.params.id;

    Despesa.findByIdAndRemove(id)
      .then((despesa) => {
        if (!despesa) {
          res.status(404).send({ message: "despesa não encontrada" });
        } else {
          res.send({ message: "despesa excluída com sucesso" });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};
module.exports = despesaController;
