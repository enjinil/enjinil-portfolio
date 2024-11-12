/**
 * Calculates the reading duration of a text in minutes
 * @param {string} content - The text content to analyze
 * @param {number} wordsPerMinute - Average reading speed (default: 225 words per minute)
 * @returns {string} Reading duration formatted as "X min"
 */
export function readingDuration(content, wordsPerMinute = 225) {
  // Remove extra whitespace and split into words
  const words = content
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ');
  
  // Calculate minutes
  const minutes = Math.ceil(words.length / wordsPerMinute);
  
  // Handle special cases
  if (minutes < 1) {
      return '1 min';
  }
  
  return `${minutes} min`;
}
