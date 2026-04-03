import avatarSuite from "../../assets/notionAvatar Suite.webp";
import avatarReact from "../../assets/notionAvatar Oragnizer Squooshed.jpg";
import avatarPullover from "../../assets/notionAvatar pullover.webp";
import { FaBrain, FaBriefcase } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export const bioInfo = [
  {
    id: "professional",
    category: "Professional",
    img: avatarSuite,
    icon: <FaBriefcase className="w-5 h-5" />,
    items: [
      "Frontend Engineer at Bevatel",
      "Specialized in React, Next.js, and Vue.js",
      "Focused on performance optimization, better user experience, and well-structured, maintainable code",
    ],
  },
  {
    id: "approach",
    category: "Approach",
    img: avatarReact,
    icon: <FaBrain className="w-5 h-5" />,
    items: [
      "Hands-on first — I believe real learning comes from building, not watching",
      "Research, design, then code — I plan before I build",
      "Strong CSS and JavaScript foundations — framework-agnostic problem solving",
      "Writing code that other engineers can pick up and work with easily",
    ],
  },
  {
    id: "personal",
    category: "Personal",
    icon: <CiHeart className="w-5 h-5" />,
    img: avatarPullover,
    items: [
      "Call me Sabry",
      "Ran 10k straight - if I can survive that, I can debug anything 🏃‍♂️",
      "Deep-diving into Vue.js after solid experience with React",
      "I love building — Attendo, LaQta, and more to come",
    ],
  },
];
