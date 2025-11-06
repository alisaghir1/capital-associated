'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';
import { logout } from '../../../lib/auth';

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // Only select fields needed for the admin listing - much faster!
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, published, featured, created_at, updated_at, author')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const { error } = await supabase.from('blogs').delete().eq('id', id);
      if (error) throw error;
      
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting blog post');
    }
  };

  const togglePublished = async (id, currentStatus) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .update({ published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      setBlogs(blogs.map(blog => 
        blog.id === id ? { ...blog, published: !currentStatus } : blog
      ));
    } catch (error) {
      console.error('Error updating blog status:', error);
      alert('Error updating blog status');
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || 
      (filterStatus === 'published' && blog.published) ||
      (filterStatus === 'draft' && !blog.published);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <Link
              href="/admin"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="mr-3">📊</span>
              Dashboard
            </Link>
            <Link
              href="/admin/blogs"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700"
            >
              <span className="mr-3">📝</span>
              Blogs
            </Link>
            <Link
              href="/admin/services"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="mr-3">🔧</span>
              Services
            </Link>
            <Link
              href="/admin/projects"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="mr-3">🏗️</span>
              Projects
            </Link>
            <Link
              href="/admin/careers"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="mr-3">💼</span>
              Careers
            </Link>
            <Link
              href="/admin/team"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="mr-3">👥</span>
              Team
            </Link>
            <Link
              href="/admin/metadata"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="mr-3">⚙️</span>
              Site Settings
            </Link>
          </nav>
          
          {/* User info */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://ui-avatars.com/api/?name=Admin&background=0ea5e9&color=fff"
                  alt="Admin"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <Link href="/" className="text-xs text-gray-500 hover:text-gray-700">
                    Back to Site
                  </Link>
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
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Blog Posts</h2>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
              <Link
                href="/admin/blogs/new"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
              >
                Add New Post
              </Link>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Posts</option>
                    <option value="published">Published</option>
                    <option value="draft">Drafts</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Blog List */}
            <div className="bg-white rounded-lg shadow-md">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading blog posts...</p>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No blog posts found.</p>
                  <Link
                    href="/admin/blogs/new"
                    className="text-blue-600 hover:text-blue-500 mt-2 inline-block"
                  >
                    Create your first blog post
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Author
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredBlogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {blog.hero_image_url && (
                                <img
                                  className="h-10 w-10 rounded-lg object-cover mr-4"
                                  src={blog.hero_image_url}
                                  alt=""
                                />
                              )}
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {blog.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  /{blog.slug}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                blog.published
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {blog.published ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {blog.author}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(blog.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <Link
                              href={`/admin/blogs/edit/${blog.id}`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => togglePublished(blog.id, blog.published)}
                              className="text-green-600 hover:text-green-900"
                            >
                              {blog.published ? 'Unpublish' : 'Publish'}
                            </button>
                            <a
                              href={`/blog/${blog.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-gray-900"
                            >
                              View
                            </a>
                            <button
                              onClick={() => deleteBlog(blog.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogsAdmin;