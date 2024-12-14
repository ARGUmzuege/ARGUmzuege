import React from 'react';
import styles from './References.module.scss';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaUsers, FaTrophy } from 'react-icons/fa';

interface SuccessStory {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    time: string;
    team: string;
    satisfaction: string;
  };
  image: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Start-up Büroumzug unter Zeitdruck",
    challenge: "Ein schnell wachsendes Tech-Start-up benötigte einen reibungslosen Umzug von 50 Mitarbeitern über ein Wochenende, ohne Unterbrechung der wichtigen Entwicklungsarbeit.",
    solution: "Durch effiziente Planung, ein erfahrenes 10-köpfiges Team und moderne Umzugstechnologie wurde der Umzug präzise koordiniert.",
    results: [
      "Keine Unterbrechung der Entwicklungsarbeit",
      "Alle Arbeitsplätze pünktlich einsatzbereit",
      "IT-Infrastruktur erfolgreich transferiert",
      "Positive Bewertung vom Kunden"
    ],
    metrics: {
      time: "36 Stunden",
      team: "10 Experten",
      satisfaction: "100%"
    },
    image: "/images/projects/Image 6.jpeg"
  },
  {
    id: 2,
    title: "Sensibler Praxisumzug",
    challenge: "Eine etablierte Zahnarztpraxis musste mit hochempfindlichen medizinischen Geräten und unter strengen hygienischen Auflagen umziehen.",
    solution: "Entwicklung eines speziellen Hygiene- und Transportkonzepts, Einsatz von geschultem Personal für medizinische Geräte.",
    results: [
      "Sichere Verpackung und Transport aller Geräte",
      "Einhaltung aller Hygienestandards",
      "Minimale Praxis-Ausfallzeit",
      "Termingerechte Ausführung"
    ],
    metrics: {
      time: "3 Tage",
      team: "8 Spezialisten",
      satisfaction: "100%"
    },
    image: "/images/projects/Image 4.jpeg"
  },
  {
    id: 3,
    title: "Privatumzug mit Antiquitäten",
    challenge: "Umzug einer 180m² Wohnung mit wertvollen Antiquitäten und Kunstgegenständen, die besondere Sorgfalt erforderten.",
    solution: "Einsatz von speziellem Verpackungsmaterial und geschultem Personal für den Transport wertvoller Gegenstände.",
    results: [
      "Sichere Verpackung aller Wertsachen",
      "Professioneller Transport",
      "Kein Schaden an Antiquitäten",
      "Sehr zufriedener Kunde"
    ],
    metrics: {
      time: "2 Tage",
      team: "6 Experten",
      satisfaction: "100%"
    },
    image: "/images/projects/Image 1.jpeg"
  }
];

export const SuccessStories: React.FC = () => {
  return (
    <div className={styles.successStories}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Erfolgsgeschichten
      </motion.h1>
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Besondere Umzugsprojekte und ihre Umsetzung
      </motion.p>

      <div className={styles.storiesContainer}>
        {successStories.map((story, index) => (
          <motion.div
            key={story.id}
            className={styles.storyCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.storyImage}>
              <img src={story.image} alt={story.title} />
            </div>

            <div className={styles.storyContent}>
              <h2>{story.title}</h2>

              <div className={styles.storySection}>
                <h3>Herausforderung</h3>
                <p>{story.challenge}</p>
              </div>

              <div className={styles.storySection}>
                <h3>Lösung</h3>
                <p>{story.solution}</p>
              </div>

              <div className={styles.storySection}>
                <h3>Ergebnisse</h3>
                <ul>
                  {story.results.map((result, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <FaCheckCircle className={styles.checkIcon} />
                      {result}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <FaClock />
                  <span>Dauer:</span>
                  <strong>{story.metrics.time}</strong>
                </div>
                <div className={styles.metric}>
                  <FaUsers />
                  <span>Team:</span>
                  <strong>{story.metrics.team}</strong>
                </div>
                <div className={styles.metric}>
                  <FaTrophy />
                  <span>Zufriedenheit:</span>
                  <strong>{story.metrics.satisfaction}</strong>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 