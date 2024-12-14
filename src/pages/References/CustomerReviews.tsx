import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './References.module.scss';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  service: string;
  location: string;
  longText?: string;
}

export const CustomerReviews = () => {
  const [filter, setFilter] = useState('all');
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [animatingCards, setAnimatingCards] = useState<string[]>([]);

  const reviews: Review[] = [
    // Privatumzüge
    {
      id: 'p1',
      author: 'Maria S.',
      date: '15.01.2024',
      rating: 5,
      text: 'Sehr professioneller und freundlicher Service. Alles wurde sorgfältig transportiert.',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Das Team war pünktlich, professionell und sehr vorsichtig mit unseren Möbeln. Die Kommunikation war ausgezeichnet und der Umzug verlief reibungslos. Besonders beeindruckt hat uns die Sorgfalt beim Verpacken unserer empfindlichen Gegenstände.'
    },
    {
      id: 'p2',
      author: 'Stefan W.',
      date: '12.01.2024',
      rating: 5,
      text: 'Hervorragender Service von Anfang bis Ende. Sehr empfehlenswert!',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Von der ersten Kontaktaufnahme bis zum letzten Karton war alles perfekt organisiert. Das Team war freundlich und effizient. Besonders gut hat mir gefallen, dass alle Möbel perfekt geschützt wurden.'
    },
    {
      id: 'p3',
      author: 'Julia M.',
      date: '08.01.2024',
      rating: 5,
      text: 'Schnell, zuverlässig und sehr professionell. Gerne wieder!',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Ein großes Lob an das gesamte Team. Trotz einiger schwieriger Möbelstücke wurde alles perfekt transportiert. Die Preisgestaltung war transparent und fair.'
    },
    {
      id: 'p4',
      author: 'Michael K.',
      date: '05.01.2024',
      rating: 5,
      text: 'Absolut stressfreier Umzug dank des kompetenten Teams.',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Hatte große Sorgen wegen meines Flügels, aber das Team hat ihn absolut professionell transportiert. Alles andere wurde ebenso sorgfältig behandelt.'
    },
    {
      id: 'p5',
      author: 'Sandra H.',
      date: '02.01.2024',
      rating: 5,
      text: 'Sehr zufrieden mit der Leistung. Faire Preise und top Service.',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Das Team war nicht nur professionell, sondern auch sehr freundlich. Alle meine Wünsche wurden berücksichtigt und perfekt umgesetzt.'
    },
    {
      id: 'p6',
      author: 'Peter L.',
      date: '28.12.2023',
      rating: 5,
      text: 'Perfekter Umzugsservice, sehr sorgfältig und pünktlich.',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Besonders beeindruckt hat mich die Effizienz des Teams. In nur wenigen Stunden war der komplette Umzug erledigt, und das ohne Beschädigungen.'
    },
    {
      id: 'p7',
      author: 'Anna B.',
      date: '22.12.2023',
      rating: 5,
      text: 'Hervorragende Arbeit, sehr empfehlenswert!',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Das Team hat selbst bei schwierigen Möbelstücken kreative Lösungen gefunden. Alles wurde sicher und schnell transportiert.'
    },
    {
      id: 'p8',
      author: 'Thomas R.',
      date: '18.12.2023',
      rating: 5,
      text: 'Kompetentes Team, faire Preise, top Leistung!',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Von der Planung bis zur Durchführung war alles perfekt organisiert. Das Team war pünktlich und hat sehr sorgfältig gearbeitet.'
    },
    {
      id: 'p9',
      author: 'Christina F.',
      date: '15.12.2023',
      rating: 5,
      text: 'Sehr zufrieden mit dem gesamten Service.',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Ein großes Dankeschön an das Team. Der Umzug war perfekt organisiert und wurde professionell durchgeführt.'
    },
    {
      id: 'p10',
      author: 'Markus D.',
      date: '12.12.2023',
      rating: 5,
      text: 'Ausgezeichneter Service, sehr empfehlenswert!',
      service: 'Privatumzug',
      location: 'Wien',
      longText: 'Vom ersten Kontakt bis zum letzten Karton war alles perfekt. Das Team war freundlich und hat sehr professionell gearbeitet.'
    },

    // Büroumzüge
    {
      id: 'b1',
      author: 'Thomas K.',
      date: '10.01.2024',
      rating: 5,
      text: 'Perfekter Büroumzug! Das Team hat alles bestens organisiert und umgesetzt.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Unser Büroumzug wurde perfekt geplant und durchgeführt. Die IT-Ausrüstung wurde fachgerecht transportiert und am neuen Standort wieder aufgebaut. Minimale Ausfallzeit und maximale Effizienz!'
    },
    {
      id: 'b2',
      author: 'Sarah M.',
      date: '05.01.2024',
      rating: 5,
      text: 'Professionelle Abwicklung unseres Büroumzugs.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Die gesamte IT-Infrastruktur wurde fachgerecht ab- und wieder aufgebaut. Sehr beeindruckende Leistung!'
    },
    {
      id: 'b3',
      author: 'Andreas P.',
      date: '02.01.2024',
      rating: 5,
      text: 'Reibungsloser Umzug unserer Büroräume.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Trotz enger Zeitvorgaben wurde alles perfekt umgesetzt. Das Team war sehr professionell und effizient.'
    },
    {
      id: 'b4',
      author: 'Claudia R.',
      date: '28.12.2023',
      rating: 5,
      text: 'Sehr zufrieden mit der Organisation und Durchführung.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Das Team hat unseren Büroumzug perfekt geplant und durchgeführt. Alle Mitarbeiter konnten am nächsten Tag normal weiterarbeiten.'
    },
    {
      id: 'b5',
      author: 'Martin H.',
      date: '22.12.2023',
      rating: 5,
      text: 'Kompetente Beratung und perfekte Umsetzung.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Von der ersten Beratung bis zur finalen Umsetzung war alles sehr professionell. Besonders die IT-Installation war beeindruckend.'
    },
    {
      id: 'b6',
      author: 'Lisa W.',
      date: '18.12.2023',
      rating: 5,
      text: 'Schneller und effizienter Büroumzug.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Das Team hat über das Wochenende alles perfekt umgezogen. Montags konnte der Betrieb normal weiterlaufen.'
    },
    {
      id: 'b7',
      author: 'Robert S.',
      date: '15.12.2023',
      rating: 5,
      text: 'Hervorragende Organisation des Umzugs.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Die Planung war detailliert und wurde perfekt umgesetzt. Alle Termine wurden eingehalten.'
    },
    {
      id: 'b8',
      author: 'Eva M.',
      date: '12.12.2023',
      rating: 5,
      text: 'Professioneller Service, sehr empfehlenswert.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Unser Büroumzug wurde perfekt durchgeführt. Besonders die Handhabung der sensiblen Geräte war sehr professionell.'
    },
    {
      id: 'b9',
      author: 'Daniel K.',
      date: '08.12.2023',
      rating: 5,
      text: 'Ausgezeichnete Leistung beim Büroumzug.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Das Team hat unseren kompletten Büroumzug an einem Wochenende durchgeführt. Perfekte Organisation!'
    },
    {
      id: 'b10',
      author: 'Petra L.',
      date: '05.12.2023',
      rating: 5,
      text: 'Sehr professioneller Büroumzug.',
      service: 'Büroumzug',
      location: 'Wien',
      longText: 'Die Zusammenarbeit war von Anfang bis Ende sehr professionell. Alle Mitarbeiter waren höchst kompetent.'
    },

    // Betriebsumzüge
    {
      id: 'be1',
      author: 'Christian G.',
      date: '20.01.2024',
      rating: 5,
      text: 'Komplexer Betriebsumzug perfekt gemeistert.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Unser gesamter Produktionsbereich wurde professionell umgezogen. Minimale Ausfallzeiten und perfekte Koordination.'
    },
    {
      id: 'be2',
      author: 'Sabine K.',
      date: '16.01.2024',
      rating: 5,
      text: 'Hervorragende Planung und Umsetzung.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Die Logistik war beeindruckend. Alle Maschinen wurden fachgerecht transportiert und installiert.'
    },
    {
      id: 'be3',
      author: 'Wolfgang P.',
      date: '12.01.2024',
      rating: 5,
      text: 'Professioneller Umzug unserer Produktionsstätte.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Trotz komplexer Anforderungen wurde alles perfekt umgesetzt. Sehr beeindruckende Leistung!'
    },
    {
      id: 'be4',
      author: 'Monika S.',
      date: '08.01.2024',
      rating: 5,
      text: 'Reibungsloser Ablauf des gesamten Umzugs.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Die Koordination war excellent. Alle Abteilungen konnten schnell wieder arbeiten.'
    },
    {
      id: 'be5',
      author: 'Herbert M.',
      date: '04.01.2024',
      rating: 5,
      text: 'Kompetente Durchführung unseres Betriebsumzugs.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Das Team hat unsere schweren Maschinen sicher transportiert und neu installiert. Sehr professionell!'
    },
    {
      id: 'be6',
      author: 'Karin W.',
      date: '30.12.2023',
      rating: 5,
      text: 'Perfekte Organisation des Betriebsumzugs.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Die Planung war detailliert und wurde genau eingehalten. Sehr zufrieden mit der Leistung.'
    },
    {
      id: 'be7',
      author: 'Franz H.',
      date: '26.12.2023',
      rating: 5,
      text: 'Hochprofessionelle Durchführung des Umzugs.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Unser gesamter Betrieb wurde effizient und sicher umgezogen. Hervorragende Arbeit!'
    },
    {
      id: 'be8',
      author: 'Elisabeth T.',
      date: '22.12.2023',
      rating: 5,
      text: 'Exzellente Betreuung während des Umzugs.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Von der Planung bis zur Umsetzung war alles perfekt organisiert. Sehr empfehlenswert!'
    },
    {
      id: 'be9',
      author: 'Rudolf B.',
      date: '18.12.2023',
      rating: 5,
      text: 'Professioneller Umzug unserer Werkstatt.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Alle Maschinen und Werkzeuge wurden fachgerecht transportiert. Schnelle und sichere Umsetzung.'
    },
    {
      id: 'be10',
      author: 'Ingrid F.',
      date: '14.12.2023',
      rating: 5,
      text: 'Sehr zufrieden mit dem gesamten Ablauf.',
      service: 'Betriebsumzug',
      location: 'Wien',
      longText: 'Der Umzug unseres Betriebs wurde perfekt durchgeführt. Alle Termine wurden eingehalten.'
    }
  ];

  const filterOptions = [
    { label: 'Alle Bewertungen', value: 'all' },
    { label: 'Privatumzüge', value: 'privatumzug' },
    { label: 'Büroumzüge', value: 'büroumzug' },
    { label: 'Betriebsumzüge', value: 'betriebsumzug' }
  ];

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.service.toLowerCase().includes(filter));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  // Random card animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      const reviewId = reviews[randomIndex].id;
      setAnimatingCards(prev => [...prev, reviewId]);
      setTimeout(() => {
        setAnimatingCards(prev => prev.filter(id => id !== reviewId));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className={styles.references}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Kundenbewertungen
      </motion.h1>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Erfahren Sie, was unsere Kunden über uns sagen
      </motion.p>

      <section className={styles.filterSection}>
        <motion.div 
          className={styles.filterButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filterOptions.map((option, index) => (
            <motion.button
              key={option.value}
              className={`${styles.filterButton} ${filter === option.value ? styles.active : ''}`}
              onClick={() => setFilter(option.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>
      </section>

      <motion.div
        className={styles.referencesGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredReviews.map((review) => (
            <motion.div
              key={review.id}
              className={`${styles.reviewCard} ${animatingCards.includes(review.id) ? styles.animating : ''}`}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedReview(review)}
              layout
            >
              <div className={styles.reviewHeader}>
                <h3>{review.author}</h3>
                <span className={styles.service}>{review.service}</span>
              </div>
              <div className={styles.rating}>
                {[...Array(review.rating)].map((_, i) => (
                  <motion.i
                    key={i}
                    className="fas fa-star"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
              <p className={styles.reviewContent}>{review.text}</p>
              <div className={styles.reviewFooter}>
                <span className={styles.date}>{review.date}</span>
                <span className={styles.location}>{review.location}</span>
              </div>
              <motion.button
                className={styles.readMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Weiterlesen <i className="fas fa-arrow-right" />
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              className={styles.modalContent}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedReview(null)}
              >
                <i className="fas fa-times" />
              </button>
              <div className={styles.modalHeader}>
                <h3>{selectedReview.author}</h3>
                <div className={styles.rating}>
                  {[...Array(selectedReview.rating)].map((_, i) => (
                    <motion.i
                      key={i}
                      className="fas fa-star"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                </div>
                <span className={styles.service}>{selectedReview.service}</span>
                <span className={styles.date}>{selectedReview.date}</span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {selectedReview.longText || selectedReview.text}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 