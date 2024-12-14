import React from 'react';
import { motion } from 'framer-motion';
import styles from './Privacy.module.scss';

export const Privacy = () => {
  return (
    <div className={styles.privacyContainer}>
      <motion.div 
        className={styles.privacyContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Datenschutzerklärung</h1>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2>1. Datenschutz auf einen Blick</h2>
          <div className={styles.infoCard}>
            <h3>Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>2. Verantwortliche Stelle</h2>
          <div className={styles.infoCard}>
            <h3>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</h3>
            <p>ARG Umzüge</p>
            <p>Musterstraße 123</p>
            <p>1234 Wien</p>
            <p>Telefon: +43 681 10608125</p>
            <p>E-Mail: argumzuege@gmail.com</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>3. Datenerfassung auf unserer Website</h2>
          
          <div className={styles.subsection}>
            <h3>Cookies</h3>
            <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
            <p>Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>
          </div>

          <div className={styles.subsection}>
            <h3>Server-Log-Dateien</h3>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>4. Analyse-Tools und Werbung</h2>
          <div className={styles.infoCard}>
            <h3>Google Analytics</h3>
            <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
            <p>Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>5. Ihre Rechte</h2>
          <div className={styles.rightsGrid}>
            {[
              {
                title: "Auskunftsrecht",
                description: "Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten."
              },
              {
                title: "Berichtigungsrecht",
                description: "Sie haben das Recht, die Berichtigung unrichtiger Daten und die Vervollständigung unvollständiger Daten zu verlangen."
              },
              {
                title: "Löschungsrecht",
                description: "Sie haben das Recht, die Löschung Ihrer gespeicherten Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung erforderlich ist."
              },
              {
                title: "Beschwerderecht",
                description: "Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt."
              }
            ].map((right, index) => (
              <motion.div 
                key={right.title}
                className={styles.rightCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3>{right.title}</h3>
                <p>{right.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2>6. Kontakt für Datenschutz</h2>
          <div className={styles.contactCard}>
            <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:</p>
            <p>E-Mail: argumzuege@gmail.com</p>
            <p>Telefon: +43 681 10608125</p>
          </div>
        </motion.section>

        <motion.div 
          className={styles.lastUpdate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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