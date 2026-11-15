import { site } from "@/content/site";

type Enquiry = {
  name: string;
  phone: string;
  requirement: string;
  website: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isEnquiry(value: unknown): value is Enquiry {
  if (!isRecord(value)) return false;
  return (
    typeof value.name === "string" &&
    typeof value.phone === "string" &&
    typeof value.requirement === "string" &&
    typeof value.website === "string" &&
    value.name.trim().length > 0 &&
    value.name.length <= 120 &&
    value.phone.replace(/\D/g, "").length >= 8 &&
    value.phone.replace(/\D/g, "").length <= 15 &&
    value.phone.length <= 40 &&
    value.requirement.trim().length > 0 &&
    value.requirement.length <= 3000 &&
    value.website.length <= 300
  );
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

async function sendWithResend(
  enquiry: Enquiry,
  apiKey: string,
  to: string,
  from: string,
): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: site.enquiry.emailSubject,
      text: [
        `${site.enquiry.emailLabels.name}: ${enquiry.name}`,
        `${site.enquiry.emailLabels.phone}: ${enquiry.phone}`,
        "",
        `${site.enquiry.emailLabels.requirement}:`,
        enquiry.requirement,
      ].join("\n"),
      html: `<p><strong>${site.enquiry.emailLabels.name}:</strong> ${escapeHtml(enquiry.name)}</p><p><strong>${site.enquiry.emailLabels.phone}:</strong> ${escapeHtml(enquiry.phone)}</p><p><strong>${site.enquiry.emailLabels.requirement}:</strong></p><p>${escapeHtml(enquiry.requirement).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Enquiry email provider rejected the request", {
      status: response.status,
    });
    throw new Error(site.enquiry.apiErrors.emailDelivery);
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: site.enquiry.apiErrors.invalidRequest },
      { status: 400 },
    );
  }

  if (!isEnquiry(payload)) {
    return Response.json(
      { error: site.enquiry.apiErrors.invalidDetails },
      { status: 400 },
    );
  }

  if (payload.website.trim()) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRY_TO_EMAIL;
  const sender = process.env.ENQUIRY_FROM_EMAIL;
  const emailConfiguration = [apiKey, recipient, sender];
  const configuredValues = emailConfiguration.filter(Boolean).length;

  if (configuredValues > 0 && configuredValues < emailConfiguration.length) {
    console.error("Enquiry email configuration is incomplete.");
    return Response.json(
      { error: site.enquiry.apiErrors.emailConfiguration },
      { status: 500 },
    );
  }

  if (apiKey && recipient && sender) {
    try {
      await sendWithResend(payload, apiKey, recipient, sender);
    } catch (error) {
      console.error("Enquiry email delivery failed", error);
      return Response.json(
        { error: site.enquiry.apiErrors.emailDelivery },
        { status: 502 },
      );
    }
  } else {
    console.info("Website enquiry received", {
      name: payload.name,
      phone: payload.phone,
      requirement: payload.requirement,
      receivedAt: new Date().toISOString(),
    });
  }

  return Response.json({ ok: true });
}
