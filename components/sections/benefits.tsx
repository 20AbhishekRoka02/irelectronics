import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Benefits() {
  const benefits = site.benefits.items.filter((item) => item.enabled);

  return (
    <section className="section section-benefits" id="why-us">
      <Container>
        <div className="benefits-layout">
          <SectionHeading
            description={site.benefits.description}
            eyebrow={site.benefits.eyebrow}
            title={site.benefits.title}
          />
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="benefit-icon">
                  <Icon name={benefit.icon} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="section-action">
          <Button event="whatsapp_click" variant="whatsapp">
            {site.benefits.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
