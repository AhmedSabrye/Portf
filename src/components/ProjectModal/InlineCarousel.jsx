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
      className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-72 md:h-96 lg:h-[500px] bg-gray-100 relative overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
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

        {shouldShowDots && (
          <ButtonsAndIndicators
            scrollPrev={scrollPrev}
            scrollNext={scrollNext}
            scrollTo={scrollTo}
            currentImageIndex={currentImageIndex}
            projectImages={projectImages}
          />
        )}

        <button
          id="fullscreen-button"
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg z-10"
        >
          <FiMaximize className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      <ProjectInfo project={project} />
    </motion.div>
  );
}
