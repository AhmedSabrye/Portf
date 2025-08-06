import { useCallback } from "react";

export const useCarouselNavigation = (emblaApi) => {
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const canScrollPrev = useCallback(() => {
    return emblaApi ? emblaApi.canScrollPrev() : false;
  }, [emblaApi]);

  const canScrollNext = useCallback(() => {
    return emblaApi ? emblaApi.canScrollNext() : false;
  }, [emblaApi]);

  return {
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  };
};
