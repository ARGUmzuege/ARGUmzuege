import { motion } from 'framer-motion';
import styles from './Services.module.scss';

export const OfficeMoving = () => {
  const features = [
    {
      title: "Minimale Ausfallzeit",
      description: "Umzüge auch am Wochenende oder außerhalb der Geschäftszeiten",
      icon: "clock"
    },
    {
      title: "IT-Equipment",
      description: "Professioneller Transport von Servern, PCs und Netzwerktechnik",
      icon: "laptop"
    },
    {
      title: "Büromöbel",
      description: "Fachgerechte De- und Montage aller Büroeinrichtungen",
      icon: "chair"
    },
    {
      title: "Akten & Dokumente",
      description: "Sichere Verpackung und vertraulicher Transport",
      icon: "file-alt"
    },
    {
      title: "Projektmanagement",
      description: "Detaillierte Planung und Koordination aller Abläufe",
      icon: "tasks"
    },
    {
      title: "Versicherungsschutz",
      description: "Umfassende Absicherung für Geschäftsausstattung",
      icon: "shield-alt"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Beratungsgespräch",
      description: "Analyse Ihrer spezifischen Anforderungen und Bedürfnisse"
    },
    {
      step: 2,
      title: "Bestandsaufnahme",
      description: "Vor-Ort-Besichtigung und detaillierte Inventaraufnahme"
    },
    {
      step: 3,
      title: "Umzugskonzept",
      description: "Entwicklung eines maßgeschneiderten Umzugsplans"
    },
    {
      step: 4,
      title: "Terminplanung",
      description: "Festlegung des optimalen Umzugszeitpunkts"
    },
    {
      step: 5,
      title: "Durchführung",
      description: "Professionelle Umsetzung mit minimaler Betriebsunterbrechung"
    },
    {
      step: 6,
      title: "Qualitätskontrolle",
      description: "Finale Überprüfung und Abnahme"
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
          <h1>Büroumzug</h1>
          <p>Professionelle Büroumzüge mit minimaler Betriebsunterbrechung</p>
        </div>
      </motion.section>

      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2>Effiziente Büroumzüge für Ihr Unternehmen</h2>
          <p>
            Ein Büroumzug erfordert präzise Planung und professionelle Durchführung, 
            damit Ihr Geschäftsbetrieb möglichst wenig beeinträchtigt wird. Unser 
            erfahrenes Team kümmert sich um jeden Aspekt Ihres Büroumzugs - von der 
            sorgfältigen Verpackung sensibler IT-Ausrüstung bis zur fachgerechten 
            Montage Ihrer Büromöbel am neuen Standort. Durch unsere effiziente 
            Arbeitsweise und flexible Terminplanung minimieren wir Ihre Ausfallzeiten 
            und sorgen für einen reibungslosen Übergang.
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Unsere Leistungen für Ihren Büroumzug</h2>
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
          <h2>Planen Sie Ihren Büroumzug</h2>
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