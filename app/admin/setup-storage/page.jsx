'use client';

import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';

const StorageSetup = () => {
  const [status, setStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addStatus = (message) => {
    setStatus(prev => [...prev, message]);
  };

  const createStorageBuckets = async () => {
    setIsLoading(true);
    setStatus([]);
    
    const buckets = [
      { id: 'services', name: 'Services Images' },
      { id: 'projects', name: 'Projects Images' },
      { id: 'blogs', name: 'Blog Images' },
      { id: 'team', name: 'Team Images' },
      { id: 'images', name: 'General Images' }
    ];

    addStatus('🚀 Starting storage bucket setup...');

    try {
      // First, list existing buckets
      const { data: existingBuckets, error: listError } = await supabase.storage.listBuckets();
      
      if (listError) {
        addStatus(`❌ Error listing buckets: ${listError.message}`);
        setIsLoading(false);
        return;
      }

      addStatus(`📋 Found ${existingBuckets.length} existing buckets`);

      for (const bucket of buckets) {
        try {
          const bucketExists = existingBuckets.some(b => b.id === bucket.id);
          
          if (!bucketExists) {
            addStatus(`📦 Creating bucket: ${bucket.id}...`);
            
            const { data, error } = await supabase.storage.createBucket(bucket.id, {
              public: true,
              allowedMimeTypes: ['image/*'],
              fileSizeLimit: 10485760 // 10MB
            });

            if (error) {
              addStatus(`❌ Error creating ${bucket.id}: ${error.message}`);
            } else {
              addStatus(`✅ Successfully created bucket: ${bucket.id}`);
            }
          } else {
            addStatus(`✅ Bucket already exists: ${bucket.id}`);
          }
        } catch (error) {
          addStatus(`❌ Unexpected error with ${bucket.id}: ${error.message}`);
        }
        
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      addStatus('🎉 Storage setup complete! You can now use the admin forms.');
      
    } catch (error) {
      addStatus(`❌ Setup failed: ${error.message}`);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Storage Bucket Setup</h1>
          
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              This page will create the required storage buckets for uploading images in the admin panel.
              You only need to run this once.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">What this will create:</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• <strong>services</strong> - For service images</li>
                <li>• <strong>projects</strong> - For project images</li>
                <li>• <strong>blogs</strong> - For blog images</li>
                <li>• <strong>team</strong> - For team member photos</li>
                <li>• <strong>images</strong> - For general uploads</li>
              </ul>
            </div>

            <button
              onClick={createStorageBuckets}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              {isLoading ? 'Setting up...' : 'Create Storage Buckets'}
            </button>
          </div>

          {status.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Setup Progress:</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {status.map((message, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {message}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              After setup is complete, you can delete this page - it's only needed once.
              Go to <strong>/admin/services/new</strong> to test image uploads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageSetup;