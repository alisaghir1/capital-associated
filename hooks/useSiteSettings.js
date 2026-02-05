'use client';

import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { supabase } from '../lib/supabase';

// Create context for site settings
const SiteSettingsContext = createContext(null);

// Cache for settings to prevent refetching
let settingsCache = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Provider component
export const SiteSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(settingsCache || {});
  const [loading, setLoading] = useState(!settingsCache);
  const [error, setError] = useState(null);

  const fetchSiteSettings = useCallback(async (force = false) => {
    // Use cache if valid and not forcing refresh
    const now = Date.now();
    if (!force && settingsCache && (now - cacheTimestamp) < CACHE_DURATION) {
      setSettings(settingsCache);
      setLoading(false);
      return;
    }

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
      
      // Update cache
      settingsCache = settingsObj;
      cacheTimestamp = Date.now();
      
      setSettings(settingsObj);
      setError(null);
    } catch (error) {
      console.error('Error fetching site settings:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSiteSettings();
  }, [fetchSiteSettings]);

  // Helper function to get a setting with fallback
  const getSetting = useCallback((key, fallback = '') => {
    return settings[key] || fallback;
  }, [settings]);

  return (
    <SiteSettingsContext.Provider value={{
      settings,
      loading,
      error,
      getSetting,
      refetch: () => fetchSiteSettings(true)
    }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

// Hook to use site settings from context
export const useSiteSettings = () => {
  const context = useContext(SiteSettingsContext);
  
  // Fallback for components not wrapped in provider (backwards compatibility)
  const [fallbackSettings, setFallbackSettings] = useState(settingsCache || {});
  const [fallbackLoading, setFallbackLoading] = useState(!settingsCache);
  const [fallbackError, setFallbackError] = useState(null);

  useEffect(() => {
    if (context) return; // Don't fetch if we have context
    
    // Use cache if available
    if (settingsCache) {
      setFallbackSettings(settingsCache);
      setFallbackLoading(false);
      return;
    }

    const fetchSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('site_metadata')
          .select('*');

        if (error) throw error;

        const settingsObj = {};
        data?.forEach(item => {
          settingsObj[item.key] = item.value;
        });
        
        settingsCache = settingsObj;
        cacheTimestamp = Date.now();
        setFallbackSettings(settingsObj);
      } catch (error) {
        console.error('Error fetching site settings:', error);
        setFallbackError(error);
      } finally {
        setFallbackLoading(false);
      }
    };

    fetchSettings();
  }, [context]);

  if (context) {
    return context;
  }

  // Fallback return for non-provider usage
  return {
    settings: fallbackSettings,
    loading: fallbackLoading,
    error: fallbackError,
    getSetting: (key, fallback = '') => fallbackSettings[key] || fallback,
    refetch: () => {}
  };
};