import React from 'react';
import { motion } from 'framer-motion';
import styles from './Imprint.module.scss';

export const Imprint = () => {
  return (
    <div className={styles.imprintContainer}>
      <motion.div 
        className={styles.imprintContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Impressum</h1>
        
        <section className={styles.section}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <div className={styles.companyInfo}>
            <h3>Unternehmensangaben</h3>
            <p>ARG Umzüge</p>
            <p>Musterstraße 123</p>
            <p>1234 Wien</p>
            <p>Österreich</p>
          </div>

          <div className={styles.contactInfo}>
            <h3>Kontakt</h3>
            <p>Telefon: +43 681 10608125</p>
            <p>E-Mail: argumzuege@gmail.com</p>
          </div>
        </section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Geschäftsführung</h2>
          <p>Vertreten durch die Geschäftsführung</p>
          <p>Verantwortlich für den Inhalt: ARG Umzüge</p>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Rechtliche Angaben</h2>
          <div className={styles.legalInfo}>
            <p>Unternehmensgegenstand: Umzugsdienstleistungen und Logistik</p>
            <p>Firmenbuchnummer: [Ihre Firmenbuchnummer]</p>
            <p>Firmenbuchgericht: [Zuständiges Gericht]</p>
            <p>UID-Nummer: [Ihre UID-Nummer]</p>
            <p>Mitglied der WKÖ, Landesinnung Wien</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Online-Streitbeilegung</h2>
          <p>Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Haftungsausschluss</h2>
          <div className={styles.disclaimer}>
            <h3>Haftung für Inhalte</h3>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            
            <h3>Haftung für Links</h3>
            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            
            <h3>Urheberrecht</h3>
            <p>Die Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Datenschutz</h2>
          <p>Detaillierte Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.</p>
        </motion.section>

        <motion.div 
          className={styles.lastUpdate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>Stand: {new Date().toLocaleDateString('de-AT')}</p>
        </motion.div>
      </motion.div>

      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}; 