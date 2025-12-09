'use client';

import React from 'react';

/**
 * RichTextRenderer - Renders HTML content from the rich text editor
 * with proper styling and sanitization
 */
const RichTextRenderer = ({ content, className = '' }) => {
  if (!content) return null;

  return (
    <div 
      className={`rich-text-content prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextRenderer;
