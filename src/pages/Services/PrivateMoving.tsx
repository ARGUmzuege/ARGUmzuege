import { motion } from 'framer-motion';
import styles from './Services.module.scss';

export const PrivateMoving = () => {
  const features = [
    {
      title: "Persönliche Beratung",
      description: "Individuelle Beratung und Bedarfsanalyse für Ihren Umzug",
      icon: "comments"
    },
    {
      title: "Professionelles Team",
      description: "Erfahrene und geschulte Umzugshelfer",
      icon: "users"
    },
    {
      title: "Komplette Ausrüstung",
      description: "Moderne Umzugswagen und professionelles Equipment",
      icon: "truck"
    },
    {
      title: "Verpackungsservice",
      description: "Sorgfältiges Verpacken Ihrer Gegenstände",
      icon: "box"
    },
    {
      title: "Möbelmontage",
      description: "Ab- und Aufbau Ihrer Möbel",
      icon: "tools"
    },
    {
      title: "Versicherungsschutz",
      description: "Umfassende Absicherung während des Umzugs",
      icon: "shield-alt"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Erste Kontaktaufnahme",
      description: "Kostenlose Beratung und Bedarfsermittlung"
    },
    {
      step: 2,
      title: "Besichtigung",
      description: "Vor-Ort-Termin für genaue Kosteneinschätzung"
    },
    {
      step: 3,
      title: "Angebot",
      description: "Detailliertes und transparentes Angebot"
    },
    {
      step: 4,
      title: "Planung",
      description: "Festlegung des Umzugstermins und der Details"
    },
    {
      step: 5,
      title: "Durchführung",
      description: "Professionelle Durchführung des Umzugs"
    },
    {
      step: 6,
      title: "Nachbereitung",
      description: "Qualitätskontrolle und Kundenfeedback"
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
          <h1>Privatumzug</h1>
          <p>Ihr persönlicher Umzug in professionellen Händen</p>
        </div>
      </motion.section>

      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2>Stressfreier Umzug für Privatpersonen</h2>
          <p>
            Ein Umzug bedeutet oft eine große Veränderung und kann sehr stressig sein. 
            Wir von ARG Umzüge nehmen Ihnen diese Last ab und sorgen für einen 
            reibungslosen Ablauf. Mit unserer langjährigen Erfahrung und unserem 
            eingespielten Team machen wir Ihren Umzug zu einem positiven Erlebnis.
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Unsere Leistungen im Überblick</h2>
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
          <h2>Unser Umzugsprozess</h2>
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
          <h2>Bereit für Ihren Umzug?</h2>
          <p>Kontaktieren Sie uns für ein unverbindliches Angebot</p>
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