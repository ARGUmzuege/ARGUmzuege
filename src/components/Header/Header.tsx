import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.scss';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import logo from '../../assets/images/logo.png';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="ARG Umzüge Logo" />
        </Link>

        {isMobile ? (
          <MobileNavigation />
        ) : (
          <nav className={styles.desktopNav}>
            {/* Desktop navigation content */}
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/leistungen" className={styles.navLink}>
              Leistungen
            </Link>
            <Link to="/ueber-uns" className={styles.navLink}>
              Über Uns
            </Link>
            <Link to="/referenzen" className={styles.navLink}>
              Referenzen
            </Link>
            <Link to="/kontakt" className={styles.navLink}>
              Kontakt
            </Link>
          </nav>
        )}

        <div className={styles.contactInfo}>
          <a href="tel:+4930123456789" className={styles.phone}>
            <span className={styles.icon}>📞</span>
            <span className={styles.text}>030 123 456 789</span>
          </a>
        </div>
      </div>
    </header>
  );
}; 