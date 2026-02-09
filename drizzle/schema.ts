import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  submitterType: varchar("submitterType", { length: 64 }),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 30 }).notNull(),
  email: varchar("email", { length: 320 }),
  propertyAddress: text("propertyAddress").notNull(),
  city: varchar("city", { length: 128 }),
  referralSource: varchar("referralSource", { length: 128 }),
  reasonForSelling: varchar("reasonForSelling", { length: 128 }),
  timing: varchar("timing", { length: 64 }),
  condition: varchar("condition", { length: 64 }),
  message: text("message"),
  status: mysqlEnum("status", ["new", "contacted", "qualified", "offer_sent", "closed", "lost"]).default("new").notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

export const contactMessages = mysqlTable("contactMessages", {
  id: int("id").autoincrement().primaryKey(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 30 }),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = typeof contactMessages.$inferInsert;
