import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "../config/site";
import { services } from "../data/services";
import Logo from "./Logo";
import QuoteButton from "./QuoteButton";

const tel = `tel:${SITE.phoneDisplay.replace(/\s/g, "")}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  const solid = pathname !== "/" || scrolled || open;
  const cls = ({ isActive }) =>
    `rounded-md px-3 py-1.5 text-sm font-medium transition hover:text-white ${isActive ? "bg-white/10 text-white" : "text-slate-300"}`;
  const close = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${solid ? "bg-navy-900/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" onClick={close} aria-label={SITE.name}><Logo /></Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" end className={cls}>Home</NavLink>
          <div className="group relative">
            <NavLink to="/services" className={cls}>
              <span className="flex items-center gap-1">Services <ChevronDown size={14} /></span>
            </NavLink>
            <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-lg bg-navy-900 p-2 shadow-xl ring-1 ring-white/10">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services#${s.id}`} className="block rounded px-3 py-2 text-sm text-slate-200 hover:bg-white/10">{s.waName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NavLink to="/projects" className={cls}>Projects</NavLink>
          <NavLink to="/gallery" className={cls}>Gallery</NavLink>
          <NavLink to="/about" className={cls}>About</NavLink>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={tel} className="flex items-center gap-2 text-sm text-slate-200 hover:text-white"><Phone size={16} /> Call Us</a>
          <QuoteButton className="btn btn-primary !py-2" />
        </div>

        <button className="text-white md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="container-x flex max-h-[80vh] flex-col gap-1 overflow-y-auto pb-5 md:hidden">
          <NavLink to="/" end className={cls} onClick={close}>Home</NavLink>
          <NavLink to="/services" className={cls} onClick={close}>Services</NavLink>
          {services.map((s) => (
            <Link key={s.id} to={`/services#${s.id}`} onClick={close} className="px-6 py-1.5 text-sm text-slate-400 hover:text-white">{s.waName}</Link>
          ))}
          <NavLink to="/projects" className={cls} onClick={close}>Projects</NavLink>
          <NavLink to="/gallery" className={cls} onClick={close}>Gallery</NavLink>
          <NavLink to="/about" className={cls} onClick={close}>About</NavLink>
          <a href={tel} className="btn btn-light mt-3"><Phone size={16} /> Call Us</a>
          <QuoteButton className="btn btn-primary mt-2" />
        </nav>
      )}
    </header>
  );
}