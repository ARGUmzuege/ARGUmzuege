import { useState, useEffect } from 'react';

export const useResponsiveImage = (
  mobileImage: string,
  tabletImage: string,
  desktopImage: string
) => {
  const [currentImage, setCurrentImage] = useState(desktopImage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCurrentImage(mobileImage);
      } else if (width < 1024) {
        setCurrentImage(tabletImage);
      } else {
        setCurrentImage(desktopImage);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileImage, tabletImage, desktopImage]);

  return currentImage;
}; 