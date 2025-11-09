'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';

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

const NewService = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    short_description: '',
    icon_url: '',
    hero_image_url: '',
    sections: [{ title: '', content: '', image: '' }],
    features: [''],
    published: false,
    featured: false,
    sort_order: 0,
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  });

  // Store the actual file objects for compression
  const [fileObjects, setFileObjects] = useState({
    icon_file: null,
    hero_image_file: null,
    section_files: {}
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
    } else if (name === 'icon_file' && files && files[0]) {
      const file = files[0];
      // Store the file object for compression
      setFileObjects(prev => ({
        ...prev,
        icon_file: file
      }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          icon_url: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    } else if (name === 'hero_image_file' && files && files[0]) {
      const file = files[0];
      // Store the file object for compression
      setFileObjects(prev => ({
        ...prev,
        hero_image_file: file
      }));
      
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
        // Store the file object for compression
        setFileObjects(prev => ({
          ...prev,
          section_files: {
            ...prev.section_files,
            [index]: file
          }
        }));
        
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
    } else if (name.startsWith('feature_')) {
      const index = parseInt(name.split('_')[1]);
      const newFeatures = [...formData.features];
      newFeatures[index] = value;
      setFormData(prev => ({
        ...prev,
        features: newFeatures
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : (type === 'number' ? parseInt(value) || 0 : value)
      }));
    }
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
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
      alert('Please enter a service title');
      return;
    }
    if (!formData.slug.trim()) {
      alert('Please enter a URL slug');
      return;
    }
    if (!formData.description.trim()) {
      alert('Please enter a service description');
      return;
    }
    if (!formData.short_description.trim()) {
      alert('Please enter a short description');
      return;
    }

    setLoading(true);

    try {
      // Auto-compress large images to prevent timeouts
      console.log('Compressing images if needed...');
      console.log('File objects state:', fileObjects);
      
      // Compress icon using file object if available, otherwise use existing data URL
      const compressedIconUrl = (fileObjects.icon_file && fileObjects.icon_file instanceof File) ? 
        await autoCompressImage(fileObjects.icon_file, { maxWidth: 200, maxHeight: 200 }) : 
        formData.icon_url;
        
      // Compress hero image using file object if available, otherwise use existing data URL
      const compressedHeroUrl = (fileObjects.hero_image_file && fileObjects.hero_image_file instanceof File) ? 
        await autoCompressImage(fileObjects.hero_image_file, { maxWidth: 1200, maxHeight: 800 }) : 
        formData.hero_image_url;

      // Compress section images
      const compressedSections = await Promise.all(
        formData.sections.map(async (section, index) => ({
          title: section.title || '',
          content: section.content || '',
          image: (fileObjects.section_files && fileObjects.section_files[index] && fileObjects.section_files[index] instanceof File) ? 
            await autoCompressImage(fileObjects.section_files[index], { maxWidth: 800, maxHeight: 600 }) : 
            section.image || ''
        }))
      );

      // Clean and format sections data (using compressed images)
      const cleanSections = compressedSections
        .filter(section => section.title.trim() !== '' || section.content.trim() !== '');

      // Clean and format features data
      const cleanFeatures = formData.features
        .filter(feature => feature && feature.trim() !== '')
        .map(feature => feature.trim());

      // Prepare insert data with compressed images
      const insertData = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        short_description: formData.short_description,
        icon_url: compressedIconUrl || null,
        hero_image_url: compressedHeroUrl || null,
        sections: cleanSections,
        features: cleanFeatures,
        published: formData.published,
        featured: formData.featured,
        sort_order: formData.sort_order || 0,
        meta_title: formData.meta_title || null,
        meta_description: formData.meta_description || null,
        meta_keywords: formData.meta_keywords || null
      };

      console.log('Creating service with optimized data...');

      const { data, error } = await supabase
        .from('services')
        .insert([insertData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        if (error.code === '23505') {
          throw new Error('This URL slug is already taken. Please choose a different one.');
        }
        if (error.code === '57014') {
          throw new Error('Request timeout - please try reducing image sizes or contact support.');
        }
        throw new Error(error.message || 'Database insert failed');
      }

      alert('Service created successfully!');
      router.push('/admin/services');
    } catch (error) {
      console.error('Error creating service:', error);
      alert(error.message || 'Error creating service. Please try again.');
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
            <Link href="/admin/services" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700">
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
            <h2 className="text-2xl font-semibold text-gray-800">Create New Service</h2>
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
                      Title * <span className="text-gray-500 font-normal">(The main title of your service)</span>
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

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description * <span className="text-gray-500 font-normal">(Detailed description of your service)</span>
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
                    Short Description <span className="text-gray-500 font-normal">(Brief summary for service cards and previews)</span>
                  </label>
                  <textarea
                    name="short_description"
                    value={formData.short_description}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Icon <span className="text-gray-500 font-normal">(Small icon representing this service)</span>
                    </label>
                    <input
                      type="file"
                      name="icon_file"
                      accept="image/*"
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formData.icon_url && (
                      <div className="mt-2">
                        <img src={formData.icon_url} alt="Icon preview" className="w-16 h-16 object-cover rounded" />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
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
                </div>

                {/* Sections */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-medium text-gray-700">Content Sections</label>
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input
                              type="text"
                              name={`section_title_${index}`}
                              value={section.title}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Section Content</label>
                            <textarea
                              name={`section_content_${index}`}
                              value={section.content}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Section Image (Optional)</label>
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

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                  <div className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          name={`feature_${index}`}
                          value={feature}
                          onChange={handleInputChange}
                          placeholder={`Feature ${index + 1}`}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formData.features.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="px-3 py-2 text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addFeature}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Feature
                    </button>
                  </div>
                </div>

                {/* Settings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort Order</label>
                    <input
                      type="number"
                      name="sort_order"
                      value={formData.sort_order}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Published
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Featured
                    </label>
                  </div>
                </div>

                {/* SEO Meta */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                      <input
                        type="text"
                        name="meta_title"
                        value={formData.meta_title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                      <textarea
                        name="meta_description"
                        value={formData.meta_description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Keywords</label>
                      <input
                        type="text"
                        name="meta_keywords"
                        value={formData.meta_keywords}
                        onChange={handleInputChange}
                        placeholder="Comma separated keywords"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between pt-6 border-t">
                  <Link href="/admin/services" className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? 'Creating...' : 'Create Service'}
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

export default NewService;