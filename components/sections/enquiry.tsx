import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { EnquiryForm } from "@/components/sections/enquiry-form";

export function Enquiry() {
  return (
    <section className="section section-enquiry" id="enquiry">
      <Container>
        <div className="enquiry-panel">
          <div className="enquiry-copy">
            <p className="eyebrow">{site.enquiry.eyebrow}</p>
            <h2>{site.enquiry.title}</h2>
            <p className="section-description">{site.enquiry.description}</p>
            <div className="enquiry-points">
              <p>
                <Icon name="check" />
                {site.hero.highlight}
              </p>
              <p>
                <Icon name="check" />
                {site.benefits.items[4].title}
              </p>
            </div>
            <Button event="whatsapp_click" variant="whatsapp">
              <Icon name="chat" />
              {site.enquiry.whatsappAction}
            </Button>
          </div>
          <div className="enquiry-form-panel">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
