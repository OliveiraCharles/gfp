// crudController.js
const Categoria = require("@models/categoriaModel"); // Certifique-se de ajustar o caminho conforme necessário
class CrudController {
  constructor(Model, modelName) {
    if (!Model || !modelName) {
      throw new Error("Model and modelName are required.");
    }
    this.Model = Model;
    this.tableName = modelName.toLowerCase(); // Obtém o nome do modelo em minúsculas
  }

  async create(req, res) {
    const {
      nome,
      descricao,
      valor,
      dataCompra,
      categoria /* ou o nome da coluna que relaciona com a categoria */,
    } = req.body;

    try {
      // Primeiro, obtenha o valor da coluna "tipo" da tabela "categoria"
      const categoriaResult = Categoria.query(
        `SELECT tipo FROM categorias WHERE nome = '${categoria}'`
      );
        console.log(categoria);
      // // Certifique-se de que a categoria foi encontrada
      if (categoriaResult.rows.length === 0) {
        res.status(404).send({ message: "Categoria not found" });
        return;
      }

      const tipo = categoriaResult.rows[0].tipo;

      // Agora, insira na tabela "movimentos" com o valor de "tipo" obtido
      const result = await this.Model.query(
        `INSERT INTO ${this.tableName} (nome, descricao, valor, dataCompra, tipo) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [nome, descricao, valor, dataCompra, tipo]
      );

      res.status(201).send(result.rows[0]);
    } catch (error) {
      console.error("DB ERROR:", error);
      res.status(400).send(error);
    }
  }

  async updateOne(req, res) {
    const id = req.params.id;
    const updates = req.body;

    const setClause = Object.keys(updates)
      .map((column, index) => `${column} = $${index + 1}`)
      .join(", ");

    try {
      const result = await this.Model.query(
        `UPDATE ${this.tableName} SET ${setClause} WHERE id = $${
          Object.keys(updates).length + 1
        } RETURNING *`,
        [...Object.values(updates), id]
      );

      if (result.rows.length === 0) {
        res.status(404).send({ message: `${this.Model.name} not found` });
      } else {
        res.send(result.rows[0]);
      }
    } catch (error) {
      console.error("DB ERROR:", error);
      res.status(500).send(error);
    }
  }

  async deleteOne(req, res) {
    const id = req.params.id;

    try {
      const result = await this.Model.query(
        `DELETE FROM ${this.tableName} WHERE id = $1 RETURNING *`,
        [id]
      );

      if (result.rows.length === 0) {
        res.status(404).send({ message: `${this.Model.name} not found` });
      } else {
        res.send({ message: `${this.Model.name} deleted successfully` });
      }
    } catch (error) {
      console.error("DB ERROR:", error);
      res.status(500).send(error);
    }
  }
  async getAll(req, res) {
    try {
      const result = await this.Model.query(`SELECT * FROM ${this.tableName}`);
      res.send(result.rows);
    } catch (error) {
      console.error("DB ERROR:", error);
      res.status(500).send(error);
    }
  }
  async getOne(req, res) {
    const id = req.params.id;

    try {
      const result = await this.Model.query(
        `SELECT * FROM ${this.tableName} WHERE id = $1`,
        [id]
      );

      if (result.rows.length === 0) {
        res.status(404).send({ message: `${this.Model.name} not found` });
      } else {
        res.send(result.rows[0]);
      }
    } catch (error) {
      console.error("DB ERROR:", error);
      res.status(500).send(error);
    }
  }
  async getByMonth(req, res) {
    const month = req.params.month;
    const year = req.params.year;

    try {
      const result = await this.Model.query(
        `SELECT * FROM ${this.tableName} WHERE EXTRACT(MONTH FROM dataCompra) = $1 AND EXTRACT(YEAR FROM dataCompra) = $2`,
        [month, year]
      );

      res.send(result.rows);
    } catch (error) {
      console.error("DB ERROR:", error);
      res.status(404).send({ message: `Error retrieving data: ${error}` });
    }
  }
}

module.exports = CrudController;
