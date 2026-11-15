import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Audiences() {
  return (
    <section className="section section-audiences" id="industries">
      <Container>
        <SectionHeading
          description={site.audiences.description}
          eyebrow={site.audiences.eyebrow}
          title={site.audiences.title}
        />
        <div className="audience-grid">
          {site.audiences.items.map((item) => (
            <div className="audience-item" key={item.label}>
              <span className="audience-icon">
                <Icon name={item.icon} />
              </span>
              <span>{item.label}</span>
              <Icon className="audience-arrow" name="arrow" />
            </div>
          ))}
        </div>
        <div className="section-action">
          <Button event="whatsapp_click" variant="whatsapp">
            {site.audiences.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
