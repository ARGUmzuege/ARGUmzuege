import React from 'react';
import { motion } from 'framer-motion';
import styles from './Terms.module.scss';

export const Terms = () => {
  return (
    <div className={styles.termsContainer}>
      <motion.div 
        className={styles.termsContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Allgemeine Geschäftsbedingungen</h1>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2>1. Geltungsbereich</h2>
          <div className={styles.infoCard}>
            <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen ARG Umzüge (nachfolgend "Unternehmen") und dem Auftraggeber (nachfolgend "Kunde"). Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, das Unternehmen stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>2. Vertragsschluss</h2>
          <div className={styles.infoCard}>
            <h3>2.1 Angebot und Annahme</h3>
            <p>Angebote des Unternehmens sind freibleibend. Der Vertrag kommt durch schriftliche Auftragsbestätigung oder Ausführung der Dienstleistung zustande.</p>
            
            <h3>2.2 Kostenvoranschlag</h3>
            <p>Kostenvoranschläge sind unverbindlich, soweit nicht ausdrücklich anders vereinbart. Bei erheblichen Überschreitungen wird der Kunde informiert.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>3. Leistungen</h2>
          <div className={styles.infoCard}>
            <h3>3.1 Leistungsumfang</h3>
            <p>Der Umfang der Leistungen ergibt sich aus der schriftlichen Auftragsbestätigung. Zusätzliche Leistungen werden gesondert berechnet.</p>
            
            <h3>3.2 Durchführung</h3>
            <p>Das Unternehmen führt die Umzugsdienstleistungen mit der erforderlichen Sorgfalt und unter Berücksichtigung der branchenüblichen Standards durch.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>4. Pflichten des Kunden</h2>
          <div className={styles.infoCard}>
            <h3>4.1 Mitwirkungspflichten</h3>
            <ul>
              <li>Bereitstellung aller relevanten Informationen</li>
              <li>Sicherung besonders wertvoller Gegenstände</li>
              <li>Gewährleistung der Zugänglichkeit der Räumlichkeiten</li>
              <li>Einhaltung vereinbarter Termine</li>
            </ul>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>5. Preise und Zahlung</h2>
          <div className={styles.infoCard}>
            <h3>5.1 Preisberechnung</h3>
            <p>Die Preise verstehen sich netto zuzüglich der gesetzlichen Mehrwertsteuer. Grundlage ist der vereinbarte Pauschalpreis oder die Abrechnung nach Aufwand.</p>
            
            <h3>5.2 Zahlungsbedingungen</h3>
            <p>Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zur Zahlung fällig. Bei Verzug werden Verzugszinsen in gesetzlicher Höhe berechnet.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>6. Haftung</h2>
          <div className={styles.infoCard}>
            <h3>6.1 Haftungsumfang</h3>
            <p>Das Unternehmen haftet nach den gesetzlichen Bestimmungen für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.</p>
            
            <h3>6.2 Haftungsbeschränkung</h3>
            <p>Die Haftung für leichte Fahrlässigkeit ist auf vorhersehbare, vertragstypische Schäden begrenzt.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2>7. Kündigung</h2>
          <div className={styles.infoCard}>
            <p>Der Vertrag kann von beiden Seiten aus wichtigem Grund gekündigt werden. Eine Kündigung bedarf der Schriftform.</p>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2>8. Schlussbestimmungen</h2>
          <div className={styles.infoCard}>
            <h3>8.1 Gerichtsstand</h3>
            <p>Gerichtsstand ist Wien, soweit der Kunde Kaufmann ist.</p>
            
            <h3>8.2 Salvatorische Klausel</h3>
            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
          </div>
        </motion.section>

        <motion.div 
          className={styles.lastUpdate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
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