import imgFramer from "../../assets/framer-motion-seeklogo.svg";
import tailwindcss from "../../assets/tailwindcss-mark.d52e9897.svg";

export const commonSkills = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "Expert",
    color: "#E34C26",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: "Expert",
    color: "#265c97",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "Expert",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "Expert",
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    image: tailwindcss,
    level: "Expert",
    color: "#06B6D4",
  },
  {
    name: "Vite",
    image: "vite.svg",
    level: "Advanced",
    color: "#646CFF",
  },
  {
    name: "Webpack",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    level: "Advanced",
    color: "#8DD6F9",
  },
  {
    name: "Parcel",
    image: "Parceljs.png",
    level: "Advanced",
    color: "#8DD6F9",
  },
];

export const reactSkills = [
  {
    name: "ReactJS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Expert",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: "Expert",
    color: "#000000",
  },
  {
    name: "Redux Toolkit",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    level: "Advanced",
    color: "#764ABC",
  },
  {
    name: "Zustand",
    image: "/Zustand.svg",
    level: "Advanced",
    color: "#443E38",
  },
  {
    name: "React Query",
    image:
      "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
    level: "Advanced",
    color: "#FF4154",
  },
  {
    name: "Shadcn/UI",
    image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    level: "Advanced",
    color: "#000000",
  },
  {
    name: "Framer Motion",
    image: imgFramer,
    level: "Advanced",
    color: "#0055FF",
  },
];

export const vueSkills = [
  {
    name: "Vue.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    level: "Expert",
    color: "#4FC08D",
  },
  {
    name: "Nuxt.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    level: "Expert",
    color: "#00DC82",
  },
  {
    name: "Pinia",
    image: "/Pinialogo.svg",
    level: "Advanced",
    color: "#FFE484",
  },
  {
    name: "Vuex",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    level: "Advanced",
    color: "#4FC08D",
  },
  {
    name: "Vuetify",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
    level: "Advanced",
    color: "#000000",
  },
  {
    name: "Vue Query",
    image:
      "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
    level: "Advanced",
    color: "#FF4154",
  },
];

export const skillCategories = [
  {
    id: "common",
    name: "Common Skills",
    skills: commonSkills,
  },
  {
    id: "react",
    name: "React ecosystem",
    skills: reactSkills,
  },
  {
    id: "vue",
    name: "Vuejs ecosystem",
    skills: vueSkills,
  },
];
