import { describe, expect, it, vi, beforeEach } from "vitest";

// Mock the notification module's dependency on notifyOwner
const mockNotifyOwner = vi.fn().mockResolvedValue(true);
vi.mock("./_core/notification", () => ({
  notifyOwner: (...args: any[]) => mockNotifyOwner(...args),
}));

// Import after mocking
import { notifyNewLead, notifyNewContact } from "./notifications";

describe("notifyNewLead", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls notifyOwner with formatted lead data", async () => {
    await notifyNewLead({
      fullName: "Jane Doe",
      phone: "4155551234",
      propertyAddress: "123 Main St, San Francisco, CA 94102",
      email: "jane@example.com",
      referralSource: "Google",
      message: "Need to sell fast",
    });

    expect(mockNotifyOwner).toHaveBeenCalledTimes(1);
    const call = mockNotifyOwner.mock.calls[0][0];
    expect(call.title).toContain("Jane Doe");
    expect(call.title).toContain("123 Main St");
    expect(call.content).toContain("Jane Doe");
    expect(call.content).toContain("4155551234");
    expect(call.content).toContain("123 Main St, San Francisco, CA 94102");
    expect(call.content).toContain("jane@example.com");
    expect(call.content).toContain("Google");
    expect(call.content).toContain("Need to sell fast");
  });

  it("handles missing optional fields gracefully", async () => {
    await notifyNewLead({
      fullName: "John Smith",
      phone: "5105551234",
      propertyAddress: "456 Oak Ave, Oakland, CA 94607",
    });

    expect(mockNotifyOwner).toHaveBeenCalledTimes(1);
    const call = mockNotifyOwner.mock.calls[0][0];
    expect(call.content).toContain("Not provided");
    expect(call.content).toContain("Not specified");
  });

  it("does not throw when notifyOwner fails", async () => {
    mockNotifyOwner.mockRejectedValueOnce(new Error("Service unavailable"));

    // Should not throw
    await expect(
      notifyNewLead({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
      })
    ).resolves.toBeUndefined();
  });

  it("does not throw when notifyOwner returns false", async () => {
    mockNotifyOwner.mockResolvedValueOnce(false);

    await expect(
      notifyNewLead({
        fullName: "Jane Doe",
        phone: "4155551234",
        propertyAddress: "123 Main St, SF, CA 94102",
      })
    ).resolves.toBeUndefined();
  });
});

describe("notifyNewContact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls notifyOwner with formatted contact data", async () => {
    await notifyNewContact({
      fullName: "Bob Jones",
      email: "bob@example.com",
      phone: "4155559999",
      subject: "Question about selling",
      message: "I have a house in Oakland I'd like to sell.",
    });

    expect(mockNotifyOwner).toHaveBeenCalledTimes(1);
    const call = mockNotifyOwner.mock.calls[0][0];
    expect(call.title).toContain("Bob Jones");
    expect(call.title).toContain("Question about selling");
    expect(call.content).toContain("Bob Jones");
    expect(call.content).toContain("bob@example.com");
    expect(call.content).toContain("4155559999");
    expect(call.content).toContain("I have a house in Oakland");
  });

  it("handles missing optional fields gracefully", async () => {
    await notifyNewContact({
      fullName: "Alice",
      email: "alice@example.com",
      message: "Hello",
    });

    expect(mockNotifyOwner).toHaveBeenCalledTimes(1);
    const call = mockNotifyOwner.mock.calls[0][0];
    expect(call.content).toContain("Not provided");
    expect(call.title).toContain("General Inquiry");
  });

  it("does not throw when notifyOwner fails", async () => {
    mockNotifyOwner.mockRejectedValueOnce(new Error("Service unavailable"));

    await expect(
      notifyNewContact({
        fullName: "Alice",
        email: "alice@example.com",
        message: "Hello",
      })
    ).resolves.toBeUndefined();
  });
});
