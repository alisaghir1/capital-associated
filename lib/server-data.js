/**
 * Server-side data fetching utilities for SSR/SSG
 * These functions run on the server and are cached for optimal performance
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create server-side Supabase client
const getServerSupabase = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
};

// Fallback data for services
const staticServices = [
  { id: 1, title: "General Contracting", slug: "general-contracting", hero_image_url: "/services/s1.jpg", short_description: "Comprehensive general contracting solutions for all project types", published: true, sort_order: 1 },
  { id: 2, title: "Construction Management", slug: "construction-management", hero_image_url: "/services/s2.jpg", short_description: "Expert construction management and oversight services", published: true, sort_order: 2 },
  { id: 3, title: "Design Build", slug: "design-build", hero_image_url: "/services/s3.jpg", short_description: "Integrated design and construction services under one roof", published: true, sort_order: 3 },
  { id: 4, title: "Renovation & Remodeling", slug: "renovation-and-remodeling", hero_image_url: "/services/s4.jpg", short_description: "Transform your space with our renovation expertise", published: true, sort_order: 4 },
  { id: 5, title: "Pre-Construction Services", slug: "pre-construction-services", hero_image_url: "/services/s5.jpg", short_description: "Planning and preparation for successful project execution", published: true, sort_order: 5 },
  { id: 6, title: "Value Engineering", slug: "value-engineering", hero_image_url: "/services/s6.jpg", short_description: "Optimizing project value without compromising quality", published: true, sort_order: 6 },
  { id: 7, title: "Green Building Solutions", slug: "green-building-solutions", hero_image_url: "/services/s7.jpg", short_description: "Sustainable and eco-friendly construction practices", published: true, sort_order: 7 },
  { id: 8, title: "Specialty Construction", slug: "specialty-construction", hero_image_url: "/services/s8.jpg", short_description: "Specialized construction for unique project requirements", published: true, sort_order: 8 },
  { id: 9, title: "Interior Fit-Out", slug: "interior-fit-out", hero_image_url: "/services/s9.jpg", short_description: "Complete interior fit-out and finishing services", published: true, sort_order: 9 }
];

// Fallback data for projects
const staticProjects = [
  { id: 1, title: "Meat Moot", slug: "meatmoot", location: "City Walk, United Arab Emirates", hero_image_url: "/projects/meatmoot.jpg", featured: true, published: true, sort_order: 1 },
  { id: 2, title: "Tilal Al Ghaf Interior", slug: "Tilal-Al-Ghaf-Interior", location: "Dubai, United Arab Emirates", hero_image_url: "/services/interiorFit/s8.jpg", featured: true, published: true, sort_order: 2 },
  { id: 3, title: "Meat Moot Khawaneej", slug: "meatmoot-khawaneej", location: "Al Khawaneej, United Arab Emirates", hero_image_url: "/projects/mkhm.jpg", featured: true, published: true, sort_order: 3 },
  { id: 4, title: "Meat Moot JBR", slug: "meatmoot-jbr", location: "Jumeirah Beach Resort, United Arab Emirates", hero_image_url: "/projects/jbrm.jpg", featured: true, published: true, sort_order: 4 },
  { id: 5, title: "Tilal Al Ghaf Landscape", slug: "Tilal-Al-Ghaf-Landscape", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/villa.jpg", featured: true, published: true, sort_order: 5 },
  { id: 6, title: "Elite Villa Construction", slug: "elite-villa-construction", location: "Dubai Hills, United Arab Emirates", hero_image_url: "/projects/dh1.png", featured: true, published: true, sort_order: 6 },
  { id: 7, title: "Jumeirah Villa Construction", slug: "Jumeirah-villa-construction", location: "Jumeirah, United Arab Emirates", hero_image_url: "/projects/jv1.png", featured: true, published: true, sort_order: 7 },
  { id: 8, title: "Landscape and Exterior Construction Dubai", slug: "Landscape-and-Exterior-Construction-Dubai", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/hv1.png", featured: true, published: true, sort_order: 8 }
];

// Fallback data for team members
const staticTeamMembers = [
  { id: 1, image_url: "/team/t4.jpg", name: "RAMAZ IZZA", position: "Managing Director", slug: "ramaz-izza", bio: "Leading Capital Associated with vision and expertise in the construction industry.", published: true, sort_order: 1 },
  { id: 2, image_url: "/team/t1.jpg", name: "MICHAEL REYES", position: "Document Control", slug: "michael-reyes", bio: "Ensuring all project documentation is accurate and up to date.", published: true, sort_order: 2 },
  { id: 3, image_url: "/team/t2.jpg", name: "LAKSHMI MOHAN", position: "Estimation Engineer", slug: "lakshmi-mohan", bio: "Providing accurate cost estimates for all project requirements.", published: true, sort_order: 3 },
];

// Fallback data for blog posts
const staticBlogPosts = [
  { id: 40, title: "Top Interior Design Hacks for a Spacious Feel", slug: "top-interior-design-hacks-for-a-spacious-feel", hero_image_url: "/blogs/top-interior-design-hacks-for-a-spacious-feel/1.jpg", excerpt: "Discover design tips to make your space feel larger and more inviting.", author: "Capital Associated", created_at: "2024-09-02", published: true },
  { id: 39, title: "Using Decorative Stonework in Villa Gardens", slug: "using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch", hero_image_url: "/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/1.jpg", excerpt: "Add a luxurious touch to your villa garden with decorative stonework.", author: "Capital Associated", created_at: "2024-09-02", published: true },
  { id: 38, title: "Effective Moisture Control in Luxury Villas", slug: "effective-moisture-control-in-the-design-of-luxury-villas-by-the-sea", hero_image_url: "/blogs/effective-moisture-control-in-the-design-of-luxury-villas-by-the-sea/1.jpg", excerpt: "Essential tips for seaside villa construction and moisture management.", author: "Capital Associated", created_at: "2024-09-02", published: true },
  { id: 37, title: "Urban Heat Island Effect on Design-Build", slug: "the-role-of-urban-heat-island-effect-on-design-build-practices-in-city-centers", hero_image_url: "/blogs/the-role-of-urban-heat-island-effect-on-design-build-practices-in-city-centers/1.jpg", excerpt: "Understanding urban heat challenges in modern construction.", author: "Capital Associated", created_at: "2024-09-02", published: true },
  { id: 36, title: "Noise Pollution Mitigation in Residential Projects", slug: "noise-pollution-mitigation-in-high-density-residential-fit-out-projects", hero_image_url: "/blogs/noise-pollution-mitigation-in-high-density-residential-fit-out-projects/1.jpg", excerpt: "Solutions for creating quieter living spaces in urban environments.", author: "Capital Associated", created_at: "2024-09-02", published: true },
  { id: 35, title: "Advanced Project Management Techniques", slug: "advanced-project-management-techniques-for-high-profile-construction-projects", hero_image_url: "/blogs/advanced-project-management-techniques-for-high-profile-construction-projects/1.jpg", excerpt: "Expert techniques for managing complex construction projects.", author: "Capital Associated", created_at: "2024-09-02", published: true },
];

/**
 * Fetch services from database with caching
 * Uses Next.js fetch caching for optimal performance
 */
export async function getServices(limit = 9) {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticServices.slice(0, limit);

    const { data, error } = await supabase
      .from('services')
      .select('id, title, slug, hero_image_url, short_description, published, featured, sort_order')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.warn('Error fetching services:', error.message);
      return staticServices.slice(0, limit);
    }

    return data && data.length > 0 ? data : staticServices.slice(0, limit);
  } catch (error) {
    console.warn('Services fetch error:', error.message);
    return staticServices.slice(0, limit);
  }
}

/**
 * Fetch all services (no limit)
 */
export async function getAllServices() {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticServices;

    const { data, error } = await supabase
      .from('services')
      .select('id, title, slug, hero_image_url, short_description, published, sort_order')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Error fetching all services:', error.message);
      return staticServices;
    }

    return data && data.length > 0 ? data : staticServices;
  } catch (error) {
    console.warn('All services fetch error:', error.message);
    return staticServices;
  }
}

/**
 * Fetch projects from database with caching
 */
export async function getProjects(limit = 8) {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticProjects.slice(0, limit);

    const { data, error } = await supabase
      .from('projects')
      .select('id, title, slug, location, hero_image_url, featured, published, sort_order')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.warn('Error fetching projects:', error.message);
      return staticProjects.slice(0, limit);
    }

    return data && data.length > 0 ? data : staticProjects.slice(0, limit);
  } catch (error) {
    console.warn('Projects fetch error:', error.message);
    return staticProjects.slice(0, limit);
  }
}

/**
 * Fetch all projects (no limit)
 */
export async function getAllProjects() {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticProjects;

    const { data, error } = await supabase
      .from('projects')
      .select('id, title, slug, location, hero_image_url, featured, published, sort_order')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Error fetching all projects:', error.message);
      return staticProjects;
    }

    return data && data.length > 0 ? data : staticProjects;
  } catch (error) {
    console.warn('All projects fetch error:', error.message);
    return staticProjects;
  }
}

/**
 * Fetch team members from database with caching
 */
export async function getTeamMembers(limit = 3) {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticTeamMembers.slice(0, limit);

    const { data, error } = await supabase
      .from('team')
      .select('id, name, position, image_url, slug, bio, published, sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .limit(limit);

    if (error) {
      console.warn('Error fetching team members:', error.message);
      return staticTeamMembers.slice(0, limit);
    }

    return data && data.length > 0 ? data : staticTeamMembers.slice(0, limit);
  } catch (error) {
    console.warn('Team fetch error:', error.message);
    return staticTeamMembers.slice(0, limit);
  }
}

/**
 * Fetch all team members (no limit)
 */
export async function getAllTeamMembers() {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticTeamMembers;

    const { data, error } = await supabase
      .from('team')
      .select('id, name, position, image_url, slug, bio, published, sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true });

    if (error) {
      console.warn('Error fetching all team members:', error.message);
      return staticTeamMembers;
    }

    return data && data.length > 0 ? data : staticTeamMembers;
  } catch (error) {
    console.warn('All team fetch error:', error.message);
    return staticTeamMembers;
  }
}

/**
 * Fetch blog posts from database with caching
 */
export async function getBlogPosts(limit = 6) {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticBlogPosts.slice(0, limit);

    const { data, error } = await supabase
      .from('blogs')
      .select('id, title, slug, hero_image_url, excerpt, author, created_at, published, featured')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.warn('Error fetching blogs:', error.message);
      return staticBlogPosts.slice(0, limit);
    }

    return data && data.length > 0 ? data : staticBlogPosts.slice(0, limit);
  } catch (error) {
    console.warn('Blogs fetch error:', error.message);
    return staticBlogPosts.slice(0, limit);
  }
}

/**
 * Fetch all blog posts (no limit)
 */
export async function getAllBlogPosts() {
  try {
    const supabase = getServerSupabase();
    if (!supabase) return staticBlogPosts;

    const { data, error } = await supabase
      .from('blogs')
      .select('id, title, slug, hero_image_url, excerpt, author, created_at, published')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Error fetching all blogs:', error.message);
      return staticBlogPosts;
    }

    return data && data.length > 0 ? data : staticBlogPosts;
  } catch (error) {
    console.warn('All blogs fetch error:', error.message);
    return staticBlogPosts;
  }
}

// Export static data for reuse
export { staticServices, staticProjects, staticTeamMembers, staticBlogPosts };
