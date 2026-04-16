// Image optimization utilities for browser-based compression

// Cache for optimized images to avoid re-processing
const imageCache = new Map<string, string>();

// Check WebP support (cached result)
let webpSupport: boolean | null = null;

export const supportsWebP = async (): Promise<boolean> => {
  if (webpSupport !== null) return webpSupport;
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      webpSupport = img.width > 0 && img.height > 0;
      resolve(webpSupport);
    };
    img.onerror = () => {
      webpSupport = false;
      resolve(false);
    };
    img.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
  });
};

// Check AVIF support (cached result)
let avifSupport: boolean | null = null;

export const supportsAVIF = async (): Promise<boolean> => {
  if (avifSupport !== null) return avifSupport;
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      avifSupport = img.width > 0 && img.height > 0;
      resolve(avifSupport);
    };
    img.onerror = () => {
      avifSupport = false;
      resolve(false);
    };
    img.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAA==";
  });
};

interface OptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: "webp" | "jpeg" | "png" | "auto";
}

// Compress and optimize an image using Canvas API
export const optimizeImage = async (
  imageSrc: string,
  options: OptimizationOptions = {}
): Promise<string> => {
  const {
    maxWidth = 1200,
    maxHeight = 800,
    quality = 0.8,
    format = "auto",
  } = options;

  // Check cache first
  const cacheKey = `${imageSrc}-${maxWidth}-${maxHeight}-${quality}-${format}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = async () => {
      try {
        // Calculate new dimensions maintaining aspect ratio
        let { width, height } = img;
        
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }

        // Create canvas and draw resized image
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(imageSrc);
          return;
        }

        // Enable image smoothing for better quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        // Determine output format
        let mimeType = "image/jpeg";
        if (format === "auto") {
          const hasWebP = await supportsWebP();
          mimeType = hasWebP ? "image/webp" : "image/jpeg";
        } else if (format === "webp") {
          mimeType = "image/webp";
        } else if (format === "png") {
          mimeType = "image/png";
        }

        // Convert to optimized format
        const optimizedDataUrl = canvas.toDataURL(mimeType, quality);
        
        // Cache the result
        imageCache.set(cacheKey, optimizedDataUrl);
        
        resolve(optimizedDataUrl);
      } catch {
        // Fallback to original on error
        resolve(imageSrc);
      }
    };

    img.onerror = () => {
      // Fallback to original on error
      resolve(imageSrc);
    };

    img.src = imageSrc;
  });
};

// Preload and optimize multiple images
export const preloadImages = async (
  images: string[],
  options?: OptimizationOptions
): Promise<void> => {
  const promises = images.slice(0, 4).map((src) => optimizeImage(src, options));
  await Promise.all(promises);
};

// Get optimized image URL (sync, returns original if not cached)
export const getOptimizedImage = (imageSrc: string, options: OptimizationOptions = {}): string => {
  const {
    maxWidth = 1200,
    maxHeight = 800,
    quality = 0.8,
    format = "auto",
  } = options;

  const cacheKey = `${imageSrc}-${maxWidth}-${maxHeight}-${quality}-${format}`;
  return imageCache.get(cacheKey) || imageSrc;
};

// Clear image cache (useful for memory management)
export const clearImageCache = (): void => {
  imageCache.clear();
};

// Get cache size for debugging
export const getCacheSize = (): number => {
  return imageCache.size;
};
