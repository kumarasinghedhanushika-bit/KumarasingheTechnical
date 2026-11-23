import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "../config/site";
import { services } from "../data/services";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-sm">{SITE.tagline}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => <li key={s.id}><Link to={`/services#${s.id}`} className="hover:text-white">{s.waName}</Link></li>)}
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p className="flex gap-2"><Phone size={16} /> {SITE.phoneDisplay}</p>
          <p className="flex gap-2"><Mail size={16} /> {SITE.email}</p>
          <p className="flex gap-2"><MapPin size={16} className="shrink-0" /> {SITE.address}</p>
          
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
    </footer>
  );
}
