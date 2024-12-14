import { motion } from 'framer-motion';
import styles from './MovingManagement.module.scss';

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
      description: "Effiziente Planung und Einhaltung der Zeitvorgaben",
      icon: "clock"
    }
  ];

  const services = [
    {
      title: "Umzugsplanung",
      description: "Entwicklung eines detaillierten Umzugsplans",
      icon: "tasks"
    },
    {
      title: "Ressourcenmanagement",
      description: "Optimale Zuteilung von Personal und Equipment",
      icon: "cogs"
    },
    {
      title: "Qualitätskontrolle",
      description: "Kontinuierliche Überwachung aller Prozesse",
      icon: "clipboard-check"
    },
    {
      title: "Dokumentation",
      description: "Lückenlose Dokumentation aller Vorgänge",
      icon: "file-alt"
    },
    {
      title: "Kostenmanagement",
      description: "Budgetierung und Kostenkontrolle",
      icon: "calculator"
    },
    {
      title: "Nachbetreuung",
      description: "Unterstützung auch nach Abschluss des Umzugs",
      icon: "handshake"
    }
  ];

  return (
    <div className={styles.movingManagement}>
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Umzugsmanagement
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professionelle Planung und Koordination Ihres Umzugsprojekts
        </motion.p>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Unsere Kernkompetenzen</h2>
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

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Unsere Leistungen im Detail</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={styles.serviceCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <i className={`fas fa-${service.icon}`}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2>Ihre Vorteile</h2>
          <div className={styles.benefitsGrid}>
            <motion.div 
              className={styles.benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <i className="fas fa-check-circle"></i>
              <h3>Zeitersparnis</h3>
              <p>Professionelle Koordination spart wertvolle Zeit</p>
            </motion.div>
            <motion.div 
              className={styles.benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <i className="fas fa-shield-alt"></i>
              <h3>Stressreduktion</h3>
              <p>Wir kümmern uns um alle Details</p>
            </motion.div>
            <motion.div 
              className={styles.benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <i className="fas fa-chart-line"></i>
              <h3>Kosteneffizienz</h3>
              <p>Optimierte Prozesse sparen Kosten</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Professionelles Umzugsmanagement für Ihr Projekt</h2>
          <p>Kontaktieren Sie uns für eine individuelle Beratung</p>
          <div className={styles.ctaButtons}>
            <a href="mailto:argumzuege@gmail.com" className={styles.primaryButton}>
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