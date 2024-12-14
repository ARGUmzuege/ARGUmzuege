import { motion } from 'framer-motion';
import styles from './BusinessMoving.module.scss';

export const BusinessMoving = () => {
  const features = [
    {
      title: "Großprojekte",
      description: "Erfahrung mit komplexen Betriebsverlagerungen",
      icon: "industry"
    },
    {
      title: "Maschinen & Anlagen",
      description: "Fachgerechter Transport von Industrieanlagen",
      icon: "cogs"
    },
    {
      title: "Lagerlogistik",
      description: "Organisation und Transport von Lagerbeständen",
      icon: "warehouse"
    },
    {
      title: "Spezialequipment",
      description: "Schwerlasttransporte und Spezialverpackungen",
      icon: "truck-loading"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Projektanalyse",
      description: "Detaillierte Bestandsaufnahme und Anforderungsanalyse"
    },
    {
      step: 2,
      title: "Konzepterstellung",
      description: "Entwicklung eines maßgeschneiderten Umzugskonzepts"
    },
    {
      step: 3,
      title: "Logistikplanung",
      description: "Koordination aller logistischen Aspekte"
    },
    {
      step: 4,
      title: "Durchführung",
      description: "Professionelle Umsetzung nach Zeitplan"
    },
    {
      step: 5,
      title: "Installation",
      description: "Aufbau und Inbetriebnahme am neuen Standort"
    }
  ];

  const specialServices = [
    {
      title: "Spezialverpackung",
      description: "Maßgeschneiderte Verpackungslösungen für empfindliche Geräte",
      icon: "box-open"
    },
    {
      title: "Schwertransporte",
      description: "Transport von überdimensionalen Maschinen und Anlagen",
      icon: "truck-moving"
    },
    {
      title: "24/7 Service",
      description: "Flexible Umzugszeiten für minimale Betriebsunterbrechung",
      icon: "clock"
    }
  ];

  return (
    <div className={styles.businessMoving}>
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Betriebsumzüge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professionelle Betriebsverlagerungen mit minimaler Unterbrechung
        </motion.p>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Unsere Leistungen für Ihren Betriebsumzug</h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <i className={`fas fa-${feature.icon}`} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2>Unser Prozess für Betriebsumzüge</h2>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className={styles.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
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

      <section className={styles.specialServices}>
        <div className={styles.container}>
          <h2>Spezialleistungen</h2>
          <div className={styles.specialServicesGrid}>
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                className={styles.specialServiceCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <i className={`fas fa-${service.icon}`} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Planen Sie Ihren Betriebsumzug</h2>
          <p>Kontaktieren Sie uns für ein individuelles Angebot</p>
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