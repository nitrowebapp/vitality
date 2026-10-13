import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  language: z.enum(["en", "pt", "es"]),
  condition: z.string().trim().max(200).optional().default(""),
  insurance: z.string().trim().max(200).optional().default(""),
  requestType: z.enum(["eval", "discovery", "telehealth", "question"]),
  message: z.string().trim().max(3000).optional().default(""),
  /** Honeypot: real users never fill this. */
  website: z.string().max(0).optional().default(""),
  pageLocale: z.enum(["en", "pt", "es"]).optional().default("en"),
});

export type ContactInput = z.infer<typeof contactSchema>;

const REQUEST_LABELS: Record<ContactInput["requestType"], string> = {
  eval: "Initial Evaluation",
  discovery: "Free 15-min Discovery Call",
  telehealth: "Telehealth Session",
  question: "General Question",
};

const LANGUAGE_LABELS: Record<ContactInput["language"], string> = {
  en: "English",
  pt: "Portuguese",
  es: "Spanish",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function storeLead(data: ContactInput) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from("contact_leads").insert({
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    language: data.language,
    condition: data.condition || null,
    insurance: data.insurance || null,
    request_type: data.requestType,
    message: data.message || null,
    page_locale: data.pageLocale,
  });
  if (error) throw new Error(`Supabase insert failed: ${error.message}`);
}

async function emailLead(data: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    throw new Error("Email delivery is not configured (RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL)");
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Request", REQUEST_LABELS[data.requestType]],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Preferred language", LANGUAGE_LABELS[data.language]],
    ["Condition", data.condition || "—"],
    ["Insurance", data.insurance || "—"],
    ["Message", data.message || "—"],
    ["Submitted from", `/${data.pageLocale}/contact`],
  ];

  const html = `
    <h2 style="font-family:sans-serif;color:#1B3A6B">New website lead — ${escapeHtml(REQUEST_LABELS[data.requestType])}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top"><b>${k}</b></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const { error } = await resend.emails.send({
    from,
    to: to.split(",").map((s) => s.trim()),
    replyTo: data.email,
    subject: `[Vitality] ${REQUEST_LABELS[data.requestType]} — ${data.name}`,
    html,
    text,
  });
  if (error) throw new Error(`Resend failed: ${error.message}`);
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot filled → silently accept without doing anything.
    if (data.website) return { ok: true as const };

    try {
      await storeLead(data);
      await emailLead(data);
    } catch (err) {
      // Log the real cause server-side; the client only gets a generic failure.
      console.error("[contact] lead delivery failed:", err);
      throw new Error("CONTACT_SEND_FAILED", { cause: err });
    }
    return { ok: true as const };
  });
