import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedLogos from "./components/FeaturedLogos";
import Features from "./components/Features";
import Collections from "./components/Collections";
import Trends from "./components/Trends";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#2B2420] antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeaturedLogos />
        <Features />
        <Collections />
        <Trends />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
