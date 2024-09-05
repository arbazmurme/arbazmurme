import { ArrowRightIcon, LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import "../../common/progress-bar.css";
const About = () => {
  return (
    <div class="max-w-7xl mx-auto px-4">
      <div class="mx-auto text-center mt-12">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#ffb400] to-pink-500">
            ABOUT <span class="text-primary">ME</span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffb400] to-pink-500"></span>
        </h1>
      </div>
      <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <Image
              height={500}
              width={500}
              src="/about.png"
              className=" opacity-80"
            />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <h2 class="my-4 font-bold text-3xl sm:text-4xl uppercase">
            personal <span class="text-[#ffb400]">infos</span>
          </h2>
          <div class="flex flex-col md:flex-row justify-between">
            <div class="md:w-1/2 p-4">
              <ul class="list-none">
                <li class="mb-4 flex items-center">
                  <strong>First Name&nbsp;:&nbsp;</strong> Arbaz
                </li>
                <li class="mb-4 flex items-center">
                  <strong>Last Name&nbsp;:&nbsp;</strong> Murme
                </li>
                <li class="mb-4 flex items-center">
                  <strong>Address&nbsp;:&nbsp;</strong> Maharashtra - Solapur
                </li>
                <li class="mb-4 flex items-center">
                  <strong>Nationality&nbsp;:&nbsp;</strong> India
                </li>
                <li class="mb-4 flex items-center">
                  <strong>Languages&nbsp;:&nbsp;</strong>English, Hindi, Marathi
                </li>
              </ul>
            </div>
            <div class="md:w-1/2 p-4">
              <ul class="list-none">
                <li class="mb-4 flex items-center">
                  <strong>Email&nbsp;:&nbsp;</strong>
                  <Link href={"arbazmurme@gamil.com"} class="text-blue-600">
                    arbazmurme@mail.com
                  </Link>
                </li>
                <li class="mb-4 flex items-center">
                  <strong>Phone&nbsp;:&nbsp;</strong>
                  <a class="text-blue-600">+91 90281 21976</a>
                </li>
                <li class="mb-4 flex items-center">
                  <strong>Linkedin&nbsp;:&nbsp;</strong>
                  <Link
                    href={"https://www.linkedin.com/in/arbaj-murme-4493031a3/"}
                    class="text-blue-600"
                  >
                    arbaj-murme-4493031a3
                  </Link>
                </li>
                <li class="mb-4 flex items-center">
                  <strong>GitHub&nbsp;:&nbsp;</strong>
                  <Link
                    href={"https://github.com/arbazmurme"}
                    class="text-blue-600"
                  >
                    arbazmurme
                  </Link>
                </li>
                <li class="mb-4 flex items-center">
                  <strong>Freelance&nbsp;:&nbsp;</strong>{" "}
                  <samp className="text-[#ffb400]">Available</samp>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="/arbaz-murme.pdf"
            class="mt-8 relative group overflow-hidden font-medium inline-block rounded-full border border-[#ffb400] px-auto"
          >
            <span class="absolute inset-0 bg-[#ffb400] transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 opacity-90"></span>
            <span class="relative flex items-center space-x-2">
              <span className="mx-8 uppercase">Download CV</span>
              <ArrowRightIcon className="h-14 w-14 bg-[#ffb400] rounded-full p-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 p-4">
          <div className=" shadow-lg rounded-lg p-6 text-center">
            <div
              role="progressbar"
              aria-valuenow="87"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 87 }}
              className="m-auto rounded-full mb-4"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold">HTML 5</h3>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="shadow-lg rounded-lg p-6 text-center">
            <div
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 75 }}
              className="m-auto rounded-full mb-4"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold">CSS 3</h3>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="m-auto shadow-lg rounded-lg p-6 text-center">
            <div
              role="progressbar"
              aria-valuenow="67"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 67 }}
              className="m-auto rounded-full mb-4"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold   ">Bootstrap 5</h3>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className=" shadow-lg rounded-lg p-6">
            <div
              role="progressbar"
              aria-valuenow="67"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 97 }}
              className="rounded-full mb-4 m-auto"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold text-center">Tailwind CSS</h3>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className=" shadow-lg rounded-lg p-6 text-center">
            <div
              role="progressbar"
              aria-valuenow="67"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 83 }}
              className="m-auto rounded-full mb-4"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold">React JSX</h3>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className=" shadow-lg rounded-lg p-6 text-center">
            <div
              role="progressbar"
              aria-valuenow="67"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 93 }}
              className="m-auto rounded-full mb-4"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold">Next JSX</h3>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className=" shadow-lg rounded-lg p-6 text-center">
            <div
              role="progressbar"
              aria-valuenow="67"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 87 }}
              className="m-auto rounded-full mb-4"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold">Node JS</h3>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className=" shadow-lg rounded-lg p-6 text-center">
            <div
              role="progressbar"
              aria-valuenow="67"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": 67 }}
              className="m-auto rounded-full mb-4"
            >
              {/* Progress bar content */}
            </div>
            <h3 className="text-lg font-bold">MongoDB</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
