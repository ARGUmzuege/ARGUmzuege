import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './Checklist.module.scss';

export const Checklist = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const checklistItems = [
    {
      title: "8 Wochen vor dem Umzug",
      icon: "📅",
      tasks: [
        {
          title: "Umzugsplanung starten",
          description: "Erste wichtige Schritte für Ihren Umzug",
          items: [
            "Kündigungsfrist der aktuellen Wohnung prüfen",
            "Budget für den Umzug festlegen",
            "Urlaub für den Umzug beantragen",
            "Umzugshelfer organisieren oder Umzugsunternehmen anfragen"
          ]
        },
        {
          title: "Dokumente vorbereiten",
          description: "Wichtige Unterlagen zusammenstellen",
          items: [
            "Mietvertrag der neuen Wohnung prüfen",
            "Versicherungen überprüfen",
            "Inventarliste erstellen",
            "Wichtige Dokumente sortieren"
          ]
        }
      ]
    },
    {
      title: "4 Wochen vor dem Umzug",
      icon: "📦",
      tasks: [
        {
          title: "Umzugsmaterial beschaffen",
          description: "Alles für das Verpacken vorbereiten",
          items: [
            "Umzugskartons besorgen",
            "Verpackungsmaterial kaufen",
            "Werkzeug für Möbelabbau bereitstellen",
            "Putzmaterial für die Endreinigung besorgen"
          ]
        },
        {
          title: "Erste Packvorbereitungen",
          description: "Mit dem Verpacken beginnen",
          items: [
            "Keller und Dachboden ausmisten",
            "Wenig genutzte Gegenstände verpacken",
            "Spenden und Entsorgung organisieren",
            "Kartons beschriften und Inventarliste führen"
          ]
        }
      ]
    },
    {
      title: "2 Wochen vor dem Umzug",
      icon: "📝",
      tasks: [
        {
          title: "Behördengänge & Anmeldungen",
          description: "Administrative Aufgaben erledigen",
          items: [
            "Nachsendeantrag stellen",
            "Adressänderungen vorbereiten",
            "Schulen/Kindergärten informieren",
            "Versorgungsverträge kündigen/ummelden"
          ]
        },
        {
          title: "Umzugslogistik",
          description: "Letzte organisatorische Vorbereitungen",
          items: [
            "Parkplatz für Umzugswagen reservieren",
            "Aufzug in beiden Häusern reservieren",
            "Schlüsselübergabe koordinieren",
            "Handwerker für Montagen buchen"
          ]
        }
      ]
    }
  ];

  const finalChecks = [
    {
      title: "Endreinigung",
      icon: "🧹",
      description: "Professionelle Reinigung der alten Wohnung durchführen"
    },
    {
      title: "Zählerstände",
      icon: "📊",
      description: "Alle Zählerstände dokumentieren und fotografieren"
    },
    {
      title: "Schlüsselübergabe",
      icon: "🔑",
      description: "Übergabeprotokoll erstellen und Schlüssel übergeben"
    },
    {
      title: "Ummeldung",
      icon: "📫",
      description: "Behördliche Ummeldung innerhalb der Frist durchführen"
    }
  ];

  return (
    <div className={styles.checklistContainer} ref={scrollRef}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Umzugs-Checkliste</h1>
        <p>Ihr persönlicher Leitfaden für einen reibungslosen Umzug</p>
      </motion.div>

      <div className={styles.checklistSection}>
        {checklistItems.map((section, index) => (
          <motion.div
            key={section.title}
            className={styles.timeSection}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.sectionHeader}>
              <motion.span
                className={styles.sectionIcon}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {section.icon}
              </motion.span>
              <h2>{section.title}</h2>
            </div>

            <div className={styles.tasksGrid}>
              {section.tasks.map((task, taskIndex) => (
                <motion.div
                  key={task.title}
                  className={styles.taskCard}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: taskIndex * 0.1 }}
                >
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    {task.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      >
                        <label className={styles.checkboxLabel}>
                          <input type="checkbox" />
                          <span className={styles.checkmark}></span>
                          <span className={styles.itemText}>{item}</span>
                        </label>
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
        className={styles.finalChecksSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Finale Kontrollen</h2>
        <div className={styles.finalChecksGrid}>
          {finalChecks.map((check, index) => (
            <motion.div
              key={check.title}
              className={styles.finalCheckCard}
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
                className={styles.checkIcon}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {check.icon}
              </motion.span>
              <h3>{check.title}</h3>
              <p>{check.description}</p>
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
        <h2>Benötigen Sie Unterstützung?</h2>
        <p>Unser erfahrenes Team steht Ihnen zur Seite</p>
        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = 'mailto:argumzuege@gmail.com?subject=Anfrage%20Umzugsunterstützung&body=Ich%20interessiere%20mich%20für%20Ihre%20Umzugsdienstleistungen%20und%20hätte%20gerne%20weitere%20Informationen.'}
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