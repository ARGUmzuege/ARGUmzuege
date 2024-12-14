import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaBullseye, FaHandshake, FaMedal } from 'react-icons/fa';
import styles from './Company.module.scss';

export const Company = () => {
  const milestones = [
    {
      year: '2015',
      title: 'Gründung',
      description: 'ARG Umzüge wird mit dem Ziel gegründet, qualitativ hochwertige Umzugsdienstleistungen anzubieten.'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Erweiterung des Fuhrparks und Einstellung weiterer qualifizierter Mitarbeiter.'
    },
    {
      year: '2019',
      title: 'Zertifizierung',
      description: 'Erhalt wichtiger Branchenzertifizierungen und Auszeichnungen für Qualität.'
    },
    {
      year: '2021',
      title: 'Digitalisierung',
      description: 'Einführung digitaler Planungstools und Online-Kundenservice.'
    },
    {
      year: '2023',
      title: 'Marktführer',
      description: 'Etablierung als einer der führenden Umzugsdienstleister in der Region.'
    }
  ];

  const values = [
    {
      icon: <FaHandshake />,
      title: 'Kundenorientierung',
      description: 'Ihre Zufriedenheit steht bei uns an erster Stelle.'
    },
    {
      icon: <FaMedal />,
      title: 'Qualität',
      description: 'Höchste Standards bei allen unseren Dienstleistungen.'
    },
    {
      icon: <FaBullseye />,
      title: 'Zuverlässigkeit',
      description: 'Pünktlich, professionell und vertrauenswürdig.'
    }
  ];

  return (
    <motion.div 
      className={styles.companyPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.hero}>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Unser Unternehmen
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Erfahren Sie mehr über unsere Geschichte, Mission und Werte
        </motion.p>
      </div>

      <section className={styles.mission}>
        <motion.div
          className={styles.missionContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Unsere Mission</h2>
          <p>
            Bei ARG Umzüge ist es unsere Mission, Umzüge so stressfrei und effizient wie möglich zu gestalten. 
            Wir verstehen, dass ein Umzug mehr ist als nur der Transport von Gegenständen - es ist der Beginn 
            eines neuen Lebensabschnitts. Mit diesem Verständnis arbeiten wir jeden Tag daran, unseren Kunden 
            den bestmöglichen Service zu bieten.
          </p>
        </motion.div>
      </section>

      <section className={styles.history}>
        <h2>Unsere Geschichte</h2>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <div className={styles.timelineYear}>{milestone.year}</div>
              <div className={styles.timelineContent}>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.values}>
        <h2>Unsere Werte</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.commitment}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Unser Versprechen</h2>
          <p>
            Wir versprechen Ihnen nicht nur einen reibungslosen Umzug, sondern auch eine 
            partnerschaftliche Zusammenarbeit auf Augenhöhe. Unser Erfolg misst sich an 
            Ihrer Zufriedenheit - das ist der Maßstab, an dem wir uns jeden Tag messen lassen.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}; 