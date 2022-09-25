const { logEvents } = require("./logger");

const errorHandler = (req, res, next) => {
  logEvents(
    `${err.name}:${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errorLog.log"
  );

  const status = req.statusCode ? req.statusCode : 500; //server error
  res.status(status);
  res.json({ message: err.message });
};

module.exports = errorHandler;
