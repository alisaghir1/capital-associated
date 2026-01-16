import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Check your .env.local file.')
  throw new Error('Missing Supabase environment variables')
}

// Create client with optimized settings
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  db: {
    schema: 'public',
  },
  global: {
    headers: {
      'x-application-name': 'capital-associated',
    },
  },
})

// Utility function for queries with timeout and retry
export const queryWithRetry = async (queryFn, options = {}) => {
  const { 
    timeoutMs = 15000, 
    retries = 2,
    fallbackData = null 
  } = options;
  
  let lastError = null;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Database query timeout')), timeoutMs)
    );

    try {
      const result = await Promise.race([queryFn(), timeoutPromise]);
      
      // Check for Supabase error
      if (result?.error) {
        throw new Error(result.error.message || 'Query failed');
      }
      
      return { data: result.data, error: null };
    } catch (error) {
      lastError = error;
      console.warn(`Query attempt ${attempt}/${retries} failed:`, error.message);
      
      // Wait before retrying (exponential backoff)
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 500));
      }
    }
  }
  
  // All retries failed, return fallback if available
  if (fallbackData !== null) {
    console.warn('Using fallback data due to query failure');
    return { data: fallbackData, error: lastError };
  }
  
  return { data: null, error: lastError };
}