import { motion } from 'framer-motion';
import styles from './Pricing.module.scss';

export const Pricing = () => {
  return (
    <motion.div
      className={styles.pricing}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Unsere Preise</h1>
      <div className={styles.pricingGrid}>
        {/* Pricing content */}
      </div>
    </motion.div>
  );
}; 