import env from "@/env";

export default {
  schema: "./src/db/schemas/",
  out: "./src/db/migrations/",
  dialect: "postgresql",
  dbCredentials: {
    connectionString: `postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
  },
};
