import { MessageCircle } from "lucide-react";
import { waLink, serviceMessage, generalMessage } from "../utils/whatsapp";
export default function QuoteButton({ service, label = "Get a Quote", className = "btn btn-primary" }) {
  const href = waLink(service ? serviceMessage(service) : generalMessage);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <MessageCircle size={18} /> {label}
    </a>
  );
}
