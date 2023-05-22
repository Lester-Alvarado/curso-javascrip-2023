const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function nuevoErro() {
  throw new Error("Esto es un Error, verifique ahora su codigo");
}

try {
  nuevoErro();
} catch (e) {
  logger.error("errro", e.toString());
}
