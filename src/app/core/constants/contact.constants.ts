import { SOCIAL_LINKS } from "./social-links.constants";

export const CONTACT = {
  email: "laman.abdullayeva93@gmail.com",
  phone: "+49 160 544 40 17",
} as const;

export const CONTACT_LABELS = {
  sectionLabel: "Contact me",
  backToTop: "↑ Back to top",
} as const;

export const CONTACT_ITEMS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/ /g, "")}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "laman-abdullayeva",
    href: SOCIAL_LINKS.linkedin,
    external: true,
  },
] as const;
