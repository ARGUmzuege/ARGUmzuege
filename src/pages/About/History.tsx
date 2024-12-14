import React from 'react';
import { motion } from 'framer-motion';
import styles from './History.module.scss';

export const History = () => {
  const timelineEvents = [
    {
      year: '2015',
      title: 'Die Gründung',
      description: 'Mit einem kleinen Team und der Vision, Umzüge persönlicher und effizienter zu gestalten, starteten wir unser Unternehmen.',
      icon: '🚚'
    },
    {
      year: '2017',
      title: 'Erste Expansion',
      description: 'Erweiterung unseres Teams und Anschaffung weiterer Fahrzeuge, um der steigenden Nachfrage gerecht zu werden.',
      icon: '📈'
    },
    {
      year: '2019',
      title: 'Spezialisierung',
      description: 'Entwicklung maßgeschneiderter Umzugslösungen für Privat- und Geschäftskunden. Einführung unseres Premium-Service.',
      icon: '⭐'
    },
    {
      year: '2021',
      title: 'Digitale Innovation',
      description: 'Launch unserer Online-Plattform für einfachere Umzugsplanung und besseren Kundenservice.',
      icon: '💻'
    },
    {
      year: '2023',
      title: 'Heute',
      description: 'Ein etabliertes Team von Umzugsprofis, das jährlich hunderte zufriedene Kunden bei ihrem Umzug begleitet.',
      icon: '👥'
    }
  ];

  return (
    <div className={styles.historySection}>
      <h2 className={styles.historyTitle}>Unsere Geschichte</h2>
      <p className={styles.historySubtitle}>Eine Erfolgsgeschichte seit 2015</p>
      
      <div className={styles.timeline}>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className={styles.timelineEvent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.timelineContent}>
              <div className={styles.timelineIcon}>{event.icon}</div>
              <div className={styles.timelineYear}>{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
        <div className={styles.timelineLine} />
      </div>

      <div className={styles.companyStats}>
        <motion.div 
          className={styles.statCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.statNumber}>8</span>
          <span className={styles.statLabel}>Jahre Erfahrung</span>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.statNumber}>2.000+</span>
          <span className={styles.statLabel}>Erfolgreiche Umzüge</span>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.statNumber}>15+</span>
          <span className={styles.statLabel}>Experten im Team</span>
        </motion.div>
      </div>
    </div>
  );
};

export default History; 