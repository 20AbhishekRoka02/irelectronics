"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEvent;
  children: ReactNode;
};

export function ActionLink({ event, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        const href = props.href ?? "";
        if (
          (event === "call_click" && href.startsWith("tel:")) ||
          (event === "email_click" && href.startsWith("mailto:"))
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
