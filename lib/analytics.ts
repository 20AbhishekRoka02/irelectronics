export type AnalyticsEvent =
  | "whatsapp_click"
  | "call_click"
  | "email_click"
  | "form_submit";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEvent,
  parameters?: Record<string, string>,
): void {
  if (!process.env.NEXT_PUBLIC_GA_ID || typeof window === "undefined") return;
  window.gtag?.("event", eventName, parameters);
}
