import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Steps() {
  return (
    <section className="section section-steps">
      <Container>
        <SectionHeading
          centered
          description={site.steps.description}
          eyebrow={site.steps.eyebrow}
          title={site.steps.title}
        />
        <div className="steps-grid">
          {site.steps.items.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-top">
                <span className="step-icon">
                  <Icon name={step.icon} />
                </span>
                <span className="step-number">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Button event="whatsapp_click" variant="whatsapp">
            {site.steps.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
