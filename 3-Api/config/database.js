module.exports = {
  // db: {
  //   db_uri: `mongodb+srv://${process.env.DB_USERNAME || "dev"}:${
  //     process.env.DB_PASSWORD || "secret"
  //   }@mongodb.ndi06h4.mongodb.net/${
  //     process.env.DB_DATABASE || "dev_database"
  //   }?retryWrites=true&w=majority`,
  // },
  db: {
    db_uri: `postgresql://${process.env.DB_USERNAME || "dev"}:${
      process.env.DB_PASSWORD || "secret"
    }@localhost:5432/${process.env.DB_DATABASE || "dev_database"}`,
  },
};
