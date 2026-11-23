import { Quote } from "lucide-react";
import { testimonials } from "../data/content";
export default function TestimonialsSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <h2 className="text-3xl font-bold">What customers say</h2>
        <p className="mt-1 text-xs text-slate-500">Demo content: replace with real customer reviews.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-lg border border-slate-200 bg-white p-6">
              <Quote className="text-brand" size={22} />
              <blockquote className="mt-3 text-sm">{t.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy-900">{t.name}<span className="font-normal text-slate-500">, {t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
