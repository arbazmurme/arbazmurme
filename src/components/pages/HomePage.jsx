"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
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
    <div
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden transition-colors duration-500 lg:flex-row px-4 sm:px-6 lg:px-12 py-16 lg:py-0"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,180,0,0.12),_transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,180,0,0.04),rgba(236,72,153,0.06))]" />
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
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
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-[#ffb400] rounded-full opacity-25 animate-float"
            style={{
              top: `${(i * 13) % 100}%`,
              left: `${(i * 19) % 100}%`,
              animationDuration: `${7 + (i % 6)}s`,
              animationDelay: `${(i % 5) * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* MOBILE HERO IMAGE (Visible on small & tablet screens) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-8 flex items-center justify-center lg:hidden"
      >
        <div className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full border-4 border-[#ffb400] shadow-[0_0_35px_rgba(255,180,0,0.35)]">
          <Image
            alt="Arbaz Murme"
            src="/arbazmurme.webp"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      {/* DESKTOP HERO IMAGE (Visible on large screens) */}
      <div className="hidden h-screen items-center justify-center lg:flex lg:w-1/2">
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 w-[480px] h-[580px] bg-[#ffb400] blur-[140px] opacity-15 rounded-full" />

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <Image
              alt="Arbaz Murme - Full Stack Developer"
              src="/arbazmurme.webp"
              width={460}
              height={560}
              priority
              className="relative z-10 rounded-3xl shadow-2xl border border-white/20 hover:scale-[1.02] transition duration-500 object-cover max-h-[75vh] w-auto"
            />
            {/* Experience Pill */}
            <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl border border-white/15 bg-slate-900/90 backdrop-blur-md px-5 py-3 text-white shadow-xl flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Status</p>
                <p className="text-sm font-bold text-[#ffb400]">Available for Hire</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* HERO TEXT DETAILS */}
      <div className="relative z-10 w-full text-center lg:text-left lg:w-1/2 lg:pl-10 xl:pl-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#ffb400]/40 bg-[#ffb400]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#ffb400] mb-4"
        >
          <span>👋 Welcome to my Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I&apos;m <span className="text-[#ffb400]">Arbaz Murme</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-3 text-lg sm:text-2xl text-[#ffb400] font-semibold"
        >
          <TypingText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          Full Stack &amp; MERN Developer building scalable, high-performance enterprise applications, marketplaces, and seamless digital experiences with Next.js, Node.js, and MongoDB.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
        >
          <Link
            href="/about"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#ffb400] bg-[#ffb400] px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-transparent hover:text-[#ffb400] hover:shadow-[0_0_25px_rgba(255,180,0,0.4)] min-w-[190px]"
          >
            <span className="flex items-center gap-2">
              <span>More About Me</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/work"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#ffb400] bg-transparent px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-[#ffb400] transition-all duration-300 hover:bg-[#ffb400] hover:text-black hover:shadow-[0_0_25px_rgba(255,180,0,0.4)] min-w-[190px]"
          >
            <span className="flex items-center gap-2">
              <span>View My Work</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/arbaz-murme.pdf"
            target="_blank"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm sm:text-base font-semibold text-gray-200 transition-all duration-300 hover:border-gray-500 hover:bg-slate-700 hover:text-white"
          >
            <DocumentArrowDownIcon className="h-5 w-5 text-[#ffb400]" />
            <span>Download CV</span>
          </Link>
        </motion.div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        .animate-float {
          animation: float 10s linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-35px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default HomeDetails;
