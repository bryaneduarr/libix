import env from "@/env";
import { connectToDatabase } from "@db/index";
import { initializeDatabase } from "@db/initialize-tables/init";
import { serve } from "@hono/node-server";
import logger from "@lib/logger/logger";
import { Hono } from "hono";

const app = new Hono();

async function startServer() {
  try {
    // Initialize the database connection.
    await connectToDatabase();

    // Initialize the database schema.
    await initializeDatabase();

    // Log a success message after database initialization.
    logger.info("[server]: Database initialized successfully");

    app.get("/", (c) => {
      return c.text("Hello Hono!");
    });

    // Start the server using Hono's Node.js server adapter.
    serve(
      {
        fetch: app.fetch,
        port: Number(env.PORT) || 3001,
      },
      (info) => {
        logger.info(`Server is running on http://localhost:${info.port}`);
      },
    );
  } catch (error) {
    // Log the error and exit the process if server fails to start.
    logger.error("[server]: Failed to start server", error);
    process.exit(1);
  }
}

startServer();
