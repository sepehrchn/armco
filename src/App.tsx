import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import Hero from "./components/Hero";

// Lazy load below-the-fold components for better performance
const FeaturedLogos = React.lazy(() => import("./components/FeaturedLogos"));
const Features = React.lazy(() => import("./components/Features"));
const Collections = React.lazy(() => import("./components/Collections"));
const Trends = React.lazy(() => import("./components/Trends"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Pricing = React.lazy(() => import("./components/Pricing"));
const CTA = React.lazy(() => import("./components/CTA"));
const Footer = React.lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#2B2420] antialiased">
      <Navbar />
      <main>
        {/* Above-the-fold content loads synchronously */}
        <VideoHero />
        <Hero />
        
        {/* Below-the-fold content loads lazily */}
        <Suspense fallback={<div className="h-24 bg-[#F7F3EC]"></div>}>
          <FeaturedLogos />
          <Features />
          <Collections />
          <Trends />
          <Testimonials />
          <Pricing />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
