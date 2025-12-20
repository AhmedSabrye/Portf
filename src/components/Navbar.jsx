import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "bio", label: "Bio" },
    { id: "skills", label: "Skills" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    opened: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0 },
  };

  return (
    <>
      <nav className="z-50 rounded-2xl shadow-lg mb-12 max-w-7xl mx-auto fixed top-8 right-4 left-4 sm:right-8 sm:left-8 lg:right-10 lg:left-10 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 py-4 border border-white/20">
        <button
          onClick={() => scrollToSection("home")}
          className="text-sm font-extrabold uppercase bg-primary cursor-pointer text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Sabry
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1la7Q1R9ogRweawib7L-CV2N1m94-SMKl/view?usp=sharing"
            target="_blank"
            className="hidden sm:inline-block text-xs sm:text-sm font-semibold bg-gray-900 text-white px-5 py-2.5 rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-all"
          >
            My resume
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-900 focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl p-8 md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold text-gray-900">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-900"
                >
                  <HiX />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <motion.li key={link.id} variants={linkVariants}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="https://drive.google.com/file/d/1la7Q1R9ogRweawib7L-CV2N1m94-SMKl/view?usp=sharing"
                  target="_blank"
                  className="block text-center bg-gray-900 text-white py-4 rounded-2xl font-semibold shadow-lg"
                >
                  My resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
