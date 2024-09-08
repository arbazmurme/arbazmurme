import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ContactForm = () => {
  return (
    <form id="contactForm">
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-4">
          <label
            htmlFor="name"
            className="pb-1 text-xs uppercase tracking-wider"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            autoComplete="given-name"
            placeholder="Your name"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-800 sm:mb-0"
            name="name"
          />
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label
            htmlFor="email"
            className="pb-1 text-xs uppercase tracking-wider"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Your email address"
            className="mb-2 w-full rounded-md border border-gray-400  dark:text-gray-800 py-2 pl-2 pr-4 shadow-md sm:mb-0"
            name="email"
          />
        </div>
      </div>
      <div className="mx-0 mb-1 sm:mb-4">
        <label
          htmlFor="textarea"
          className="pb-1 text-xs uppercase tracking-wider"
        >
          Message
        </label>
        <textarea
          id="textarea"
          name="textarea"
          cols="30"
          rows="5"
          placeholder="Write your message..."
          className="mb-2 w-full rounded-md border border-gray-400  dark:text-gray-800 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
        ></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="mt-8 relative group overflow-hidden font-medium inline-block rounded-full border border-[#ffb400] ">
          <span className="absolute inset-0 bg-[#ffb400] transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 opacity-90"></span>
          <span className="relative flex items-center space-x-2">
            <span className="mx-8 uppercase">Contact Me</span>
            <ArrowRightIcon className="h-14 w-14 bg-[#ffb400] rounded-full p-4" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
