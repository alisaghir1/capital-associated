/**
 * Utility functions for handling rich text content
 */

/**
 * Strip HTML tags from a string to get plain text
 * @param {string} html - The HTML string to strip
 * @returns {string} - Plain text without HTML tags
 */
export const stripHtmlTags = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
};

/**
 * Check if a string contains HTML tags
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string contains HTML tags
 */
export const containsHtml = (str) => {
  if (!str) return false;
  return /<[^>]*>/g.test(str);
};

/**
 * Safely render text - if it contains HTML, wrap it, otherwise return plain text
 * @param {string} text - The text to render
 * @returns {string} - The text ready for display
 */
export const safeText = (text) => {
  if (!text) return '';
  return stripHtmlTags(text);
};

/**
 * Get the first N sentences of plain text (HTML tags stripped first)
 * @param {string} html - The source text, may contain HTML
 * @param {number} count - Number of sentences to keep
 * @returns {string} - The truncated plain text
 */
export const getFirstSentences = (html, count = 2) => {
  const text = stripHtmlTags(html);
  if (!text) return '';
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  return sentences.slice(0, count).join(' ').trim();
};

export default {
  stripHtmlTags,
  containsHtml,
  safeText,
  getFirstSentences,
};
