import { services } from "../data/services";
import { ICONS } from "../utils/icons";
import SmartImage from "./SmartImage";
export default function ProjectCard({ project }) {
  const s = services.find((x) => x.id === project.category);
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-md">
      <SmartImage src={project.image} alt={project.title} Icon={ICONS[s?.icon]} className="h-48 w-full" />
      <div className="p-5">
        <span className="rounded bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand">{s?.waName}</span>
        <h3 className="mt-3 font-bold">{project.title}</h3>
        <p className="mt-1 text-sm">{project.description}</p>
      </div>
    </article>
  );
}
