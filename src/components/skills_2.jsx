"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaSearch,
  FaPython,
  FaServer,
  FaTools,
  FaCloudflare,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandDjango,
  TbBrandGoogleAnalytics,
  TbApi,
  TbBrandReactNative,
} from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import {
  SiMysql,
  SiFirebase,
  SiPostman,
  SiRedis,
  SiNginx,
  SiRedux,
  SiSocketdotio,
  SiGithubactions,
} from "react-icons/si";
import { MdOutlineSecurity, MdPayment } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";

const skillCategories = [
  {
    title: "Frontend Technologies",
    delay: 0,
    skills: [
      { name: "React.js", icon: <FaReact className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Next.js (SSR & App Router)", icon: <RiNextjsFill className="w-5 h-5 text-[#ffb400]" /> },
      { name: "React Native", icon: <TbBrandReactNative className="w-5 h-5 text-[#ffb400]" /> },
      { name: "JavaScript (ES6+)", icon: <TbBrandJavascript className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="w-5 h-5 text-[#ffb400]" /> },
      { name: "HTML5", icon: <TiHtml5 className="w-5 h-5 text-[#ffb400]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Bootstrap 5", icon: <FaBootstrap className="w-5 h-5 text-[#ffb400]" /> },
    ],
  },
  {
    title: "Backend & Database",
    delay: 0.1,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Express.js", icon: <TbApi className="w-5 h-5 text-[#ffb400]" /> },
      { name: "MongoDB & Mongoose", icon: <TbBrandMongodb className="w-5 h-5 text-[#ffb400]" /> },
      { name: "RESTful API Architecture", icon: <TbApi className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Redis Caching", icon: <SiRedis className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Python", icon: <FaPython className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Django", icon: <TbBrandDjango className="w-5 h-5 text-[#ffb400]" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="w-5 h-5 text-[#ffb400]" /> },
    ],
  },
  {
    title: "Auth, Security & Systems",
    delay: 0.2,
    skills: [
      { name: "Firebase OTP Auth", icon: <SiFirebase className="w-5 h-5 text-[#ffb400]" /> },
      { name: "JWT Authentication", icon: <MdOutlineSecurity className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Role-Based Access (RBAC)", icon: <MdOutlineSecurity className="w-5 h-5 text-[#ffb400]" /> },
      { name: "AI Search Optimization", icon: <FaSearch className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Advanced Filtering Engine", icon: <BiSolidDashboard className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Payment Gateway (Razorpay/PayU)", icon: <MdPayment className="w-5 h-5 text-[#ffb400]" /> },
    ],
  },
  {
    title: "DevOps, Cloud & Scaling",
    delay: 0.3,
    skills: [
      { name: "Git Version Control", icon: <FaGithub className="w-5 h-5 text-[#ffb400]" /> },
      { name: "GitHub Actions (CI/CD)", icon: <SiGithubactions className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Nginx & Load Balancing", icon: <SiNginx className="w-5 h-5 text-[#ffb400]" /> },
      { name: "PM2 Cluster Mode", icon: <FaServer className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Cloudflare & CDN Optimization", icon: <FaCloudflare className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Vercel & Production Deployments", icon: <FaServer className="w-5 h-5 text-[#ffb400]" /> },
    ],
  },
  {
    title: "Architecture & Business Logic",
    delay: 0.4,
    skills: [
      { name: "Multi-Vendor Architecture", icon: <BiSolidDashboard className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Order Lifecycle Management", icon: <BiSolidDashboard className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Stock & Inventory Management", icon: <BiSolidDashboard className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Commission & Wallet System", icon: <MdPayment className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Dynamic SEO & Metadata Rendering", icon: <TbBrandNextjs className="w-5 h-5 text-[#ffb400]" /> },
    ],
  },
  {
    title: "Tools & Analytics",
    delay: 0.5,
    skills: [
      { name: "Postman API Testing", icon: <SiPostman className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Google Analytics Tracking", icon: <TbBrandGoogleAnalytics className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Figma UI/UX Design", icon: <FaFigma className="w-5 h-5 text-[#ffb400]" /> },
      { name: "Chrome DevTools & Lighthouse", icon: <FaTools className="w-5 h-5 text-[#ffb400]" /> },
      { name: "UI Design & Prototyping", icon: <FaFigma className="w-5 h-5 text-[#ffb400]" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
            My <span className="text-[#ffb400]">Skills</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive technical skillset across modern frontend, backend architectures, databases, and DevOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-md hover:border-[#ffb400]/50 hover:shadow-xl hover:shadow-[#ffb400]/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cat.delay }}
            >
              <h3 className="text-lg font-bold mb-4 text-[#ffb400] flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <span>{cat.title}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#ffb400]/15 text-[#ffb400]">
                  {cat.skills.length}
                </span>
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center text-sm sm:text-base text-slate-800 dark:text-slate-200 gap-3 hover:translate-x-1 transition-transform"
                  >
                    <span className="flex-shrink-0">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
