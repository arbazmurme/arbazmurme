"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import TypingText from "../../context/TypingText";

const HomeDetails = () => {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !glowRef.current || !gridRef.current) {
      return undefined;
    }

    const section = sectionRef.current;
    const glow = glowRef.current;
    const grid = gridRef.current;
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      return undefined;
    }

    let frame = 0;
    const pointer = { x: 0, y: 0 };
    const current = { x: 50, y: 50 };

    const updateGlow = () => {
      current.x += (pointer.x - current.x) * 0.08;
      current.y += (pointer.y - current.y) * 0.08;

      glow.style.transform = `translate3d(${current.x}%, ${current.y}%, 0) translate(-50%, -50%)`;
      grid.style.transform = `translate3d(${(current.x - 50) * -0.12}px, ${(current.y - 50) * -0.12}px, 0)`;

      frame = window.requestAnimationFrame(updateGlow);
    };

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 100;
      pointer.y = ((event.clientY - rect.top) / rect.height) * 100;
    };

    const handleMouseLeave = () => {
      pointer.x = 50;
      pointer.y = 50;
    };

    pointer.x = 50;
    pointer.y = 50;
    frame = window.requestAnimationFrame(updateGlow);

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative flex min-h-screen flex-col items-center overflow-hidden transition-colors duration-500 lg:flex-row"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,180,0,0.12),_transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,180,0,0.04),rgba(236,72,153,0.06))]" />
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div
          ref={glowRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(255,180,0,0.24),_rgba(236,72,153,0.14),_transparent_68%)] blur-3xl"
        />
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#ffb400]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-pink-500/10 blur-[140px]" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 bg-[#ffb400] rounded-full opacity-20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* LEFT IMAGE */}
        <div className="hidden h-screen items-center justify-center lg:fixed lg:flex lg:w-1/2">
          <div className="relative flex items-center justify-center">
            <div className="absolute -z-10 w-[520px] h-[620px] bg-[#ffb400] blur-[140px] opacity-15 rounded-full"></div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                alt="hero"
                src="/arbazmurme.webp"
                width={480}
                height={600}
                priority
                className="relative z-10 rounded-3xl shadow-2xl border border-white/20 hover:scale-105 transition duration-500"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="relative z-10 w-full px-6 py-16 lg:ml-auto lg:w-1/2 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-6xl font-extrabold uppercase leading-tight"
          >
            Hi, I'm <span className="text-[#ffb400]">Arbaz Murme</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 text-xl text-[#ffb400] font-semibold"
          >
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-lg leading-relaxed max-w-xl"
          >
            MERN Stack Developer building modern, scalable, and high-performance
            web applications. Passionate about crafting smooth UI & powerful
            backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4"
          >
            {[
              { href: "/about", label: "More About Me" },
              { href: "/blog", label: "Blog" },
            ].map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className="inline-flex items-center group relative overflow-hidden 
                           rounded-full border border-[#ffb400] px-8 py-4 min-w-[200px] justify-center"
              >
                <span
                  className="absolute inset-0 bg-[#ffb400] 
                             transform translate-x-full 
                             group-hover:translate-x-0 
                             transition duration-300"
                ></span>

                <span className="relative flex items-center space-x-3 font-semibold uppercase group-hover:text-black transition">
                  <span>{btn.label}</span>
                  <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition" />
                </span>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          .animate-float {
            animation: float 10s linear infinite;
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-40px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default HomeDetails;
