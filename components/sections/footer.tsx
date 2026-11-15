import { site } from "@/content/site";
import { getPhoneUrl } from "@/lib/whatsapp";
import { ActionLink } from "@/components/ui/action-link";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { Brand } from "@/components/ui/brand";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <Brand footer />
            <p>{site.footer.description}</p>
            <div className="footer-actions">
              <ActionLink event="call_click" href={getPhoneUrl()}>
                {site.footer.phoneAction}
              </ActionLink>
              <WhatsAppLink>{site.footer.whatsappAction}</WhatsAppLink>
            </div>
          </div>
          <nav
            aria-label={site.footer.navigationLabel}
            className="footer-links"
          >
            {site.navigation.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="footer-gst">
            <span>{site.footer.gstLabel}</span>
            <strong>{site.business.gst}</strong>
          </p>
        </div>
        <div className="footer-bottom">
          <span>{site.footer.copyright}</span>
          <a href="#top">{site.common.backToTop}</a>
        </div>
      </Container>
    </footer>
  );
}
