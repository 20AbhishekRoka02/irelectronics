import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section className="section section-about">
      <Container className="about-grid">
        <div className="about-visual">
          <Image
            alt={site.about.image.alt}
            className="about-image"
            height={700}
            src={site.about.image.src}
            width={840}
          />
          <span className="about-image-label">{site.about.image.label}</span>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow={site.about.eyebrow}
            title={site.about.title}
          />
          {site.about.paragraphs.map((paragraph) => (
            <p className="about-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="about-details">
            {site.about.details.map((detail) => (
              <div className="about-detail" key={detail.label}>
                <Icon name={detail.icon} />
                <span>
                  <small>{detail.label}</small>
                  <strong>{detail.value}</strong>
                </span>
              </div>
            ))}
          </div>
          <Button event="whatsapp_click" variant="whatsapp">
            {site.about.action}
            <Icon name="arrow" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
