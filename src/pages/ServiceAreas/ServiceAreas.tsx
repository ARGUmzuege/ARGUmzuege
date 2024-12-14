import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceAreas.module.scss';
import { FaMapMarkerAlt, FaTruck, FaCheck } from 'react-icons/fa';

export const ServiceAreas = () => {
  const mainArea = {
    city: 'Wien',
    description: 'Unser Hauptsitz und primäres Tätigkeitsgebiet',
    districts: [
      '1. Bezirk - Innere Stadt',
      '2. Bezirk - Leopoldstadt',
      '3. Bezirk - Landstraße',
      '4. Bezirk - Wieden',
      '5. Bezirk - Margareten',
      '6. Bezirk - Mariahilf',
      '7. Bezirk - Neubau',
      '8. Bezirk - Josefstadt',
      '9. Bezirk - Alsergrund',
      '10. Bezirk - Favoriten',
      '11. Bezirk - Simmering',
      '12. Bezirk - Meidling',
      '13. Bezirk - Hietzing',
      '14. Bezirk - Penzing',
      '15. Bezirk - Rudolfsheim-Fünfhaus',
      '16. Bezirk - Ottakring',
      '17. Bezirk - Hernals',
      '18. Bezirk - Währing',
      '19. Bezirk - Döbling',
      '20. Bezirk - Brigittenau',
      '21. Bezirk - Floridsdorf',
      '22. Bezirk - Donaustadt',
      '23. Bezirk - Liesing'
    ]
  };

  const austriaRegions = [
    'Niederösterreich',
    'Oberösterreich',
    'Salzburg',
    'Tirol',
    'Vorarlberg',
    'Kärnten',
    'Steiermark',
    'Burgenland'
  ];

  const features = [
    'Flexible Terminplanung',
    'Pünktliche Lieferung',
    'Erfahrene Umzugsteams',
    'Moderne Umzugsfahrzeuge',
    'Professionelle Ausrüstung',
    'Versicherungsschutz'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={styles.serviceAreas}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Unsere Service-Gebiete</h1>
        <p>Österreichweit tätig - In Wien zu Hause</p>
      </motion.div>

      <div className={styles.content}>
        <motion.section 
          className={styles.mainArea}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className={styles.cityCard}
            variants={itemVariants}
          >
            <div className={styles.cityIcon}>
              <FaMapMarkerAlt />
            </div>
            <h2>Wien - Unser Hauptstandort</h2>
            <p>
              Mit unserem Hauptsitz in Wien bieten wir in allen 23 Bezirken 
              erstklassige Umzugsdienstleistungen an. Unsere lokale Expertise 
              und Ortskenntnis garantiert Ihnen einen reibungslosen Ablauf.
            </p>
            <div className={styles.districts}>
              {mainArea.districts.map((district, index) => (
                <motion.div
                  key={district}
                  className={styles.district}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheck /> {district}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          className={styles.austriaWide}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>
            Österreichweit für Sie im Einsatz
          </motion.h2>
          <motion.p variants={itemVariants}>
            Neben unserem Hauptstandort in Wien sind wir in ganz Österreich 
            für Sie tätig. Egal ob Privatumzug oder Firmenumzug - wir 
            bringen Ihr Hab und Gut sicher ans Ziel.
          </motion.p>
          
          <div className={styles.regionsGrid}>
            {austriaRegions.map((region, index) => (
              <motion.div
                key={region}
                className={styles.regionCard}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
              >
                <FaTruck />
                <h3>{region}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className={styles.features}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>
            Unsere Leistungen in allen Gebieten
          </motion.h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className={styles.featureCard}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <FaCheck />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceAreas; 