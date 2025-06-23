import pino from "pino";

/**
 * Logger Module
 * -------------
 * This module exports a singl instance of a Pino logger.
 *
 * Configuration:
 * - Log level is set via the LOG_LEVEL environment variable, defaulting to 'info'
 * - Uses 'pino-pretty', readable log formatting
 * - Log output is colorized and includes timestamps in standard system format
 * - The 'pid' and 'hostname' fields are omitted from log output for brevity
 */
const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname",
    },
  },
});

export default logger;
