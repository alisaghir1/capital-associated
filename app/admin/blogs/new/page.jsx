'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { autoCompressImage } from '../../../utils/imageCompression.js';

const NewBlog = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    hero_image_url: '',
    sections: [{ title: '', content: '', image: '' }],
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
      sections: [...prev.sections, { title: '', content: '', image: '' }]
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
      // Auto-compress large images to prevent timeouts
      console.log('Compressing images if needed...');
      
      const compressedFeaturedUrl = formData.featured_image_url ? 
        await autoCompressImage(formData.featured_image_url, { maxWidth: 1200, maxHeight: 800 }) : 
        formData.featured_image_url;

      // Compress section images
      const compressedSections = await Promise.all(
        formData.sections.map(async (section) => ({
          ...section,
          image: section.image ? 
            await autoCompressImage(section.image, { maxWidth: 800, maxHeight: 600 }) : 
            section.image
        }))
      );

      // Prepare optimized data
      const optimizedData = {
        ...formData,
        featured_image_url: compressedFeaturedUrl || null,
        sections: compressedSections.filter(section => section.title.trim() !== '' || section.content.trim() !== '')
      };

      console.log('Creating blog with optimized data...');

      const { data, error } = await supabase
        .from('blogs')
        .insert([optimizedData])
        .select();

      if (error) {
        if (error.code === '23505') {
          throw new Error('This URL slug is already taken. Please choose a different one.');
        }
        if (error.code === '57014') {
          throw new Error('Request timeout - please try reducing image sizes or contact support.');
        }
        throw error;
      }

      alert('Blog created successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error creating blog:', error);
      alert(error.message || 'Error creating blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            <h2 className="text-2xl font-semibold text-gray-800">Create New Blog Post</h2>
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
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug * <span className="text-gray-500 font-normal">(URL-friendly version, auto-generated from title)</span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content * <span className="text-gray-500 font-normal">(Main content of your blog post)</span>
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt * <span className="text-gray-500 font-normal">(Short summary for blog previews and SEO)</span>
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    required
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
                              name={`section_title_${index}`}
                              value={section.title}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Section Content <span className="text-gray-500 font-normal">(Text content for this section)</span>
                            </label>
                            <textarea
                              name={`section_content_${index}`}
                              value={section.content}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
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
                    {loading ? 'Creating...' : 'Create Blog Post'}
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

export default NewBlog;
