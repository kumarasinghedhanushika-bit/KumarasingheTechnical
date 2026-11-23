import { MessageCircle } from "lucide-react";
import { waLink, generalMessage } from "../utils/whatsapp";
export default function WhatsAppButton() {
  return (
    <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-700">
      <MessageCircle size={28} />
    </a>
  );
}
