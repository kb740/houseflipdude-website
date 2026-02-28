import { index, integer, numeric, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);
export const leadStatusEnum = pgEnum("lead_status", ["new", "contacted", "qualified", "offer_sent", "closed", "lost"]);
export const dealStatusEnum = pgEnum("deal_status", ["new", "active", "under_contract", "pending", "closed", "dead"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: userRoleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
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
  status: leadStatusEnum("status").default("new").notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

export const contactMessages = pgTable("contactMessages", {
  id: serial("id").primaryKey(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 30 }),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = typeof contactMessages.$inferInsert;

export const deals = pgTable("deals", {
  id: serial("id").primaryKey(),
  address: varchar("address", { length: 255 }),
  apn: varchar("apn", { length: 64 }),
  status: dealStatusEnum("status").default("new").notNull(),
  listingPrice: numeric("listingPrice", { precision: 15, scale: 2 }),
  redfinEst: numeric("redfinEst", { precision: 15, scale: 2 }),
  estLow: numeric("estLow", { precision: 15, scale: 2 }),
  estHigh: numeric("estHigh", { precision: 15, scale: 2 }),
  soldPrice: numeric("soldPrice", { precision: 15, scale: 2 }),
  soldDate: varchar("soldDate", { length: 32 }),
  pricePerSqft: numeric("pricePerSqft", { precision: 10, scale: 2 }),
  hoa: numeric("hoa", { precision: 10, scale: 2 }),
  beds: integer("beds"),
  baths: numeric("baths", { precision: 5, scale: 1 }),
  sqft: integer("sqft"),
  lotSf: integer("lotSf"),
  lotAcres: numeric("lotAcres", { precision: 10, scale: 4 }),
  yearBuilt: integer("yearBuilt"),
  propType: varchar("propType", { length: 64 }),
  daysOnMkt: integer("daysOnMkt"),
  elemSchool: varchar("elemSchool", { length: 255 }),
  schoolUrl: varchar("schoolUrl", { length: 512 }),
  flipUrl: varchar("flipUrl", { length: 512 }),
  buildUrl: varchar("buildUrl", { length: 512 }),
  flipCompData: text("flipCompData"),
  buildCompData: text("buildCompData"),
  flipAnalysis: text("flipAnalysis"),
  buildAnalysis: text("buildAnalysis"),
  aiCompAnalysis: text("aiCompAnalysis"),
  emd: numeric("emd", { precision: 15, scale: 2 }),
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
  redfinUrl: text("redfinUrl"),
  askingPrice: numeric("askingPrice", { precision: 12, scale: 2 }),
  estVsList: numeric("estVsList", { precision: 8, scale: 4 }),
  county: varchar("county", { length: 100 }),
  aboutThisHome: text("aboutThisHome"),
  source: varchar("source", { length: 255 }),
  notes: text("notes"),
  lat: numeric("lat", { precision: 10, scale: 7 }),
  lng: numeric("lng", { precision: 10, scale: 7 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type Deal = typeof deals.$inferSelect;
export type InsertDeal = typeof deals.$inferInsert;

export const dealAccess = pgTable("dealAccess", {
  id: serial("id").primaryKey(),
  dealId: integer("dealId").notNull(),
  userId: integer("userId").notNull(),
  grantedAt: timestamp("grantedAt").defaultNow().notNull(),
}, (table) => [
  index("deal_access_deal_id_idx").on(table.dealId),
  index("deal_access_user_id_idx").on(table.userId),
]);

export type DealAccess = typeof dealAccess.$inferSelect;

export const investorProfiles = pgTable("investorProfiles", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull().unique(),
  rehabCostPerSqft: numeric("rehabCostPerSqft", { precision: 10, scale: 2 }),
  targetProfitMargin: numeric("targetProfitMargin", { precision: 10, scale: 6 }),
  interestRate: numeric("interestRate", { precision: 10, scale: 6 }),
  loanPoints: numeric("loanPoints", { precision: 10, scale: 6 }),
  loanTermMonths: integer("loanTermMonths"),
  holdingMonths: integer("holdingMonths"),
  closingCostsPct: numeric("closingCostsPct", { precision: 10, scale: 6 }),
  minPrice: numeric("minPrice", { precision: 15, scale: 2 }),
  maxPrice: numeric("maxPrice", { precision: 15, scale: 2 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type InvestorProfile = typeof investorProfiles.$inferSelect;
