import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { bioInfo, socialLinks } from "../../utils/constants";

const BioSectionV2 = () => {
  const [activeTab, setActiveTab] = useState("professional");

  const activeSection = bioInfo.find((section) => section.id === activeTab);

  return (
    <section
      id="bio"
      className="min-h-screen py-50 px-4 text-tertiary flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.33 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl md:min-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mx-auto mb-6 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSection?.id}
                src={activeSection?.img}
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-tertiary">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Frontend developer and mentor passionate about React, Next.js.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 shadow-sm">
            {bioInfo.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === section.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-700 hover:text-tertiary hover:bg-gray-50"
                }`}
              >
                <span
                  className={
                    activeTab === section.id ? "text-white" : "text-primary"
                  }
                >
                  {section.icon}
                </span>
                <motion.span
                  initial="hidden"
                  animate={
                    activeTab === section.id ? "selected" : "notSelected"
                  }
                  variants={{
                    hidden: { opacity: 0, width: 0 },
                    selected: { opacity: 1, width: 100 },
                    notSelected: { opacity: 0, width: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {section.category}
                </motion.span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm min-h-96 sm:min-h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection.id}
              initial="hidden"
              exit="exit"
              animate="animate"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  x: -10,
                },
                exit: {
                  opacity: 0,
                  y: -10,
                  x: 10,
                },
                animate: {
                  opacity: 1,
                  y: 10,
                  x: 0,
                },
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              className="flex items-center gap-3 mb-6 "
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                {activeSection?.icon}
              </div>
              <h3 className="text-2xl font-bold text-tertiary">
                {activeSection?.category}
              </h3>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.ul
              initial="hidden"
              exit="exit"
              animate={activeTab === activeSection.id ? "selected" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                    delay: 0.1,
                  },
                },
                selected: {
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    staggerChildren: 0.1,
                    staggerDirection: 1,
                    delay: 0.1,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    delay: 0.1,
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}
              className="space-y-4"
              key={activeSection.id}
            >
              {activeSection?.items.map((item, index) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                      x: -10,
                    },
                    exit: {
                      opacity: 0,
                      y: -10,
                      x: 10,
                    },
                    selected: {
                      opacity: 1,
                      y: 10,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-tertiary text-base leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:shadow-md hover:text-primary transition-all duration-200"
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
              {link.name !== "Email Me" && (
                <FiExternalLink className="w-4 h-4" />
              )}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BioSectionV2;
