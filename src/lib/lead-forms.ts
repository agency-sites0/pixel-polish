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
  turnstileToken: z.string().trim().min(1, "Please complete the verification step"),
  honeypot: z.string().trim().max(200).optional().or(z.literal("")),
});

const AUDIT_SCHEMA = z.object({
  website: z.string().trim().min(3, "Enter your website URL").max(200),
  business: z.string().trim().min(1, "Enter your business name").max(120),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  goals: z.string().trim().min(10, "Tell us what a win looks like").max(600),
  challenges: z.string().trim().max(600).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  turnstileToken: z.string().trim().min(1, "Please complete the verification step"),
  honeypot: z.string().trim().max(200).optional().or(z.literal("")),
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const rateLimitTimestamps = new Map<string, number[]>();

type LeadSource = "contact" | "audit";

type LeadRecord = {
  source: LeadSource;
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  services?: string[];
  goal?: string;
  status: "new";
};

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

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error(
      "Missing Cloudflare Turnstile production secret. Set TURNSTILE_SECRET_KEY before enabling form spam protection.",
    );
  }

  const body = new URLSearchParams({ secret, response: token });
  
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!response.ok) {
      console.error(`Turnstile verification failed with status ${response.status}`);
      throw new Error(
        `Cloudflare verification service error (${response.status}). Please try again.`,
      );
    }

    const result = (await response.json()) as { success?: boolean; error_codes?: string[] };
    
    if (!result.success) {
      console.error("Turnstile verification failed:", result.error_codes);
      throw new Error(
        result.error_codes?.includes("invalid-input-secret")
          ? "Server configuration error. Please contact support."
          : "Please complete the verification step.",
      );
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("verification")) {
      throw error;
    }
    console.error("Turnstile fetch error:", error);
    throw new Error("Security verification service is temporarily unavailable. Please try again.");
  }
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

async function persistLead(source: LeadSource, data: Record<string, string | string[]>) {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase production credentials. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before enabling database persistence.",
    );
  }

  const normalizedBaseUrl = supabaseUrl.replace(/\/rest\/v1\/??$/, "").replace(/\/$/, "");
  const endpoint = `${normalizedBaseUrl}/rest/v1/leads`;

  const payload: LeadRecord = {
    source,
    name: typeof data.name === "string" ? data.name : undefined,
    email: typeof data.email === "string" ? data.email : "",
    phone: typeof data.phone === "string" ? data.phone : undefined,
    company: typeof data.company === "string" ? data.company : undefined,
    website: typeof data.website === "string" ? data.website : undefined,
    industry: typeof data.industry === "string" ? data.industry : undefined,
    budget: typeof data.budget === "string" ? data.budget : undefined,
    timeline: typeof data.timeline === "string" ? data.timeline : undefined,
    services: Array.isArray(data.services) ? data.services : undefined,
    goal: typeof data.goal === "string" ? data.goal : undefined,
    status: "new",
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      apikey: serviceRoleKey,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Lead persistence failed: ${message}`);
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

    await verifyTurnstile(data.turnstileToken);
    assertRateLimit(data.email);

    await persistLead("contact", {
      name: data.name,
      email: data.email,
      phone: data.phone ?? "",
      website: data.website ?? "",
      company: data.company ?? "",
      budget: data.budget ?? "",
      timeline: data.timeline ?? "",
      industry: data.industry ?? "",
      services: data.services,
      goal: data.goal,
    });

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

    await verifyTurnstile(data.turnstileToken);
    assertRateLimit(data.email);

    await persistLead("audit", {
      name: data.business,
      email: data.email,
      website: data.website,
      company: data.business,
      industry: data.industry ?? "",
      goal: data.goals,
    });

    await notifyAdmin("audit", {
      name: data.business,
      email: data.email,
      website: data.website,
      company: data.business,
      goals: data.goals,
    });

    return { success: true };
  });
