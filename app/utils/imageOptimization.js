// Image transformation examples for Supabase Storage

// Original image URL:
// https://your-project.supabase.co/storage/v1/object/public/services/image.jpg

// Transformed URLs (add parameters):

// Resize to width 800px (maintains aspect ratio)
// https://your-project.supabase.co/storage/v1/object/public/services/image.jpg?width=800

// Resize to specific dimensions
// https://your-project.supabase.co/storage/v1/object/public/services/image.jpg?width=800&height=600

// Resize and set quality (for compression)
// https://your-project.supabase.co/storage/v1/object/public/services/image.jpg?width=800&quality=80

// Multiple transformations
// https://your-project.supabase.co/storage/v1/object/public/services/image.jpg?width=1200&height=800&resize=cover&quality=85

// Helper function to add transformations to image URLs
export const getOptimizedImageUrl = (originalUrl, options = {}) => {
  if (!originalUrl || !originalUrl.includes('supabase.co/storage')) {
    return originalUrl; // Return as-is if not a Supabase Storage URL
  }
  
  const {
    width = 800,
    height,
    quality = 85,
    resize = 'cover' // 'cover', 'contain', 'fill'
  } = options;
  
  const params = new URLSearchParams();
  
  if (width) params.append('width', width.toString());
  if (height) params.append('height', height.toString());
  if (quality) params.append('quality', quality.toString());
  if (resize) params.append('resize', resize);
  
  return `${originalUrl}?${params.toString()}`;
};

// Usage examples:
// Thumbnail: getOptimizedImageUrl(imageUrl, { width: 300, height: 200, quality: 80 })
// Hero image: getOptimizedImageUrl(imageUrl, { width: 1200, quality: 90 })
// Icon: getOptimizedImageUrl(imageUrl, { width: 64, height: 64, resize: 'fill' })