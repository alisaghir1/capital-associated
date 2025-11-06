'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';
import { logout } from '../../../lib/auth';
import { autoCompressImage } from '../../utils/imageCompression.js';

const SiteMetadata = () => {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    fetchMetadata();
  }, []);

  const fetchMetadata = async () => {
    try {
      const { data, error } = await supabase
        .from('site_metadata')
        .select('*');

      if (error) throw error;

      // Convert array of key-value pairs to object
      const metadataObj = {};
      data.forEach(item => {
        metadataObj[item.key] = item.value;
      });
      
      setMetadata(metadataObj);
    } catch (error) {
      console.error('Error fetching metadata:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (key, value) => {
    setMetadata(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleFileChange = (key, e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setMetadata(prev => ({
          ...prev,
          [key]: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateMetadata = async (key, value) => {
    try {
      console.log(`Updating metadata: ${key} = ${value?.substring ? value.substring(0, 50) + '...' : value}`);
      
      // First try to update existing record
      const { data: updateResult, error: updateError } = await supabase
        .from('site_metadata')
        .update({ value, updated_at: new Date().toISOString() })
        .eq('key', key)
        .select();

      // If no rows were updated, insert a new record
      if (updateResult && updateResult.length === 0) {
        const { error: insertError } = await supabase
          .from('site_metadata')
          .insert([{ key, value, updated_at: new Date().toISOString() }]);
        
        if (insertError) {
          console.error(`Insert error for ${key}:`, insertError);
          throw insertError;
        }
        console.log(`✅ Inserted new metadata: ${key}`);
      } else if (updateError) {
        console.error(`Update error for ${key}:`, updateError);
        throw updateError;
      } else {
        console.log(`✅ Updated existing metadata: ${key}`);
      }
    } catch (error) {
      console.error(`Error updating metadata ${key}:`, error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      // Auto-compress images before updating
      console.log('Compressing metadata images if needed...');
      
      const compressedMetadata = { ...metadata };
      
      // Compress logo if it's a base64 image
      if (compressedMetadata.site_logo && compressedMetadata.site_logo.startsWith('data:')) {
        compressedMetadata.site_logo = await autoCompressImage(compressedMetadata.site_logo, { 
          maxWidth: 300, maxHeight: 150 
        });
      }
      
      // Update all metadata entries
      const updatePromises = Object.entries(compressedMetadata).map(([key, value]) =>
        updateMetadata(key, value)
      );

      await Promise.all(updatePromises);
      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error updating settings:', error);
      alert('Error updating settings');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading settings...</p>
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
            <Link href="/admin/team" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span className="mr-3">👥</span>Team
            </Link>
            <Link href="/admin/metadata" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700">
              <span className="mr-3">⚙️</span>Site Settings
            </Link>
          </nav>
          
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Admin&background=0ea5e9&color=fff" alt="Admin" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <Link href="/" className="text-xs text-gray-500 hover:text-gray-700">Back to Site</Link>
                </div>
              </div>
              <button
                onClick={logout}
                className="text-xs text-red-500 hover:text-red-700 font-medium"
                title="Logout"
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Site Settings</h2>
          </div>
        </header>
        
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Company Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Company Information</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={metadata.company_name || ''}
                      onChange={(e) => handleInputChange('company_name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Tagline</label>
                    <input
                      type="text"
                      value={metadata.company_tagline || ''}
                      onChange={(e) => handleInputChange('company_tagline', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
                  <textarea
                    value={metadata.company_description || ''}
                    onChange={(e) => handleInputChange('company_description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={metadata.contact_phone || ''}
                      onChange={(e) => handleInputChange('contact_phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={metadata.contact_email || ''}
                      onChange={(e) => handleInputChange('contact_email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Office Address</label>
                  <textarea
                    value={metadata.contact_address || ''}
                    onChange={(e) => handleInputChange('contact_address', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
                    <input
                      type="text"
                      value={metadata.business_hours || ''}
                      onChange={(e) => handleInputChange('business_hours', e.target.value)}
                      placeholder="e.g., Mon-Fri 9AM-6PM"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                    <input
                      type="tel"
                      value={metadata.emergency_contact || ''}
                      onChange={(e) => handleInputChange('emergency_contact', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Social Media Links</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                    <input
                      type="url"
                      value={metadata.social_facebook || ''}
                      onChange={(e) => handleInputChange('social_facebook', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                    <input
                      type="url"
                      value={metadata.social_instagram || ''}
                      onChange={(e) => handleInputChange('social_instagram', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                    <input
                      type="url"
                      value={metadata.social_linkedin || ''}
                      onChange={(e) => handleInputChange('social_linkedin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                    <input
                      type="url"
                      value={metadata.social_twitter || ''}
                      onChange={(e) => handleInputChange('social_twitter', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">YouTube URL</label>
                    <input
                      type="url"
                      value={metadata.social_youtube || ''}
                      onChange={(e) => handleInputChange('social_youtube', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* SEO Settings */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">SEO Settings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Meta Title</label>
                    <input
                      type="text"
                      value={metadata.site_meta_title || ''}
                      onChange={(e) => handleInputChange('site_meta_title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Meta Description</label>
                    <textarea
                      value={metadata.site_meta_description || ''}
                      onChange={(e) => handleInputChange('site_meta_description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Meta Keywords</label>
                    <input
                      type="text"
                      value={metadata.site_meta_keywords || ''}
                      onChange={(e) => handleInputChange('site_meta_keywords', e.target.value)}
                      placeholder="Comma separated keywords"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
                      <input
                        type="text"
                        value={metadata.google_analytics_id || ''}
                        onChange={(e) => handleInputChange('google_analytics_id', e.target.value)}
                        placeholder="G-XXXXXXXXXX"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Google Tag Manager ID</label>
                      <input
                        type="text"
                        value={metadata.google_tag_manager_id || ''}
                        onChange={(e) => handleInputChange('google_tag_manager_id', e.target.value)}
                        placeholder="GTM-XXXXXXX"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Configuration */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Site Configuration</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange('site_logo', e)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {metadata.site_logo && (
                      <div className="mt-2">
                        <img src={metadata.site_logo} alt="Logo preview" className="w-32 h-16 object-contain rounded" />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Favicon</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange('site_favicon', e)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {metadata.site_favicon && (
                      <div className="mt-2">
                        <img src={metadata.site_favicon} alt="Favicon preview" className="w-8 h-8 object-contain rounded" />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Copyright Text</label>
                    <input
                      type="text"
                      value={metadata.copyright_text || ''}
                      onChange={(e) => handleInputChange('copyright_text', e.target.value)}
                      placeholder="© 2024 Company Name. All rights reserved."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Policy URL</label>
                    <input
                      type="url"
                      value={metadata.privacy_policy_url || ''}
                      onChange={(e) => handleInputChange('privacy_policy_url', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={updating}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {updating ? 'Updating...' : 'Update Settings'}
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SiteMetadata;