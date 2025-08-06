/**
 * Utility functions for handling media files (images and videos)
 */

/**
 * Check if a file is a video based on its extension
 * @param {string} src - The file source/path
 * @returns {boolean} - True if it's a video file
 */
export const isVideoFile = (src) => {
  if (!src) return false;
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"];
  return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
};
