import { motion } from 'framer-motion';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <motion.div 
      className={styles.aboutUsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={styles.hero}>
        <h1>Über ARG Umzüge</h1>
        <p>Ihr vertrauenswürdiger Partner für professionelle Umzugsdienstleistungen in Wien und Umgebung</p>
      </section>

      <section className={styles.vision}>
        <div className={styles.content}>
          <h2>Unsere Vision</h2>
          <p>Wir streben danach, der führende Umzugsdienstleister in Wien zu sein, der durch Qualität, Zuverlässigkeit und Kundenservice überzeugt. Unser Ziel ist es, jeden Umzug zu einem positiven Erlebnis zu machen.</p>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Unsere Werte</h2>
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <h3>Qualität</h3>
            <p>Wir setzen höchste Standards bei jedem Umzug und arbeiten stets professionell und sorgfältig.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Zuverlässigkeit</h3>
            <p>Pünktlichkeit und Verlässlichkeit sind für uns selbstverständlich. Wir halten, was wir versprechen.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Kundenorientierung</h3>
            <p>Ihre Zufriedenheit steht für uns an erster Stelle. Wir gehen auf Ihre individuellen Wünsche ein.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>Wir entwickeln uns ständig weiter und setzen moderne Technologien und Methoden ein.</p>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <h2>Unser Ansatz</h2>
        <div className={styles.approachGrid}>
          <div className={styles.approachItem}>
            <h3>Persönliche Beratung</h3>
            <p>Jeder Umzug beginnt mit einer ausführlichen Beratung, bei der wir Ihre spezifischen Anforderungen besprechen.</p>
          </div>
          <div className={styles.approachItem}>
            <h3>Maßgeschneiderte Lösungen</h3>
            <p>Wir entwickeln individuelle Umzugskonzepte, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.</p>
          </div>
          <div className={styles.approachItem}>
            <h3>Professionelles Team</h3>
            <p>Unser geschultes Personal verfügt über jahrelange Erfahrung und arbeitet mit modernster Ausrüstung.</p>
          </div>
          <div className={styles.approachItem}>
            <h3>Transparente Kommunikation</h3>
            <p>Sie werden während des gesamten Umzugsprozesses stets über alle Schritte informiert.</p>
          </div>
        </div>
      </section>

      <section className={styles.commitment}>
        <div className={styles.content}>
          <h2>Unser Versprechen</h2>
          <p>Bei ARG Umzüge verpflichten wir uns zu erstklassigem Service. Wir behandeln Ihr Eigentum mit größter Sorgfalt und Respekt. Unser Erfolg misst sich an Ihrer Zufriedenheit.</p>
        </div>
      </section>
    </motion.div>
  );
}; 