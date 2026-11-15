"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { getPhoneUrl } from "@/lib/whatsapp";
import { Brand } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ActionLink } from "@/components/ui/action-link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Brand />
        <nav
          aria-label={site.navigation.mainNavigationLabel}
          className={menuOpen ? "nav-open" : ""}
        >
          {site.navigation.links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-nav-actions">
            <ActionLink
              className="header-phone"
              event="call_click"
              href={getPhoneUrl()}
            >
              <Icon name="phone" />
              {site.navigation.callLabel}: {site.business.phone}
            </ActionLink>
            <Button
              event="whatsapp_click"
              variant="whatsapp"
              onClick={() => setMenuOpen(false)}
            >
              {site.navigation.whatsappLabel}
            </Button>
          </div>
        </nav>
        <div className="header-actions">
          <ActionLink
            className="header-phone"
            event="call_click"
            href={getPhoneUrl()}
          >
            <Icon name="phone" />
            {site.business.phone}
          </ActionLink>
          <Button event="whatsapp_click" variant="whatsapp">
            {site.navigation.whatsappLabel}
          </Button>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={
            menuOpen
              ? site.navigation.closeMenuLabel
              : site.navigation.menuLabel
          }
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
