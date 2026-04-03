import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "@/utils/constants";
import ProjectModal from "../ProjectModal";
import ProjectCard from "../ProjectCard";

const ProjectsV2 = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section id="projects" className="px-4 sm:px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.33 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-medium bg-white dark:bg-slate-800 text-primary px-3 py-1.5 rounded-full shadow-sm mb-4">
              Curated Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-slate-100 otherFont mb-4">
              Selected Projects with a&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light otherFont2">
                Product Lens
              </span>
            </h2>
            <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              A focused collection of builds that highlight interaction design,
              performance, and thoughtful UX decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-colors"
            >
              {showAll ? "Collapse projects" : "View all projects"}
              <FiArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-3 text-xs text-gray-400 dark:text-slate-400">
              {showAll
                ? "Collapse to return to the featured selection."
                : "Expand to see the full archive, then collapse anytime."}
            </p>
          </div>
        </motion.div>
      </section>

      <ProjectModal
        key={selectedProject?.id}
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ProjectsV2;
