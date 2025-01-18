const { Pool } = require("pg");
const config = require("@config/database");

// Conexão Banco de dados
module.exports = (err) => {
  if (err) {
    return console.error();
  } else if (config.db.db_uri) {
    const pool = new Pool({
      connectionString: config.db.db_uri,
    });

    pool
      .connect()
      .then(() => {
        console.log("DB INFO: PostgreSQL connected");
        // pool.end(); // Fecha a conexão ao terminar
      })
      .catch((err) => console.error(err));
  } else {
    console.log("DB ERROR: No connection string provided");
  }
};
