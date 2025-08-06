import imgFramer from "../../assets/framer-motion-seeklogo.svg";
import tailwindcss from "../../assets/tailwindcss-mark.d52e9897.svg";

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
