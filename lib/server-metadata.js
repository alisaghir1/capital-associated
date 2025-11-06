import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client for metadata generation
const getServerSideMetadata = async () => {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.warn('Supabase credentials not found, using default metadata');
      return {};
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await supabase
      .from('site_metadata')
      .select('*');

    if (error) {
      console.error('Error fetching server-side metadata:', error);
      return {};
    }

    // Convert array of key-value pairs to object
    const metadataObj = {};
    data?.forEach(item => {
      metadataObj[item.key] = item.value;
    });
    
    return metadataObj;
  } catch (error) {
    console.error('Error in getServerSideMetadata:', error);
    return {};
  }
};

export { getServerSideMetadata };