'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { autoCompressImage } from '../../../utils/imageCompression.js';

const NewTeamMember = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    position: '',
    bio: '',
    image_url: '',
    sections: [{ title: '', content: '', image: '' }],
    published: false,
    featured: false,
    sort_order: 0,
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  });

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (name === 'name') {
      setFormData(prev => ({
        ...prev,
        name: value,
        slug: generateSlug(value),
        meta_title: `${value} - Team Member | Capital Associated`
      }));
    } else if (name === 'image_file' && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          image_url: e.target.result
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
    
    // Basic validation
    if (!formData.name.trim()) {
      alert('Please enter a name');
      return;
    }
    if (!formData.position.trim()) {
      alert('Please enter a position');
      return;
    }
    if (!formData.slug.trim()) {
      alert('Please enter a URL slug');
      return;
    }

    setLoading(true);

    try {
      // Auto-compress large images to prevent timeouts
      console.log('Compressing images if needed...');
      
      const compressedImageUrl = formData.image_url ? 
        await autoCompressImage(formData.image_url, { maxWidth: 400, maxHeight: 400 }) : 
        formData.image_url;

      // Compress section images
      const compressedSections = await Promise.all(
        formData.sections.map(async (section) => ({
          ...section,
          image: section.image ? 
            await autoCompressImage(section.image, { maxWidth: 600, maxHeight: 400 }) : 
            section.image
        }))
      );

      // Prepare optimized data
      const optimizedData = {
        ...formData,
        image_url: compressedImageUrl || null,
        sections: compressedSections.filter(section => section.title.trim() !== '' || section.content.trim() !== '')
      };

      const { data, error } = await supabase
        .from('team')
        .insert([optimizedData])
        .select();

      if (error) {
        if (error.code === '23505') {
          throw new Error('This URL slug is already taken. Please choose a different one.');
        }
        throw error;
      }

      alert('Team member created successfully!');
      router.push('/admin/team');
    } catch (error) {
      console.error('Error creating team member:', error);
      alert(error.message || 'Error creating team member. Please try again.');
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
            <Link href="/admin/blogs" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
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
            <Link href="/admin/team" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700">
              <span className="mr-3">👥</span>Team
            </Link>
            <Link href="/admin/metadata" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">⚙️</span>Site Settings
            </Link>
          </nav>
          
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center">
              <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Admin&background=0ea5e9&color=fff" alt="Admin" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <Link href="/" className="text-xs text-gray-500 hover:text-gray-700">Back to Site</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Create New Team Member</h2>
          </div>
        </header>
        
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Basic Information */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-gray-500">(will auto-generate slug and meta title)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug <span className="text-gray-500">(auto-generated, edit if needed)</span>
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position/Title <span className="text-gray-500">(job title or role)</span>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="sort_order" className="block text-sm font-medium text-gray-700 mb-2">
                  Display Order <span className="text-gray-500">(lower numbers appear first)</span>
                </label>
                <input
                  type="number"
                  id="sort_order"
                  name="sort_order"
                  value={formData.sort_order}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                Brief Bio <span className="text-gray-500">(short description for card display)</span>
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief professional summary..."
              />
            </div>

            <div className="mt-6">
              <label htmlFor="image_file" className="block text-sm font-medium text-gray-700 mb-2">
                Profile Image <span className="text-gray-500">(team member photo)</span>
              </label>
              <input
                type="file"
                id="image_file"
                name="image_file"
                accept="image/*"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formData.image_url && (
                <div className="mt-4">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                  />
                </div>
              )}
            </div>
          </div>



          {/* Content Sections */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Sections</h2>
            <p className="text-gray-600 mb-4">Add detailed information sections (experience, education, achievements, etc.)</p>
            
            {formData.sections.map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Section {index + 1}</h3>
                  {formData.sections.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove Section
                    </button>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title <span className="text-gray-500">(e.g., "Experience", "Education")</span>
                    </label>
                    <input
                      type="text"
                      name={`section_title_${index}`}
                      value={section.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Section title..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content <span className="text-gray-500">(detailed information)</span>
                    </label>
                    <textarea
                      name={`section_content_${index}`}
                      value={section.content}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Section content..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Image <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="file"
                      name={`section_image_${index}`}
                      accept="image/*"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {section.image && (
                      <div className="mt-2">
                        <img
                          src={section.image}
                          alt="Section preview"
                          className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addSection}
              className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 font-medium"
            >
              + Add Another Section
            </button>
          </div>

          {/* Settings */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="published" className="text-sm font-medium text-gray-700">
                  Published <span className="text-gray-500">(visible on website)</span>
                </label>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Featured <span className="text-gray-500">(highlight on homepage or team page)</span>
                </label>
              </div>
            </div>
          </div>

          {/* SEO Meta Tags */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">SEO Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="meta_title" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title <span className="text-gray-500">(auto-generated, edit if needed)</span>
                </label>
                <input
                  type="text"
                  id="meta_title"
                  name="meta_title"
                  value={formData.meta_title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength="60"
                />
              </div>
              
              <div>
                <label htmlFor="meta_description" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description <span className="text-gray-500">(brief description for search engines)</span>
                </label>
                <textarea
                  id="meta_description"
                  name="meta_description"
                  value={formData.meta_description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength="160"
                  placeholder="Brief description of this team member..."
                />
              </div>
              
              <div>
                <label htmlFor="meta_keywords" className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Keywords <span className="text-gray-500">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="meta_keywords"
                  name="meta_keywords"
                  value={formData.meta_keywords}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="team member, construction, engineering, dubai"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6">
            <Link
              href="/admin/team"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Team Member'}
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

export default NewTeamMember;