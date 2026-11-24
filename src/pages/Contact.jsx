
import ContactSection from "../components/ContactSection";
import SEO from "../components/SEO";
export default function Contact() {

  return (
    <>
    <SEO title="Contact" path="/contact" description="Contact Kumarasinghe Technical by phone, WhatsApp or email for a free quote." />
      <div className="bg-navy-900 py-14 text-white"><div className="container-x"><h1 className="text-4xl font-extrabold !text-white">Contact us</h1></div></div>
      <ContactSection />

    </>
  );
}
