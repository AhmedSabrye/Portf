import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/utils/constants";
import ProjectModal from "../ProjectModal";

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
              <article
                key={project.id}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-primary/30 cursor-pointer hover:-translate-y-1.5"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openModal(project);
                  }
                }}
              >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3 flex gap-2">
                      {project.featured && (
                        <span className="text-xs font-semibold bg-gradient-to-r from-primary to-light text-white px-2.5 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    {project.category && (
                      <span className="text-xs font-semibold bg-white/90 dark:bg-slate-800/90 text-gray-700 dark:text-slate-200 px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                    )}
                  </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md hover:scale-105 transition-transform"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FiExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md hover:scale-105 transition-transform"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FiGithub className="w-3 h-3" />
                        Code
                      </a>
                    )}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 group-hover:text-primary transition-colors otherFont">
                        {project.title}
                      </h3>
                      {project.year && (
                        <span className="text-xs font-semibold text-gray-400 dark:text-slate-400">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {project.tech?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-xs text-gray-400 dark:text-slate-400 font-medium">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-slate-400">
                      <span>View details</span>
                      <span className="text-primary">Explore</span>
                    </div>
                  </div>
              </article>
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
