import { site } from "@/content/site";
import { getPhoneUrl } from "@/lib/whatsapp";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Contact() {
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(site.contact.mapQuery)}`;

  return (
    <section className="section section-contact" id="contact">
      <Container>
        <SectionHeading
          description={site.contact.description}
          eyebrow={site.contact.eyebrow}
          title={site.contact.title}
        />
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-icon">
              <Icon name="pin" />
            </span>
            <h3>{site.contact.addressLabel}</h3>
            <p>{site.business.address}</p>
            <p>{site.business.city}</p>
            <a
              className="contact-map-link"
              href={mapUrl}
              rel="noreferrer"
              target="_blank"
            >
              {site.contact.mapLabel}
              <Icon name="arrow" />
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-icon">
              <Icon name="clock" />
            </span>
            <h3>{site.contact.hoursLabel}</h3>
            <p>{site.business.hours}</p>
          </div>
          <div className="contact-card contact-card-action">
            <span className="contact-icon">
              <Icon name="phone" />
            </span>
            <h3>{site.contact.phoneLabel}</h3>
            <ActionLink event="call_click" href={getPhoneUrl()}>
              {site.business.phone}
            </ActionLink>
          </div>
          <div className="contact-card contact-card-action">
            <span className="contact-icon">
              <Icon name="mail" />
            </span>
            <h3>{site.contact.emailLabel}</h3>
            <ActionLink
              event="email_click"
              href={
                site.business.email.includes("@")
                  ? `mailto:${site.business.email}`
                  : "#contact"
              }
            >
              {site.business.email}
            </ActionLink>
          </div>
          <div className="contact-card contact-card-action">
            <span className="contact-icon contact-icon-whatsapp">
              <Icon name="chat" />
            </span>
            <h3>{site.contact.whatsappLabel}</h3>
            <WhatsAppLink>{site.business.whatsapp}</WhatsAppLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
