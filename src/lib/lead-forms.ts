import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CONTACT_SCHEMA = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  timeline: z.string().trim().max(60).optional().or(z.literal("")),
  services: z.array(z.string()).min(1, "Pick at least one service").max(12),
  goal: z.string().trim().min(10, "Tell us what you want to move").max(1000),
  honeypot: z.string().trim().max(200).optional().or(z.literal("")),
});

const AUDIT_SCHEMA = z.object({
  website: z.string().trim().min(3, "Enter your website URL").max(200),
  business: z.string().trim().min(1, "Enter your business name").max(120),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  goals: z.string().trim().min(10, "Tell us what a win looks like").max(600),
  challenges: z.string().trim().max(600).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  honeypot: z.string().trim().max(200).optional().or(z.literal("")),
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const rateLimitTimestamps = new Map<string, number[]>();

function pruneRateLimit(key: string) {
  const now = Date.now();
  const timestamps = rateLimitTimestamps.get(key) ?? [];
  const recent = timestamps.filter((stamp) => now - stamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length === 0) {
    rateLimitTimestamps.delete(key);
    return;
  }

  rateLimitTimestamps.set(key, recent);
}

function assertRateLimit(key: string) {
  const normalized = key.toLowerCase().trim();
  if (!normalized) {
    return;
  }

  pruneRateLimit(normalized);
  const timestamps = rateLimitTimestamps.get(normalized) ?? [];

  if (timestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    throw new Error("Too many submissions from this email address. Please try again later.");
  }

  timestamps.push(Date.now());
  rateLimitTimestamps.set(normalized, timestamps);
}

async function notifyAdmin(source: "contact" | "audit", data: Record<string, string | string[]>) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL ?? "hello@nordwell.studio";
  const fromAddress = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const services = Array.isArray(data.services)
    ? data.services
    : typeof data.services === "string"
      ? [data.services]
      : [];

  if (!apiKey) {
    return;
  }

  const html = [
    `<p><strong>Source:</strong> ${source}</p>`,
    `<p><strong>Name:</strong> ${escapeHtml(data.name as string)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(data.email as string)}</p>`,
    `<p><strong>Phone:</strong> ${escapeHtml((data.phone ?? "") as string)}</p>`,
    `<p><strong>Website:</strong> ${escapeHtml((data.website ?? "") as string)}</p>`,
    `<p><strong>Company:</strong> ${escapeHtml((data.company ?? "") as string)}</p>`,
    `<p><strong>Budget:</strong> ${escapeHtml((data.budget ?? "") as string)}</p>`,
    `<p><strong>Timeline:</strong> ${escapeHtml((data.timeline ?? "") as string)}</p>`,
    `<p><strong>Services:</strong> ${escapeHtml(services.join(", "))}</p>`,
    `<p><strong>Goal / Notes:</strong><br>${escapeHtml((data.goal ?? data.goals ?? "") as string)}</p>`,
  ].join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Website leads <${fromAddress}>`,
      to: [recipient],
      subject: `[${source}] ${data.name ?? "New inquiry"}`,
      html,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send notification email");
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const submitLeadInquiry = createServerFn({ method: "POST" })
  .validator(CONTACT_SCHEMA)
  .handler(async ({ data }) => {
    if ((data.honeypot ?? "").trim().length > 0) {
      throw new Error("Submission rejected.");
    }

    assertRateLimit(data.email);

    await notifyAdmin("contact", {
      name: data.name,
      email: data.email,
      phone: data.phone ?? "",
      website: data.website ?? "",
      company: data.company ?? "",
      budget: data.budget ?? "",
      timeline: data.timeline ?? "",
      services: data.services,
      goal: data.goal,
    });

    return { success: true };
  });

export const submitAuditRequest = createServerFn({ method: "POST" })
  .validator(AUDIT_SCHEMA)
  .handler(async ({ data }) => {
    if ((data.honeypot ?? "").trim().length > 0) {
      throw new Error("Submission rejected.");
    }

    assertRateLimit(data.email);

    await notifyAdmin("audit", {
      name: data.business,
      email: data.email,
      website: data.website,
      company: data.business,
      goals: data.goals,
    });

    return { success: true };
  });
