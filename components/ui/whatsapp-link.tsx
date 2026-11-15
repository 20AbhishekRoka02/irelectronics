"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  message?: string;
  children: ReactNode;
};

export function WhatsAppLink({
  message,
  onClick,
  children,
  ...props
}: Props) {
  const href = getWhatsAppUrl(message);

  return (
    <a
      {...props}
      href={href}
      onClick={(clickEvent) => {
        if (href.startsWith("https://wa.me/")) trackEvent("whatsapp_click");
        onClick?.(clickEvent);
      }}
    >
      {children}
    </a>
  );
}
