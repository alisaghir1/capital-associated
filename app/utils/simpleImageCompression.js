// Simple inline image compression utility
// This approach avoids import issues by being self-contained

export const compressImageInline = (file, options = {}) => {
  return new Promise((resolve, reject) => {
    const {
      maxWidth = 800,
      maxHeight = 600,
      quality = 0.8
    } = options;

    // Create file reader
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const img = new Image();
      
      img.onload = () => {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate new dimensions
        let { width, height } = img;
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
        
        // Set canvas size and draw image
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to compressed data URL
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      
      img.onerror = reject;
      img.src = event.target.result;
    };
    
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Simple function to check if compression is needed
export const shouldCompress = (dataUrl) => {
  if (!dataUrl) return false;
  // Check if data URL is larger than 1MB
  const sizeInBytes = (dataUrl.length * 3) / 4;
  return sizeInBytes > 1024 * 1024; // 1MB
};

// Auto compression wrapper
export const autoCompress = async (input, options = {}) => {
  if (input instanceof File) {
    return await compressImageInline(input, options);
  } else if (typeof input === 'string' && shouldCompress(input)) {
    // If it's already a data URL and large, we could re-compress
    return input; // For now, just return as-is
  }
  return input;
};