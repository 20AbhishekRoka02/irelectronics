import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      aria-label={site.common.logoAlt}
      className={`brand${footer ? " brand-footer" : ""}`}
      href="/"
    >
      <Image
        alt=""
        className="brand-logo"
        height={38}
        src="/logo.svg"
        width={38}
      />
      <span className="brand-copy">
        <strong>{site.business.name}</strong>
        <small>{site.business.tagline}</small>
      </span>
    </Link>
  );
}
