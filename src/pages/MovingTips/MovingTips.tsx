import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styles from './MovingTips.module.scss';

export const MovingTips = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const categories = [
    {
      title: "Vor dem Umzug",
      icon: "📋",
      tips: [
        {
          title: "Frühzeitige Planung",
          description: "Beginnen Sie mindestens 2-3 Monate vor dem Umzug mit der Planung.",
          details: [
            "Erstellen Sie eine Umzugscheckliste",
            "Terminieren Sie wichtige Aufgaben",
            "Sammeln Sie Umzugskartons und Verpackungsmaterial"
          ]
        },
        {
          title: "Ausmisten & Sortieren",
          description: "Reduzieren Sie Ihren Besitz vor dem Umzug.",
          details: [
            "Sortieren Sie Raum für Raum",
            "Verkaufen oder spenden Sie ungenutzte Gegenstände",
            "Dokumentieren Sie wertvolle Objekte"
          ]
        }
      ]
    },
    {
      title: "Während des Umzugs",
      icon: "🚚",
      tips: [
        {
          title: "Effizientes Packen",
          description: "Optimieren Sie den Packprozess für maximale Effizienz.",
          details: [
            "Beschriften Sie alle Kisten deutlich",
            "Packen Sie einen Koffer mit Essentiellen",
            "Fotografieren Sie elektronische Verbindungen"
          ]
        },
        {
          title: "Sicherer Transport",
          description: "Gewährleisten Sie einen sicheren Transport Ihrer Gegenstände.",
          details: [
            "Verwenden Sie geeignetes Verpackungsmaterial",
            "Sichern Sie zerbrechliche Gegenstände besonders",
            "Erstellen Sie einen Transportplan"
          ]
        }
      ]
    },
    {
      title: "Nach dem Umzug",
      icon: "🏡",
      tips: [
        {
          title: "Einrichtung & Organisation",
          description: "Gestalten Sie Ihr neues Zuhause systematisch.",
          details: [
            "Priorisieren Sie wichtige Räume",
            "Überprüfen Sie alle Funktionen",
            "Erstellen Sie einen Einrichtungsplan"
          ]
        },
        {
          title: "Behördengänge & Anmeldungen",
          description: "Erledigen Sie administrative Aufgaben zeitnah.",
          details: [
            "Melden Sie Ihren neuen Wohnsitz an",
            "Aktualisieren Sie Ihre Dokumente",
            "Informieren Sie wichtige Kontakte"
          ]
        }
      ]
    }
  ];

  const expertTips = [
    {
      title: "Professionelle Unterstützung",
      icon: "👥",
      description: "Wann sich professionelle Hilfe lohnt und worauf Sie achten sollten."
    },
    {
      title: "Kostenplanung",
      icon: "💰",
      description: "Tipps zur realistischen Budgetierung Ihres Umzugs."
    },
    {
      title: "Zeitmanagement",
      icon: "⏰",
      description: "Optimale Zeitplanung für einen stressfreien Umzug."
    },
    {
      title: "Versicherungsschutz",
      icon: "🛡️",
      description: "Wichtige Informationen zur Absicherung während des Umzugs."
    }
  ];

  return (
    <div className={styles.movingTipsContainer} ref={scrollRef}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Umzugstipps von Profis</h1>
        <p>Ihr Wegweiser für einen perfekt organisierten Umzug</p>
      </motion.div>

      <div className={styles.categoriesSection}>
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className={styles.category}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.categoryHeader}>
              <motion.span
                className={styles.categoryIcon}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.span>
              <h2>{category.title}</h2>
            </div>

            <div className={styles.tipsGrid}>
              {category.tips.map((tip, tipIndex) => (
                <motion.div
                  key={tip.title}
                  className={styles.tipCard}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: tipIndex * 0.1 }}
                >
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    {tip.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.expertSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Experten-Tipps</h2>
        <div className={styles.expertGrid}>
          {expertTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              className={styles.expertCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.span
                className={styles.expertIcon}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {tip.icon}
              </motion.span>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Bereit für Ihren Umzug?</h2>
        <p>Lassen Sie sich von unseren Experten beraten</p>
        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = 'mailto:argumzuege@gmail.com?subject=Anfrage%20Umzugsberatung&body=Ich%20interessiere%20mich%20für%20Ihre%20Umzugsdienstleistungen%20und%20hätte%20gerne%20weitere%20Informationen.'}
        >
          Kontakt aufnehmen
        </motion.button>
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
        <motion.div
          className={styles.glowingOrb}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}; 