'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import AdminProtected from '../../components/AdminProtected';
import { logout } from '../../lib/auth';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    blogs: { total: 0, published: 0 },
    services: { total: 0, published: 0 },
    projects: { total: 0, published: 0 },
    careers: { total: 0, published: 0 },
    team: { total: 0, published: 0 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch each table separately to handle missing tables gracefully
      const fetchTableStats = async (tableName) => {
        try {
          const { data, error } = await supabase.from(tableName).select('published');
          if (error && (
            error.code === 'PGRST116' || 
            error.code === '42P01' ||
            error.message?.includes('does not exist')
          )) {
            if (tableName === 'team') {
              console.info('Team table not found - this is normal if you haven\'t run the schema yet.');
            }
            return { total: 0, published: 0 };
          }
          if (error) {
            console.warn(`Error fetching ${tableName} stats:`, error);
            return { total: 0, published: 0 };
          }
          return {
            total: data?.length || 0,
            published: data?.filter(item => item.published).length || 0
          };
        } catch (err) {
          console.warn(`Table ${tableName} not accessible:`, err.message || err);
          return { total: 0, published: 0 };
        }
      };

      const [blogs, services, projects, careers, team] = await Promise.all([
        fetchTableStats('blogs'),
        fetchTableStats('services'),
        fetchTableStats('projects'),
        fetchTableStats('careers'),
        fetchTableStats('team')
      ]);

      setStats({ blogs, services, projects, careers, team });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, total, published, icon, href }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{total}</p>
          <p className="text-sm text-gray-500">{published} published</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
      <div className="mt-4">
        <Link
          href={href}
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Manage {title.toLowerCase()} →
        </Link>
      </div>
    </div>
  );

  return (
    <AdminProtected>
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
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-100 text-blue-700"
            >
              <span className="mr-3">📊</span>
              Dashboard
            </Link>
            <Link
              href="/admin/blogs"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Welcome to Admin Dashboard</h3>
              <p className="text-gray-600">
                Manage your website content, including blogs, services, projects, careers, and site settings.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading statistics...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <StatCard
                  title="Blogs"
                  total={stats.blogs.total}
                  published={stats.blogs.published}
                  icon="📝"
                  href="/admin/blogs"
                />
                <StatCard
                  title="Services"
                  total={stats.services.total}
                  published={stats.services.published}
                  icon="🔧"
                  href="/admin/services"
                />
                <StatCard
                  title="Projects"
                  total={stats.projects.total}
                  published={stats.projects.published}
                  icon="🏗️"
                  href="/admin/projects"
                />
                <StatCard
                  title="Careers"
                  total={stats.careers.total}
                  published={stats.careers.published}
                  icon="💼"
                  href="/admin/careers"
                />
                <StatCard
                  title="Team"
                  total={stats.team.total}
                  published={stats.team.published}
                  icon="👥"
                  href="/admin/team"
                />
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    href="/admin/blogs/new"
                    className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                  >
                    <span className="mr-2">✏️</span>
                    Create New Blog Post
                  </Link>
                  <Link
                    href="/admin/services/new"
                    className="flex items-center px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                  >
                    <span className="mr-2">🔧</span>
                    Add New Service
                  </Link>
                  <Link
                    href="/admin/projects/new"
                    className="flex items-center px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100"
                  >
                    <span className="mr-2">🏗️</span>
                    Add New Project
                  </Link>
                  <Link
                    href="/admin/team/new"
                    className="flex items-center px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 rounded-md hover:bg-orange-100"
                  >
                    <span className="mr-2">👥</span>
                    Add Team Member
                  </Link>
                  <Link
                    href="/admin/careers/new"
                    className="flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100"
                  >
                    <span className="mr-2">💼</span>
                    Post New Job
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Database</span>
                    <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                      Connected
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Content Management</span>
                    <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Team Management</span>
                    <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </AdminProtected>
  );
};

export default AdminDashboard;