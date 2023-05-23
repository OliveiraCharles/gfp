const logger = require("@utils/logger.js");

module.exports = (req, res, next) => {
  res.sendError = function (message, statusCode = 500) {
    logger.error({ message, statusCode });
    return this.status(statusCode).send(message);
  };
  next();
};
