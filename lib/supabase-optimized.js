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

// Utility function for timeout-resistant queries
export const queryWithTimeout = async (queryFn, timeoutMs = 30000) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Database query timeout')), timeoutMs)
  )

  try {
    const result = await Promise.race([queryFn(), timeoutPromise])
    return result
  } catch (error) {
    if (error.message === 'Database query timeout') {
      console.warn('Database query timed out, falling back to static data')
    } else {
      console.warn('Database query failed:', error.message)
    }
    throw error
  }
}

// Optimized query functions
export const fetchServicesOptimized = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('services')
      .select('id, title, slug, hero_image_url, published, featured, sort_order')
      .eq('published', true)
      .eq('featured', true)
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
      .eq('featured', true)
      .order('sort_order', { ascending: true })
      .limit(8)
  )
}

export const fetchBlogsOptimized = async () => {
  return queryWithTimeout(() =>
    supabaseOptimized
      .from('blogs')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(6)
  )
}

export { supabaseOptimized as supabase }