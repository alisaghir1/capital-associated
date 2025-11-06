'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import { autoCompressImage } from '@/app/utils/imageCompression';

const EditProject = ({ params }) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    short_description: '',
    client_name: '',
    project_type: '',
    location: '',
    completion_date: '',
    project_size: '',
    hero_image_url: '',
    hero_video_url: '',
    sections: [{ title: '', content: '', image: '' }],
    published: false,
    featured: false,
    sort_order: 0,
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
    const fetchProject = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', resolvedParams.id)
          .single();

        if (error) throw error;

        if (data) {
          setFormData({
            title: data.title || '',
            slug: data.slug || '',
            description: data.description || '',
            short_description: data.short_description || '',
            client_name: data.client_name || '',
            project_type: data.project_type || '',
            location: data.location || '',
            hero_image_url: data.hero_image_url || '',
            hero_video_url: data.hero_video_url || '',
            sections: (data.sections || [{ title: '', content: '', image: '' }]).map(section => ({
              title: section.title || '',
              content: section.content || '',
              image: section.image || ''
            })),
            completion_date: data.completion_date || '',
            published: data.published || false,
            featured: data.featured || false,
            sort_order: data.sort_order || 0,
            meta_title: data.meta_title || '',
            meta_description: data.meta_description || '',
            meta_keywords: data.meta_keywords || ''
          });
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        alert('Error loading project');
      } finally {
        setInitialLoading(false);
      }
    };

    if (resolvedParams.id) {
      fetchProject();
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
    } else if (name === 'hero_video_file' && files && files[0]) {
      const file = files[0];
      
      // Check file size (50MB limit)
      if (file.size > 50 * 1024 * 1024) {
        alert('Video file size must be less than 50MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          hero_video_url: e.target.result
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
        [name]: type === 'checkbox' ? checked : (type === 'number' ? parseInt(value) || 0 : value)
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
      alert('Please enter a project title');
      return;
    }
    if (!formData.slug.trim()) {
      alert('Please enter a URL slug');
      return;
    }
    if (!formData.description.trim()) {
      alert('Please enter a project description');
      return;
    }
    if (!formData.location.trim()) {
      alert('Please enter the project location');
      return;
    }

    setLoading(true);

    try {
      // Auto-compress large images to prevent timeouts
      console.log('Compressing images if needed...');
      
      const compressedImageUrl = formData.hero_image_url ? 
        await autoCompressImage(formData.hero_image_url, { maxWidth: 1200, maxHeight: 800 }) : 
        formData.hero_image_url;

      // Compress section images
      const compressedSections = await Promise.all(
        formData.sections.map(async (section) => ({
          ...section,
          image: section.image ? 
            await autoCompressImage(section.image, { maxWidth: 800, maxHeight: 600 }) : 
            section.image
        }))
      );

      const { data, error } = await supabase
        .from('projects')
        .update({
          ...formData,
          hero_image_url: compressedImageUrl || null,
          completion_date: formData.completion_date || null, // Convert empty string to null
          sections: compressedSections.filter(section => section.title.trim() !== '' || section.content.trim() !== ''),
          updated_at: new Date().toISOString()
        })
        .eq('id', resolvedParams.id)
        .select();

      if (error) {
        if (error.code === '23505') {
          throw new Error('This URL slug is already taken. Please choose a different one.');
        }
        throw error;
      }

      alert('Project updated successfully!');
      router.push('/admin/projects');
    } catch (error) {
      console.error('Error updating project:', error);
      alert(error.message || 'Error updating project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project...</p>
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
            <Link href="/admin/blogs" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">📝</span>Blogs
            </Link>
            <Link href="/admin/services" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">🔧</span>Services
            </Link>
            <Link href="/admin/projects" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700">
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
            <h2 className="text-2xl font-semibold text-gray-800">Edit Project</h2>
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
                      Title * <span className="text-gray-500 font-normal">(The main title of your project)</span>
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

                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Name <span className="text-gray-500 font-normal">(Name of the client or organization)</span>
                    </label>
                    <input
                      type="text"
                      name="client_name"
                      value={formData.client_name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type <span className="text-gray-500 font-normal">(Category or type of construction project)</span>
                    </label>
                    <input
                      type="text"
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location <span className="text-gray-500 font-normal">(Project location or address)</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Completion Date <span className="text-gray-500 font-normal"></span>
                    </label>
                    <input
                      type="date"
                      name="completion_date"
                      value={formData.completion_date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Size <span className="text-gray-500 font-normal">(Square footage, floors, etc.)</span>
                    </label>
                    <input
                      type="text"
                      name="project_size"
                      value={formData.project_size}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description * <span className="text-gray-500 font-normal">(Detailed description of your project)</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description <span className="text-gray-500 font-normal">(Brief summary for project cards and previews)</span>
                  </label>
                  <textarea
                    name="short_description"
                    value={formData.short_description}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Hero Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image <span className="text-gray-500 font-normal">(Main image displayed at the top of the project page)</span>
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

                {/* Hero Video */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Video 
                    <span className="text-gray-500 font-normal">(Optional - will override image if provided)</span>
                  </label>
                  
                  {/* Video File Upload */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Upload Video File</label>
                    <input
                      type="file"
                      name="hero_video_file"
                      accept="video/*"
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Supported formats: MP4, WebM, MOV, AVI (Max: 50MB)</p>
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center my-3">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-3 text-gray-500 bg-white text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  {/* Video URL Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Video URL</label>
                    <input
                      type="url"
                      name="hero_video_url"
                      value={formData.hero_video_url}
                      onChange={handleInputChange}
                      placeholder="https://example.com/video.mp4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  {formData.hero_video_url && (
                    <div className="mt-2">
                      <video 
                        src={formData.hero_video_url} 
                        className="w-48 h-32 object-cover rounded"
                        controls
                        muted
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    Note: If both image and video are provided, video will take priority and be displayed instead of the image.
                  </p>
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

                {/* Settings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Published <span className="text-gray-500 font-normal">(Make this project visible to the public)</span>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Featured <span className="text-gray-500 font-normal">(Show prominently on homepage)</span>
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sort Order <span className="text-gray-500 font-normal">(Display order, lower numbers first)</span>
                    </label>
                    <input
                      type="number"
                      name="sort_order"
                      value={formData.sort_order}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
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
                    href="/admin/projects"
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update Project'}
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

export default EditProject;