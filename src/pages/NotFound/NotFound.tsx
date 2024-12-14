import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <motion.div 
      className={styles.notFound}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>404 - Seite nicht gefunden</h1>
      <p>Die gesuchte Seite existiert leider nicht.</p>
      <Link to="/" className={styles.homeLink}>
        Zurück zur Startseite
      </Link>
    </motion.div>
  );
}; 