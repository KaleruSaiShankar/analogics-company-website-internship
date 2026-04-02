/**
 * Prepend the Vite base URL to image paths
 * @param {string} path - Image path (e.g., '/logo.png' or 'images/about-1.jpg')
 * @returns {string} - Full URL with base path
 */
export const getImagePath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
