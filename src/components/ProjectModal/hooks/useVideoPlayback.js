import { useEffect, useRef } from "react";
import { isVideoFile, controlVideoPlayback } from "../../../utils/mediaUtils";

export function useVideoPlayback(projectImages, currentImageIndex) {
  const videoRefs = useRef([]);

  useEffect(() => {
    projectImages.forEach((media, index) => {
      if (isVideoFile(media) && videoRefs.current[index]) {
        controlVideoPlayback(
          videoRefs.current[index],
          index === currentImageIndex
        );
      }
    });
  }, [currentImageIndex, projectImages]);

  return videoRefs;
}
