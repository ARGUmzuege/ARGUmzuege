import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { CookieConsent } from '../CookieConsent/CookieConsent';
import { LoadingSpinner } from '../LoadingSpinner';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    setIsLoading(false);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      {isMobile && <MobileNavigation />}
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}; 