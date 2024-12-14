import { motion } from 'framer-motion';
import styles from './Services.module.scss';

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
    },
    {
      title: "Terminplanung",
      description: "Detaillierte Ablaufplanung und Koordination",
      icon: "calendar-check"
    },
    {
      title: "Versicherung",
      description: "Umfassender Versicherungsschutz für Industriegüter",
      icon: "shield-alt"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Erstberatung",
      description: "Ausführliche Analyse Ihrer spezifischen Anforderungen"
    },
    {
      step: 2,
      title: "Bestandsaufnahme",
      description: "Detaillierte Erfassung aller zu verlagernden Objekte"
    },
    {
      step: 3,
      title: "Projektplanung",
      description: "Entwicklung eines maßgeschneiderten Umzugskonzepts"
    },
    {
      step: 4,
      title: "Logistikkonzept",
      description: "Planung der optimalen Transport- und Lagerlogistik"
    },
    {
      step: 5,
      title: "Durchführung",
      description: "Professionelle Umsetzung nach Zeitplan"
    },
    {
      step: 6,
      title: "Qualitätskontrolle",
      description: "Abnahme und Dokumentation aller Arbeiten"
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
          <h1>Betriebsumzug</h1>
          <p>Professionelle Betriebsverlagerung mit minimaler Ausfallzeit</p>
        </div>
      </motion.section>

      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2>Komplexe Betriebsumzüge einfach gemacht</h2>
          <p>
            Die Verlagerung eines Betriebs ist eine komplexe Herausforderung, die präzise Planung 
            und professionelle Durchführung erfordert. Mit unserer langjährigen Erfahrung im 
            Bereich Betriebsumzüge garantieren wir einen reibungslosen Ablauf und minimale 
            Betriebsunterbrechungen. Unser spezialisiertes Team kümmert sich um alle Aspekte 
            Ihrer Betriebsverlagerung - von der sorgfältigen Planung bis zur fachgerechten 
            Installation am neuen Standort.
          </p>
        </div>
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
          <h2>Planen Sie Ihren Betriebsumzug</h2>
          <p>Kontaktieren Sie uns für ein individuelles Angebot und professionelle Beratung</p>
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