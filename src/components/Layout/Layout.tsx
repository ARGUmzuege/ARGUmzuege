import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { CookieConsent } from '../CookieConsent/CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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