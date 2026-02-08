import { notifyOwner } from "./_core/notification";

const NOTIFICATION_EMAIL = "KB@ironhorsere.com";

/**
 * Formats lead data into a readable notification message.
 */
function formatLeadNotification(lead: {
  fullName: string;
  phone: string;
  propertyAddress: string;
  email?: string | null;
  city?: string | null;
  referralSource?: string | null;
  reasonForSelling?: string | null;
  timing?: string | null;
  condition?: string | null;
  message?: string | null;
}): { title: string; content: string } {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const title = `🏠 New Lead: ${lead.fullName} — ${lead.propertyAddress}`;

  const lines = [
    `NEW LEAD SUBMISSION — ${timestamp} (Pacific)`,
    ``,
    `Name: ${lead.fullName}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "Not provided"}`,
    `Property Address: ${lead.propertyAddress}`,
    `City: ${lead.city || "Not specified"}`,
    `Referral Source: ${lead.referralSource || "Not specified"}`,
    `Reason for Selling: ${lead.reasonForSelling || "Not specified"}`,
    `Timing: ${lead.timing || "Not specified"}`,
    `Condition: ${lead.condition || "Not specified"}`,
    ``,
    `Message: ${lead.message || "No additional details provided"}`,
    ``,
    `---`,
    `Action: Call ${lead.fullName} at ${lead.phone} within 24 hours.`,
    `View all leads at: https://www.houseflipdude.com/admin/leads`,
  ];

  return { title, content: lines.join("\n") };
}

/**
 * Formats contact form data into a notification message.
 */
function formatContactNotification(contact: {
  fullName: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
}): { title: string; content: string } {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const title = `📩 New Contact: ${contact.fullName} — ${contact.subject || "General Inquiry"}`;

  const lines = [
    `NEW CONTACT MESSAGE — ${timestamp} (Pacific)`,
    ``,
    `Name: ${contact.fullName}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone || "Not provided"}`,
    `Subject: ${contact.subject || "General Inquiry"}`,
    ``,
    `Message:`,
    contact.message,
    ``,
    `---`,
    `Reply to: ${contact.email}`,
  ];

  return { title, content: lines.join("\n") };
}

/**
 * Sends a notification when a new lead is submitted.
 * Uses the built-in Manus notification system to alert the owner.
 * Non-blocking — logs errors but doesn't throw so the lead submission still succeeds.
 */
export async function notifyNewLead(lead: {
  fullName: string;
  phone: string;
  propertyAddress: string;
  email?: string | null;
  city?: string | null;
  referralSource?: string | null;
  reasonForSelling?: string | null;
  timing?: string | null;
  condition?: string | null;
  message?: string | null;
}): Promise<void> {
  try {
    const { title, content } = formatLeadNotification(lead);
    const sent = await notifyOwner({ title, content });
    if (sent) {
      console.log(`[Notification] Lead notification sent for ${lead.fullName}`);
    } else {
      console.warn(`[Notification] Failed to send lead notification for ${lead.fullName}`);
    }
  } catch (error) {
    console.error("[Notification] Error sending lead notification:", error);
  }
}

/**
 * Sends a notification when a new contact message is submitted.
 * Non-blocking — logs errors but doesn't throw.
 */
export async function notifyNewContact(contact: {
  fullName: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
}): Promise<void> {
  try {
    const { title, content } = formatContactNotification(contact);
    const sent = await notifyOwner({ title, content });
    if (sent) {
      console.log(`[Notification] Contact notification sent for ${contact.fullName}`);
    } else {
      console.warn(`[Notification] Failed to send contact notification for ${contact.fullName}`);
    }
  } catch (error) {
    console.error("[Notification] Error sending contact notification:", error);
  }
}

export { NOTIFICATION_EMAIL };
