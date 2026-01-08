import React from "react";
import { motion } from "framer-motion";

const experienceItems = [
  {
    role: "Front-End Developer",
    company: "Bevatel",
    period: "September 2025 – Present",
    summary:
      "Worked closely with backend, product design, and the product team to ship seamless user experiences from spec to release.",
    tags: [
      "UI systems",
      "Performance",
      "Design-to-code",
      "Collaboration",
      "Code quality",
    ],
  },
  {
    role: "Front-End Mentor",
    company: "Route Academy",
    period: "September 2024 – September 2025",
    summary:
      "Guided teams through React fundamentals and advanced topics while improving outcomes and learning velocity.",
    tags: ["Mentorship", "Workshops", "Debugging", "React", "Communication"],
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

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-slate-700" />
          <div className="space-y-10 md:space-y-14">
            {experienceItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative md:grid md:grid-cols-[1fr_auto_1fr]"
                >
                  <div
                    className={`absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_6px_rgba(255,95,46,0.2)]`}
                  />
                  <div
                    className={`ml-6 md:ml-0 md:row-start-1 ${isLeft ? "md:col-start-1 md:pr-8 md:justify-self-end" : "md:col-start-3 md:pl-8"}`}
                  >
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
                      <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-200 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
