import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ServiceCards.module.scss';

export const ServiceCards = () => {
  const services = [
    {
      title: 'Privatumzug',
      description: 'Professionelle Umzüge für Privatpersonen',
      icon: 'home',
      link: '/leistungen/privatumzug',
      features: [
        'Individuelle Beratung',
        'Komplettes Verpackungsservice',
        'Möbelmontage/-demontage',
        'Umzugshelfer & Fahrzeuge'
      ]
    },
    {
      title: 'Büroumzug',
      description: 'Effiziente Büro- und Geschäftsumzüge',
      icon: 'building',
      link: '/leistungen/bueroumzug',
      features: [
        'Minimale Ausfallzeiten',
        'IT-Equipment Transport',
        'Wochenendservice',
        'Projektmanagement'
      ]
    },
    {
      title: 'Betriebsumzug',
      description: 'Komplette Betriebsverlagerungen',
      icon: 'industry',
      link: '/leistungen/betriebsumzug',
      features: [
        'Maschinen & Anlagen',
        'Lagerlogistik',
        'Spezialequipment',
        'Terminplanung'
      ]
    },
    {
      title: 'Umzugsmanagement',
      description: 'Umfassende Planung und Koordination',
      icon: 'tasks',
      link: '/leistungen/umzugsmanagement',
      features: [
        'Bedarfsanalyse',
        'Projektplanung',
        'Qualitätskontrolle',
        'Dokumentation'
      ]
    }
  ];

  return (
    <div className={styles.serviceGrid}>
      {services.map((service, index) => (
        <Link to={service.link} key={service.title}>
          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              <i className={`fas fa-${service.icon}`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className={styles.features}>
              {service.features.map((feature, i) => (
                <li key={i}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <span className={styles.learnMore}>
              Mehr erfahren <i className="fas fa-arrow-right"></i>
            </span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}; 