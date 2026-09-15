"use client";
import { useRef, useEffect } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptop,
  FaBook,
} from "react-icons/fa";

const ExperienceEducation = () => {
  const cardRefs = useRef([]);

  // 3D tilt effect on mousemove
  useEffect(() => {
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    cardRefs.current.forEach((card) => {
      if (card) {
        card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
        card.addEventListener("mouseleave", () => handleMouseLeave(card));
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", (e) =>
            handleMouseMove(e, card),
          );
          card.removeEventListener("mouseleave", () => handleMouseLeave(card));
        }
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ffb400]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
          My <span className="text-[#ffb400]">Journey</span>
        </h1>
        <p className="mt-3 text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Professional experience, technical milestones, and educational background.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-pink-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Animated timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#ffb400] via-[#ffb400]/40 to-[#ffb400] hidden lg:block">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-32 bg-[#ffb400] rounded-full blur-md animate-moveLight" />
        </div>

        {/* Timeline Sections Container */}
        <div className="space-y-12 lg:space-y-20">
          {/* Dexterous Technology */}
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
            <div className="w-full lg:w-1/2 lg:pl-8">
              <div
                ref={(el) => (cardRefs.current[0] = el)}
                className="relative backdrop-blur-md bg-white/70 dark:bg-[#1a1a1a]/90 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:border-[#ffb400]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-[#ffb400]">
                    Full Stack Developer
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ffb400]/15 text-[#ffb400]">
                    November 2024 – Present
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-gray-400 mb-4">
                  Dexterous Technology
                </p>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Developing and maintaining{" "}
                      <span className="font-semibold text-[#ffb400]">
                        enterprise-level multi-vendor marketplace
                      </span>{" "}
                      (EWShopping) handling 3000+ sellers and 80k+ traffic
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Implemented{" "}
                      <span className="font-semibold text-[#ffb400]">
                        AI-powered search optimization
                      </span>{" "}
                      and advanced filtering system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Designed{" "}
                      <span className="font-semibold text-[#ffb400]">
                        dynamic SEO rendering
                      </span>{" "}
                      for product pages using Next.js SSR
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Integrated{" "}
                      <span className="font-semibold text-[#ffb400]">
                        Firebase OTP authentication &amp; role-based access control (RBAC)
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Optimized system performance using{" "}
                      <span className="font-semibold text-[#ffb400]">
                        Redis caching, Nginx load balancing, and CI/CD automation
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-slate-900 border-2 border-[#ffb400] shadow-[0_0_20px_rgba(255,180,0,0.3)] group-hover:scale-110 transition-all duration-300 z-10">
                <FaBriefcase className="text-[#ffb400] text-2xl" />
              </div>
            </div>
          </div>

          {/* Lejhro Technology */}
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-slate-900 border-2 border-[#ffb400] shadow-[0_0_20px_rgba(255,180,0,0.3)] group-hover:scale-110 transition-all duration-300 z-10">
                <FaCode className="text-[#ffb400] text-2xl" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8">
              <div
                ref={(el) => (cardRefs.current[1] = el)}
                className="relative backdrop-blur-md bg-white/70 dark:bg-[#1a1a1a]/90 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:border-[#ffb400]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-[#ffb400]">
                    React JS Developer Intern
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ffb400]/15 text-[#ffb400]">
                    July 2024 – October 2024
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-gray-400 mb-4">
                  Lejhro Technology, Bhubaneswar, Odisha
                </p>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Developed dynamic, user-centric web applications using{" "}
                      <span className="font-semibold text-[#ffb400]">React.js and Next.js</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Streamlined team collaboration through{" "}
                      <span className="font-semibold text-[#ffb400]">Git version control</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Implemented user analytics tracking via{" "}
                      <span className="font-semibold text-[#ffb400]">Google Analytics</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>
                      Enhanced website visibility by optimizing metadata and SEO strategies
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* NareshIT Full Stack Course */}
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
            <div className="w-full lg:w-1/2 lg:pr-8 lg:text-right">
              <div
                ref={(el) => (cardRefs.current[2] = el)}
                className="relative backdrop-blur-md bg-white/70 dark:bg-[#1a1a1a]/90 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:border-[#ffb400]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between lg:justify-end flex-wrap gap-2 mb-1">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ffb400]/15 text-[#ffb400] lg:order-1">
                    February 2023 – July 2023
                  </span>
                  <h3 className="text-2xl font-bold text-[#ffb400] lg:order-2">
                    Python &amp; Full Stack Course
                  </h3>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-gray-400 mb-4">
                  NareshIT, Hyderabad
                </p>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-gray-300">
                  <li className="flex lg:justify-end items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm lg:order-2 lg:mr-0 lg:ml-2.5">✦</span>
                    <span>Learned Python programming, Django framework, and REST APIs</span>
                  </li>
                  <li className="flex lg:justify-end items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm lg:order-2 lg:mr-0 lg:ml-2.5">✦</span>
                    <span>Mastered UI design principles and developed React applications</span>
                  </li>
                  <li className="flex lg:justify-end items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm lg:order-2 lg:mr-0 lg:ml-2.5">✦</span>
                    <span>Built production-ready full-stack projects with hands-on practice</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-slate-900 border-2 border-[#ffb400] shadow-[0_0_20px_rgba(255,180,0,0.3)] group-hover:scale-110 transition-all duration-300 z-10">
                <FaBook className="text-[#ffb400] text-2xl" />
              </div>
            </div>
          </div>

          {/* Freelance Tech Support */}
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-slate-900 border-2 border-[#ffb400] shadow-[0_0_20px_rgba(255,180,0,0.3)] group-hover:scale-110 transition-all duration-300 z-10">
                <FaLaptop className="text-[#ffb400] text-2xl" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8">
              <div
                ref={(el) => (cardRefs.current[3] = el)}
                className="relative backdrop-blur-md bg-white/70 dark:bg-[#1a1a1a]/90 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:border-[#ffb400]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-[#ffb400]">
                    Hardware &amp; Technical Support
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ffb400]/15 text-[#ffb400]">
                    October 2020 – November 2022
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-gray-400 mb-4">
                  Self-Employed, Solapur, Maharashtra
                </p>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>Delivered hardware diagnostic and technical troubleshooting for PCs and laptops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffb400] mr-2.5 mt-1 text-sm">✦</span>
                    <span>Managed system upgrades, software configurations, and client support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education - BCA */}
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
            <div className="w-full lg:w-1/2 lg:pr-8 lg:text-right">
              <div
                ref={(el) => (cardRefs.current[4] = el)}
                className="relative backdrop-blur-md bg-white/70 dark:bg-[#1a1a1a]/90 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:border-[#ffb400]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between lg:justify-end flex-wrap gap-2 mb-1">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ffb400]/15 text-[#ffb400] lg:order-1">
                    February 2018 - October 2020
                  </span>
                  <h3 className="text-2xl font-bold text-[#ffb400] lg:order-2">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-gray-400 mb-2">
                  DAV Velankar College of Commerce, Solapur University
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Score: <span className="text-[#ffb400]">73.03%</span>
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-slate-900 border-2 border-[#ffb400] shadow-[0_0_20px_rgba(255,180,0,0.3)] group-hover:scale-110 transition-all duration-300 z-10">
                <FaGraduationCap className="text-[#ffb400] text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveLight {
          0% {
            top: -10%;
          }
          100% {
            top: 100%;
          }
        }
        .animate-moveLight {
          animation: moveLight 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExperienceEducation;
