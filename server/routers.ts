import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { dealsRouter } from "./routes/deals";
import { z } from "zod";
import { createLead, getLeads, getLeadById, updateLeadStatus, createContactMessage, getContactMessages } from "./db";
import { TRPCError } from "@trpc/server";
import { notifyNewLead, notifyNewContact } from "./notifications";
import { makeRequest } from "./_core/map";

const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  deals: dealsRouter,
  leads: router({
    submit: publicProcedure
      .input(
        z.object({
          submitterType: z.string().min(1, "Please select whether you are a Homeowner, Realtor, or Other"),
          fullName: z.string().min(1, "Name is required"),
          phone: z.string().min(7, "Phone number is required"),
          email: z.string().email("Valid email is required"),
          propertyAddress: z.string().min(5, "Property address is required"),
          city: z.string().optional(),
          referralSource: z.string().min(1, "Please tell us how you heard about us"),
          reasonForSelling: z.string().optional(),
          timing: z.string().optional(),
          condition: z.string().optional(),
          message: z.string().min(1, "Please tell us about the property"),
        })
      )
      .mutation(async ({ input }) => {
        const leadData = {
          submitterType: input.submitterType || null,
          fullName: input.fullName,
          phone: input.phone,
          email: input.email || null,
          propertyAddress: input.propertyAddress,
          city: input.city || null,
          referralSource: input.referralSource || null,
          reasonForSelling: input.reasonForSelling || null,
          timing: input.timing || null,
          condition: input.condition || null,
          message: input.message || null,
        };
        await createLead(leadData);
        // Fire-and-forget notification — don't block the response
        notifyNewLead(leadData).catch(() => {});
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

  places: router({
    autocomplete: publicProcedure
      .input(z.object({ input: z.string().min(2) }))
      .query(async ({ input }) => {
        const data = await makeRequest<{
          predictions: Array<{
            place_id: string;
            description: string;
            structured_formatting: {
              main_text: string;
              secondary_text: string;
            };
          }>;
          status: string;
        }>("/maps/api/place/autocomplete/json", {
          input: input.input,
          components: "country:us",
          types: "address",
        });
        return (data.predictions || []).map((p) => ({
          placeId: p.place_id,
          description: p.description,
          mainText: p.structured_formatting?.main_text || p.description,
          secondaryText: p.structured_formatting?.secondary_text || "",
        }));
      }),

    details: publicProcedure
      .input(z.object({ placeId: z.string() }))
      .query(async ({ input }) => {
        const data = await makeRequest<{
          result: {
            formatted_address: string;
            address_components: Array<{
              long_name: string;
              short_name: string;
              types: string[];
            }>;
            geometry?: { location: { lat: number; lng: number } };
          };
          status: string;
        }>("/maps/api/place/details/json", {
          place_id: input.placeId,
          fields: "address_component,formatted_address,geometry",
        });
        const result = data.result;
        if (!result) return null;
        const components = result.address_components || [];
        const getComponent = (type: string) =>
          components.find((c) => c.types.includes(type))?.long_name || "";
        const getShort = (type: string) =>
          components.find((c) => c.types.includes(type))?.short_name || "";
        return {
          fullAddress: result.formatted_address,
          street: `${getComponent("street_number")} ${getComponent("route")}`.trim(),
          city: getComponent("locality") || getComponent("sublocality_level_1") || getComponent("administrative_area_level_2"),
          state: getShort("administrative_area_level_1"),
          zip: getComponent("postal_code"),
          lat: result.geometry?.location?.lat,
          lng: result.geometry?.location?.lng,
        };
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
        const contactData = {
          fullName: input.fullName,
          email: input.email,
          phone: input.phone || null,
          subject: input.subject || null,
          message: input.message,
        };
        await createContactMessage(contactData);
        // Fire-and-forget notification — don't block the response
        notifyNewContact(contactData).catch(() => {});
        return { success: true };
      }),

    list: adminProcedure.query(async () => {
      return getContactMessages();
    }),
  }),
});

export type AppRouter = typeof appRouter;
