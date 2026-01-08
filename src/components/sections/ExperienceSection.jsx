import React from "react";
import { motion } from "framer-motion";

const experienceItems = [
  {
    role: "Front-End Developer",
    company: "Bevatel",
    period: "September 2025 – Present",
    bullets: [
      "Worked closely with designers, backend engineers, and product managers to deliver features end-to-end.",
      "Refactored existing code to enhance readability, performance, and maintainability.",
      "Translated Figma designs into pixel-perfect, responsive UI components, ensuring visual consistency across browsers and devices.",
      "Conducted an SVG icon audit using Vite and Storybook, identifying duplicate icons, reducing redundancy, and establishing guidelines to prevent future icon duplication.",
      "Managed branches and created focused pull requests using Git to ensure isolated, review-ready changes.",
    ],
  },
  {
    role: "Front-End Mentor",
    company: "Route Academy",
    period: "September 2024 – September 2025",
    bullets: [
      "Mentored 8+ groups in React and JavaScript, improving student project completion rates.",
      "Debugged and resolved issues in students' code, strengthening problem-solving and technical communication skills.",
      "Refined teaching approach, resulting in a 30% reduction in the React learning curve.",
      "Authored materials and led 10+ workshops on advanced concepts such as stacking context and Redux.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 sm:px-6 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium bg-white dark:bg-slate-800 text-primary px-3 py-1.5 rounded-full shadow-sm mb-4">
            Professional Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-slate-100 otherFont mb-4">
            Work Timeline
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            A timeline of roles focused on shipping high-impact frontend work
            and mentoring teams.
          </p>
        </div>

        <div className="relative border-l border-gray-200 dark:border-slate-700 ml-3 sm:ml-6">
          {experienceItems.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-10 sm:pl-12 pb-12"
            >
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_6px_rgba(255,95,46,0.2)]" />
              <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100">
                      {item.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-slate-300">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
