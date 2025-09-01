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
      "Frontend developer specializing in React and Next.js",
      "Creating intuitive and high-performance web applications",
      "Academic Mentor at Route Academy",
      "Helping students master frontend development",
    ],
  },
  {
    id: "approach",
    category: "Approach",
    img: avatarReact,
    icon: <FaBrain className="w-5 h-5" />,
    items: [
      "Passionate about diving deep into core concepts",
      "Bridging the gap between surface-level knowledge and mastery",
      "Committed to collaborative learning",
      "Embracing every day as an opportunity to learn, share, and evolve collaboratively",
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
      "Typing speed: 100 WPM peak, 80 WPM average",
      "Always learning something new",
    ],
  },
];
