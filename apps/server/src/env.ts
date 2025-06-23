import logger from "@lib/logger/logger";
import dotenv from "dotenv";

dotenv.config();

// Here you can define the types for your environment variables.
interface EnvConfig {
  SERVER_URL: string;
  PORT: string;
  NODE_ENV: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: string;
  DB_NAME: string;
}

// Define a configuration object that will contain
// server environment variables in a type-safe manner.
const env: EnvConfig = {
  SERVER_URL: process.env.SERVER_URL as string,
  PORT: process.env.PORT as string,
  NODE_ENV: process.env.NODE_ENV as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: process.env.DB_PORT as string,
  DB_NAME: process.env.DB_NAME as string,
};

// Validate that all required environment variables are set and are not undefined.
for (const [key, value] of Object.entries(env)) {
  if (typeof value === "undefined" || value === "" || value === null) {
    // Message to log if an environment variable is not set.
    logger.error(
      `Environment variable ${key} is not set. Please check your .env file or environment variables.`,
    );
  }
}

export default env;
