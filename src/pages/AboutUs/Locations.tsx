import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import styles from './Locations.module.scss';

export const Locations = () => {
  const locations = [
    {
      id: 'vienna-main',
      name: 'Wien Hauptsitz',
      address: 'Musterstraße 123, 1234 Wien',
      phone: '+43 1 234 5678',
      email: 'wien@arg-umzuege.at',
      hours: 'Mo-Fr: 08:00-18:00, Sa: 09:00-14:00',
      serviceAreas: ['Wien', 'Niederösterreich', 'Burgenland'],
      coordinates: { lat: 48.2082, lng: 16.3738 }
    },
    {
      id: 'vienna-north',
      name: 'Wien Nord',
      address: 'Beispielweg 45, 1210 Wien',
      phone: '+43 1 234 5679',
      email: 'wien-nord@arg-umzuege.at',
      hours: 'Mo-Fr: 08:00-18:00, Sa: 09:00-14:00',
      serviceAreas: ['Wien', 'Niederösterreich'],
      coordinates: { lat: 48.2565, lng: 16.3850 }
    },
    {
      id: 'vienna-south',
      name: 'Wien Süd',
      address: 'Teststraße 67, 1100 Wien',
      phone: '+43 1 234 5680',
      email: 'wien-sued@arg-umzuege.at',
      hours: 'Mo-Fr: 08:00-18:00, Sa: 09:00-14:00',
      serviceAreas: ['Wien', 'Niederösterreich'],
      coordinates: { lat: 48.1517, lng: 16.3800 }
    }
  ];

  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Strategische Standorte',
      description: 'Optimal verteilt für schnellen Service in der gesamten Region'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Öffnungszeiten',
      description: 'Kundenfreundliche Zeiten, auch samstags für Sie geöffnet'
    },
    {
      icon: <FaPhone />,
      title: '24/7 Erreichbarkeit',
      description: 'Notfallservice und Beratung rund um die Uhr'
    }
  ];

  return (
    <motion.div 
      className={styles.locationsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.hero}>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Unsere Standorte
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Finden Sie ARG Umzüge in Ihrer Nähe
        </motion.p>
      </div>

      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.locations}>
        <h2>Unsere Niederlassungen</h2>
        <div className={styles.locationsGrid}>
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className={styles.locationCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <h3>{location.name}</h3>
              <div className={styles.locationDetails}>
                <p className={styles.address}>
                  <FaMapMarkerAlt /> {location.address}
                </p>
                <p className={styles.contact}>
                  <FaPhone /> {location.phone}
                </p>
                <p className={styles.contact}>
                  <FaEnvelope /> {location.email}
                </p>
                <p className={styles.hours}>
                  <FaClock /> {location.hours}
                </p>
              </div>
              <div className={styles.serviceAreas}>
                <h4>Servicegebiete:</h4>
                <ul>
                  {location.serviceAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <motion.div
          className={styles.contactContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Kontaktieren Sie uns</h2>
          <p>
            Wählen Sie die für Sie am besten erreichbare Niederlassung oder 
            kontaktieren Sie unsere zentrale Servicenummer für eine 
            individuelle Beratung.
          </p>
          <a href="/kontakt" className={styles.contactButton}>
            Jetzt anfragen
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}; 