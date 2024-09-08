"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import TypingText from "../../context/TypingText";
const HomeDetails = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen items-center -z-50">
        {/* Background Image Section */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center fixed h-screen"
          style={{ backgroundImage: "url(/home-bg.png)" }}
        >
          <div className="min-h-screen flex justify-center items-center">
            <Image
              alt="hero man"
              src="/aa.jpg"
              width={450}
              height={450}
              className="img-fluid mx-auto rounded-3xl w-[500px] h-[620px] ml-[40px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text and Image Section */}
        <div className="w-full lg:w-1/2 lg:ml-auto text-center lg:text-left p-8 lg:p-16">
          {/* Mobile Image */}
          <div className="lg:hidden mb-8">
            <Image
              alt="hero man"
              src="/aa.jpg"
              width={300}
              height={300}
              className="img-fluid mx-auto rounded-3xl"
              loading="lazy"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold uppercase">
            I&apos;m Arbaz Murme.
          </h1>
          <TypingText />
          <p className="mt-4 text-lg text-gray-400">
            Web development intern specializing in front-end and back-end
            technologies, passionate about creating responsive, user-friendly
            websites. Dedicated to empowering the web through modern JavaScript
            frameworks while gaining hands-on experience and contributing to
            innovative projects.
          </p>
          <Link
            href="/about"
            className="mt-8 relative group overflow-hidden font-medium inline-block rounded-full border border-[#ffb400] "
          >
            <span className="absolute inset-0 bg-[#ffb400] transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 opacity-90"></span>
            <span className="relative flex items-center space-x-2">
              <span className="mx-8 uppercase">More about me</span>
              <ArrowRightIcon className="h-14 w-14 bg-[#ffb400] rounded-full p-4" />
            </span>
          </Link>
        </div>
        <div className="w-1/12 ">
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default HomeDetails;
