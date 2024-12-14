import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './ParallaxHero.module.scss';

export const ParallaxHero = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className={styles.parallaxContainer}>
      <motion.div 
        className={styles.backgroundLayer}
        style={{ y, opacity }}
      >
        <img src="/images/hero-bg.jpg" alt="Hero Background" />
      </motion.div>
      
      <motion.div 
        className={styles.contentLayer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>ARG Umzüge Wien</h1>
        <p>Ihr verlässlicher Partner für stressfreie Umzüge</p>
      </motion.div>
    </div>
  );
}; 