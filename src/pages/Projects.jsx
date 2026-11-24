import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { services } from "../data/services";
import SEO from "../components/SEO";
export default function Projects() {

  const [cat, setCat] = useState("all");
  const list = cat === "all" ? projects : projects.filter((p) => p.category === cat);
  const tabs = [{ id: "all", waName: "All" }, ...services];
  return (
    <>
    <SEO title="Projects" path="/projects" description="Projects completed by Kumarasinghe Technical: CCTV, networking, solar and electrical work." />
      <div className="bg-navy-900 py-14 text-white"><div className="container-x"><h1 className="text-4xl font-extrabold !text-white">Our projects</h1><p className="mt-2 text-slate-300">Sample projects shown as demo content.</p></div></div>
      <section className="section"><div className="container-x">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setCat(t.id)} className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${cat === t.id ? "border-brand bg-brand text-white" : "border-slate-300 hover:border-brand"}`}>{t.waName}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
      </div></section>
    </>
  );
}
