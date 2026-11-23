import { Link } from "react-router-dom";
import { Star, ShieldCheck, Award, Clock, ArrowRight, Phone } from "lucide-react";
import { SITE } from "../config/site";
import { waLink, generalMessage } from "../utils/whatsapp";
import { heroBadges, heroStats } from "../data/content";

const BADGE_ICONS = { star: Star, shield: ShieldCheck, award: Award, clock: Clock };

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-900 text-white">
      {/* Background image: file is at public/images/hero.png */}
      <img
        src="/images/hero.jpg"
        alt=""
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay: change 75 to 60 (lighter) or 85 (darker) */}
      <div className="absolute inset-0 bg-navy-900/75" />

      <div className="container-x relative pb-12 pt-28">
        <ul className="flex flex-wrap gap-3">
          {heroBadges.map(([icon, label]) => {
            const Icon = BADGE_ICONS[icon];
            return (
              <li key={label} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs backdrop-blur">
                <Icon size={14} />{label}
              </li>
            );
          })}
        </ul>

        <h1 className="mt-8 max-w-3xl text-4xl font-extrabold leading-[1.1] !text-white sm:text-5xl lg:text-6xl">
          Powering Homes &amp; <span className="text-brand">Businesses</span> with Reliable Tech &amp; Electrical Solutions
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-300">
          CCTV, networking, computer repair, off-grid solar and electrical work. Fast, professional and dependable.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-6 !py-3.5">
            Get a Free Quote <ArrowRight size={18} />
          </a>
          <Link to="/services" className="btn btn-light !px-6 !py-3.5">Explore Our Services</Link>
          <a href={`tel:${SITE.phoneDisplay.replace(/\s/g, "")}`} className="btn btn-light !px-6 !py-3.5">
            <Phone size={18} /> Call Now
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {heroStats.map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-3xl font-bold">{n}</dt>
              <dd className="mt-1 text-xs text-slate-400">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}