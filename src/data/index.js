import {
  algorithms,
  devnotes,
  spectrum,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Development",
    subtitle: "Adobe · Hortus.AI · Open Avenues · Rhombus Power · Pioneer in Engineering · 2022 – Present",
    details: [
      "UI/UX and full-stack development: React design systems, responsive layouts, <span style='color: white;'>WCAG 2.1 AA</span> accessibility, and end-to-end features (React, Django, Node.js).",
      "Semantic search and recommendation systems with <span style='color: white;'>LLM pipelines, Gemini, MongoDB Vector Search</span>; automated data enrichment and tool discovery.",
      "Dashboards and observability: <span style='color: white;'>Grafana</span> migrations, memory/session analytics, events logging, and React-based extensions for mobile QE.",
      "Real-time monitoring and tooling: Prometheus/Grafana, network metrics, and scalable always-on solutions.",
      "Geospatial and analytics UIs: React Mapbox, frontend map analytics, and interactive data visualization.",
    ],
  },
  {
    title: "Data Engineering",
    subtitle: "HSBC · 2021 – 2024",
    details: [
      "Data-driven insights from large financial and customer datasets using <span style='color: white;'>SQL, Python, and Tableau</span>.",
      "Built automated reports and dashboards to support business decision-making.",
      "Collaborated with cross-functional teams on risk analysis, customer segmentation, and strategic initiatives.",
    ],
  },
  {
    title: "Education",
    subtitle: "UC Berkeley · CCSF · Adobe · HKU",
    details: [
      "Built a <span style='color: white;'>computer science foundation</span> in theory, computer architecture, and software engineering.",
      "Practical experience at <span style='color: white;'>Berkeley Engineering club</span> in robotic competition and system engineering.",
      "Produced high-quality educational and entertaining videos for students to learn about computer science",
    ],
  },
];

const portfolio = [
  {
    name: "Spectrum Dashboard",
    description:
      "A real-time dashboard that monitors the full Adobe Express automation and CI/CD pipeline testing. Built with React and Adobe Spectrum, it visualizes test suites, memory and performance metrics, and queue status so engineering teams can ship with confidence.",
    image: spectrum,
    projectLink: "https://github.com/clairecleverlamb/spectrum_dashboard",
    sourceCodeLink: "https://github.com/clairecleverlamb/spectrum_dashboard",
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };

