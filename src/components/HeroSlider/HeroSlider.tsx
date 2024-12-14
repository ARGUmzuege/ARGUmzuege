import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSlider.module.scss';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    title: 'Ihr Umzugspartner in Wien',
    subtitle: 'Professionell. Zuverlässig. Persönlich.'
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    title: 'Stressfreie Umzüge',
    subtitle: 'Von der Planung bis zur Durchführung'
  },
  // weitere Slides...
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.heroSlider}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.slide}
        >
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
          <div className={styles.content}>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}; 