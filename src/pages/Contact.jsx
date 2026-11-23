import usePageTitle from "../utils/usePageTitle";
import ContactSection from "../components/ContactSection";
export default function Contact() {
  usePageTitle("Contact");
  return (
    <>
      <div className="bg-navy-900 py-14 text-white"><div className="container-x"><h1 className="text-4xl font-extrabold !text-white">Contact us</h1></div></div>
      <ContactSection />

    </>
  );
}
