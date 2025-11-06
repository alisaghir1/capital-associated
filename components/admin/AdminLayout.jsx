import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  
  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/blogs', label: 'Blogs', icon: '📝' },
    { href: '/admin/services', label: 'Services', icon: '🔧' },
    { href: '/admin/projects', label: 'Projects', icon: '🏗️' },
    { href: '/admin/careers', label: 'Careers', icon: '💼' },
    { href: '/admin/team', label: 'Team', icon: '👥' },
    { href: '/admin/metadata', label: 'Site Settings', icon: '⚙️' },
  ];

  const isActive = (href) => {
    if (href === '/admin') {
      return router.pathname === '/admin';
    }
    return router.pathname.startsWith(href);
  };

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
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* User info */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://ui-avatars.com/api/?name=Admin&background=0ea5e9&color=fff"
                alt="Admin"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {menuItems.find(item => isActive(item.href))?.label || 'Dashboard'}
            </h2>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;