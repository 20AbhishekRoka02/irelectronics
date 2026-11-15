"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href?: string;
  variant?: "primary" | "whatsapp" | "outline" | "text";
  event?: AnalyticsEvent;
  message?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  event,
  message,
  onClick,
  children,
  className = "",
  ...props
}: Props) {
  const resolvedHref =
    variant === "whatsapp" ? getWhatsAppUrl(message) : href ?? "#contact";

  return (
    <a
      {...props}
      className={`button button-${variant} ${className}`.trim()}
      href={resolvedHref}
      onClick={(clickEvent) => {
        if (
          event &&
          (event !== "whatsapp_click" ||
            resolvedHref.startsWith("https://wa.me/"))
        ) {
          trackEvent(event);
        }
        onClick?.(clickEvent);
      }}
    >
      {children}
    </a>
  );
}
