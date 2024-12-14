import { motion } from 'framer-motion';
import { Hero } from '../../components/Hero';
import { ServiceCards } from '../../components/ServiceCards';
import { Stats } from '../../components/Stats';
import { Testimonials } from '../../components/Testimonials';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      <section className={styles.services}>
        <h2>Unsere Umzugsdienstleistungen</h2>
        <p>Maßgeschneiderte Lösungen für Ihren perfekten Umzug</p>
        <ServiceCards />
      </section>

      <Stats />

      <div className={styles.footerArea}>
        <section className={styles.testimonials}>
          <h2>Das sagen unsere Kunden</h2>
          <Testimonials />
        </section>
      </div>
    </motion.div>
  );
}; 