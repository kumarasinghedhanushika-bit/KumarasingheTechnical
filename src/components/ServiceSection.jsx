import { Check } from "lucide-react";
import { ICONS } from "../utils/icons";
import SmartImage from "./SmartImage";
import QuoteButton from "./QuoteButton";
export default function ServiceSection({ service, reverse }) {
  return (
    <section id={service.id} className="section border-b border-slate-100">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <SmartImage src={service.image} alt={service.title} Icon={ICONS[service.icon]} className={`h-72 w-full rounded-lg md:h-96 ${reverse ? "md:order-2" : ""}`} />
        <div>
          <h2 className="text-3xl font-bold">{service.title}</h2>
          <p className="mt-3">{service.description}</p>
          <h3 className="mt-6 text-base font-bold">Features and benefits</h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            {service.features.map((f) => <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{f}</li>)}
          </ul>
          <h3 className="mt-6 text-base font-bold">What to expect</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{service.expect.map((e) => <li key={e}>{e}</li>)}</ul>
          <div className="mt-7"><QuoteButton service={service.waName} /></div>
        </div>
      </div>
    </section>
  );
}
