import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module so we don't need a real database
vi.mock("./db", () => ({
  createLead: vi.fn().mockResolvedValue(undefined),
  getLeads: vi.fn().mockResolvedValue([
    {
      id: 1,
      fullName: "Test User",
      phone: "4155551234",
      email: "test@example.com",
      propertyAddress: "123 Main St, San Francisco, CA 94102",
      city: "San Francisco",
      referralSource: "google",
      reasonForSelling: "inherited",
      timing: "immediately",
      condition: "needs_everything",
      message: "Need to sell fast",
      status: "new",
      notes: null,
      createdAt: new Date("2026-01-15"),
      updatedAt: new Date("2026-01-15"),
    },
  ]),
  getLeadById: vi.fn().mockResolvedValue({
    id: 1,
    fullName: "Test User",
    phone: "4155551234",
    email: "test@example.com",
    propertyAddress: "123 Main St, San Francisco, CA 94102",
    city: "San Francisco",
    referralSource: "google",
    reasonForSelling: "inherited",
    timing: "immediately",
    condition: "needs_everything",
    message: "Need to sell fast",
    status: "new",
    notes: null,
    createdAt: new Date("2026-01-15"),
    updatedAt: new Date("2026-01-15"),
  }),
  updateLeadStatus: vi.fn().mockResolvedValue(undefined),
  createContactMessage: vi.fn().mockResolvedValue(undefined),
  getContactMessages: vi.fn().mockResolvedValue([]),
  upsertUser: vi.fn().mockResolvedValue(undefined),
  getUserByOpenId: vi.fn().mockResolvedValue(undefined),
  getDb: vi.fn().mockResolvedValue(null),
}));

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createRegularUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("leads.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid lead submission with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      fullName: "Jane Doe",
      phone: "4155551234",
      propertyAddress: "456 Oak Ave, Oakland, CA 94607",
      email: "jane@example.com",
      referralSource: "google",
      reasonForSelling: "inherited",
      timing: "immediately",
      condition: "needs_everything",
      message: "Inherited house, need to sell",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts a lead with only required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      fullName: "John Smith",
      phone: "5105551234",
      propertyAddress: "789 Elm St, San Jose, CA 95112",
      email: "john@example.com",
      referralSource: "facebook",
      message: "Want to sell my property",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects a lead with missing name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
        email: "test@example.com",
        referralSource: "google",
        message: "Need to sell",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with missing phone", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "Jane Doe",
        phone: "",
        propertyAddress: "123 Main St, SF, CA 94102",
        email: "test@example.com",
        referralSource: "google",
        message: "Need to sell",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with missing property address", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "",
        email: "test@example.com",
        referralSource: "google",
        message: "Need to sell",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with empty email string", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
        email: "",
        referralSource: "google",
        message: "Need to sell",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
        email: "not-an-email",
        referralSource: "google",
        message: "Need to sell",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with missing email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
        referralSource: "google",
        message: "Need to sell",
      } as any)
    ).rejects.toThrow();
  });

  it("rejects a lead with missing referralSource", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
        email: "jane@example.com",
        referralSource: "",
        message: "Need to sell",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with missing message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
        email: "jane@example.com",
        referralSource: "google",
        message: "",
      })
    ).rejects.toThrow();
  });

  it("accepts a lead without optional dropdown fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      fullName: "Bob Builder",
      phone: "9255551234",
      propertyAddress: "100 Main St, Walnut Creek, CA 94596",
      email: "bob@example.com",
      referralSource: "referral",
      message: "Looking to sell my fixer upper",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts a lead with all optional dropdown fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      fullName: "Alice Wonder",
      phone: "5105559876",
      propertyAddress: "200 Oak Blvd, Berkeley, CA 94704",
      email: "alice@example.com",
      referralSource: "mailer",
      reasonForSelling: "foreclosure",
      timing: "30-60_days",
      condition: "somewhat_dated",
      message: "Facing foreclosure, need help selling quickly",
    });

    expect(result).toEqual({ success: true });
  });
});

describe("leads.list (admin only)", () => {
  it("returns leads for admin users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.list();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("fullName");
    expect(result[0]).toHaveProperty("propertyAddress");
  });

  it("rejects non-admin users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.leads.list()).rejects.toThrow();
  });

  it("rejects unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.leads.list()).rejects.toThrow();
  });
});

describe("leads.updateStatus (admin only)", () => {
  it("updates lead status for admin users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.updateStatus({
      id: 1,
      status: "contacted",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects invalid status values", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.updateStatus({
        id: 1,
        status: "invalid_status" as any,
      })
    ).rejects.toThrow();
  });

  it("rejects non-admin users", async () => {
    const ctx = createRegularUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.updateStatus({ id: 1, status: "contacted" })
    ).rejects.toThrow();
  });
});

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid contact message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "4155551234",
      subject: "Question about selling",
      message: "I have a house in Oakland I'd like to sell.",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts a contact message with minimal fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      fullName: "John",
      email: "john@example.com",
      message: "Hello",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects a contact message with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        fullName: "Jane",
        email: "not-an-email",
        message: "Hello",
      })
    ).rejects.toThrow();
  });

  it("rejects a contact message with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        fullName: "",
        email: "jane@example.com",
        message: "Hello",
      })
    ).rejects.toThrow();
  });

  it("rejects a contact message with empty message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        fullName: "Jane",
        email: "jane@example.com",
        message: "",
      })
    ).rejects.toThrow();
  });
});
