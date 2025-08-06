import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { projects } from "@/utils/constants";
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from "react-router";
import ProjectModal from "../ProjectModal";

const ProjectsV2 = () => {
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

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section
        id="projects"
        className="flex items-center justify-center px-4 py-24 snap-start min-h-screen"
      >
        <div className="w-full max-w-7xl bg-white rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="text-center px-6 lg:px-10 pt-8 pb-6">
            <span className=" inline-block text-sm w-fit mx-auto font-medium bg-semiWhite text-primary px-4 py-2 rounded-full shadow-sm mb-4">
              ✨ My Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 otherFont mt-2">
              Projects
            </h2>
          </div>

          <div className="relative z-10 px-6 lg:px-10 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-primary text-sm font-medium">
                            Click to view details
                          </span>
                          <FiArrowRight className="text-primary w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 px-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {project.shortTitle}
                    </h3>
                    <p className="text-gray-600 text-sm">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center pb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              <GiArmoredBoomerang className="w-5 h-5" />
              View All Projects
            </Link>
          </div>
        </div>
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
