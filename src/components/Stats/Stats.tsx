import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Stats.module.scss';

export const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { number: 510, text: 'Zufriedene Kunden' },
    { number: 255, text: 'Erfolgreiche Umzüge pro Jahr' },
    { number: 8, text: 'Jahre Erfahrung' },
    { number: 10, text: 'Professionelle Mitarbeiter' }
  ];

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.text}
            className={styles.stat}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{stat.number}+</h3>
            <p>{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 