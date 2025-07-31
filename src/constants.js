import imgFramer from "./assets/framer-motion-seeklogo.svg";
import tailwindcss from "./assets/tailwindcss-mark.d52e9897.svg";

import img0 from "./assets/Attendo Overview.png";
import img1 from "./assets/Screenshot 2025-02-27 083015.jpg";
import img2 from "./assets/Quiz App.jpg";
import img3 from "./assets/weatherio.png";
import imgF1 from "./assets/figmaDesigns/manage.jpg";
import imgF2 from "./assets/figmaDesigns/asdf.jpg";
import imgF3 from "./assets/figmaDesigns/Age.jpg";
export const skillCategories = [
  {
    id: "core",
    name: "Core Technologies",
    icon: "🎨",
    skills: [
      // Row 1 (5): Core Technologies
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        level: "Expert",
        details: [
          "Semantic HTML",
          "CSS Grid/Flexbox",
          "Animations",
          "Responsive Design",
        ],
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: "Expert",
        details: [
          "ES6+",
          "Promises",
          "Async/Await",
          "DOM Manipulation",
          "Event Handling",
        ],
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        level: "Expert",
        details: [
          "Type Safety",
          "Interfaces",
          "Generics",
          "Type Inference",
          "Advanced Types",
        ],
      },
      {
        name: "ReactJS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: "Expert",
        details: [
          "Hooks",
          "Context",
          "Performance",
          "Component Design",
          "Custom Hooks",
        ],
      },
      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        level: "Expert",
        details: [
          "App Router",
          "Server Components",
          "API Routes",
          "Static Generation",
          "ISR",
        ],
      },

      // Row 2 (4): State Management & Data
      {
        name: "Zustand",
        image:
          "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
        level: "Advanced",
        details: [
          "Store Creation",
          "Middleware",
          "Async Actions",
          "State Persistence",
        ],
      },
      {
        name: "Redux Toolkit",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        level: "Advanced",
        details: ["RTK Query", "Thunks", "Slices", "State Normalization"],
      },
      {
        name: "React Query",
        image:
          "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
        level: "Advanced",
        details: [
          "Server State",
          "Cache Management",
          "Mutations",
          "Infinite Queries",
        ],
      },
      {
        name: "Chart.js",
        image: "https://www.chartjs.org/img/chartjs-logo.svg",
        level: "Advanced",
        details: [
          "Data Visualization",
          "Custom Charts",
          "Animations",
          "Responsive Charts",
        ],
      },

      // Row 3 (3): UI & Styling
      {
        name: "Tailwind CSS",
        image: tailwindcss,
        level: "Expert",
        details: ["Utility Classes", "Custom Themes", "JIT Mode", "Plugins"],
      },
      {
        name: "Shadcn/UI",
        image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
        level: "Advanced",
        details: [
          "Component Library",
          "Theming",
          "Accessibility",
          "Customization",
        ],
      },
      {
        name: "Framer Motion",
        image: imgFramer,
        level: "Advanced",
        details: ["Animations", "Gestures", "Variants", "Layout Animations"],
      },

      // Row 4 (2): Build Tools
      {
        name: "Vite",
        image: "https://vitejs.dev/logo.svg",
        level: "Advanced",
        details: ["Dev Server", "Build Optimization", "Plugins", "HMR"],
      },
      {
        name: "Webpack",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        level: "Advanced",
        details: [
          "Configuration",
          "Code Splitting",
          "Asset Management",
          "Optimization",
        ],
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    title: "Attendo",
    shortTitle: "Attendo",
    description: "Attendance Automation and Tracking System",
    tech: ["React", "Zustand", "Tailwindcss", "Framer Motion"],
    image: img0,
    link: "https://attendo.pages.dev/",
    category: "Frontend",
    year: "2025",
    github: "https://github.com/AhmedSabrye/Attendo",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    shortTitle: "E-commerce",
    description:
      "A full-featured online store with real-time inventory updates and modern UI components.",
    tech: ["React", "Zustand", "Tailwindcss", "Framer Motion"],
    image: img1,
    link: "https://e-commerce-route-lovat.vercel.app/",
    category: "Frontend",
    year: "2025",
    github: "https://github.com/AhmedSabrye/E-Commerce-Route",
  },
  {
    id: 3,
    title: "Quiz Application",
    shortTitle: "Trivia ",
    description:
      "Interactive quiz application with TypeScript and real-time scoring system.",
    tech: ["React", "Typescript", "Zustand", "React Router"],
    image: img2,
    link: "https://quiz-app-react-chi-seven.vercel.app/",
    category: "Frontend",
    year: "2025",
    github: "https://github.com/AhmedSabrye/Trivia",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    shortTitle: "Weatherio",
    description:
      "Real-time hourly and daily weather forecasts with modern UI components.",
    tech: ["React", "Typescript", "Shadcn", "Tailwindcss"],
    image: img3,
    link: "https://weatherio-8a0.pages.dev",
    category: "Frontend",
    year: "2025",
    github: "https://github.com/AhmedSabrye/weatherio",
  },
  {
    id: 5,
    title: "Manage Landing Page",
    shortTitle: "manage dashboard",
    description:
      "Pixel-perfect landing page converted from Figma design to clean code.",
    image: imgF1,
    link: "https://manage-landing-page-frontend-mentor-iota.vercel.app/",
    category: "Design to Code",
    year: "2025",
    github:
      "https://github.com/AhmedSabrye/manage-landing-page-frontend-mentor",
  },
  {
    id: 6,
    title: "Product Showcase",
    shortTitle: "E-commerce",
    description:
      "Product showcase page with interactive features and responsive design.",
    image: imgF2,
    link: "https://e-commerce-product-page-frontend-mentor-peach.vercel.app/",
    category: "Design to Code",
    year: "2025",
    github:
      "https://github.com/AhmedSabrye/E-commerce-product-page-Frontend-Mentor",
  },
  {
    id: 7,
    title: "Age Calculator Tool",
    shortTitle: "Age Calculator",
    description: "Clean and intuitive age calculator with form validation.",
    image: imgF3,
    link: "https://age-calculator-frontend-mentor-mocha.vercel.app/",
    category: "Design to Code",
    year: "2025",
    github: "https://github.com/AhmedSabrye/age-calculator-frontend-mentor",
  },
];
