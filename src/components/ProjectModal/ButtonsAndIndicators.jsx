import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCarouselDots } from "./hooks/useCarouselDots";

export default function ButtonsAndIndicators({
  scrollPrev,
  scrollNext,
  scrollTo,
  currentImageIndex,
  projectImages,
}) {
  const { getDotClassName } = useCarouselDots(
    null,
    currentImageIndex,
    projectImages
  );

  return (
    <>
      <button
        id="prev-button"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg z-10"
      >
        <FiChevronLeft className="w-6 h-6 text-gray-900" />
      </button>
      <button
        id="next-button"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg z-10"
      >
        <FiChevronRight className="w-6 h-6 text-gray-900" />
      </button>
      <div
        id="dots-indicator"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10"
      >
        {projectImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${getDotClassName(
              index
            )}`}
          />
        ))}
      </div>
    </>
  );
}
