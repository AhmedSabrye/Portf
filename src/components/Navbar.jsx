import React from "react";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="z-40 rounded-2xl shadow-lg mb-12 max-w-7xl mx-auto fixed top-8 right-0 left-0 bg-white  flex items-center justify-between px-6 lg:px-10 py-6">
      <button
        onClick={() => scrollToSection("home")}
        className="text-xs sm:text-sm font-extrabold uppercase bg-primary cursor-pointer text-white px-4 py-2 rounded-full shadow-lg"
      >
        Sabry
      </button>
      <ul className="hidden md:flex gap-8 font-medium text-gray-600">
        <li>
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("bio")}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Bio
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Skills
          </button>
        </li>
      </ul>
      <a
        href="https://drive.google.com/file/d/1nP-ehoSLB-pbP369schYczkmh-HTtqDR/view?usp=sharing"
        target="_blank"
        className="text-xs sm:text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
      >
        My resume
      </a>
    </nav>
  );
}
