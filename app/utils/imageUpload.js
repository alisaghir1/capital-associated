import { supabaseAdmin } from '../../lib/supabase-admin';

/**
 * Helper function to upload base64 image to Supabase Storage
 * @param {string} base64Data - Base64 encoded image data
 * @param {string} fileName - Name for the uploaded file
 * @param {string} bucket - Storage bucket name (default: 'images')
 * @returns {Promise<string|null>} - Public URL of uploaded image or null if failed
 */
export const uploadImage = async (base64Data, fileName, bucket = 'images') => {
  if (!base64Data || !base64Data.startsWith('data:')) return null;
  
  try {
    // Convert base64 to blob
    const response = await fetch(base64Data);
    const blob = await response.blob();
    
    // Generate unique filename
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(7);
    const uniqueFileName = `${timestamp}-${randomStr}-${fileName}`;
    
    // Upload to Supabase Storage using admin client (bypasses RLS)
    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(uniqueFileName, blob);
    
    if (error) {
      console.error('Upload error:', error);
      return null;
    }
    
    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from(bucket)
      .getPublicUrl(uniqueFileName);
    
    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

/**
 * Upload multiple images in parallel
 * @param {Array} images - Array of {data: base64Data, fileName: string}
 * @param {string} bucket - Storage bucket name
 * @returns {Promise<Array>} - Array of uploaded URLs
 */
export const uploadMultipleImages = async (images, bucket = 'images') => {
  const uploadPromises = images.map(img => 
    uploadImage(img.data, img.fileName, bucket)
  );
  
  return Promise.all(uploadPromises);
};

/**
 * Process sections array and upload any base64 images
 * @param {Array} sections - Array of section objects
 * @param {string} slugPrefix - Prefix for image filenames
 * @param {string} bucket - Storage bucket name
 * @returns {Promise<Array>} - Array of sections with uploaded image URLs
 */
export const processSectionsWithImages = async (sections, slugPrefix, bucket = 'images') => {
  return Promise.all(
    sections.map(async (section, index) => {
      if (section.image && section.image.startsWith('data:')) {
        console.log(`Uploading section ${index} image...`);
        const imageUrl = await uploadImage(section.image, `section-${slugPrefix}-${index}`, bucket);
        return {
          ...section,
          image: imageUrl || section.image // Fallback to original if upload failed
        };
      }
      return section;
    })
  );
};