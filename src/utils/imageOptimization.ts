import { useState, useEffect } from 'react';

interface ImageOptimizationOptions {
  quality?: number;
  width?: number;
  height?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

export const useOptimizedImage = (
  src: string,
  options: ImageOptimizationOptions = {}
) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const optimizeImage = async () => {
      try {
        // Check WebP support
        const webpSupported = await isWebPSupported();
        
        // Construct optimized image URL
        const params = new URLSearchParams({
          url: src,
          q: String(options.quality || 80),
          w: String(options.width || 'auto'),
          h: String(options.height || 'auto'),
          f: webpSupported ? 'webp' : (options.format || 'jpeg')
        });

        // Use Cloudinary or similar service for optimization
        const optimizedUrl = `https://res.cloudinary.com/your-cloud-name/image/fetch/f_auto,q_auto:good/${src}`;
        
        setImageSrc(optimizedUrl);
        setLoading(false);
      } catch (error) {
        console.error('Image optimization failed:', error);
        setImageSrc(src); // Fallback to original image
        setLoading(false);
      }
    };

    optimizeImage();
  }, [src, options]);

  return { imageSrc, loading };
};

// Lazy loading image component
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  options?: ImageOptimizationOptions;
}> = ({ src, alt, className, options }) => {
  const { imageSrc, loading } = useOptimizedImage(src, options);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    const element = document.querySelector(`[data-src="${src}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [src]);

  return (
    <img
      src={isInView ? imageSrc : ''}
      data-src={src}
      alt={alt}
      className={className}
      loading="lazy"
      style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s' }}
      onLoad={() => setIsInView(true)}
    />
  );
};

// WebP support detection
const isWebPSupported = async (): Promise<boolean> => {
  if (!window.createImageBitmap) return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());

  return createImageBitmap(blob).then(() => true, () => false);
};

// Responsive image generation
export const generateResponsiveImage = (
  src: string,
  sizes: number[]
): string => {
  return sizes
    .map(size => {
      const optimizedUrl = `https://res.cloudinary.com/your-cloud-name/image/fetch/w_${size},c_scale/${src}`;
      return `${optimizedUrl} ${size}w`;
    })
    .join(', ');
}; 