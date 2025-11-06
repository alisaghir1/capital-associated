'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const useSiteSettings = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSiteSettings();
  }, []);

  const fetchSiteSettings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_metadata')
        .select('*');

      if (error) throw error;

      // Convert array of key-value pairs to object
      const settingsObj = {};
      data?.forEach(item => {
        settingsObj[item.key] = item.value;
      });
      
      setSettings(settingsObj);
      setError(null);
    } catch (error) {
      console.error('Error fetching site settings:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get a setting with fallback
  const getSetting = (key, fallback = '') => {
    return settings[key] || fallback;
  };

  return {
    settings,
    loading,
    error,
    getSetting,
    refetch: fetchSiteSettings
  };
};