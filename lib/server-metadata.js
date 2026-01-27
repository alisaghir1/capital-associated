import { getSiteMetadata } from './supabase-ssr';

// Server-side metadata fetcher using direct REST API
const getServerSideMetadata = async () => {
  try {
    const { data, error } = await getSiteMetadata();
    
    if (error) {
      console.error('[SSR] Error fetching site metadata:', error.message || error);
      return {};
    }
    
    return data || {};
  } catch (error) {
    console.error('[SSR] Error in getServerSideMetadata:', error.message || error);
    return {};
  }
};

export { getServerSideMetadata };