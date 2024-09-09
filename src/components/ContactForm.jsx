"use client"
import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { database, ref, push } from '../firebase'; // Import Firebase functions

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // For form status messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('Please fill in all fields');
      return;
    }

    try {
      // Create a new unique key for each entry
      const formRef = ref(database, 'contactForms/');

      // Push data to the database
      await push(formRef, {
        name: name,
        email: email,
        message: message,
        timestamp: Date.now(),
      });

      // Clear form fields and show success message
      setName('');
      setEmail('');
      setMessage('');
      setStatus('Message sent successfully!');
    } catch (error) {
      console.error('Error storing data:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="mb-6">
        {/* Name Input */}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Input */}
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
            className="mb-2 w-full rounded-md border border-gray-400 dark:text-gray-800 py-2 pl-2 pr-4 shadow-md sm:mb-0"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Message Textarea */}
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
          className="mb-2 w-full rounded-md border border-gray-400 dark:text-gray-800 py-2 pl-2 pr-4 shadow-md sm:mb-0"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      {/* Status Message */}
      {status && <p className="text-center mb-4 text-red-500">{status}</p>}

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="mt-8 relative group overflow-hidden font-medium inline-block rounded-full border border-[#ffb400]"
        >
          {/* Background Animation */}
          <span className="absolute inset-0 bg-[#ffb400] transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 opacity-90"></span>

          {/* Button Content */}
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
