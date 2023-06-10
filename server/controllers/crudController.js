// crudController.js
class CrudController {
  constructor(Model) {
    this.Model = Model;
  }

  create(req, res) {
    const modelInstance = new this.Model(req.body);

    modelInstance
      .save()
      .then(() => {
        res.status(201).send(modelInstance);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  }

  getAll(req, res) {
    this.Model.find()
      .then((models) => {
        res.send(models);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  getOne(req, res) {
    const id = req.params.id;

    this.Model.findById(id)
      .then((model) => {
        if (!model) {
          res
            .status(404)
            .send({ message: `${this.Model.modelName} not found` });
        } else {
          res.send(model);
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  updateOne(req, res) {
    const id = req.params.id;

    this.Model.findByIdAndUpdate(id, req.body, { new: true })
      .then((model) => {
        if (!model) {
          res
            .status(404)
            .send({ message: `${this.Model.modelName} not found` });
        } else {
          res.send(model);
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  deleteOne(req, res) {
    const id = req.params.id;

    this.Model.findByIdAndRemove(id)
      .then((model) => {
        if (!model) {
          res
            .status(404)
            .send({ message: `${this.Model.modelName} not found` });
        } else {
          res.send({ message: `${this.Model.modelName} deleted successfully` });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  getByMonth(req, res) {
    const month = req.params.month;

    // Filtrar pelo mês indicado
    const filtro = {
      $expr: {
        $eq: [{ $month: "$dataCompra" }, parseInt(month)],
      },
    };

    this.Model.find(filtro)
      .exec()
      .then((result) => {
        // Resultados encontrados
        res.send(result);
      })
      .catch((err) => {
        res.status(404).send({ message: `Erro ao buscar dados: ${err}` });
        console.error("Erro ao buscar dados:", err);
      });
  }
}

module.exports = CrudController;
