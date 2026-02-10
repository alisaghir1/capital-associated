'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import RichTextEditor from '../../../../../components/admin/RichTextEditor';

/**
 * Upload a base64 image to Supabase Storage via API route
 * Returns the public URL of the uploaded image
 */
const uploadImageToStorage = async (base64Data, fileName) => {
  if (!base64Data) return null;
  
  // If it's already a URL (not base64), return it as-is
  if (!base64Data.startsWith('data:')) {
    return base64Data;
  }

  try {
    const response = await fetch('/api/admin/upload-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base64Data,
        fileName,
        bucket: 'images'
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to upload image');
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Inline image compression to avoid build issues
const autoCompressImage = async (input, options = {}) => {
  // Default options
  const defaultOptions = {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.8
  };
  const config = { ...defaultOptions, ...options };

  // If input is null or undefined, return null
  if (!input) {
    console.log('No input provided to autoCompressImage');
    return null;
  }

  // If input is already a data URL string, return it as is (no compression needed for data URLs)
  if (typeof input === 'string' && input.startsWith('data:')) {
    console.log('Input is already a data URL, returning as is');
    return input;
  }

  // Validate that input is a File object
  if (!(input instanceof File)) {
    console.error('Invalid file object passed to autoCompressImage:', typeof input, input);
    return input; // Return original if not a valid file
  }

  // Check if it's an image file
  if (!input.type.startsWith('image/')) {
    console.error('File is not an image:', input.type);
    return input; // Return original if not an image
  }

  console.log('Compressing image file:', input.name, input.size, 'bytes');

  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      try {
        let { width, height } = img;
        
        // Calculate new dimensions
        if (width > height) {
          if (width > config.maxWidth) {
            height = (height * config.maxWidth) / width;
            width = config.maxWidth;
          }
        } else {
          if (height > config.maxHeight) {
            width = (width * config.maxHeight) / height;
            height = config.maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to data URL directly instead of blob
        const dataURL = canvas.toDataURL('image/jpeg', config.quality);
        console.log('Image compressed successfully, new size:', dataURL.length, 'chars');
        resolve(dataURL);
      } catch (error) {
        console.error('Error during image compression:', error);
        reject(error);
      }
    };
    
    img.onerror = (error) => {
      console.error('Error loading image for compression:', error);
      reject(new Error('Failed to load image'));
    };
    
    try {
      const objectURL = URL.createObjectURL(input);
      img.src = objectURL;
      
      // Clean up the object URL after the image loads
      img.onload = (originalOnLoad => {
        return function() {
          URL.revokeObjectURL(objectURL);
          originalOnLoad.call(this);
        };
      })(img.onload);
      
    } catch (error) {
      console.error('Error creating object URL:', error);
      reject(error);
    }
  });
};

const EditBlog = ({ params }) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    hero_image_url: '',
    hero_image_alt: '',
    sections: [{ title: '', content: '', image: '', image_alt: '' }],
    author: '',
    published: false,
    featured: false,
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', resolvedParams.id)
          .single();

        if (error) throw error;

        if (data) {
          // Parse sections from JSON string if needed
          let parsedSections = [];
          try {
            if (data.sections) {
              // If sections is a string, parse it
              if (typeof data.sections === 'string') {
                parsedSections = JSON.parse(data.sections);
              } else if (Array.isArray(data.sections)) {
                parsedSections = data.sections;
              }
            }
            // Ensure we have at least one section
            if (!parsedSections || parsedSections.length === 0) {
              parsedSections = [{ title: '', content: '', image: '', image_alt: '' }];
            }
          } catch (e) {
            console.error('Error parsing sections:', e);
            parsedSections = [{ title: '', content: '', image: '', image_alt: '' }];
          }

          setFormData({
            title: data.title || '',
            slug: data.slug || '',
            content: data.content || '',
            excerpt: data.excerpt || '',
            hero_image_url: data.hero_image_url || '',
            hero_image_alt: data.hero_image_alt || '',
            sections: parsedSections.map(section => ({
              title: section.title || '',
              content: section.content || '',
              image: section.image || '',
              image_alt: section.image_alt || ''
            })),
            author: data.author || 'admin',
            published: data.published || false,
            featured: data.featured || false,
            meta_title: data.meta_title || '',
            meta_description: data.meta_description || '',
            meta_keywords: data.meta_keywords || ''
          });
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        alert('Error loading blog');
      } finally {
        setInitialLoading(false);
      }
    };

    if (resolvedParams.id) {
      fetchBlog();
    }
  }, [resolvedParams.id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (name === 'title') {
      setFormData(prev => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
        meta_title: value
      }));
    } else if (name === 'hero_image_file' && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          hero_image_url: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    } else if (name.startsWith('section_title_')) {
      const index = parseInt(name.split('_')[2]);
      const newSections = [...formData.sections];
      newSections[index].title = value;
      setFormData(prev => ({
        ...prev,
        sections: newSections
      }));
    } else if (name.startsWith('section_content_')) {
      const index = parseInt(name.split('_')[2]);
      const newSections = [...formData.sections];
      newSections[index].content = value;
      setFormData(prev => ({
        ...prev,
        sections: newSections
      }));
    } else if (name.startsWith('section_image_')) {
      const index = parseInt(name.split('_')[2]);
      if (files && files[0]) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const newSections = [...formData.sections];
          newSections[index].image = e.target.result;
          setFormData(prev => ({
            ...prev,
            sections: newSections
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { title: '', content: '', image: '', image_alt: '' }]
    }));
  };

  const removeSection = (index) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title.trim()) {
      alert('Please enter a blog title');
      return;
    }
    if (!formData.slug.trim()) {
      alert('Please enter a URL slug');
      return;
    }
    if (!formData.content.trim()) {
      alert('Please enter blog content');
      return;
    }
    if (!formData.excerpt.trim()) {
      alert('Please enter a brief excerpt');
      return;
    }

    setLoading(true);

    try {
      // Step 1: Compress images for optimal size
      console.log('Compressing images...');
      
      const compressedHeroUrl = formData.hero_image_url ? 
        await autoCompressImage(formData.hero_image_url, { maxWidth: 1200, maxHeight: 800 }) : 
        null;

      const compressedSections = await Promise.all(
        formData.sections.map(async (section) => ({
          ...section,
          image: section.image ? 
            await autoCompressImage(section.image, { maxWidth: 1000, maxHeight: 700 }) : 
            null
        }))
      );

      // Step 2: Upload images to Supabase Storage and get proper URLs
      console.log('Uploading images to storage...');
      
      const uploadedHeroUrl = compressedHeroUrl ? 
        await uploadImageToStorage(compressedHeroUrl, `blog-hero-${formData.slug}`) : 
        null;

      const uploadedSections = await Promise.all(
        compressedSections.map(async (section, index) => ({
          ...section,
          image: section.image ? 
            await uploadImageToStorage(section.image, `blog-section-${formData.slug}-${index}`) : 
            null
        }))
      );

      // Prepare data with proper image URLs (not base64)
      const blogData = {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        excerpt: formData.excerpt,
        hero_image_url: uploadedHeroUrl,
        hero_image_alt: formData.hero_image_alt || formData.title,
        sections: uploadedSections.filter(section => section.title.trim() !== '' || section.content.trim() !== ''),
        author: formData.author || 'admin',
        published: formData.published,
        featured: formData.featured,
        meta_title: formData.meta_title || formData.title,
        meta_description: formData.meta_description || formData.excerpt,
        meta_keywords: formData.meta_keywords,
        updated_at: new Date().toISOString()
      };

      console.log('Updating blog with proper image URLs...');

      const { data, error } = await supabase
        .from('blogs')
        .update(blogData)
        .eq('id', resolvedParams.id)
        .select();

      if (error) {
        if (error.code === '23505') {
          throw new Error('This URL slug is already taken. Please choose a different one.');
        }
        throw error;
      }

      alert('Blog updated successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert(error.message || 'Error updating blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <Link href="/admin" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">📊</span>Dashboard
            </Link>
            <Link href="/admin/blogs" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700">
              <span className="mr-3">📝</span>Blogs
            </Link>
            <Link href="/admin/services" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">🔧</span>Services
            </Link>
            <Link href="/admin/projects" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">🏗️</span>Projects
            </Link>
            <Link href="/admin/careers" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">💼</span>Careers
            </Link>
            <Link href="/admin/team" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">👥</span>Team
            </Link>
            <Link href="/admin/metadata" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">⚙️</span>Site Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Edit Blog Post</h2>
          </div>
        </header>
        
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title * <span className="text-gray-500 font-normal">(The main title of your blog post)</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          title: value,
                          slug: value.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim(),
                          meta_title: value
                        }));
                      }}
                      placeholder="Enter blog title..."
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug <span className="text-gray-500 font-normal">(URL-friendly version, auto-generated from title)</span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <RichTextEditor
                    label="Content *"
                    description="Main content of your blog post - use the toolbar to format text, add images, links, etc."
                    value={formData.content}
                    onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
                    placeholder="Write your blog content here..."
                    minHeight="300px"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt <span className="text-gray-500 font-normal">(Short summary for blog previews and SEO)</span>
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Hero Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image <span className="text-gray-500 font-normal">(Main image displayed at the top of the blog post)</span>
                  </label>
                  <input
                    type="file"
                    name="hero_image_file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {formData.hero_image_url && (
                    <div className="mt-2">
                      <img src={formData.hero_image_url} alt="Hero preview" className="w-32 h-20 object-cover rounded" />
                    </div>
                  )}
                </div>

                {/* Hero Image Alt Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image Alt Text <span className="text-gray-500 font-normal">(SEO: Describe the image for screen readers)</span>
                  </label>
                  <input
                    type="text"
                    name="hero_image_alt"
                    value={formData.hero_image_alt}
                    onChange={handleInputChange}
                    placeholder="e.g., Construction workers building a modern office tower"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Sections */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      Content Sections <span className="text-gray-500 font-normal text-sm">(Add multiple sections with titles, content, and optional images)</span>
                    </h3>
                    <button
                      type="button"
                      onClick={addSection}
                      className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Add Section
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {formData.sections.map((section, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-md font-medium text-gray-800">Section {index + 1}</h4>
                          {formData.sections.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSection(index)}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Remove Section
                            </button>
                          )}
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Section Title <span className="text-gray-500 font-normal">(Heading for this section)</span>
                            </label>
                            <input
                              type="text"
                              value={section.title}
                              onChange={(e) => {
                                const newSections = [...formData.sections];
                                newSections[index].title = e.target.value;
                                setFormData(prev => ({ ...prev, sections: newSections }));
                              }}
                              placeholder="Enter section title..."
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          
                          <div>
                            <RichTextEditor
                              label="Section Content"
                              description="Text content for this section"
                              value={section.content}
                              onChange={(value) => {
                                const newSections = [...formData.sections];
                                newSections[index].content = value;
                                setFormData(prev => ({ ...prev, sections: newSections }));
                              }}
                              placeholder="Write section content here..."
                              minHeight="200px"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Section Image <span className="text-gray-500 font-normal">(Optional image for this section)</span>
                            </label>
                            <input
                              type="file"
                              name={`section_image_${index}`}
                              accept="image/*"
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {section.image && (
                              <div className="mt-2">
                                <img src={section.image} alt={`Section ${index + 1} preview`} className="w-32 h-20 object-cover rounded" />
                              </div>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Section Image Alt Text <span className="text-gray-500 font-normal">(SEO: Describe the section image)</span>
                            </label>
                            <input
                              type="text"
                              value={section.image_alt || ''}
                              onChange={(e) => {
                                const newSections = [...formData.sections];
                                newSections[index].image_alt = e.target.value;
                                setFormData(prev => ({ ...prev, sections: newSections }));
                              }}
                              placeholder="e.g., Architect reviewing construction blueprints"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author <span className="text-gray-500 font-normal">(Name of the blog post author)</span>
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Settings */}
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Published <span className="text-gray-500 font-normal">(Make this blog post visible to the public)</span>
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Featured <span className="text-gray-500 font-normal">(Show this post prominently on the homepage)</span>
                    </span>
                  </label>
                </div>

                {/* SEO */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    SEO Settings <span className="text-gray-500 font-normal text-sm">(Search engine optimization settings)</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title <span className="text-gray-500 font-normal">(Title that appears in search results, auto-filled from main title)</span>
                      </label>
                      <input
                        type="text"
                        name="meta_title"
                        value={formData.meta_title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description <span className="text-gray-500 font-normal">(Description that appears in search results)</span>
                      </label>
                      <textarea
                        name="meta_description"
                        value={formData.meta_description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Keywords <span className="text-gray-500 font-normal">(Comma-separated keywords for SEO)</span>
                      </label>
                      <input
                        type="text"
                        name="meta_keywords"
                        value={formData.meta_keywords}
                        onChange={handleInputChange}
                        placeholder="keyword1, keyword2, keyword3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <Link 
                    href="/admin/blogs"
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update Blog Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditBlog;