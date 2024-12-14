import { motion } from 'framer-motion';
import styles from './Career.module.scss';

export const Career = () => {
  return (
    <motion.div
      className={styles.career}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Karriere bei ARG Umzüge</h1>
      {/* Career content */}
    </motion.div>
  );
}; 