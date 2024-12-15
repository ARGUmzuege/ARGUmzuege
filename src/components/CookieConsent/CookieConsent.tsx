import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CookieConsent.module.scss';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Immer true, da notwendig
  analytics: false,
  marketing: false,
  functional: false,
};

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const savedPreferences = localStorage.getItem('cookiePreferences');
    
    if (!consent) {
      setIsVisible(true);
    } else if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Notwendige Cookies können nicht deaktiviert werden
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const cookieTypes = [
    {
      key: 'necessary',
      title: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      required: true
    },
    {
      key: 'functional',
      title: 'Funktionale Cookies',
      description: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.',
      required: false
    },
    {
      key: 'analytics',
      title: 'Analyse-Cookies',
      description: 'Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern.',
      required: false
    },
    {
      key: 'marketing',
      title: 'Marketing-Cookies',
      description: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.',
      required: false
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.cookieConsent}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          {!showPreferences ? (
            <div className={styles.content}>
              <p>
                Wir verwenden Cookies, um Ihnen das beste Nutzererlebnis zu bieten.
                Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
              </p>
              <div className={styles.buttons}>
                <button onClick={handleAcceptAll} className={styles.acceptButton}>
                  Alle akzeptieren
                </button>
                <button 
                  onClick={() => setShowPreferences(true)} 
                  className={styles.preferencesButton}
                >
                  Einstellungen anpassen
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.preferencesModal}>
              <h3>Cookie-Einstellungen</h3>
              <p className={styles.preferencesDescription}>
                Hier können Sie festlegen, welche Cookies Sie akzeptieren möchten. 
                Bitte beachten Sie, dass einige Cookies für die Grundfunktionen der Website notwendig sind.
              </p>
              
              <div className={styles.cookieTypes}>
                {cookieTypes.map(({ key, title, description, required }) => (
                  <div key={key} className={styles.cookieType}>
                    <div className={styles.cookieTypeHeader}>
                      <label className={styles.switch}>
                        <input
                          type="checkbox"
                          checked={preferences[key as keyof CookiePreferences]}
                          onChange={() => handleTogglePreference(key as keyof CookiePreferences)}
                          disabled={required}
                        />
                        <span className={styles.slider}></span>
                      </label>
                      <h4>{title}</h4>
                      {required && <span className={styles.required}>Erforderlich</span>}
                    </div>
                    <p>{description}</p>
                  </div>
                ))}
              </div>

              <div className={styles.preferencesButtons}>
                <button onClick={handleSavePreferences} className={styles.saveButton}>
                  Einstellungen speichern
                </button>
                <button onClick={handleAcceptAll} className={styles.acceptAllButton}>
                  Alle akzeptieren
                </button>
              </div>

              <div className={styles.privacyLinks}>
                <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
                  Datenschutzerklärung
                </a>
                <a href="/impressum" target="_blank" rel="noopener noreferrer">
                  Impressum
                </a>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 