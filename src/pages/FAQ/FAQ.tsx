import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import styles from './FAQ.module.scss';

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const controls = useAnimation();

  const faqData = {
    allgemein: [
      {
        question: "Wie läuft ein Umzug mit ARG Umzüge ab?",
        answer: "Der Ablauf gestaltet sich wie folgt: Nach Ihrer Anfrage führen wir eine kostenlose Besichtigung durch, erstellen ein individuelles Angebot, planen den Umzug im Detail und führen ihn professionell mit unserem geschulten Team durch."
      },
      {
        question: "Wie weit im Voraus sollte ich meinen Umzug planen?",
        answer: "Wir empfehlen, den Umzug mindestens 4-6 Wochen im Voraus zu planen. In der Hochsaison (Frühling und Sommer) sollten Sie noch früher buchen."
      },
      {
        question: "Arbeiten Sie auch an Wochenenden und Feiertagen?",
        answer: "Ja, wir bieten unsere Dienstleistungen auch an Wochenenden und ausgewählten Feiertagen an. Bitte beachten Sie, dass hier Zuschläge anfallen können."
      },
      {
        question: "In welchen Regionen sind Sie tätig?",
        answer: "Wir sind hauptsächlich in Wien und Umgebung tätig, führen aber auch österreichweite Umzüge durch. Für genaue Informationen kontaktieren Sie uns bitte."
      }
    ],
    kosten: [
      {
        question: "Wie werden die Umzugskosten berechnet?",
        answer: "Die Kosten setzen sich aus verschiedenen Faktoren zusammen: Umzugsvolumen, Distanz, Zugänglichkeit (Etage, Aufzug), zusätzliche Dienstleistungen und Zeitpunkt des Umzugs."
      },
      {
        question: "Gibt es eine Mindestbuchungsdauer?",
        answer: "Ja, die Mindestbuchungsdauer beträgt 3 Stunden. Dies gewährleistet eine professionelle und effiziente Durchführung Ihres Umzugs."
      },
      {
        question: "Welche Zahlungsmethoden akzeptieren Sie?",
        answer: "Wir akzeptieren Überweisung, EC-Karte und Barzahlung. Die Zahlung erfolgt nach erfolgreicher Durchführung des Umzugs."
      },
      {
        question: "Bieten Sie Ratenzahlung an?",
        answer: "Ja, in bestimmten Fällen bieten wir Ratenzahlung an. Die Konditionen werden individuell vereinbart."
      },
      {
        question: "Gibt es Rabatte für Großaufträge?",
        answer: "Ja, für größere Umzüge oder Firmenkunden bieten wir spezielle Konditionen an. Sprechen Sie uns darauf an."
      }
    ],
    service: [
      {
        question: "Bieten Sie einen Verpackungsservice an?",
        answer: "Ja, wir bieten einen professionellen Verpackungsservice an. Unser Team verpackt Ihre Gegenstände sicher und fachgerecht mit hochwertigen Materialien."
      },
      {
        question: "Was ist im Standard-Umzugsservice enthalten?",
        answer: "Der Standard-Service umfasst: Transport, Be- und Entladung, grundlegende Demontage und Montage von Möbeln, sowie die Bereitstellung von Umzugswagen und Werkzeug."
      },
      {
        question: "Können Sie auch Klaviere/Flügel transportieren?",
        answer: "Ja, wir sind auf den Transport von Klavieren und Flügeln spezialisiert. Dies erfordert besondere Ausrüstung und wird von speziell geschultem Personal durchgeführt."
      },
      {
        question: "Bieten Sie auch Entrümpelung an?",
        answer: "Ja, wir übernehmen auch die fachgerechte Entrümpelung von Wohnungen, Häusern und Geschäftsräumen."
      },
      {
        question: "Können Sie auch kurzfristig einen Umzug durchführen?",
        answer: "Ja, bei freien Kapazitäten können wir auch kurzfristige Umzüge realisieren. Kontaktieren Sie uns für die Verfügbarkeit."
      }
    ],
    versicherung: [
      {
        question: "Sind meine Gegenstände während des Umzugs versichert?",
        answer: "Ja, wir haben eine umfassende Transportversicherung. Der genaue Versicherungsumfang wird im Vertrag festgehalten."
      },
      {
        question: "Was passiert bei Beschädigungen?",
        answer: "Im unwahrscheinlichen Fall einer Beschädigung dokumentieren wir den Schaden sofort und regulieren ihn über unsere Versicherung. Melden Sie Schäden bitte unmittelbar bei der Anlieferung."
      },
      {
        question: "Wie hoch ist die Versicherungssumme?",
        answer: "Die Standardversicherung deckt bis zu 100.000€ ab. Höhere Versicherungssummen können individuell vereinbart werden."
      }
    ],
    vorbereitung: [
      {
        question: "Wie sollte ich mich auf den Umzug vorbereiten?",
        answer: "Wichtige Vorbereitungen sind: Aussortieren unnötiger Gegenstände, Beschriften der Kisten, Wertsachen separat verpacken, Parkplätze reservieren, Nachbarn informieren."
      },
      {
        question: "Muss ich die Möbel vorher ausräumen?",
        answer: "Nein, das müssen Sie nicht. Auf Wunsch übernehmen wir das komplette Ausräumen der Möbel für Sie. Dies sollte aber vorher vereinbart werden."
      },
      {
        question: "Stellen Sie Umzugskartons zur Verfügung?",
        answer: "Ja, wir können Ihnen Umzugskartons und weiteres Verpackungsmaterial zur Verfügung stellen. Diese können Sie kaufen oder mieten."
      }
    ],
    spezial: [
      {
        question: "Können Sie auch internationale Umzüge durchführen?",
        answer: "Ja, wir führen auch internationale Umzüge durch. Wir kümmern uns um alle notwendigen Formalitäten und Zolldokumente."
      },
      {
        question: "Bieten Sie Zwischenlagerung an?",
        answer: "Ja, wir verfügen über sichere Lagermöglichkeiten für Ihre Möbel und Gegenstände, falls diese benötigt werden."
      },
      {
        question: "Können Sie auch Treppen steigen wenn kein Aufzug vorhanden ist?",
        answer: "Ja, unser Team ist darin geschult, auch schwere Möbel sicher über Treppen zu transportieren. Dies wird bei der Preiskalkulation berücksichtigt."
      },
      {
        question: "Arbeiten Sie auch mit anderen Dienstleistern zusammen?",
        answer: "Ja, wir haben ein Netzwerk von zuverlässigen Partnern für Malerarbeiten, Reinigung, Renovierung etc."
      }
    ]
  };

  const categories = {
    all: "Alle Fragen",
    allgemein: "Allgemeine Fragen",
    kosten: "Kosten & Zahlung",
    service: "Service & Leistungen",
    versicherung: "Versicherung & Haftung",
    vorbereitung: "Umzugsvorbereitung",
    spezial: "Spezialfälle"
  };

  useEffect(() => {
    controls.start({
      y: [1000, 0],
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, []);

  const getAllQuestions = () => {
    if (activeCategory === 'all') {
      return Object.values(faqData).flat();
    }
    return faqData[activeCategory] || [];
  };

  const filteredQuestions = getAllQuestions().filter(
    item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  const searchVariants = {
    normal: { scale: 1 },
    focused: { scale: 1.02, boxShadow: "0 0 20px rgba(76, 175, 80, 0.3)" }
  };

  return (
    <motion.div 
      className={styles.faqContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.heroSection}>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Häufig gestellte Fragen
        </motion.h1>
        <motion.div 
          className={styles.searchWrapper}
          variants={searchVariants}
          animate={isSearchFocused ? "focused" : "normal"}
        >
          <motion.input
            type="text"
            placeholder="Suchen Sie nach Fragen oder Stichworten..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className={styles.searchInput}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.div 
            className={styles.searchIcon}
            animate={{ rotate: isSearchFocused ? 90 : 0 }}
          >
            🔍
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className={styles.categoriesWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className={styles.categories}>
          {Object.entries(categories).map(([key, label], index) => (
            <motion.button
              key={key}
              className={`${styles.categoryButton} ${activeCategory === key ? styles.active : ''}`}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className={styles.faqContent}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <AnimatePresence mode="wait">
          {filteredQuestions.map((item, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              variants={questionVariants}
              whileHover="hover"
              whileTap="tap"
              layout
            >
              <motion.div 
                className={styles.questionHeader}
                onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
              >
                <h3>{item.question}</h3>
                <motion.div
                  className={styles.arrow}
                  animate={{ rotate: selectedQuestion === index ? 180 : 0 }}
                >
                  ↓
                </motion.div>
              </motion.div>
              <AnimatePresence>
                {selectedQuestion === index && (
                  <motion.div
                    className={styles.answer}
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredQuestions.length === 0 && (
          <motion.div
            className={styles.noResults}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>Keine Ergebnisse gefunden. Bitte versuchen Sie es mit anderen Suchbegriffen.</p>
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className={styles.contactSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Noch Fragen?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Unser Team steht Ihnen gerne zur Verfügung:
        </motion.p>
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="tel:+436811060812"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.contactButton}
          >
            📞 +43 681 10608125
          </motion.a>
          <motion.a 
            href="mailto:argumzuege@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.contactButton}
          >
            ✉️ argumzuege@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>

      <div className={styles.backgroundElements}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.floatingElement}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}; 