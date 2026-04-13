export const portfolioContext = {
  personal: {
    name: "Arbaz Murme",
    title: "Full Stack Developer",
    location: "Solapur, Maharashtra, India",
    email: "arbazmurme@gmail.com",
    phone: "+91 90281 21976",
    linkedin: "https://www.linkedin.com/in/arbaj-murme-4493031a3/",
    github: "https://github.com/arbazmurme",
    freelance: "Available",
  },
  summary: [
    "Arbaz Murme is a Full Stack Developer focused on React.js, Next.js, Node.js, Express.js, MongoDB, and scalable web applications.",
    "He builds developer portfolios, business websites, marketplaces, booking systems, and production-ready full-stack products.",
  ],
  skills: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Redux",
    "Firebase OTP Authentication",
    "JWT Authentication",
    "Redis Caching",
    "Nginx",
    "CI/CD",
    "SEO",
    "SSR",
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Dexterous Technology",
      period: "November 2024 - Present",
      highlights: [
        "Working on enterprise-level marketplace systems",
        "AI-powered search optimization",
        "dynamic SEO rendering using Next.js SSR",
        "Redis caching and Nginx-based scaling",
      ],
    },
    {
      role: "React JS Developer Intern",
      company: "Lejhro Technology",
      period: "July 2024 - October 2024",
      highlights: [
        "Built dynamic React.js applications",
        "Improved SEO and metadata",
        "Worked with Next.js and analytics integration",
      ],
    },
  ],
  projects: [
    {
      title: "EWShopping",
      type: "AI-powered enterprise multi-vendor marketplace",
      url: "https://ewshopping.com/",
      highlights: [
        "3000+ sellers",
        "80k+ traffic",
        "advanced filtering",
        "dynamic SEO",
        "Firebase OTP auth",
      ],
    },
    {
      title: "SalonTreat",
      type: "salon and pet care booking platform",
      url: "https://salontreat.com/",
      highlights: [
        "React Native app",
        "appointment scheduling",
        "slot management",
        "multi-vendor features",
      ],
    },
    {
      title: "KiranaWorld",
      type: "multi-vendor e-commerce platform",
      url: "https://kiranaworld.in/",
      highlights: [
        "web and mobile app",
        "wallet system",
        "vendor management",
      ],
    },
    {
      title: "Driveome",
      type: "ride and package transfer platform",
      url: "https://driveome.com/",
      highlights: [
        "real-time tracking",
        "wallet and cashback",
        "promo and referral systems",
      ],
    },
    {
      title: "AZ Shop",
      type: "MERN e-commerce platform",
      url: "https://e-commerce-frontend-topaz-delta.vercel.app/",
      highlights: [
        "admin dashboard",
        "product management",
        "SEO-friendly frontend",
      ],
    },
  ],
};

export function buildPortfolioPrompt() {
  return `
Portfolio owner: ${portfolioContext.personal.name}
Title: ${portfolioContext.personal.title}
Location: ${portfolioContext.personal.location}
Email: ${portfolioContext.personal.email}
Phone: ${portfolioContext.personal.phone}
LinkedIn: ${portfolioContext.personal.linkedin}
GitHub: ${portfolioContext.personal.github}
Freelance: ${portfolioContext.personal.freelance}

Summary:
${portfolioContext.summary.map((item) => `- ${item}`).join("\n")}

Skills:
${portfolioContext.skills.map((item) => `- ${item}`).join("\n")}

Experience:
${portfolioContext.experience
  .map(
    (item) =>
      `- ${item.role} at ${item.company} (${item.period}): ${item.highlights.join(", ")}`
  )
  .join("\n")}

Projects:
${portfolioContext.projects
  .map(
    (item) =>
      `- ${item.title}: ${item.type}. Highlights: ${item.highlights.join(", ")}. URL: ${item.url}`
  )
  .join("\n")}
  `.trim();
}
