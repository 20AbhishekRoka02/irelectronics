import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Proof() {
  if (!site.proof.testimonials.length && !site.proof.clientLogos.length) {
    return null;
  }

  return (
    <section className="section section-proof">
      <Container>
        <SectionHeading
          centered
          eyebrow={site.proof.eyebrow}
          title={site.proof.title}
        />
        {site.proof.testimonials.length ? (
          <div className="proof-grid">
            {site.proof.testimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.quote}>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.organization}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
        {site.proof.clientLogos.length ? (
          <div aria-label={site.proof.title} className="client-logos">
            {site.proof.clientLogos.map((client) => (
              <span key={client.name}>
                <Image
                  alt={client.alt || site.common.clientLogoLabel}
                  height={48}
                  src={client.image}
                  width={140}
                />
              </span>
            ))}
          </div>
        ) : null}
        <div className="section-action">
          <Button event="whatsapp_click" variant="whatsapp">
            {site.proof.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
