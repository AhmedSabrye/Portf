import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  commonSkills,
  reactSkills,
  vueSkills,
} from "../../utils/constants/skillCategories";

// Create triangle arrangement logic
const getTriangleRows = (skills) => {
  const totalSkills = skills.length;
  const rows = [];
  let skillIndex = 0;

  const rowSizes = [5, 4, 3, 2, 1];

  rowSizes.forEach((size) => {
    if (skillIndex < totalSkills) {
      const rowSkills = skills.slice(
        skillIndex,
        skillIndex + Math.min(size, totalSkills - skillIndex)
      );
      rows.push(rowSkills);
      skillIndex += rowSkills.length;
    }
  });

  return rows;
};

const SkillCard = ({
  skill,
  selectedSkill,
  setSelectedSkill,
  handleSkillClick,
  ripples,
  index,
  rowIndex = 0,
}) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.33 }}
    transition={{
      delay: rowIndex * 0.1 + index * 0.05,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    }}
    className="relative group"
    onMouseEnter={() => setSelectedSkill(skill)}
    onMouseLeave={() => setSelectedSkill(null)}
    onClick={() => handleSkillClick(skill)}
  >
    <motion.div
      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-xl cursor-pointer transition-all duration-300 ease-out select-none"
      whileHover={{
        scale: 1.1,
        y: -5,
        rotateY: 10,
        boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <img
        src={skill.image}
        alt={skill.name}
        crossOrigin="anonymous"
        className="w-full h-full object-contain"
      />

      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0"
        style={{
          background: `linear-gradient(to right, ${skill.color}15, ${skill.color}10)`,
        }}
        animate={{
          opacity: selectedSkill?.name === skill.name ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>

    {/* Tooltip */}
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.8 }}
      animate={{
        opacity: selectedSkill?.name === skill.name ? 1 : 0,
        y: selectedSkill?.name === skill.name ? 15 : 10,
        scale: selectedSkill?.name === skill.name ? 1 : 0.8,
      }}
      transition={{ duration: 0.2 }}
      className={`absolute select-none bottom-0 left-1/2 translate-y-1/2 transform -translate-x-1/2 z-20 ${selectedSkill?.name === skill.name ? "block" : "hidden"
        }`}
    >
      <div className="bg-gray-900 shadow-2xl text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap">
        {skill.name}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </motion.div>

    {/* Level Indicator */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: selectedSkill?.name === skill.name ? 1 : 0,
        scale: selectedSkill?.name === skill.name ? 1 : 0,
      }}
      className="absolute -top-1 -right-1 z-10"
    >
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${skill.level === "Expert" ? "bg-green-500" : "bg-blue-500"
          } shadow-lg shadow-black/10`}
      >
        {skill.level === "Expert" ? "★" : "•"}
      </div>
    </motion.div>

    {ripples
      .filter((ripple) => ripple.skillName === skill.name)
      .map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
          style={{ borderColor: skill.color }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}
  </motion.div>
);

const EcosystemPyramid = ({
  title,
  skills,
  color,
  selectedSkill,
  setSelectedSkill,
  handleSkillClick,
  ripples,
}) => {
  const rows = getTriangleRows(skills);
  return (
    <div className="flex flex-col items-center">
      <h3
        className={`text-xl sm:text-2xl font-extrabold mb-10 pb-2 border-b-4 tracking-tight`}
        style={{ borderColor: color, color: "#111827" }}
      >
        {title}
      </h3>
      <div className="flex flex-col items-center gap-6 sm:gap-8">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-3 sm:gap-4 md:gap-5"
          >
            {row.map((skill, skillIndex) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                selectedSkill={selectedSkill}
                setSelectedSkill={setSelectedSkill}
                handleSkillClick={handleSkillClick}
                ripples={ripples}
                index={skillIndex}
                rowIndex={rowIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSectionV2 = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [ripples, setRipples] = useState([]);

  const handleSkillClick = (skill) => {
    const newRipple = {
      id: Date.now() + Math.random(),
      skillName: skill.name,
      timestamp: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <section
      id="skills"
      className="min-h-screen pt-30 pb-20 px-4 sm:px-6 flex items-center justify-center bg-gray-50/20"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.33 }}
            className="inline-block text-sm font-bold text-primary tracking-wider uppercase px-4 py-1.5 bg-primary/10 rounded-full mb-6"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.33 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 otherFont"
          >
            The Tech <span className="text-primary">Ecosystems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.33 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Mastering the leading frontend frameworks and their associated
            libraries to build high-performance applications.
          </motion.p>
        </div>

        {/* Common Skills Row */}
        <div className="flex flex-col items-center mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.33 }}
            className="text-xl sm:text-2xl font-extrabold mb-10 pb-2 border-b-4 border-gray-900 text-gray-900"
          >
            Core Technologies
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {commonSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                selectedSkill={selectedSkill}
                setSelectedSkill={setSelectedSkill}
                handleSkillClick={handleSkillClick}
                ripples={ripples}
                index={index}
                rowIndex={0}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 xl:gap-12 items-start justify-items-center">
          <EcosystemPyramid
            title="React Ecosystem"
            skills={reactSkills}
            color="#61DAFB"
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
            handleSkillClick={handleSkillClick}
            ripples={ripples}
          />
          <EcosystemPyramid
            title="Vuejs Ecosystem"
            skills={vueSkills}
            color="#4FC08D"
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
            handleSkillClick={handleSkillClick}
            ripples={ripples}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSectionV2;

