import { site } from "@/content/site";

export function getWhatsAppUrl(customMessage?: string): string {
  const number = site.business.whatsapp.replace(/\D/g, "");
  if (!/^\d{8,15}$/.test(number)) return "#contact";

  const message = customMessage ?? site.actions.whatsappDefaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getPhoneUrl(phone = site.business.phone): string {
  const number = phone.replace(/[^\d+]/g, "");
  if (number.replace(/\D/g, "").length < 8) return "#contact";
  return `tel:${number}`;
}
