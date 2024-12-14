import React from 'react';
import { motion } from 'framer-motion';
import styles from './OfficeMoving.module.scss';

export const OfficeMoving = () => {
  const steps = [
    {
      step: 1,
      title: "Erstberatung",
      description: "Analyse Ihrer Anforderungen und Besichtigung der Räumlichkeiten"
    },
    {
      step: 2,
      title: "Planung",
      description: "Detaillierte Umzugsplanung und Zeitplan-Erstellung"
    },
    {
      step: 3,
      title: "Vorbereitung",
      description: "Beschriftung, Verpackung und Demontage"
    },
    {
      step: 4,
      title: "Umzug",
      description: "Professionelle Durchführung nach Zeitplan"
    },
    {
      step: 5,
      title: "Einrichtung",
      description: "Aufbau und Einrichtung am neuen Standort"
    }
  ];

  return (
    <motion.div 
      className={styles.officeMoving}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className={styles.hero}>
        <div className={styles.heroParticles}>
          {[...Array(50)].map((_, i) => (
            <div key={i} className={styles.heroParticle} />
          ))}
        </div>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BÜROUMZÜGE
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professionelle Büroumzüge mit minimaler Betriebsunterbrechung
          </motion.p>
        </motion.div>
        <div className={styles.iconContainer}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.floatingIcon}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              🏢
            </motion.div>
          ))}
        </div>
        <motion.div 
          className={styles.glowingBorder}
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(218,165,32,0.3)",
              "0 0 40px rgba(218,165,32,0.5)",
              "0 0 20px rgba(218,165,32,0.3)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      <section className={styles.processSection}>
        <h2 className={styles.processTitle}>
          Unser Büroumzugsprozess
        </h2>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className={styles.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <div className={styles.stepNumber}>
                {step.step}
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}; 