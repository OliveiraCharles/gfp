const mongoose = require("mongoose");
const config = require("@config/database");

// Conexão Banco de dados
module.exports = (err) => {
  if (err) {
    return console.error();
  } else if (config.db.db_uri) {
    mongoose
      .connect(config.db.db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      })
      .then(() => {
        console.log("DB INFO: Mongo DB connected");
      })
      .catch((err) => console.log(err));
  } else {
    console.log("DB ERROR: No connection string provided");
  }
};
