import { pgTableCreator, text } from "drizzle-orm/pg-core"

export const pgTable = pgTableCreator((name) => `cxtnipp_${name}`)

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  image: text("image"),
  password: text("password").notNull()
})

export const profileCard = pgTable("profile_card", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull()
})
