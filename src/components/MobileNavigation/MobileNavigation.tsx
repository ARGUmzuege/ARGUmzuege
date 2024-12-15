import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MobileNavigation.module.scss';

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Leistungen',
    path: '/leistungen',
    children: [
      { title: 'Privatumzug', path: '/leistungen/privatumzug' },
      { title: 'Büroumzug', path: '/leistungen/bueroumzug' },
      { title: 'Betriebsumzug', path: '/leistungen/betriebsumzug' },
      { title: 'Umzugsmanagement', path: '/leistungen/umzugsmanagement' }
    ]
  },
  {
    title: 'Über Uns',
    path: '/ueber-uns',
    children: [
      { title: 'Unternehmen', path: '/ueber-uns/unternehmen' },
      { title: 'Team', path: '/ueber-uns/team' },
      { title: 'Karriere', path: '/ueber-uns/karriere' },
      { title: 'Standorte', path: '/ueber-uns/standorte' }
    ]
  },
  {
    title: 'Referenzen',
    path: '/referenzen',
    children: [
      { title: 'Bewertungen', path: '/referenzen/bewertungen' },
      { title: 'Galerie', path: '/referenzen/galerie' },
      { title: 'Erfolge', path: '/referenzen/erfolge' }
    ]
  },
  {
    title: 'Kontakt',
    path: '/kontakt'
  }
];

export const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };

  const submenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className={styles.mobileNav}>
      <button 
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav>
              {navigationItems.map((item) => (
                <div key={item.path} className={styles.navItem}>
                  {item.children ? (
                    <>
                      <button
                        className={styles.submenuTrigger}
                        onClick={() => toggleSubmenu(item.title)}
                      >
                        {item.title}
                        <motion.span
                          className={styles.arrow}
                          animate={{ rotate: activeSubmenu === item.title ? 180 : 0 }}
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === item.title && (
                          <motion.div
                            className={styles.submenu}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={submenuVariants}
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={styles.submenuItem}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.path} className={styles.navLink}>
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 