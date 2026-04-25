import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiMaximize } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCarouselNavigation } from "./hooks/useCarouselNavigation";
import { useCarouselDots } from "./hooks/useCarouselDots";
import ButtonsAndIndicators from "./ButtonsAndIndicators";
import ProjectInfo from "./ProjectInfo";
import { isVideoFile } from "../../utils/mediaUtils";
import { useVideoPlayback } from "./hooks/useVideoPlayback";

export default function InlineCarousel({
  projectImages,
  currentImageIndex,
  onIndexChange,
  project,
  toggleFullscreen,
}) {
  const options = { loop: true, startIndex: 0 };
  const plugins = [Autoplay({ delay: 60000, stopOnInteraction: false })];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useEffect(() => {
    if (emblaApi && currentImageIndex !== emblaApi.selectedScrollSnap()) {
      emblaApi.scrollTo(currentImageIndex);
    }
  }, [emblaApi, currentImageIndex]);

  const videoRefs = useVideoPlayback(projectImages, currentImageIndex);

  // Use custom hooks for navigation and dots
  const { scrollPrev, scrollNext } = useCarouselNavigation(emblaApi);
  const { scrollTo, shouldShowDots } = useCarouselDots(
    emblaApi,
    currentImageIndex,
    projectImages,
    onIndexChange
  );

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="bg-white dark:bg-slate-800 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:h-[80vh]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Left Panel — Carousel (60% on desktop, full width on mobile) */}
      <div className="relative w-full lg:w-[60%] h-72 md:h-96 lg:h-full bg-gray-100 dark:bg-slate-700 overflow-hidden shrink-0">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {projectImages.map((media, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] min-w-0 relative"
              >
                {isVideoFile(media) ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={media}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                    title={`${project.title} video ${index + 1}`}
                  />
                ) : index === 0 ? (
                  <motion.div
                    layoutId={`project-img-${project.id}`}
                    className="w-full h-full"
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  >
                    <img
                      src={media}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ) : (
                  <img
                    src={media}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation + dots */}
        {shouldShowDots && (
          <ButtonsAndIndicators
            scrollPrev={scrollPrev}
            scrollNext={scrollNext}
            scrollTo={scrollTo}
            currentImageIndex={currentImageIndex}
            projectImages={projectImages}
          />
        )}

        {/* Image counter badge */}
        {projectImages.length > 1 && (
          <span className="absolute top-4 right-14 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full z-10 font-medium tabular-nums">
            {currentImageIndex + 1} / {projectImages.length}
          </span>
        )}

        {/* Fullscreen button */}
        <button
          id="fullscreen-button"
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm rounded-full p-2 hover:bg-white dark:hover:bg-slate-600 transition-colors shadow-lg z-10 cursor-pointer"
        >
          <FiMaximize className="w-5 h-5 text-gray-900 dark:text-slate-100" />
        </button>
      </div>

      {/* Right Panel — Project Info (40% on desktop, full width on mobile) */}
      <div className="w-full lg:w-[40%] overflow-y-auto max-h-[40vh] lg:max-h-full">
        <ProjectInfo project={project} />
      </div>
    </motion.div>
  );
}
