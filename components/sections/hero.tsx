import Image from "next/image";
import { site } from "@/content/site";
import { getPhoneUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ActionLink } from "@/components/ui/action-link";

export function Hero() {
  return (
    <section className="hero-section">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" />
            {site.hero.eyebrow}
          </p>
          <h1>{site.hero.title}</h1>
          <p className="hero-description">{site.hero.description}</p>
          <div className="hero-actions">
            <Button event="whatsapp_click" variant="whatsapp">
              <Icon name="chat" />
              {site.hero.primaryAction}
            </Button>
            <ActionLink
              className="button button-outline"
              event="call_click"
              href={getPhoneUrl()}
            >
              <Icon name="phone" />
              {site.hero.secondaryAction} {site.business.phone}
            </ActionLink>
          </div>
          <p className="hero-highlight">
            <Icon name="shield" />
            {site.hero.highlight}
          </p>
        </div>
        <div className="hero-visual">
          <Image
            alt={site.hero.image.alt}
            className="hero-image"
            height={720}
            priority
            src={site.hero.image.src}
            width={960}
          />
          <div className="hero-image-label">
            <span className="hero-image-status" />
            <span>{site.hero.image.label}</span>
          </div>
          <div className="hero-image-caption">
            <Icon name="box" />
            <span>{site.hero.image.caption}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
