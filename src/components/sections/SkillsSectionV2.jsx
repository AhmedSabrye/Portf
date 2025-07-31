import React, { useState } from "react";
import { motion } from "framer-motion";

import { skillCategories } from "../../constants";

const SkillsSectionV2 = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [ripples, setRipples] = useState([]);

  // Flatten all skills from all categories
  const allSkills = skillCategories.flatMap((category) => category.skills);

  // Create triangle arrangement (reversed triangle / pyramid)
  const getTriangleRows = () => {
    const totalSkills = allSkills.length;
    const rows = [];
    let skillIndex = 0;

    // Calculate rows for inverted triangle (more items at top, fewer at bottom)
    const rowSizes = [5, 4, 3, 2]; // Updated for new skill distribution

    rowSizes.forEach((size, rowIndex) => {
      if (skillIndex < totalSkills) {
        const rowSkills = allSkills.slice(
          skillIndex,
          skillIndex + Math.min(size, totalSkills - skillIndex)
        );
        rows.push(rowSkills);
        skillIndex += rowSkills.length;
      }
    });

    return rows;
  };

  const triangleRows = getTriangleRows();

  const handleSkillClick = (skill) => {
    // Create a new ripple with unique ID
    const newRipple = {
      id: Date.now() + Math.random(),
      skillName: skill.name,
      timestamp: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600); // Slightly longer than animation duration
  };

  return (
    <section id="skills" className="py-20 px-4 bg-semiWhite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium bg-semiWhite text-primary px-4 py-2 rounded-full shadow-sm mb-6">
            💻 My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 otherFont">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Pyramid */}
        <div className="flex flex-col items-center gap-8 select-none">
          {triangleRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rowIndex * 0.2, duration: 0.6 }}
              className="flex justify-center gap-4 sm:gap-6 md:gap-8"
            >
              {row.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: rowIndex * 0.2 + skillIndex * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative group"
                  onMouseEnter={() => setSelectedSkill(skill)}
                  onMouseLeave={() => setSelectedSkill(null)}
                  onClick={() => handleSkillClick(skill)}
                >
                  {/* Skill Icon Container */}
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-2xl p-3 sm:p-4 shadow-lg cursor-pointer transition-all duration-300 ease-out"
                    whileHover={{
                      scale: 1.1,
                      y: -8,
                      rotateY: 15,
                      shadow: "0 20px 40px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0"
                      animate={{
                        opacity: selectedSkill?.name === skill.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Skill Name Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8, display: "none" }}
                    animate={{
                      opacity: selectedSkill?.name === skill.name ? 1 : 0,
                      y: selectedSkill?.name === skill.name ? 0 : 10,
                      scale: selectedSkill?.name === skill.name ? 1 : 0.8,
                      display:
                        selectedSkill?.name === skill.name ? "block" : "none",
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute select-none -bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                      {skill.name}
                      {/* Tooltip arrow */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </motion.div>

                  {/* Level indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: selectedSkill?.name === skill.name ? 1 : 0,
                      scale: selectedSkill?.name === skill.name ? 1 : 0,
                    }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                    className="absolute -top-2 -right-2 z-10"
                  >
                    <div
                      className={`
                      w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white
                      ${
                        skill.level === "Expert"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }
                    `}
                    >
                      {skill.level === "Expert" ? "★" : "•"}
                    </div>
                  </motion.div>

                  {/* Multiple ripple effects */}
                  {ripples
                    .filter((ripple) => ripple.skillName === skill.name)
                    .map((ripple) => (
                      <motion.div
                        key={ripple.id}
                        className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Skills Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center items-center gap-6 mt-16 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">★</span>
            </div>
            <span>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">•</span>
            </div>
            <span>Advanced</span>
          </div>
          <div className="text-gray-400">
            Hover for details • Click for interaction
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSectionV2;
