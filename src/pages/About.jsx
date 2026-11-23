import usePageTitle from "../utils/usePageTitle";
import QuoteButton from "../components/QuoteButton";
import { about, whyChoose } from "../data/content";
export default function About() {
  usePageTitle("About Us");
  return (
    <>
      <div className="bg-navy-900 py-14 text-white"><div className="container-x"><h1 className="text-4xl font-extrabold !text-white">About us</h1></div></div>
      <section className="section"><div className="container-x grid gap-10 md:grid-cols-2">
        <div><h2 className="text-2xl font-bold">Who we are</h2><p className="mt-3">{about.intro}</p>
          <h2 className="mt-8 text-2xl font-bold">Our expertise</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">{about.expertise.map((e) => <li key={e}>{e}</li>)}</ul></div>
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 p-6"><h3 className="font-bold">Mission</h3><p className="mt-2 text-sm">{about.mission}</p></div>
          <div className="rounded-lg border border-slate-200 p-6"><h3 className="font-bold">Vision</h3><p className="mt-2 text-sm">{about.vision}</p></div>
          <div className="rounded-lg bg-brand-soft p-6"><h3 className="font-bold">Why customers choose us</h3>
            <ul className="mt-2 space-y-1 text-sm">{whyChoose.map(([t]) => <li key={t}>{t}</li>)}</ul></div>
          <QuoteButton label="Get a Free Quote" />
        </div>
      </div></section>
    </>
  );
}
