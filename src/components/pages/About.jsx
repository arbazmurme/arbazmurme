import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const About = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <Link
        href="/arbaz-murme.pdf"
          class="mt-8 relative group overflow-hidden font-medium inline-block rounded-full border border-[#ffb400] "
        >
          <span class="absolute inset-0 bg-[#ffb400] transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 opacity-90"></span>
          <span class="relative flex items-center space-x-2">
            <span className="mx-8 uppercase">Download CV</span>
            <ArrowRightIcon className="h-14 w-14 bg-[#ffb400] rounded-full p-4" />
          </span>
        </Link>
      </div>
    );
  };
  
  export default About;
  