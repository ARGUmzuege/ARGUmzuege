import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './References.module.scss';

export const References = () => {
  const referenceTypes = [
    {
      title: "Kundenbewertungen",
      description: "Erfahrungsberichte unserer zufriedenen Kunden",
      link: "/referenzen/bewertungen",
      icon: "comments"
    },
    {
      title: "Projektgalerie",
      description: "Bildergalerie unserer erfolgreich durchgeführten Umzüge",
      link: "/referenzen/galerie",
      icon: "images"
    },
    {
      title: "Erfolgsgeschichten",
      description: "Besondere Umzugsprojekte und ihre Umsetzung",
      link: "/referenzen/erfolge",
      icon: "star"
    }
  ];

  return (
    <div className={styles.references}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Referenzen
      </motion.h1>

      <div className={styles.referencesGrid}>
        {referenceTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={styles.referenceCard}
          >
            <Link to={type.link} className={styles.cardContent}>
              <i className={`fas fa-${type.icon}`}></i>
              <h2>{type.title}</h2>
              <p>{type.description}</p>
              <span className={styles.viewMore}>
                Mehr anzeigen <i className="fas fa-arrow-right"></i>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 