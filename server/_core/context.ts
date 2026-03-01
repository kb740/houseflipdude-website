import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { getAuth } from "@clerk/express";
import type { User } from "../../drizzle/schema";
import { getUserByOpenId, upsertUser } from "../db";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    const { userId } = getAuth(opts.req);
    const adminEnvId = process.env.ADMIN_USER_ID;
    console.log("[auth] clerkUserId:", JSON.stringify(userId));
    console.log("[auth] ADMIN_USER_ID env:", JSON.stringify(adminEnvId));

    if (userId) {
      user = (await getUserByOpenId(userId)) ?? null;
      if (!user) {
        // First sign-in: create user record in DB
        const isAdmin = userId === adminEnvId?.trim();
        await upsertUser({ openId: userId, role: isAdmin ? "admin" : "user" });
        user = (await getUserByOpenId(userId)) ?? null;
      }
      // Always honor ADMIN_USER_ID regardless of what is stored in the DB.
      // Trim the env var to guard against trailing whitespace/newlines from Railway.
      if (user && userId === adminEnvId?.trim()) {
        user = { ...user, role: "admin" };
      }
      console.log("[auth] user.role after context build:", user?.role);
    }
  } catch (err) {
    console.error("[auth] createContext error:", err);
    user = null;
  }

  return { req: opts.req, res: opts.res, user };
}
