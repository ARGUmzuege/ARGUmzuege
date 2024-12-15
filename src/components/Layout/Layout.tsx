import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { CookieConsent } from '../CookieConsent/CookieConsent';
import { LoadingSpinner } from '../LoadingSpinner';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loading logic
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}; 