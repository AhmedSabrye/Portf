import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/constants";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";

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
              <motion.div
                layoutId={`project-${project.id}`}
                key={project.id}
                variants={cardVariants}
              >
                <ProjectCard
                  project={project}
                  onClick={() => openModal(project)}
                />
              </motion.div>
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
