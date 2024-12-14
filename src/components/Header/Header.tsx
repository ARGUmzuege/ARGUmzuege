import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.scss';

interface BaseMenuItem {
  title: string;
  description: string;
}

interface LinkMenuItem extends BaseMenuItem {
  link: string;
  price?: never;
}

interface PriceMenuItem extends BaseMenuItem {
  price: string;
  link?: string;
}

type MenuItem = LinkMenuItem | PriceMenuItem;

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuItems {
  [key: string]: MenuSection;
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const menuItems: MenuItems = {
    leistungen: {
      title: "Leistungen",
      items: [
        { title: "Privatumzug", link: "/leistungen/privatumzug", description: "Für Wohnungen und Häuser" },
        { title: "Büroumzug", link: "/leistungen/bueroumzug", description: "Effiziente Geschäftsumzüge" },
        { title: "Betriebsumzug", link: "/leistungen/betriebsumzug", description: "Komplette Betriebsverlagerungen" },
        { title: "Umzugsmanagement", link: "/leistungen/umzugsmanagement", description: "Professionelle Umzugsplanung" }
      ]
    },
    preise: {
      title: "Preise",
      items: [
        { title: "Basic Umzug", price: "ab 85€/Stunde", description: "Ideal für 1-2 Zimmer Wohnungen" },
        { title: "Premium Umzug", price: "ab 125€/Stunde", description: "Perfekt für 3-4 Zimmer Wohnungen" },
        { title: "Business Umzug", price: "Individuelles Angebot", description: "Für Büros und Betriebe" }
      ]
    },
    referenzen: {
      title: "Referenzen",
      items: [
        { title: "Kundenbewertungen", link: "/referenzen/bewertungen", description: "Was unsere Kunden sagen" },
        { title: "Projektgalerie", link: "/referenzen/galerie", description: "Bilder unserer Umzüge" },
        { title: "Erfolgsgeschichten", link: "/referenzen/erfolge", description: "Besondere Umzugsprojekte" }
      ]
    },
    ueberUns: {
      title: "Über uns",
      items: [
        { title: "Unternehmen", link: "/ueber-uns", description: "Unsere Geschichte" },
        { title: "Team", link: "/team", description: "Unsere Mitarbeiter" },
        { title: "Karriere", link: "/karriere", description: "Jobs & Ausbildung" },
        { title: "Standorte", link: "/standorte", description: "Wo wir tätig sind" }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          ARG Umzüge
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü öffnen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            {Object.entries(menuItems).map(([key, menu]) => (
              <li 
                key={key}
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={`/${key}`}>{menu.title}</Link>
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div 
                      className={styles.dropdown}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {menu.items.map((item) => (
                        <Link 
                          key={item.title} 
                          to={('link' in item && item.link) ? item.link : `/${key}`}
                          className={styles.dropdownItem}
                        >
                          <div className={styles.dropdownHeader}>
                            <h4>{item.title}</h4>
                            {'price' in item && <span className={styles.price}>{item.price}</span>}
                          </div>
                          <p>{item.description}</p>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}; 