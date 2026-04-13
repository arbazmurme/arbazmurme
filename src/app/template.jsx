"use client";
import { animatePageIn } from "@/context/animatePageIn";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Template({ children }) {
  const pageRef = useRef(null);

  useEffect(() => {
    animatePageIn();

    if (!pageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const content = pageRef.current;
      const animatedNodes = content.querySelectorAll(
        "section, article, h1, h2, h3, p, form, img, button, a"
      );

      gsap.fromTo(
        content,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        animatedNodes,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "power3.out",
          delay: 0.08,
          clearProps: "all",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div id="banner-1" className="fixed left-0 top-0 z-10 min-h-screen w-1/4 bg-[#ffb400]" />
      <div id="banner-2" className="fixed left-1/4 top-0 z-10 min-h-screen w-1/4 bg-[#ffb400]" />
      <div id="banner-3" className="fixed left-2/4 top-0 z-10 min-h-screen w-1/4 bg-[#ffb400]" />
      <div id="banner-4" className="fixed left-3/4 top-0 z-10 min-h-screen w-1/4 bg-[#ffb400]" />
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
}
