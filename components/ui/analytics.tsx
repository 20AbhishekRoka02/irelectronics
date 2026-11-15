"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_ID;
    if (!measurementId) return;

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
