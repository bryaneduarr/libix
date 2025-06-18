import env from "@/env";
import logger from "@lib/logger/logger";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Creating a PostgreSQL connection pool.
const pool = new Pool({
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  database: env.DB_NAME,
});

/**
 * Establishes a connection to the PostgreSQL database using a connection pool.
 * Logs a success message upon successful connection and releases the client
 * back to the pool. If an error occurs during the connection process, it logs
 * the error and throws an exception.
 *
 * @throws {Error} If the connection to the database fails.
 */
export async function connectToDatabase() {
  try {
    const client = await pool.connect();
    logger.info("[database]: PostgreSQL connection pool created.");
    // Release the client back to the pool.
    client.release();
  } catch (error) {
    logger.error("[database]: Error connecting to the database: ", error);
    throw new Error("[database]: Failed to connect to the database");
  }
}

// Create a Drizzle ORM instance.
export const db = drizzle(pool);
export { pool };
