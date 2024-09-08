import { FaBriefcase, FaGraduationCap, FaCode, FaLaptop } from "react-icons/fa";
const ExperienceEducation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffb400] mb-10">
        My Journey
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#1788ae]"></div>
        
        {/* Experience Section */}
        <div className="space-y-12">
          <div className="relative flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 text-center md:text-right">
              <FaBriefcase className="text-4xl text-[#ffb400] mx-auto md:mr-0 mb-2" />
              <h3 className="text-2xl font-bold text-[#1788ae]">React JS Developer Intern</h3>
              <p className="text-sm text-gray-500">July 2024 – Present</p>
              <p className="mt-4">
                <span className="text-[#ffb400] font-semibold">Lejhro Technology</span>, Bhubaneswar, Odisha
              </p>
              <ul className="list-nonetext-right mt-4">
                <li>Led a team of developers in creating dynamic web applications using React.js.</li>
                <li>Managed Git version control for efficient team collaboration.</li>
                <li>Implemented Google Analytics for user interaction tracking.</li>
                <li>Enhanced SEO through metadata optimization.</li>
                <li>Integrated Next.js for performance improvements.</li>
              </ul>
            </div>
            <div className="hidden md:block md:w-1/2 relative">
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center">
                <FaCode className="text-[#ffb400] text-2xl" />
              </div>
            </div>
          </div>

          {/* Freelance Experience */}
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <FaBriefcase className="text-4xl text-[#ffb400] mx-auto md:ml-0 mb-2" />
              <h3 className="text-2xl font-bold text-[#1788ae]">Freelance Hardware and Technical Support Specialist</h3>
              <p className="text-sm text-gray-500">January 2021 – February 2021</p>
              <p className="mt-4">
                <span className="text-[#ffb400] font-semibold">Self-Employed</span>, Solapur, Maharashtra
              </p>
              <ul className="list-disc list-inside text-left mt-4">
                <li>Provided comprehensive technical assistance for laptops and PCs.</li>
                <li>Diagnosed and resolved hardware issues, ensuring optimal system performance.</li>
              </ul>
            </div>
            <div className="hidden md:block md:w-1/2 relative">
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center">
                <FaLaptop className="text-[#ffb400] text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="relative flex flex-col md:flex-row items-center gap-10 mt-16">
          <div className="w-full md:w-1/2 text-center md:text-right">
            <FaGraduationCap className="text-4xl text-[#ffb400] mx-auto md:mr-0 mb-2" />
            <h3 className="text-2xl font-bold text-[#1788ae]">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-sm text-gray-500">February 2018 - October 2020</p>
            <p className="mt-4">
              <span className="text-[#ffb400] font-semibold">DAV Velankar College of Commerce</span>, Solapur University
            </p>
            <p className="mt-2">CGPA: 73.03%</p>
          </div>
          <div className="hidden md:block md:w-1/2 relative">
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-[#ffb400] text-2xl" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
