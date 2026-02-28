import { TRPCError } from "@trpc/server";
import { and, eq, inArray, like, sql } from "drizzle-orm";
import { z } from "zod";
import { dealAccess, deals, investorProfiles, users } from "../../drizzle/schema";
import { getDb } from "../db";
import { adminProcedure, protectedProcedure, publicProcedure, router } from "../_core/trpc";

const dealFields = z.object({
  address: z.string().optional(),
  apn: z.string().optional(),
  status: z.enum(["new", "active", "under_contract", "pending", "closed", "dead"]).optional(),
  listingPrice: z.number().nullable().optional(),
  redfinEst: z.number().nullable().optional(),
  estLow: z.number().nullable().optional(),
  estHigh: z.number().nullable().optional(),
  soldPrice: z.number().nullable().optional(),
  soldDate: z.string().nullable().optional(),
  pricePerSqft: z.number().nullable().optional(),
  hoa: z.number().nullable().optional(),
  beds: z.number().int().nullable().optional(),
  baths: z.number().nullable().optional(),
  sqft: z.number().int().nullable().optional(),
  lotSf: z.number().int().nullable().optional(),
  lotAcres: z.number().nullable().optional(),
  yearBuilt: z.number().int().nullable().optional(),
  propType: z.string().nullable().optional(),
  daysOnMkt: z.number().int().nullable().optional(),
  elemSchool: z.string().nullable().optional(),
  schoolUrl: z.string().nullable().optional(),
  flipUrl: z.string().nullable().optional(),
  buildUrl: z.string().nullable().optional(),
  flipCompData: z.string().nullable().optional(),
  buildCompData: z.string().nullable().optional(),
  flipAnalysis: z.string().nullable().optional(),
  buildAnalysis: z.string().nullable().optional(),
  aiCompAnalysis: z.string().nullable().optional(),
  emd: z.number().nullable().optional(),
  coeDate: z.string().nullable().optional(),
  titleCo: z.string().nullable().optional(),
  vacancy: z.string().nullable().optional(),
  access: z.string().nullable().optional(),
  photosUrl: z.string().nullable().optional(),
  contactName: z.string().nullable().optional(),
  contactEmail: z.string().nullable().optional(),
  contactPhone: z.string().nullable().optional(),
  sourceType: z.string().nullable().optional(),
  intakeUrl: z.string().nullable().optional(),
  rawIntake: z.string().nullable().optional(),
  processingStatus: z.string().nullable().optional(),
  sheetRowId: z.string().nullable().optional(),
});

function toRecord(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) result[k] = v;
  }
  return result;
}

export const dealsRouter = router({
  list: protectedProcedure
    .input(z.object({
      page: z.number().default(1),
      status: z.string().optional(),
      search: z.string().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const isAdmin = ctx.user.role === "admin";
      const limit = 50;
      const offset = (input.page - 1) * limit;

      const statusFilter = input.status
        ? eq(deals.status, input.status as "new" | "active" | "under_contract" | "pending" | "closed" | "dead")
        : undefined;
      const searchFilter = input.search ? like(deals.address, `%${input.search}%`) : undefined;

      if (isAdmin) {
        const whereClause = and(statusFilter, searchFilter);
        const [items, [countRow]] = await Promise.all([
          db.select().from(deals).where(whereClause).orderBy(sql`${deals.createdAt} desc`).limit(limit).offset(offset),
          db.select({ total: sql<number>`count(*)` }).from(deals).where(whereClause),
        ]);
        return { deals: items, total: Number(countRow.total), page: input.page, limit };
      }

      const accessRows = await db.select({ dealId: dealAccess.dealId }).from(dealAccess)
        .where(eq(dealAccess.userId, ctx.user.id));
      const dealIds = accessRows.map(r => r.dealId);
      if (dealIds.length === 0) return { deals: [], total: 0, page: input.page, limit };

      const whereClause = and(inArray(deals.id, dealIds), statusFilter, searchFilter);
      const [items, [countRow]] = await Promise.all([
        db.select().from(deals).where(whereClause).orderBy(sql`${deals.createdAt} desc`).limit(limit).offset(offset),
        db.select({ total: sql<number>`count(*)` }).from(deals).where(whereClause),
      ]);
      return { deals: items, total: Number(countRow.total), page: input.page, limit };
    }),

  byId: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const [deal] = await db.select().from(deals).where(eq(deals.id, input.id)).limit(1);
      if (!deal) throw new TRPCError({ code: "NOT_FOUND" });

      if (ctx.user.role !== "admin") {
        const [access] = await db.select().from(dealAccess)
          .where(and(eq(dealAccess.dealId, input.id), eq(dealAccess.userId, ctx.user.id)))
          .limit(1);
        if (!access) throw new TRPCError({ code: "FORBIDDEN" });
      }

      const [profile] = await db.select().from(investorProfiles)
        .where(eq(investorProfiles.userId, ctx.user.id)).limit(1);

      return { deal, profile: profile ?? null };
    }),

  create: adminProcedure
    .input(dealFields)
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (db.insert(deals) as any).values(toRecord(input as Record<string, unknown>));
      return { success: true };
    }),

  update: adminProcedure
    .input(dealFields.extend({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const { id, ...fields } = input;
      const data = toRecord(fields as Record<string, unknown>);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (db.update(deals) as any).set(data).where(eq(deals.id, id));
      return { success: true };
    }),

  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      await db.delete(deals).where(eq(deals.id, input.id));
      return { success: true };
    }),

  intake: publicProcedure
    .input(z.object({
      apiKey: z.string(),
      sheetRowId: z.string(),
      address: z.string().optional(),
      apn: z.string().optional(),
      status: z.enum(["new", "active", "under_contract", "pending", "closed", "dead"]).optional(),
      listingPrice: z.number().nullable().optional(),
      redfinEst: z.number().nullable().optional(),
      estLow: z.number().nullable().optional(),
      estHigh: z.number().nullable().optional(),
      soldPrice: z.number().nullable().optional(),
      soldDate: z.string().nullable().optional(),
      pricePerSqft: z.number().nullable().optional(),
      hoa: z.number().nullable().optional(),
      beds: z.number().int().nullable().optional(),
      baths: z.number().nullable().optional(),
      sqft: z.number().int().nullable().optional(),
      lotSf: z.number().int().nullable().optional(),
      lotAcres: z.number().nullable().optional(),
      yearBuilt: z.number().int().nullable().optional(),
      propType: z.string().nullable().optional(),
      daysOnMkt: z.number().int().nullable().optional(),
      elemSchool: z.string().nullable().optional(),
      schoolUrl: z.string().nullable().optional(),
      flipUrl: z.string().nullable().optional(),
      buildUrl: z.string().nullable().optional(),
      flipCompData: z.string().nullable().optional(),
      buildCompData: z.string().nullable().optional(),
      flipAnalysis: z.string().nullable().optional(),
      buildAnalysis: z.string().nullable().optional(),
      aiCompAnalysis: z.string().nullable().optional(),
      emd: z.number().nullable().optional(),
      coeDate: z.string().nullable().optional(),
      titleCo: z.string().nullable().optional(),
      vacancy: z.string().nullable().optional(),
      access: z.string().nullable().optional(),
      photosUrl: z.string().nullable().optional(),
      contactName: z.string().nullable().optional(),
      contactEmail: z.string().nullable().optional(),
      contactPhone: z.string().nullable().optional(),
      sourceType: z.string().nullable().optional(),
      intakeUrl: z.string().nullable().optional(),
      rawIntake: z.string().nullable().optional(),
      processingStatus: z.string().nullable().optional(),
    }))
    .mutation(async ({ input }) => {
      if (input.apiKey !== process.env.INTAKE_API_KEY) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid API key" });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const { apiKey, sheetRowId, ...fields } = input;
      const insertData = toRecord({ sheetRowId, processingStatus: fields.processingStatus ?? "pending", ...fields as Record<string, unknown> });
      const updateData = toRecord({ processingStatus: fields.processingStatus ?? "pending", ...fields as Record<string, unknown> });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (db.insert(deals) as any).values(insertData).onConflictDoUpdate({ target: deals.sheetRowId, set: updateData });
      return { success: true };
    }),

  grantAccess: adminProcedure
    .input(z.object({ dealId: z.number(), userId: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const [existing] = await db.select().from(dealAccess)
        .where(and(eq(dealAccess.dealId, input.dealId), eq(dealAccess.userId, input.userId)))
        .limit(1);

      if (!existing) {
        await db.insert(dealAccess).values({ dealId: input.dealId, userId: input.userId });
      }
      return { success: true };
    }),

  revokeAccess: adminProcedure
    .input(z.object({ dealId: z.number(), userId: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      await db.delete(dealAccess)
        .where(and(eq(dealAccess.dealId, input.dealId), eq(dealAccess.userId, input.userId)));
      return { success: true };
    }),

  bulkSetAccess: adminProcedure
    .input(z.object({ userId: z.number(), dealIds: z.array(z.number()) }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      await db.delete(dealAccess).where(eq(dealAccess.userId, input.userId));
      if (input.dealIds.length > 0) {
        await db.insert(dealAccess).values(
          input.dealIds.map(dealId => ({ dealId, userId: input.userId }))
        );
      }
      return { success: true };
    }),

  getUserAccessList: adminProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const rows = await db.select({ dealId: dealAccess.dealId }).from(dealAccess)
        .where(eq(dealAccess.userId, input.userId));
      return rows.map(r => r.dealId);
    }),

  getDealAccess: adminProcedure
    .input(z.object({ dealId: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      return db.select().from(dealAccess).where(eq(dealAccess.dealId, input.dealId));
    }),

  getMyProfile: protectedProcedure
    .query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const [profile] = await db.select().from(investorProfiles)
        .where(eq(investorProfiles.userId, ctx.user.id)).limit(1);
      return profile ?? null;
    }),

  upsertMyProfile: protectedProcedure
    .input(z.object({
      rehabCostPerSqft: z.number().nullable().optional(),
      targetProfitMargin: z.number().nullable().optional(),
      interestRate: z.number().nullable().optional(),
      loanPoints: z.number().nullable().optional(),
      loanTermMonths: z.number().int().nullable().optional(),
      holdingMonths: z.number().int().nullable().optional(),
      closingCostsPct: z.number().nullable().optional(),
      minPrice: z.number().nullable().optional(),
      maxPrice: z.number().nullable().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const data = toRecord({ userId: ctx.user.id, ...input as Record<string, unknown> });
      const updateData = toRecord(input as Record<string, unknown>);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (db.insert(investorProfiles) as any).values(data).onConflictDoUpdate({ target: investorProfiles.userId, set: updateData });
      return { success: true };
    }),

  listInvestors: adminProcedure
    .query(async () => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      return db.select({ id: users.id, name: users.name, email: users.email })
        .from(users)
        .where(eq(users.role, "user"));
    }),
});
