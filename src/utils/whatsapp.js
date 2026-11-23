import { SITE } from "../config/site";

const isMobile = () =>
  typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Phone: opens the WhatsApp app directly.
// Computer: opens WhatsApp Web chat directly (skips the wa.me page).
export const waLink = (message) => {
  const text = encodeURIComponent(message);
  return isMobile()
    ? `https://wa.me/${SITE.whatsappNumber}?text=${text}`
    : `https://web.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${text}`;
};

export const serviceMessage = (service) =>
  `Hello, I am interested in your ${service} Service. I would like to get more information and a quotation. Thank you.`;

export const generalMessage =
  "Hello, I would like to get more information and a free quotation for your services. Thank you.";