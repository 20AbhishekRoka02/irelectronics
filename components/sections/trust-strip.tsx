import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function TrustStrip() {
  return (
    <section aria-label={site.trustStrip.heading} className="trust-strip">
      <Container>
        <p className="trust-heading">{site.trustStrip.heading}</p>
        <div className="trust-grid">
          {site.trustStrip.items.map((item) => (
            <div className="trust-item" key={item.label}>
              <span className="trust-icon">
                <Icon name={item.icon} />
              </span>
              <span>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </span>
            </div>
          ))}
        </div>
        <div className="strip-action">
          <Button event="whatsapp_click" variant="whatsapp">
            {site.trustStrip.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
