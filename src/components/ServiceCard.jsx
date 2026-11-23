import { Link } from "react-router-dom";
import { ICONS } from "../utils/icons";
import QuoteButton from "./QuoteButton";

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon];
  return (
    <div className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-xl">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-soft text-brand transition duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
        <Icon size={22} />
      </span>
      <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm">{service.short}</p>
      <div className="mt-5 flex items-center justify-between gap-2">
        <Link to={`/services#${service.id}`} className="text-sm font-semibold text-brand hover:underline">View details</Link>
        <QuoteButton service={service.waName} label="Get a Quote" className="btn btn-wa !px-3 !py-2" />
      </div>
    </div>
  );
}