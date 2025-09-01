import img0 from "@/assets/Attendo Overview.png";
import img1 from "@/assets/Screenshot 2025-02-27 083015.jpg";
import img2 from "@/assets/Quiz App.jpg";
import img3 from "@/assets/weatherio.png";
import imgF1 from "@/assets/figmaDesigns/manage.jpg";
import imgF2 from "@/assets/figmaDesigns/asdf.jpg";
import imgF3 from "@/assets/figmaDesigns/Age.jpg";
// Attendo folder imports
import attendoHomePage from "@/assets/Attendo/Home Page.png";
import attendoGroupSettings from "@/assets/Attendo/Group Settings.png";
import attendoReportDetails from "@/assets/Attendo/Report Details.png";
import attendoGroupOverview from "@/assets/Attendo/Group Overview.png";
import attendoReportSummary from "@/assets/Attendo/Report Summary.png";
import attendoFixAndMatch from "@/assets/Attendo/Fix and Match.mp4";
import attendoChangingTemplate from "@/assets/Attendo/Changing Template.mp4";
import attendoCreateTemplate from "@/assets/Attendo/Create Template.mp4";
import attendoCreateGroup from "@/assets/Attendo/Create Group.mp4";

// freshbag folder imports
import freshbagAllOrders from "@/assets/freshbag/allOrders.mp4";
import freshbagBrandsPage from "@/assets/freshbag/brands.mp4";
import freshbagCart from "@/assets/freshbag/cart.mp4";
import freshbagForms from "@/assets/freshbag/forms.mp4";
import freshbagHome from "@/assets/freshbag/home.mp4";
import freshbagLightMode from "@/assets/freshbag/lightMode.mp4";
import freshbagLoginIndication from "@/assets/freshbag/login!.mp4";
import freshbagProductDetails from "@/assets/freshbag/productDetails.mp4";
import freshbagProducts from "@/assets/freshbag/products.mp4";

// Trivia folder imports
import triviaHome from "@/assets/Trivia/home.png";
import triviaQuestion from "@/assets/Trivia/Question.png";
import triviaResults from "@/assets/Trivia/results.png";
import triviaCorrect from "@/assets/Trivia/correct.png";
import triviaIncorrect from "@/assets/Trivia/incorrect.png";


export const projects = [
  {
    id: 1,
    title: "Attendo",
    shortTitle: "Attendo",
    description: "Attendance Automation and Tracking System",
    tech: ["React", "Zustand", "Tailwindcss", "Framer Motion"],
    image: img0,
    images: [
      attendoHomePage,
      img0,
      attendoCreateGroup,
      attendoCreateTemplate,
      attendoGroupOverview,
      attendoChangingTemplate,
      attendoReportDetails,
      attendoReportSummary,
      attendoFixAndMatch,
      attendoGroupSettings,
    ],
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
    images: [
      freshbagHome,
      freshbagAllOrders,
      freshbagCart,
      freshbagProducts,
      freshbagBrandsPage,
      freshbagProductDetails,
      freshbagLightMode,
      freshbagForms,
      freshbagLoginIndication,
    ],
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
    images: [
      triviaHome,
      triviaQuestion,
      triviaCorrect,
      triviaIncorrect,
      triviaResults,
    ],
    link: "https://trivia-aiq.pages.dev/quiz",
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
    images: [img3],
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
    images: [imgF1],
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
    images: [imgF2],
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
    images: [imgF3],
    link: "https://age-calculator-frontend-mentor-mocha.vercel.app/",
    category: "Design to Code",
    year: "2025",
    github: "https://github.com/AhmedSabrye/age-calculator-frontend-mentor",
  },
];
