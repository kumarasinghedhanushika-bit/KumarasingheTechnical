import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-1 ${pathname === "/" ? "" : "pt-16"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="container-x py-24 text-center"><h1 className="text-3xl font-bold">Page not found</h1><Link to="/" className="btn btn-primary mt-6">Back to home</Link></div>} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}