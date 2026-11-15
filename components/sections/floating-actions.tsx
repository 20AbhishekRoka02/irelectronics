import { site } from "@/content/site";
import { getPhoneUrl } from "@/lib/whatsapp";
import { ActionLink } from "@/components/ui/action-link";
import { Icon } from "@/components/ui/icon";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function FloatingActions() {
  return (
    <>
      <WhatsAppLink
        aria-label={site.actions.floatingWhatsappLabel}
        className="floating-whatsapp"
      >
        <Icon name="chat" />
        <span>{site.actions.whatsappAction}</span>
      </WhatsAppLink>
      <div className="mobile-action-bar">
        <ActionLink event="call_click" href={getPhoneUrl()}>
          <Icon name="phone" />
          {site.actions.bottomBarCall}
        </ActionLink>
        <WhatsAppLink>
          <Icon name="chat" />
          {site.actions.bottomBarWhatsapp}
        </WhatsAppLink>
      </div>
    </>
  );
}
