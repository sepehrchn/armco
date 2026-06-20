import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoSrc from "../public/video_hero.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoWrapper = videoWrapperRef.current;
    const overlay = overlayRef.current;

    if (!container || !videoWrapper || !overlay) return;

    // Clear any existing scroll triggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top", // Animates exactly as the user scrolls the hero out of view
        scrub: 1, // Smooth interpolation for the transition
      },
    });

    // Premium transition: Parallax, scale down, and border-radius
    tl.fromTo(
      videoWrapper,
      { 
        y: "0%", 
        scale: 1, 
        borderRadius: "0px",
      },
      { 
        y: "25%", // Parallax effect makes the video feel deep and heavy
        scale: 0.9, // Graceful scale down
        borderRadius: "32px",
        ease: "none",
      },
      0
    );

    // Fade overlay to solid cream, perfectly blending into the next section
    tl.fromTo(
      overlay,
      { opacity: 0 },
      { 
        opacity: 1,
        ease: "power2.inOut",
      },
      0
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] bg-[#F7F3EC] overflow-hidden">
      <div 
        ref={videoWrapperRef} 
        className="relative w-full h-full overflow-hidden transform-gpu will-change-transform shadow-sm"
        style={{ originX: "50%", originY: "50%" }}
      >
        {/* Continuous Autoplay Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Solid cream overlay that fades in during scroll to transition cleanly */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none bg-[#F7F3EC]"
        />
      </div>
    </div>
  );
}
