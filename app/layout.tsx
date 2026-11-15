import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import { Analytics } from "@/components/ui/analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: site.metadata.title,
  description: site.metadata.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.description,
    url: "/",
    siteName: site.business.name,
    locale: site.metadata.locale,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.business.name,
    description: site.metadata.description,
    url: getSiteUrl().toString(),
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
