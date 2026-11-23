import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "../config/site";
import { waLink, generalMessage } from "../utils/whatsapp";
const Row = ({ Icon, title, children }) => (
  <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5">
    <Icon className="shrink-0 text-brand" /><div><p className="font-semibold text-navy-900">{title}</p><div className="text-sm">{children}</div></div>
  </div>
);
export default function ContactSection() {
  return (
    <section className="section">
      <div className="container-x grid gap-5 md:grid-cols-2">
        <Row Icon={Phone} title="Phone"><a href={`tel:${SITE.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-brand">{SITE.phoneDisplay}</a></Row>
        <Row Icon={MessageCircle} title="WhatsApp"><a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Chat with us on WhatsApp</a></Row>
        <Row Icon={Mail} title="Email"><a href={`mailto:${SITE.email}`} className="hover:text-brand">{SITE.email}</a></Row>
        <Row Icon={MapPin} title="Location">{SITE.address}</Row>
        <div className="md:col-span-2"><Row Icon={Clock} title="Business hours">
          <ul>{SITE.hours.map(([d, h]) => <li key={d}>{d}: {h}</li>)}</ul></Row></div>
      </div>
    </section>
  );
}
