'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-md flex items-center justify-center text-gray-500">Loading editor...</div>
});

// Import Quill styles
import 'react-quill-new/dist/quill.snow.css';

// Quill modules configuration
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }, { 'align': [] }],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  }
};

// Quill formats
const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'script',
  'list', 'indent',
  'direction', 'align',
  'blockquote', 'code-block',
  'link', 'image', 'video'
];

const RichTextEditor = ({ 
  value, 
  onChange, 
  placeholder = 'Write your content here...', 
  className = '',
  minHeight = '200px',
  label,
  description
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (content, delta, source, editor) => {
    // Get the HTML content
    const html = editor.getHTML();
    // Check if content is empty (just <p><br></p>)
    const isEmpty = html === '<p><br></p>' || html === '<p></p>' || !html;
    onChange(isEmpty ? '' : html);
  };

  if (!mounted) {
    return (
      <div className={className}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label} {description && <span className="text-gray-500 font-normal">({description})</span>}
          </label>
        )}
        <div 
          className="bg-gray-100 animate-pulse rounded-md flex items-center justify-center text-gray-500"
          style={{ minHeight }}
        >
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {description && <span className="text-gray-500 font-normal">({description})</span>}
        </label>
      )}
      <div className="rich-text-editor-wrapper">
        <ReactQuill
          theme="snow"
          value={value || ''}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          style={{ minHeight }}
        />
      </div>
      <style jsx global>{`
        .rich-text-editor-wrapper .ql-container {
          min-height: ${minHeight};
          font-size: 16px;
          font-family: inherit;
        }
        .rich-text-editor-wrapper .ql-editor {
          min-height: ${minHeight};
        }
        .rich-text-editor-wrapper .ql-toolbar {
          background-color: #f9fafb;
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
          border-color: #d1d5db;
        }
        .rich-text-editor-wrapper .ql-container {
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
          border-color: #d1d5db;
        }
        .rich-text-editor-wrapper .ql-editor:focus {
          outline: none;
        }
        .rich-text-editor-wrapper:focus-within .ql-toolbar,
        .rich-text-editor-wrapper:focus-within .ql-container {
          border-color: #3b82f6;
        }
        .rich-text-editor-wrapper .ql-editor.ql-blank::before {
          color: #9ca3af;
          font-style: normal;
        }
        /* Make sure images in editor are responsive */
        .rich-text-editor-wrapper .ql-editor img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
