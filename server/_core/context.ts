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
    if (userId) {
      user = (await getUserByOpenId(userId)) ?? null;
      if (!user) {
        // First sign-in: create user record in DB
        const isAdmin = userId === process.env.ADMIN_USER_ID;
        await upsertUser({ openId: userId, role: isAdmin ? "admin" : "user" });
        user = (await getUserByOpenId(userId)) ?? null;
      }
    }
  } catch {
    user = null;
  }

  return { req: opts.req, res: opts.res, user };
}
