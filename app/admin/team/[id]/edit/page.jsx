'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import RichTextEditor from '../../../../../components/admin/RichTextEditor';

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

const EditTeamMember = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resolvedParams, setResolvedParams] = useState(null);
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

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrapped = await params;
      setResolvedParams(unwrapped);
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (resolvedParams?.id) {
      fetchTeamMember();
    }
  }, [resolvedParams]);

  const fetchTeamMember = async () => {
    try {
      const { data, error } = await supabase
        .from('team')
        .select('*')
        .eq('id', resolvedParams.id)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          name: data.name || '',
          slug: data.slug || '',
          position: data.position || '',
          bio: data.bio || '',
          image_url: data.image_url || '',
          sections: (data.sections || [{ title: '', content: '', image: '' }]).map(section => ({
            title: section.title || '',
            content: section.content || '',
            image: section.image || ''
          })),
          published: data.published || false,
          featured: data.featured || false,
          sort_order: data.sort_order || 0,
          meta_title: data.meta_title || '',
          meta_description: data.meta_description || '',
          meta_keywords: data.meta_keywords || ''
        });
      }
    } catch (error) {
      console.error('Error fetching team member:', error);
      alert('Error loading team member');
      router.push('/admin/team');
    } finally {
      setLoading(false);
    }
  };

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

    setSaving(true);

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

      const optimizedData = {
        ...formData,
        image_url: compressedImageUrl || null,
        sections: compressedSections,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('team')
        .update(optimizedData)
        .eq('id', resolvedParams.id);

      if (error) {
        if (error.code === '23505') {
          throw new Error('This URL slug is already taken. Please choose a different one.');
        }
        throw error;
      }

      alert('Team member updated successfully!');
      router.push('/admin/team');
    } catch (error) {
      console.error('Error updating team member:', error);
      alert(error.message || 'Error updating team member. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">Loading team member...</div>
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
            <h2 className="text-2xl font-semibold text-gray-800">Edit Team Member</h2>
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
                <RichTextEditor
                  label="Full Name"
                  description="will auto-generate slug and meta title"
                  value={formData.name}
                  onChange={(value) => {
                    const plainText = value.replace(/<[^>]*>/g, '');
                    setFormData(prev => ({
                      ...prev,
                      name: value,
                      slug: plainText.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim(),
                      meta_title: plainText
                    }));
                  }}
                  placeholder="Enter team member name..."
                  minHeight="80px"
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
              <RichTextEditor
                label="Brief Bio"
                description="short description for card display"
                value={formData.bio}
                onChange={(value) => setFormData(prev => ({ ...prev, bio: value }))}
                placeholder="Brief professional summary..."
                minHeight="150px"
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
                    <RichTextEditor
                      label="Section Title"
                      description="e.g., Experience, Education"
                      value={section.title}
                      onChange={(value) => {
                        const newSections = [...formData.sections];
                        newSections[index].title = value;
                        setFormData(prev => ({ ...prev, sections: newSections }));
                      }}
                      placeholder="Enter section title..."
                      minHeight="80px"
                    />
                  </div>
                  
                  <div>
                    <RichTextEditor
                      label="Content"
                      description="detailed information"
                      value={section.content}
                      onChange={(value) => {
                        const newSections = [...formData.sections];
                        newSections[index].content = value;
                        setFormData(prev => ({ ...prev, sections: newSections }));
                      }}
                      placeholder="Section content..."
                      minHeight="200px"
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
              disabled={saving}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Update Team Member'}
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

export default EditTeamMember;