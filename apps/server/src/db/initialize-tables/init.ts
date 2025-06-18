import path from "path";
import { pool } from "@db/index";
import logger from "@lib/logger/logger";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

// Function to check if a table exists.
async function tableExists(tableName: string) {
  try {
    const result = await pool.query(
      `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = $1
      );
    `,
      [tableName],
    );

    // Returns a boolean value indicating if the table exists.
    return result.rows[0].exists as boolean;
  } catch (error) {
    logger.error("[database]: Error checking if table exists: ", error);
    throw new Error("[database]: Failed to check if table exists");
  }
}

/**
 * Initializes the database by setting up the schema and applying migrations if necessary.
 *
 * This function checks if the required tables exist in the database.
 * If neither table exists, it applies the database migrations from the specified migrations folder.
 * If the tables already exist, it skips the migration process.
 *
 * @throws {Error} Throws an error if the database initialization or migration process fails.
 */
export async function initializeDatabase() {
  try {
    const db = drizzle(pool);
    const migrationsPath = path.join(__dirname, "../migrations/");

    // Check if the all of the table already exists with the helper function `tableExists()`.
    const usersTableExists = await tableExists("users");

    // Verify if the tables already exists.
    if (!usersTableExists) {
      // Apply migrations only if the tables doesn't exist.
      await migrate(db, { migrationsFolder: migrationsPath });
      logger.info("[database]: Database migrations applied successfully.");
    } else {
      // Successfully connected to the database and the tables already exists.
      logger.info("[database]: Tables already exists, skipping migrations.");
    }
  } catch (error) {
    logger.info(`[database]: Error initializing database schema: ${error}`);
    throw new Error("[database]: Failed to initialize database schema");
  }
}
