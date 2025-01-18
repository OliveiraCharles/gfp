const { Pool } = require("pg");
const config = require("@config/database");

// Conexão ao Banco de Dados PostgreSQL
const pool = new Pool({
  connectionString: config.db.db_uri,
});

pool.on("connect", () => {
  console.log("DB INFO: PostgreSQL connected");
});

pool.on("error", (err) => {
  console.error("DB ERROR:", err);
});

const createCategoriaTable = async () => {
  const client = await pool.connect();
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS categorias (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        descricao TEXT,
        tipo VARCHAR(255)
      );
    `;
    await client.query(query);
    console.log("DB INFO: Categoria table created or already exists");
  } catch (err) {
    console.error("DB ERROR:", err);
  } finally {
    client.release();
  }
};

createCategoriaTable();

module.exports = pool;
