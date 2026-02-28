import { decimal, index, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

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

export const deals = mysqlTable("deals", {
  id: int("id").autoincrement().primaryKey(),
  address: varchar("address", { length: 255 }),
  apn: varchar("apn", { length: 64 }),
  status: mysqlEnum("status", ["new", "active", "under_contract", "pending", "closed", "dead"]).default("new").notNull(),
  listingPrice: decimal("listingPrice", { precision: 15, scale: 2 }),
  redfinEst: decimal("redfinEst", { precision: 15, scale: 2 }),
  estLow: decimal("estLow", { precision: 15, scale: 2 }),
  estHigh: decimal("estHigh", { precision: 15, scale: 2 }),
  soldPrice: decimal("soldPrice", { precision: 15, scale: 2 }),
  soldDate: varchar("soldDate", { length: 32 }),
  pricePerSqft: decimal("pricePerSqft", { precision: 10, scale: 2 }),
  hoa: decimal("hoa", { precision: 10, scale: 2 }),
  beds: int("beds"),
  baths: decimal("baths", { precision: 5, scale: 1 }),
  sqft: int("sqft"),
  lotSf: int("lotSf"),
  lotAcres: decimal("lotAcres", { precision: 10, scale: 4 }),
  yearBuilt: int("yearBuilt"),
  propType: varchar("propType", { length: 64 }),
  daysOnMkt: int("daysOnMkt"),
  elemSchool: varchar("elemSchool", { length: 255 }),
  schoolUrl: varchar("schoolUrl", { length: 512 }),
  flipUrl: varchar("flipUrl", { length: 512 }),
  buildUrl: varchar("buildUrl", { length: 512 }),
  flipCompData: text("flipCompData"),
  buildCompData: text("buildCompData"),
  flipAnalysis: text("flipAnalysis"),
  buildAnalysis: text("buildAnalysis"),
  aiCompAnalysis: text("aiCompAnalysis"),
  emd: decimal("emd", { precision: 15, scale: 2 }),
  coeDate: varchar("coeDate", { length: 32 }),
  titleCo: varchar("titleCo", { length: 255 }),
  vacancy: varchar("vacancy", { length: 64 }),
  access: varchar("access", { length: 255 }),
  photosUrl: varchar("photosUrl", { length: 512 }),
  contactName: varchar("contactName", { length: 255 }),
  contactEmail: varchar("contactEmail", { length: 320 }),
  contactPhone: varchar("contactPhone", { length: 30 }),
  sourceType: varchar("sourceType", { length: 64 }),
  intakeUrl: varchar("intakeUrl", { length: 512 }),
  rawIntake: text("rawIntake"),
  processingStatus: varchar("processingStatus", { length: 64 }),
  sheetRowId: varchar("sheetRowId", { length: 128 }).unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Deal = typeof deals.$inferSelect;
export type InsertDeal = typeof deals.$inferInsert;

export const dealAccess = mysqlTable("dealAccess", {
  id: int("id").autoincrement().primaryKey(),
  dealId: int("dealId").notNull(),
  userId: int("userId").notNull(),
  grantedAt: timestamp("grantedAt").defaultNow().notNull(),
}, (table) => [
  index("deal_access_deal_id_idx").on(table.dealId),
  index("deal_access_user_id_idx").on(table.userId),
]);

export type DealAccess = typeof dealAccess.$inferSelect;

export const investorProfiles = mysqlTable("investorProfiles", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  rehabCostPerSqft: decimal("rehabCostPerSqft", { precision: 10, scale: 2 }),
  targetProfitMargin: decimal("targetProfitMargin", { precision: 10, scale: 6 }),
  interestRate: decimal("interestRate", { precision: 10, scale: 6 }),
  loanPoints: decimal("loanPoints", { precision: 10, scale: 6 }),
  loanTermMonths: int("loanTermMonths"),
  holdingMonths: int("holdingMonths"),
  closingCostsPct: decimal("closingCostsPct", { precision: 10, scale: 6 }),
  minPrice: decimal("minPrice", { precision: 15, scale: 2 }),
  maxPrice: decimal("maxPrice", { precision: 15, scale: 2 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type InvestorProfile = typeof investorProfiles.$inferSelect;
