'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';

const NewCareer = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    job_title: '',
    slug: '',
    department: '',
    location: '',
    employment_type: 'Full-time',
    experience_level: 'Mid-level',
    salary_range: '',
    job_description: '',
    requirements: [''],
    responsibilities: [''],
    benefits: [''],
    application_email: '',
    application_url: '',
    published: false,
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
    const { name, value, type, checked } = e.target;
    
    if (name === 'job_title') {
      setFormData(prev => ({
        ...prev,
        job_title: value,
        slug: generateSlug(value),
        meta_title: value
      }));
    } else if (name.startsWith('requirement_')) {
      const index = parseInt(name.split('_')[1]);
      const newRequirements = [...formData.requirements];
      newRequirements[index] = value;
      setFormData(prev => ({
        ...prev,
        requirements: newRequirements
      }));
    } else if (name.startsWith('responsibility_')) {
      const index = parseInt(name.split('_')[1]);
      const newResponsibilities = [...formData.responsibilities];
      newResponsibilities[index] = value;
      setFormData(prev => ({
        ...prev,
        responsibilities: newResponsibilities
      }));
    } else if (name.startsWith('benefit_')) {
      const index = parseInt(name.split('_')[1]);
      const newBenefits = [...formData.benefits];
      newBenefits[index] = value;
      setFormData(prev => ({
        ...prev,
        benefits: newBenefits
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.job_title.trim()) {
      alert('Please enter a job title');
      return;
    }
    if (!formData.slug.trim()) {
      alert('Please enter a URL slug');
      return;
    }
    if (!formData.job_description.trim()) {
      alert('Please enter a job description');
      return;
    }
    if (!formData.department.trim()) {
      alert('Please enter a department');
      return;
    }
    if (!formData.location.trim()) {
      alert('Please enter a location');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('careers')
        .insert([{
          ...formData,
          requirements: formData.requirements.filter(req => req.trim() !== ''),
          responsibilities: formData.responsibilities.filter(resp => resp.trim() !== ''),
          benefits: formData.benefits.filter(benefit => benefit.trim() !== '')
        }])
        .select();

      if (error) {
        if (error.code === '23505') {
          throw new Error('This URL slug is already taken. Please choose a different one.');
        }
        throw error;
      }

      alert('Job posting created successfully!');
      router.push('/admin/careers');
    } catch (error) {
      console.error('Error creating career:', error);
      alert(error.message || 'Error creating job posting. Please try again.');
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
            <Link href="/admin/careers" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700">
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
            <h2 className="text-2xl font-semibold text-gray-800">Create New Job Posting</h2>
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
                      Job Title * <span className="text-gray-500 font-normal">(The title of the job position)</span>
                    </label>
                    <input
                      type="text"
                      name="job_title"
                      value={formData.job_title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug <span className="text-gray-500 font-normal">(URL-friendly version, auto-generated from job title)</span>
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

                {/* Job Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                    <select
                      name="employment_type"
                      value={formData.employment_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                    <select
                      name="experience_level"
                      value={formData.experience_level}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Entry-level">Entry-level</option>
                      <option value="Mid-level">Mid-level</option>
                      <option value="Senior-level">Senior-level</option>
                      <option value="Executive">Executive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                    <input
                      type="text"
                      name="salary_range"
                      value={formData.salary_range}
                      onChange={handleInputChange}
                      placeholder="e.g., $50,000 - $70,000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
                  <textarea
                    name="job_description"
                    value={formData.job_description}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                  <div className="space-y-2">
                    {formData.requirements.map((requirement, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          name={`requirement_${index}`}
                          value={requirement}
                          onChange={handleInputChange}
                          placeholder={`Requirement ${index + 1}`}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formData.requirements.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('requirements', index)}
                            className="px-3 py-2 text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem('requirements')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Requirement
                    </button>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities</label>
                  <div className="space-y-2">
                    {formData.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          name={`responsibility_${index}`}
                          value={responsibility}
                          onChange={handleInputChange}
                          placeholder={`Responsibility ${index + 1}`}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formData.responsibilities.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('responsibilities', index)}
                            className="px-3 py-2 text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem('responsibilities')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Responsibility
                    </button>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Benefits</label>
                  <div className="space-y-2">
                    {formData.benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          name={`benefit_${index}`}
                          value={benefit}
                          onChange={handleInputChange}
                          placeholder={`Benefit ${index + 1}`}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formData.benefits.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('benefits', index)}
                            className="px-3 py-2 text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem('benefits')}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Benefit
                    </button>
                  </div>
                </div>

                {/* Application Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Application Email</label>
                    <input
                      type="email"
                      name="application_email"
                      value={formData.application_email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Application URL</label>
                    <input
                      type="url"
                      name="application_url"
                      value={formData.application_url}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Settings */}
                <div>
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
                  <Link href="/admin/careers" className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? 'Creating...' : 'Create Job Posting'}
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

export default NewCareer;