"use client";

import ContactForm from "../ContactForm";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLaptopCode } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 md:py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl text-center md:mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ffb400]">
            Get In Touch
          </p>
          <h2 className="mt-2 font-extrabold tracking-tight text-4xl sm:text-5xl">
            Let&apos;s Work <span className="text-[#ffb400]">Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-gray-300">
            Have a project in mind, looking for a full-stack developer, or just want to connect? Feel free to reach out directly!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl">
              <h3 className="text-2xl font-bold text-[#ffb400] mb-4">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                I am currently open for full-time roles, freelance projects, and consulting opportunities.
              </p>

              <ul className="space-y-6">
                {/* Location */}
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ffb400]/15 text-[#ffb400] border border-[#ffb400]/30 shadow-sm">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                      Solapur, Maharashtra 413005, India
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ffb400]/15 text-[#ffb400] border border-[#ffb400]/30 shadow-sm">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Phone / WhatsApp
                    </h4>
                    <a
                      href="tel:+919028121976"
                      className="text-base font-medium text-[#ffb400] hover:underline"
                    >
                      +91 90281 21976
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ffb400]/15 text-[#ffb400] border border-[#ffb400]/30 shadow-sm">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Email
                    </h4>
                    <a
                      href="mailto:arbazmurme@gmail.com"
                      className="text-base font-medium text-[#ffb400] hover:underline break-all"
                    >
                      arbazmurme@gmail.com
                    </a>
                  </div>
                </li>

                {/* Availability */}
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm">
                    <FaLaptopCode className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Availability
                    </h4>
                    <p className="text-base font-medium text-emerald-400">
                      Full-Stack / MERN Developer (Available)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl">
              <h3 className="mb-2 text-2xl font-bold text-[#ffb400]">
                Send a Message
              </h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm mb-6">
                Fill out the form below and I will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
