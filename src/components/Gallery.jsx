    import { useEffect, useState } from "react";
    import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";
    import { services } from "../data/services";
    import SmartImage from "./SmartImage";
    import Reveal from "./Reveal";

    export default function Gallery({ items }) {
    const [cat, setCat] = useState("all");
    const [active, setActive] = useState(null); // index of opened photo
    const list = cat === "all" ? items : items.filter((i) => i.category === cat);
    const tabs = [{ id: "all", waName: "All" }, ...services];

    useEffect(() => {
        if (active === null) return;
        const onKey = (e) => {
        if (e.key === "Escape") setActive(null);
        if (e.key === "ArrowRight") setActive((i) => (i + 1) % list.length);
        if (e.key === "ArrowLeft") setActive((i) => (i - 1 + list.length) % list.length);
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
    }, [active, list.length]);

    const current = active !== null ? list[active] : null;

    return (
        <>
        <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
            <button key={t.id} onClick={() => setCat(t.id)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${cat === t.id ? "border-brand bg-brand text-white" : "border-slate-300 hover:border-brand"}`}>
                {t.waName}
            </button>
            ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {list.map((item, i) => (
            <Reveal key={item.src} delay={(i % 4) * 80}>
                <button onClick={() => setActive(i)} className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-navy-800" aria-label={`View ${item.title}`}>
                <SmartImage src={item.src} alt={item.title} Icon={Camera} className="h-full w-full transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 flex flex-col items-start justify-end bg-navy-900/0 p-3 text-left text-sm font-medium text-white opacity-0 transition group-hover:bg-navy-900/60 group-hover:opacity-100">
                    <ZoomIn size={18} className="mb-1" />{item.title}
                </span>
                </button>
            </Reveal>
            ))}
        </div>

        {current && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setActive(null)} role="dialog" aria-modal="true">
            <button className="absolute right-4 top-4 text-white" aria-label="Close" onClick={() => setActive(null)}><X size={28} /></button>
            <button className="absolute left-3 text-white" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setActive((i) => (i - 1 + list.length) % list.length); }}><ChevronLeft size={36} /></button>
            <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <img src={current.src} alt={current.title} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
                <figcaption className="mt-3 text-center text-sm text-slate-200">{current.title}</figcaption>
            </figure>
            <button className="absolute right-3 text-white" aria-label="Next" onClick={(e) => { e.stopPropagation(); setActive((i) => (i + 1) % list.length); }}><ChevronRight size={36} /></button>
            </div>
        )}
        </>
    );
    }