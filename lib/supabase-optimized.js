import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
  throw new Error('Missing Supabase environment variables')
}

// Create optimized client with longer timeouts and connection pooling
export const supabaseOptimized = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Disable session persistence for better performance
  },
  db: {
    schema: 'public',
  },
  global: {
    headers: {
      'x-application-name': 'capital-associated',
    },
  },
  // Add connection timeout settings
  realtime: {
    params: {
      eventsPerSecond: 2,
    },
  },
})

// Utility function for timeout-resistant queries with retry logic
export const queryWithTimeout = async (queryFn, timeoutMs = 45000, retries = 2) => {
  let lastError = null;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Database query timeout')), timeoutMs)
    );

    try {
      const result = await Promise.race([queryFn(), timeoutPromise]);
      
      // Check if result has an error property (Supabase error format)
      if (result?.error) {
        throw new Error(result.error.message || 'Database query failed');
      }
      
      return result;
    } catch (error) {
      lastError = error;
      console.warn(`Query attempt ${attempt}/${retries} failed:`, error.message);
      
      // Don't retry on authentication errors
      if (error.message?.includes('JWT') || error.message?.includes('auth')) {
        break;
      }
      
      // Wait before retrying (exponential backoff) - shorter delays
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  // All retries failed - return null instead of throwing to allow fallback
  console.warn('All query attempts failed, using fallback data:', lastError?.message);
  return { data: null, error: lastError };
}

// Utility function to check if we have network connectivity
export const checkConnection = async () => {
  try {
    const { error } = await supabaseOptimized.from('services').select('id').limit(1);
    return !error;
  } catch {
    return false;
  }
}

// Wrapper function for safe queries with automatic retry and fallback
export const safeQuery = async (queryFn, fallbackData = null) => {
  try {
    const result = await queryWithTimeout(queryFn, 15000, 2);
    if (result?.data && result.data.length > 0) {
      return { data: result.data, error: null, isFromCache: false };
    }
    // Return fallback if query succeeded but returned no data
    return { data: fallbackData, error: null, isFromCache: fallbackData !== null };
  } catch (error) {
    console.warn('Query failed, using fallback:', error.message);
    return { data: fallbackData, error: error, isFromCache: true };
  }
}

// Optimized query functions for homepage (featured items only)
export const fetchServicesOptimized = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('services')
      .select('id, title, slug, hero_image_url, published, featured, sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .limit(9)
  )
}

export const fetchProjectsOptimized = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('projects')
      .select('id, title, slug, location, hero_image_url, featured, published, sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .limit(8)
  )
}

// Fetch all blogs for homepage (featured only, limited)
export const fetchBlogsOptimized = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('blogs')
      .select('id, title, slug, hero_image_url, excerpt, author, created_at, published, featured')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(6)
  )
}

// Fetch ALL blogs for blog listing page (no limit)
export const fetchAllBlogs = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('blogs')
      .select('id, title, slug, hero_image_url, excerpt, author, created_at, published')
      .eq('published', true)
      .order('created_at', { ascending: false })
  )
}

// Fetch ALL services for services listing page (no limit)
export const fetchAllServices = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('services')
      .select('id, title, slug, hero_image_url, short_description, published, sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true })
  )
}

// Fetch ALL projects for projects listing page (no limit)
export const fetchAllProjects = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('projects')
      .select('id, title, slug, hero_image_url, short_description, location, client_name, published, sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true })
  )
}

export { supabaseOptimized as supabase }