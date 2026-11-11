import IcGitHub from "../assets/icons/ico_github.svg";
import IcLinkedIn from "../assets/icons/ico_linkedin.svg";
import IcInstagram from "../assets/icons/ico_instagram.svg";


export type Project = {
  name: string;
  startDate: string;
  endDate: string;
  period: string;
  description: string;
  bullets: string[];
};

export type Role = {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  period: string;
  mode: string;
  current?: boolean;
  projects?: Project[];
  summary?: string;
  stack: string[];
};

export const site = {
  name: "Fahrizal Indi Dirgantara",
  shortName: "Fahrizal",
  role: "Software Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fahrizal.vercel.app",
  email: "fahrizal.indi@gmail.com",
  location: "Jakarta, Indonesia",
  description:
    "Frontend Engineer with 5 years of experience building B2B, B2C, and sales enablement products in Telkomsel’s ecosystem. React.js, TypeScript, legacy modernization, and modular frontend architecture.",
  socials: [
    {
      label: "GitHub",
      icon: IcGitHub,
      href: "https://github.com/Vouyeuz"
    },
    {
      label: "LinkedIn",
      icon: IcLinkedIn,
      href: "https://www.linkedin.com/in/fahrizal-id/"
    },
    {
      label: "Instagram",
      icon: IcInstagram,
      href: "https://www.instagram.com/fahrizal.dirgantara/"
    },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "5 years", label: "building enterprise web apps" },
  { value: "50 people", label: "in the project team, 20+ developers" },
  { value: "3 products & 1 ecosystem", label: "shipped for Telkomsel" },
];

export const about = [
  "Software Engineer with 5 years of experience building B2B, B2C, and sales enablement solutions within Telkomsel’s ecosystem.",
  "My primary strength as a Frontend Engineer is building scalable and maintainable interfaces with React.js and TypeScript: reusable component libraries, complex state management, and modernizing legacy apps into modular architectures with independent, per-app deployments.",
  "I’m expanding into fullstack development, with foundational backend knowledge in Node.js, Express, and MongoDB gained through the Udemy bootcamp “Node.js, Express, MongoDB & More: The Complete Bootcamp” and hands-on practice. I adapt quickly to new technologies and use AI-assisted development to improve productivity and code quality.",
  "I’m open to full-time and freelance opportunities in frontend engineering, and to fullstack roles.",
];

export const company = {
  name: "PT. Dans Multi Pro",
  description:
    "IT agency vendor that mainly handled B2B, B2C, and e-commerce products for Telkomsel, one of the largest telecommunications companies in Indonesia.",
  startDate: "15/09/2021",
  endDate: "26/12/2026",
  period: "Sep 2021 - Present",
  location: "Jakarta, Indonesia",
};

export const roles: Role[] = [
  {
    title: "Frontend Developer",
    type: "Contract",
    startDate: "27/12/2021",
    endDate: "27/12/2026",
    period: "Dec 2021 - Present",
    mode: "Hybrid",
    current: true,
    summary: "Manage Telkomsel's 3 major products (DigiPOS, DSC Consumer, 99%Usahaku) and 1 ecosystem (MyEnterprise).",
    projects: [
      {
        name: "MyEnterprise (B2B2C)",
        startDate: "27/12/2021",
        endDate: "26/12/2026",
        period: "Dec 2021 - Present",
        description:
          "Spent five years growing alongside this core enterprise ecosystem, contributing to multiple web apps and building or enhancing tens of reusable components, complex state management systems, and core features spanning sales opportunity menus, ticketing, corporate account, and service ordering.",
        bullets: [
          "Worked as a team in a project of roughly 50 people, including 20+ developers, organized into 2 to 4 parallel squads running their own sprints.",
          "Participated in revamping the legacy apps (MEA, MEC, Safora) into the modern web apps (Unified & MyEnt), using a polyrepo with Module Federation to move CI/CD from a centralized pipeline to independent, per-app pipelines. Applied React Clean Architecture to keep the apps maintainable, scalable, and testable, with TypeScript providing type safety across module boundaries.",
          "Served as rotating Sprint PIC, coordinating backlog refinement with business analysts, assessing technical feasibility, negotiating scope with stakeholders, and translating requirements into actionable engineering tasks while continuing hands-on development.",
        ],
      },
      {
        name: "DigiPOS Sales Force",
        startDate: "14/09/2026",
        endDate: "26/12/2026",
        period: "Sep 2026 - Present",
        description:
          "Mobile application built for Telkomsel’s direct sales team, field agents, and sales force representatives.",
        bullets: [
          "Delivered several features, including a map rendering component that lets field agents create visit schedules and routes to reach potential customers, under a deadline of around one week to meet release goals.",
          "Implemented MVVM and a response model architecture to keep the codebase clean and consistent.",
        ],
      },
      {
        name: "99%Usahaku (E-Commerce)",
        startDate: "12/07/2023",
        endDate: "17/08/2023",
        period: "Jul 2023 - Aug 2023",
        description: "Telkomsel’s e-commerce platform for MSMEs and small business owners.",
        bullets: ["Gained hands-on experience building e-commerce web application flows."],
      },
      {
        name: "DSC Consumer (B2C)",
        startDate: "01/10/2022",
        endDate: "01/11/2022",
        period: "Oct 2022 - Nov 2022",
        description: "Telkomsel’s consumer-facing application service center.",
        bullets: ["Resolved bugs to keep the customer experience stable."],
      },
    ],
    stack: [
      "HTML", "CSS", "Styled Component", "Bootstrap", "Mantine Core", "JavaScript", "TypeScript",
      "React.js", "Next.js", "Redux", "Zustand", "TanStack Query", "REST APIs", "Jest",
      "SonarQube", "Postman", "Webpack", "Vite", "Claude", "Augment", "Gemini",
    ],
  },
  {
    title: "Frontend Developer Trainee",
    type: "Internship",
    startDate: "26/09/2021",
    endDate: "27/12/2021",
    period: "Sep 2021 - Dec 2021",
    mode: "Remote",
    summary: "Learned and joined other teams in developing web applications for clients.",
    stack: ["HTML", "CSS", "Styled Component", "JavaScript", "React.js", "Redux", "REST APIs", "Storybook", "Unit Testing"],
  },
];

export const projects = [
  {
    name: "Amazon Clone",
    description:
      "A full-stack e-commerce site with user login, automatic checkout totals, Stripe payments, and order ID generation. Firebase handles the database, authentication, and hosting.",
    stack: ["React", "Node.js", "Firebase", "Stripe"],
    code: "https://github.com/Vouyeuz/amazon-clone.git",
    live: "https://clone-10f53.web.app/",
  },
  {
    name: "Sukakoi-id",
    description:
      "An online shop where sellers add, edit, or remove products from the built-in Commerce.js admin page. Card payments run through Stripe.",
    stack: ["React", "JavaScript", "Commerce.js", "Stripe"],
    code: "https://github.com/Vouyeuz/2nd-e-commerce.git",
    live: "https://sukakoi-id.netlify.app",
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { group: "Architecture", items: ["Module Federation", "Polyrepo", "React Clean Architecture", "MVVM", "Legacy modernization"] },
  { group: "State and Data", items: ["Redux", "Zustand", "TanStack Query", "REST APIs"] },
  { group: "UI", items: ["Styled Component", "Bootstrap", "Tailwind CSS", "Mantine Core", "Figma"] },
  { group: "Quality and Tooling", items: ["Jest", "SonarQube", "Postman", "Webpack", "Vite", "Redux Developer Tools"] },
  { group: "AI-Assisted Development", items: ["Claude", "Augment", "Gemini"] },
  { group: "Backend (Foundational)", items: ["Node.js", "Express", "Commerce.js", "MongoDB", "Firebase", "Stripe"] },
];
