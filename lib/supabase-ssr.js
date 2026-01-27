// Server-side only Supabase utilities using fetch API
// This avoids any client-side Supabase SDK issues during SSR

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Make a direct REST API call to Supabase
 * This works reliably on the server without any browser dependencies
 */
async function supabaseRestQuery(table, options = {}) {
  const { select = '*', filters = [], single = false } = options;
  
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('[SSR] Missing Supabase environment variables');
    return { data: null, error: new Error('Missing Supabase credentials') };
  }

  try {
    // Build the URL with query parameters
    let url = `${SUPABASE_URL}/rest/v1/${table}?select=${encodeURIComponent(select)}`;
    
    // Add filters
    filters.forEach(filter => {
      url += `&${filter.column}=${filter.operator}.${encodeURIComponent(filter.value)}`;
    });

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': single ? 'return=representation' : '',
      },
      cache: 'no-store', // Always fetch fresh data for SSR
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[SSR] Supabase REST error:', response.status, errorText);
      return { data: null, error: new Error(`Supabase error: ${response.status}`) };
    }

    const data = await response.json();
    
    if (single) {
      return { data: Array.isArray(data) ? data[0] || null : data, error: null };
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('[SSR] Supabase fetch error:', error.message || error);
    return { data: null, error };
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogBySlug(slug) {
  const result = await supabaseRestQuery('blogs', {
    select: '*',
    filters: [{ column: 'slug', operator: 'eq', value: slug }],
    single: true,
  });
  
  if (result.data) {
    // Parse sections if it's a string
    result.data.sections = result.data.sections 
      ? (typeof result.data.sections === 'string' 
          ? JSON.parse(result.data.sections) 
          : result.data.sections)
      : [];
  }
  
  return result;
}

/**
 * Get all published blogs
 */
export async function getAllBlogs() {
  return supabaseRestQuery('blogs', {
    select: '*',
    filters: [{ column: 'published', operator: 'eq', value: 'true' }],
  });
}

/**
 * Get site metadata
 */
export async function getSiteMetadata() {
  const result = await supabaseRestQuery('site_metadata', {
    select: '*',
  });
  
  if (result.data && Array.isArray(result.data)) {
    // Convert array of key-value pairs to object
    const metadataObj = {};
    result.data.forEach(item => {
      metadataObj[item.key] = item.value;
    });
    return { data: metadataObj, error: null };
  }
  
  return { data: {}, error: result.error };
}

/**
 * Get a single service by slug
 */
export async function getServiceBySlug(slug) {
  const result = await supabaseRestQuery('services', {
    select: '*',
    filters: [{ column: 'slug', operator: 'eq', value: slug }],
    single: true,
  });
  
  if (result.data) {
    result.data.sections = result.data.sections 
      ? (typeof result.data.sections === 'string' 
          ? JSON.parse(result.data.sections) 
          : result.data.sections)
      : [];
  }
  
  return result;
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug) {
  const result = await supabaseRestQuery('projects', {
    select: '*',
    filters: [{ column: 'slug', operator: 'eq', value: slug }],
    single: true,
  });
  
  if (result.data) {
    result.data.sections = result.data.sections 
      ? (typeof result.data.sections === 'string' 
          ? JSON.parse(result.data.sections) 
          : result.data.sections)
      : [];
  }
  
  return result;
}

/**
 * Get a single team member by slug
 */
export async function getTeamMemberBySlug(slug) {
  const result = await supabaseRestQuery('team', {
    select: '*',
    filters: [{ column: 'slug', operator: 'eq', value: slug }],
    single: true,
  });
  
  if (result.data) {
    result.data.sections = result.data.sections 
      ? (typeof result.data.sections === 'string' 
          ? JSON.parse(result.data.sections) 
          : result.data.sections)
      : [];
  }
  
  return result;
}

/**
 * Get a single career/job by slug
 */
export async function getCareerBySlug(slug) {
  return supabaseRestQuery('careers', {
    select: '*',
    filters: [{ column: 'slug', operator: 'eq', value: slug }],
    single: true,
  });
}

export { supabaseRestQuery };
