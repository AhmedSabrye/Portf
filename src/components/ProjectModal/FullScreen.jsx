import React from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiMinimize } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import { useCarouselNavigation } from "./hooks/useCarouselNavigation";
import { useCarouselDots } from "./hooks/useCarouselDots";
import { isVideoFile } from "../../utils/mediaUtils";
import { useVideoPlayback } from "./hooks/useVideoPlayback";

export default function FullScreen({
  toggleFullscreen,
  projectImages,
  currentImageIndex,
  onIndexChange,
  project,
}) {
  const videoRefs = useVideoPlayback(projectImages, currentImageIndex);
  const options = { loop: true, startIndex: 0 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);

  const { scrollPrev, scrollNext } = useCarouselNavigation(emblaApi);
  const { scrollTo, shouldShowDots, getFullscreenDotClassName } =
    useCarouselDots(emblaApi, currentImageIndex, projectImages, onIndexChange);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
      onClick={toggleFullscreen}
    >
      <button
        id="close-fullscreen-button"
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors shadow-lg"
      >
        <FiMinimize className="w-6 h-6 text-white" />
      </button>

      <div
        id="fullscreen-carousel"
        className="w-full h-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {projectImages.map((media, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] min-w-0 relative h-full flex items-center duration-300 justify-center"
              >
                {isVideoFile(media) ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={media}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="max-w-full max-h-full object-contain"
                    title={`${project.title} video ${index + 1}`}
                  />
                ) : (
                  <img
                    src={media}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {shouldShowDots && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 transform  cursor-pointer  -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors shadow-lg z-10"
            >
              <FiChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 transform cursor-pointer -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors shadow-lg z-10"
            >
              <FiChevronRight className="w-8 h-8 text-white" />
            </button>
          </>
        )}

        {shouldShowDots && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-4 h-4 rounded-full transition-colors cursor-pointer ring-2 ring-black/50 ${getFullscreenDotClassName(
                  index
                )}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
