import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import QuoteButton from "../components/QuoteButton";
import { gallery } from "../data/gallery";
import SEO from "../components/SEO";

export default function GalleryPage() {

  return (
    <>
    <SEO title="Gallery" path="/gallery" description="Photo gallery of CCTV, networking, solar and electrical jobs completed by Kumarasinghe Technical." />
      <div className="bg-navy-900 py-14 text-white">
        <div className="container-x">
          <h1 className="text-4xl font-extrabold !text-white">Our work gallery</h1>
          <p className="mt-2 text-slate-300">A look at some of the jobs we have completed. Tap a photo to enlarge it.</p>
        </div>
      </div>

      <section className="section">
        <div className="container-x">
          <Gallery items={gallery} />
        </div>
      </section>

      <section className="bg-slate-50 py-10 text-center">
        <div className="container-x">
          <h2 className="text-2xl font-bold">Want results like these?</h2>
          <div className="mt-5 flex justify-center gap-3">
            <QuoteButton label="Get a Free Quote" />
            <Link to="/contact" className="btn btn-outline">Contact details</Link>
          </div>
        </div>
      </section>
    </>
  );
}