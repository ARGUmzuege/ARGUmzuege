import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CookieConsent.module.scss';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.cookieConsent}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className={styles.content}>
            <p>
              Wir verwenden Cookies, um Ihnen das beste Nutzererlebnis zu bieten.
              Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
            </p>
            <div className={styles.buttons}>
              <button onClick={handleAccept} className={styles.acceptButton}>
                Akzeptieren
              </button>
              <a href="/datenschutz" className={styles.moreInfo}>
                Mehr erfahren
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 