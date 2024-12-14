import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';

const Career = () => {
  const positions = [
    {
      title: 'Umzugshelfer (m/w/d)',
      description: 'Wir suchen motivierte Mitarbeiter für unser Umzugsteam.',
      requirements: [
        'Körperliche Belastbarkeit',
        'Teamfähigkeit',
        'Zuverlässigkeit',
        'Deutschkenntnisse',
      ],
      benefits: [
        'Faire Bezahlung',
        'Flexible Arbeitszeiten',
        'Familiäres Arbeitsumfeld',
        'Entwicklungsmöglichkeiten'
      ]
    },
    {
      title: 'Fahrer (m/w/d)',
      description: 'Erfahrene Fahrer für unsere Umzugsfahrzeuge gesucht.',
      requirements: [
        'Führerschein Klasse B/C',
        'Berufserfahrung',
        'Kundenorientierung',
        'Zuverlässigkeit'
      ],
      benefits: [
        'Attraktives Gehalt',
        'Moderne Fahrzeugflotte',
        'Unbefristete Festanstellung',
        'Weiterbildungsmöglichkeiten'
      ]
    }
  ];

  return (
    <div className={styles.careerContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Karriere bei ARG Umzüge</h1>
        <p className={styles.careerIntro}>
          Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Umzugsbranche.
        </p>

        <div className={styles.positionsGrid}>
          {positions.map((position, index) => (
            <motion.div
              key={index}
              className={styles.positionCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2>{position.title}</h2>
              <p>{position.description}</p>
              
              <div className={styles.requirementsBenefits}>
                <div>
                  <h3>Anforderungen:</h3>
                  <ul>
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3>Wir bieten:</h3>
                  <ul>
                    {position.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className={styles.applyButton}>
                Jetzt bewerben
              </button>
            </motion.div>
          ))}
        </div>

        <div className={styles.contactInfo}>
          <h3>Interesse geweckt?</h3>
          <p>
            Senden Sie Ihre Bewerbungsunterlagen an: <br />
            <a href="mailto:argumzuege@gmail.com">argumzuege@gmail.com</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Career; 