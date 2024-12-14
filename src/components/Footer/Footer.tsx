import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Kontakt */}
          <div className={styles.column}>
            <h3>Kontakt</h3>
            <p>ARG Umzüge</p>
            <p>Musterstraße 123</p>
            <p>1234 Wien</p>
            <p>Tel: 068110608125</p>
            <p>Email: argumzuege@gmail.com</p>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h3>Leistungen</h3>
            <Link to="/leistungen/privatumzug">Privatumzug</Link>
            <Link to="/leistungen/bueroumzug">Büroumzug</Link>
            <Link to="/leistungen/betriebsumzug">Betriebsumzug</Link>
            <Link to="/leistungen/umzugsmanagement">Umzugsmanagement</Link>
          </div>

          {/* Informationen */}
          <div className={styles.column}>
            <h3>Informationen</h3>
            <Link to="/umzugstipps">Umzugstipps</Link>
            <Link to="/checkliste">Checkliste</Link>
            <Link to="/service-gebiete">Service-Gebiete</Link>
            <Link to="/karriere">Karriere</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          {/* Rechtliches */}
          <div className={styles.column}>
            <h3>Rechtliches</h3>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className={styles.copyright}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {currentYear} ARG Umzüge. Alle Rechte vorbehalten.</p>
        </motion.div>
      </div>
    </footer>
  );
}; 