import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/constants";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectModal from "../components/ProjectModal";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -6,
      transition: { duration: 0.25 },
    },
  };

  return (
    <div className="min-h-screen bg-semiWhite dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="pt-10 pb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-primary bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm">
              Curated Portfolio
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-block text-xs font-medium bg-white dark:bg-slate-800 text-primary px-3 py-1.5 rounded-full shadow-sm mb-4">
              Curated Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100 otherFont mb-4">
              Project Archive with a Focus on&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light otherFont2">
                Product Detail
              </span>
            </h1>
            <p className="text-gray-600 dark:text-slate-300 max-w-3xl mx-auto text-sm sm:text-base">
              Browse polished builds, UI explorations, and production-ready web
              experiences. Each project highlights a distinct design challenge
              and a performance-focused implementation.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-wide text-gray-400 dark:text-slate-400"
          >
            <span className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
              {projects.length} Projects
            </span>
            <span className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
              Product Focus
            </span>
            <span className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
              UI + Motion
            </span>
          </motion.div>
        </motion.header>

        <motion.div
          layout
          className="pb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.article
                layoutId={`project-${project.id}`}
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-primary/30 cursor-pointer"
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
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FiExternalLink className="w-3 h-3" />
                        Live
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FiGithub className="w-3 h-3" />
                        Code
                      </motion.a>
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
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.footer
          className="text-center pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-slate-100">
            Ready to build something together?
          </h2>
          <p className="text-gray-500 dark:text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
            Share your goals and I will translate them into a reliable, polished
            product.
          </p>
          <motion.a
            href="mailto:ahmedsabry.fr@gmail.com"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
        </motion.footer>
      </div>

      <ProjectModal
        key={selectedProject?.id}
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProjectsPage;
