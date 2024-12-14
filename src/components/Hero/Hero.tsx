import { motion } from 'framer-motion';
import { InteractiveArea } from '../InteractiveArea';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ihr zuverlässiger Umzugspartner in Wien
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stressfrei umziehen mit über 8 Jahren Erfahrung. Professionell, zuverlässig und persönlich - von der Planung bis zum letzten Karton.
        </motion.p>
      </div>
      
      <div className={styles.interactiveContainer}>
        <InteractiveArea />
      </div>
    </div>
  );
}; 