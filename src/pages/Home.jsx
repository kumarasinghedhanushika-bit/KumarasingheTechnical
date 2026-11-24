import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import usePageTitle from "../utils/usePageTitle";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialsSection from "../components/TestimonialsSection";
import QuoteButton from "../components/QuoteButton";
import Reveal from "../components/Reveal";
import Gallery from "../components/Gallery";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { gallery } from "../data/gallery";
import { whyChoose, process } from "../data/content";
import SEO from "../components/SEO";
import { SITE } from "../config/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/logo.png`,
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  address: { "@type": "PostalAddress", streetAddress: SITE.address, addressCountry: "LK" },
  areaServed: "Sri Lanka",
};

export default function Home() {
  usePageTitle();
  return (
    <>
    <SEO path="/" schema={schema} />
      <HeroSection />

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Our services</h2>
          <p className="mt-2 max-w-xl">Everything your property needs to stay secure, connected and powered.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 120} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Why choose us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(([t, d]) => (
              <div key={t}><Check className="text-brand" /><h3 className="mt-2 font-bold">{t}</h3><p className="mt-1 text-sm">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">Featured projects</h2>
            <Link to="/projects" className="text-sm font-semibold text-brand hover:underline">All projects</Link>
          </div>
          <p className="mt-1 text-xs text-slate-500">Demo content: replace with your real projects.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Our work gallery</h2>
          <p className="mt-2 max-w-xl">A look at some of the jobs we have completed. Tap a photo to enlarge it.</p>
          <div className="mt-8"><Gallery items={gallery} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl font-bold">How we work</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {process.map(([t, d], i) => (
              <li key={t} className="rounded-lg border border-slate-200 bg-white p-5"><span className="text-sm font-bold text-brand">Step {i + 1}</span><h3 className="mt-1 font-bold">{t}</h3><p className="mt-1 text-sm">{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <TestimonialsSection />

      {/* Contact CTA: slimmer */}
      <section className="bg-navy-900 py-10 text-center text-white">
        <div className="container-x">
          <h2 className="text-2xl font-bold !text-white">Ready to get started?</h2>
          <div className="mt-5 flex justify-center gap-3">
            <QuoteButton label="Get a Free Quote" />
            <Link to="/contact" className="btn btn-light">Contact details</Link>
          </div>
        </div>
      </section>
    </>
  );
}