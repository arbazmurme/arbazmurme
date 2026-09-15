"use client";

import { ArrowRightIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import {
  IoLocation,
  IoLanguageSharp,
  IoMailUnread,
  IoLogoLinkedin,
} from "react-icons/io5";
import { FaCode, FaSquareGithub, FaMobileScreenButton, FaLaptopCode } from "react-icons/fa6";
import { GiIndianPalace } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import SkillsOne from "../skills_2";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <div className="mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight uppercase">
          About <span className="text-[#ffb400]">Me</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-pink-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Info Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Left Profile/About Illustration */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ffb400] to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl bg-slate-900/50">
              <Image
                height={500}
                width={450}
                src="/about.png"
                alt="Arbaz Murme About"
                className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Info Details */}
        <div className="w-full lg:w-7/12">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase mb-6 tracking-wide text-slate-900 dark:text-white">
            Personal <span className="text-[#ffb400]">Information</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-8">
            I am a Full Stack Developer with hands-on experience in building enterprise-level multi-vendor marketplaces, booking platforms, and high-performance web applications using React.js, Next.js, Node.js, Express, MongoDB, and Redis.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <FaCode className="text-[#ffb400] text-lg flex-shrink-0" />
              <span><strong className="text-slate-900 dark:text-white">Name:</strong> Arbaz Murme</span>
            </div>

            <div className="flex items-center gap-3">
              <IoLocation className="text-[#ffb400] text-lg flex-shrink-0" />
              <span><strong className="text-slate-900 dark:text-white">Location:</strong> Solapur, Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-3">
              <GiIndianPalace className="text-[#ffb400] text-lg flex-shrink-0" />
              <span><strong className="text-slate-900 dark:text-white">Nationality:</strong> Indian</span>
            </div>

            <div className="flex items-center gap-3">
              <IoLanguageSharp className="text-[#ffb400] text-lg flex-shrink-0" />
              <span><strong className="text-slate-900 dark:text-white">Languages:</strong> English, Hindi, Marathi</span>
            </div>

            <div className="flex items-center gap-3">
              <IoMailUnread className="text-[#ffb400] text-lg flex-shrink-0" />
              <span>
                <strong className="text-slate-900 dark:text-white">Email:</strong>{" "}
                <a
                  href="mailto:arbazmurme@gmail.com"
                  className="text-[#ffb400] hover:underline"
                >
                  arbazmurme@gmail.com
                </a>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileScreenButton className="text-[#ffb400] text-lg flex-shrink-0" />
              <span>
                <strong className="text-slate-900 dark:text-white">Phone:</strong>{" "}
                <a
                  href="tel:+919028121976"
                  className="text-[#ffb400] hover:underline"
                >
                  +91 90281 21976
                </a>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <IoLogoLinkedin className="text-[#ffb400] text-lg flex-shrink-0" />
              <span>
                <strong className="text-slate-900 dark:text-white">LinkedIn:</strong>{" "}
                <Link
                  href="https://www.linkedin.com/in/arbaj-murme-4493031a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffb400] hover:underline"
                >
                  arbaj-murme
                </Link>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaSquareGithub className="text-[#ffb400] text-lg flex-shrink-0" />
              <span>
                <strong className="text-slate-900 dark:text-white">GitHub:</strong>{" "}
                <Link
                  href="https://github.com/arbazmurme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffb400] hover:underline"
                >
                  arbazmurme
                </Link>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaLaptopCode className="text-[#ffb400] text-lg flex-shrink-0" />
              <span>
                <strong className="text-slate-900 dark:text-white">Freelance:</strong>{" "}
                <span className="font-semibold text-emerald-400">Available</span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/arbaz-murme.pdf"
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-[#ffb400] bg-[#ffb400] px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-transparent hover:text-[#ffb400]"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              <span>Download CV</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-slate-700 bg-slate-800/80 px-8 py-3 text-sm sm:text-base font-semibold text-gray-200 transition-all duration-300 hover:border-[#ffb400] hover:text-[#ffb400]"
            >
              <span>View Journey &amp; Experience</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsOne />
    </div>
  );
};

export default About;
