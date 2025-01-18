// movimentoModel.js
const { Pool } = require("pg");
const config = require("@config/database");

const pool = new Pool({
  // Sua string de conexão do PostgreSQL aqui
  connectionString: config.db.db_uri,
});
pool.on("connect", () => {
  console.log("DB INFO: PostgreSQL connected");
});

pool.on("error", (err) => {
  console.error("DB ERROR:", err);
});

// Crie a tabela se ela ainda não existir
const createMovimentoTable = async () => {
  const client = await pool.connect();
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS movimentos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        descricao TEXT,
        valor NUMERIC NOT NULL,
        dataCompra DATE NOT NULL,
        estabelecimento VARCHAR(255),
        dataVencimento DATE,
        dataPagamento DATE,
        tipo VARCHAR(255) NOT NULL,
        conta VARCHAR(255),
        formaTransacao VARCHAR(255),
        categoria VARCHAR(255)
      );
    `;
    await client.query(query);
    console.log("DB INFO: Movimento table created or already exists");
  } catch (err) {
    console.error("DB ERROR:", err);
  } finally {
    client.release();
  }
};

createMovimentoTable();

module.exports = pool;
