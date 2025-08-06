import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import FullScreen from "./FullScreen";
import InlineCarousel from "./InlineCarousel";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Shared index change handler
  const handleIndexChange = useCallback((newIndex) => {
    setCurrentImageIndex(newIndex);
  }, []);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  if (!project) return null;

  const projectImages = project.images || [project.image];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={`${project.title}-modal`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            id="close-button"
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
          >
            <FiX className="w-6 h-6 text-gray-900" />
          </button>
          <InlineCarousel
            projectImages={projectImages}
            currentImageIndex={currentImageIndex}
            onIndexChange={handleIndexChange}
            project={project}
            toggleFullscreen={toggleFullscreen}
          />
        </motion.div>
      )}

      {isFullscreen && (
        <FullScreen
          toggleFullscreen={toggleFullscreen}
          projectImages={projectImages}
          currentImageIndex={currentImageIndex}
          onIndexChange={handleIndexChange}
          project={project}
        />
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
