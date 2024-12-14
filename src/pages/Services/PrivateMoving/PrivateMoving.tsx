import { motion } from 'framer-motion';
import styles from './PrivateMoving.module.scss';

export const PrivateMoving = () => {
  const process = [
    {
      step: 1,
      title: "Kontakt & Besichtigungs-Termin",
      description: "Entscheiden Sie sich für eine Besichtigungs-Option. Neben der klassischen Vor-Ort Besichtigung bieten wir auch die Möglichkeit einer digitalen Online-Besichtigung via Smartphone oder Tablet an!",
      icon: "comments"
    },
    {
      step: 2,
      title: "Leistungen bzw. Servicepaket wählen",
      description: "Wählen Sie zwischen unserem All-Inclusive Paket oder dem Basis-Paket mit optionalen Zusatz-Services. Sie entscheiden, wie umfangreich unser Service sein soll.",
      icon: "list-check"
    },
    {
      step: 3,
      title: "Angebot prüfen und Umzugsdatum festlegen",
      description: "Nach Erhalt aller Informationen erstellen wir Ihr maßgeschneidertes Angebot. Nach Ihrer Bestätigung legen wir gemeinsam den Umzugstermin fest.",
      icon: "calendar-check"
    },
    {
      step: 4,
      title: "Ihr Umzug - zuverlässig und sicher",
      description: "Am Umzugstag erfolgt die professionelle Verladung und der Transport Ihrer Möbel zum Zielort. Dort wird alles an den gewünschten Platz gebracht.",
      icon: "truck-loading"
    }
  ];

  return (
    <div className={styles.privateMoving}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privatumzüge in Wien
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stressfrei und sicher umziehen zum Fixpreis
          </motion.p>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2>Unser Umzugsprozess</h2>
          <p className={styles.processIntro}>
            In nur vier Schritten zu einem erfolgreichen und stressfreien Umzug
          </p>
          
          <div className={styles.processSteps}>
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className={styles.processStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
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
          <h2>Jetzt kostenloses Angebot anfordern!</h2>
          <motion.div 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="mailto:argumzuege@gmail.com" className={styles.primaryButton}>
              Kostenlos anfragen
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 