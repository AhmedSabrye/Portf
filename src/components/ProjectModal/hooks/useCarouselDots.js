import { useCallback, useEffect } from "react";

export const useCarouselDots = (
  emblaApi,
  currentImageIndex,
  projectImages,
  onIndexChange
) => {
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );
  // Handle carousel selection
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    onIndexChange(newIndex);
  }, [emblaApi, onIndexChange]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Sync to external index changes (from inline) and initial setup
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(currentImageIndex);
    }
  }, [emblaApi, currentImageIndex]);

  const getDotClassName = useCallback(
    (
      index,
      baseActiveClass = "bg-primary",
      baseInactiveClass = "bg-white/60 hover:bg-white/80"
    ) => {
      return index === currentImageIndex ? baseActiveClass : baseInactiveClass;
    },
    [currentImageIndex]
  );

  const getFullscreenDotClassName = useCallback(
    (index) => {
      return index === currentImageIndex
        ? "bg-primary cursor-pointer ring-4 ring-black"
        : "bg-primary/40 hover:bg-primary/60 cursor-pointer ring-2 ring-black/50";
    },
    [currentImageIndex]
  );

  const shouldShowDots = projectImages && projectImages.length > 1;

  const dotsData = projectImages
    ? projectImages.map((_, index) => ({
        index,
        isActive: index === currentImageIndex,
        onClick: () => scrollTo(index),
      }))
    : [];

  return {
    scrollTo,
    getDotClassName,
    getFullscreenDotClassName,
    shouldShowDots,
    dotsData,
  };
};
