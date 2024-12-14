import { motion } from 'framer-motion';
import styles from './Services.module.scss';

export const MovingManagement = () => {
  const features = [
    {
      title: "Bedarfsanalyse",
      description: "Detaillierte Erfassung aller Anforderungen und Wünsche",
      icon: "search"
    },
    {
      title: "Projektplanung",
      description: "Ausarbeitung eines maßgeschneiderten Umzugskonzepts",
      icon: "project-diagram"
    },
    {
      title: "Koordination",
      description: "Professionelle Abstimmung aller beteiligten Parteien",
      icon: "users-cog"
    },
    {
      title: "Zeitmanagement",
      description: "Effiziente Terminplanung und Prozessüberwachung",
      icon: "clock"
    },
    {
      title: "Qualitätskontrolle",
      description: "Kontinuierliche Überwachung aller Arbeitsschritte",
      icon: "clipboard-check"
    },
    {
      title: "Dokumentation",
      description: "Lückenlose Dokumentation des gesamten Umzugsprozesses",
      icon: "file-alt"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Erstgespräch",
      description: "Ausführliche Besprechung Ihrer Anforderungen und Ziele"
    },
    {
      step: 2,
      title: "Analyse",
      description: "Detaillierte Bestandsaufnahme und Situationsanalyse"
    },
    {
      step: 3,
      title: "Konzepterstellung",
      description: "Entwicklung eines individuellen Umzugskonzepts"
    },
    {
      step: 4,
      title: "Feinplanung",
      description: "Detaillierte Zeit- und Ressourcenplanung"
    },
    {
      step: 5,
      title: "Umsetzung",
      description: "Koordinierte Durchführung aller Umzugsaktivitäten"
    },
    {
      step: 6,
      title: "Abnahme",
      description: "Qualitätskontrolle und Dokumentation"
    }
  ];

  return (
    <div className={styles.servicePage}>
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.content}>
          <h1>Umzugsmanagement</h1>
          <p>Professionelle Planung und Koordination Ihres Umzugsprojekts</p>
        </div>
      </motion.section>

      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2>Ihr Partner für komplexe Umzugsprojekte</h2>
          <p>
            Das professionelle Umzugsmanagement von ARG Umzüge übernimmt die komplette 
            Organisation und Koordination Ihres Umzugs. Wir kümmern uns um alle Details - 
            von der ersten Planung bis zur finalen Umsetzung. Durch unsere langjährige 
            Erfahrung und bewährten Prozesse garantieren wir einen reibungslosen Ablauf 
            und optimale Ressourcennutzung. Unser Projektmanagement-Team steht Ihnen dabei 
            durchgehend als kompetenter Ansprechpartner zur Verfügung.
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Unsere Management-Leistungen</h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <i className={`fas fa-${feature.icon}`}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2>Unser Management-Prozess</h2>
          <div className={styles.timeline}>
            {process.map((step, index) => (
              <motion.div 
                key={step.step}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Professionelles Umzugsmanagement für Ihr Projekt</h2>
          <p>Kontaktieren Sie uns für eine individuelle Beratung</p>
          <div className={styles.ctaButtons}>
            <a href="/kontakt" className={styles.primaryButton}>
              Kostenlos anfragen
            </a>
            <a href="/preise" className={styles.secondaryButton}>
              Preise ansehen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}; 