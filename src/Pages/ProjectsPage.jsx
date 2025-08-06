import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/constants";
import {
  FiExternalLink,
  FiGithub,
  FiArrowLeft,
  FiFilter,
  FiSearch,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectModal from "../components/ProjectModal";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
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

  const categories = ["All", "Frontend", "Design to Code", "Full Stack"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-semiWhite">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.header
          className="text-center pt-8 pb-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-6"
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span className="font-medium text-sm">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block text-xs font-medium bg-semiWhite text-primary px-3 py-1.5 rounded-full shadow-sm mb-3">
              ✨ My Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 otherFont">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light otherFont2">
                Projects
              </span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              A collection of projects showcasing my skills in modern web
              development, from interactive applications to pixel-perfect
              designs.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-3 items-center justify-between mb-6"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-4 py-1.5 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:shadow-md transition-all w-56 text-sm"
              />
            </div>
          </motion.div>
        </motion.header>

        {/* Projects Grid */}
        <motion.div
          layout
          layoutId="projects-grid"
          className="pb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                layoutId={`project-${project.id}`}
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="absolute top-2 left-2 text-xs font-medium bg-gradient-to-r from-primary to-light text-white px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}

                  {/* Category Badge */}
                  <span className="absolute top-2 right-2 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>

                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-white text-gray-900 px-2 py-1 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg text-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink className="w-3 h-3" />
                      Live
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gray-900 text-white px-2 py-1 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg text-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="w-3 h-3" />
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-3">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors otherFont line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project?.tech?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project?.tech?.length > 3 && (
                      <span className="text-xs text-gray-400 px-1.5 py-0.5">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom Links */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-light transition-colors text-xs font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View →
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-gray-400 text-base mb-2">No projects found</p>
              <p className="text-gray-500 text-sm">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Footer CTA */}
        <motion.footer
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
            Interested in working together?
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto text-sm">
            I'm always open to discussing new opportunities and exciting
            projects.
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.footer>
      </div>

      {/* Modal */}
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
