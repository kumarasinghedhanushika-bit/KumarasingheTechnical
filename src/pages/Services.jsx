import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceSection from "../components/ServiceSection";
import { services } from "../data/services";
import SEO from "../components/SEO";
export default function Services() {

  const { hash } = useLocation();
  useEffect(() => { if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 50); }, [hash]);
  return (
    <>
    <SEO title="Services" path="/services" description="CCTV installation, networking & server installation, computer repair, off-grid solar systems and electrical installation and maintenance." />
      <div className="bg-navy-900 py-14 text-white"><div className="container-x"><h1 className="text-4xl font-extrabold !text-white">Our services</h1><p className="mt-2 text-slate-300">Five services, one dependable team.</p></div></div>
      {services.map((s, i) => <ServiceSection key={s.id} service={s} reverse={i % 2 === 1} />)}
    </>
  );
}
