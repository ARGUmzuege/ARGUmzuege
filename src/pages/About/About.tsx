import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';

export const About = () => {
  const timelineEvents = [
    {
      year: '2015',
      title: 'Die Gründung',
      description: 'Mit einem kleinen Team und der Vision, Umzüge persönlicher und effizienter zu gestalten.',
      icon: '🚚'
    },
    {
      year: '2017',
      title: 'Erste Expansion',
      description: 'Erweiterung unseres Teams und Anschaffung weiterer Fahrzeuge.',
      icon: '📈'
    },
    {
      year: '2019',
      title: 'Spezialisierung',
      description: 'Entwicklung maßgeschneiderter Umzugslösungen für Privat- und Geschäftskunden.',
      icon: '⭐'
    },
    {
      year: '2021',
      title: 'Digitale Innovation',
      description: 'Launch unserer Online-Plattform für einfachere Umzugsplanung.',
      icon: '💻'
    },
    {
      year: '2023',
      title: 'Heute',
      description: 'Ein etabliertes Team von Umzugsprofis mit hunderten zufriedener Kunden.',
      icon: '👥'
    }
  ];

  return (
    <div className={styles.historySection}>
      <motion.div 
        className={styles.historyContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Unsere Geschichte</h2>
        
        <div className={styles.timelineGrid}>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={styles.timelineCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{event.icon}</div>
              <div className={styles.cardYear}>{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          <motion.div 
            className={styles.statCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.statNumber}>8+</span>
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
      </motion.div>
    </div>
  );
};

export default About; 