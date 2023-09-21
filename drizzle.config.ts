import { type Config } from "drizzle-kit"

import { env } from "~/env.mjs"

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  out: "./migrations",
  dbCredentials: {
    connectionString: env.DATABASE_URL
  },
  tablesFilter: ["cxtnipp_*"]
} satisfies Config
