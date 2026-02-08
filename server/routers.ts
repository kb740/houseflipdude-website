import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createLead, getLeads, getLeadById, updateLeadStatus, createContactMessage, getContactMessages } from "./db";
import { TRPCError } from "@trpc/server";

const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  leads: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Name is required"),
          phone: z.string().min(7, "Phone number is required"),
          email: z.string().email().optional().or(z.literal("")),
          propertyAddress: z.string().min(5, "Property address is required"),
          city: z.string().optional(),
          referralSource: z.string().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createLead({
          fullName: input.fullName,
          phone: input.phone,
          email: input.email || null,
          propertyAddress: input.propertyAddress,
          city: input.city || null,
          referralSource: input.referralSource || null,
          message: input.message || null,
        });
        return { success: true };
      }),

    list: adminProcedure.query(async () => {
      return getLeads();
    }),

    getById: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const lead = await getLeadById(input.id);
        if (!lead) throw new TRPCError({ code: "NOT_FOUND" });
        return lead;
      }),

    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "contacted", "qualified", "offer_sent", "closed", "lost"]),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await updateLeadStatus(input.id, input.status, input.notes);
        return { success: true };
      }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          subject: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        await createContactMessage({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone || null,
          subject: input.subject || null,
          message: input.message,
        });
        return { success: true };
      }),

    list: adminProcedure.query(async () => {
      return getContactMessages();
    }),
  }),
});

export type AppRouter = typeof appRouter;
