export const isVideoFile = (src) => {
  if (!src) return false;
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"];
  return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
};

export const controlVideoPlayback = (videoElement, isActive) => {
  if (!videoElement) return;

  if (isActive) {
    videoElement.play().catch(console.error);
  } else {
    videoElement.pause();
    videoElement.currentTime = 0; // Reset to beginning
  }
};

export const getVideoElements = (container) => {
  return container ? container.querySelectorAll("video") : [];
};
