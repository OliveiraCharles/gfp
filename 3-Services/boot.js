const config = require("@config/app");
const app = require("@app");

module.exports = (err) => {
  if (err) {
    return console.log("SERVER ERROR:\n", err);
  }
  console.clear();
  app.listen(config.app.port, config.app.host, (err) => {
    if (err) {
      console.log("SEVER ERROR: Check port and host configurations");
      console.log(err);
    }
    console.log(
      "SERVER INFO: Server works on 'http://" +
        config.app.host +
        ":" +
        config.app.port +
        "'."
    );
  });
};
