import { motion } from 'framer-motion';
import styles from './Prices.module.scss';

export const Prices = () => {
  const packages = [
    {
      title: "Basic Umzug",
      price: "ab 85€/Stunde",
      features: [
        "2 professionelle Umzugshelfer",
        "1 Umzugswagen (3,5t)",
        "Basis-Versicherung",
        "Standardverpackungsmaterial",
        "Montage/Demontage von Standardmöbeln"
      ],
      note: "Ideal für 1-2 Zimmer Wohnungen"
    },
    {
      title: "Premium Umzug",
      price: "ab 125€/Stunde",
      features: [
        "3 professionelle Umzugshelfer",
        "1 großer Umzugswagen (7,5t)",
        "Erweiterte Versicherung",
        "Komplettes Verpackungsmaterial",
        "Montage/Demontage aller Möbel",
        "Einpackservice auf Wunsch",
        "Entsorgung von Verpackungsmaterial"
      ],
      note: "Perfekt für 3-4 Zimmer Wohnungen",
      recommended: true
    },
    {
      title: "Business Umzug",
      price: "Individuelles Angebot",
      features: [
        "Maßgeschneidertes Team",
        "Mehrere Umzugswagen nach Bedarf",
        "Vollversicherung",
        "Wochenend- und Feiertagsservice",
        "IT-Equipment Handling",
        "Projektmanagement",
        "Einlagerungsmöglichkeiten"
      ],
      note: "Für Büros und Betriebe"
    }
  ];

  const additionalServices = [
    {
      service: "Zusätzlicher Umzugshelfer",
      price: "35€/Stunde"
    },
    {
      service: "Zusätzlicher Umzugswagen (3,5t)",
      price: "45€/Stunde"
    },
    {
      service: "Einpackservice",
      price: "35€/Stunde/Person"
    },
    {
      service: "Umzugskartons (neu)",
      price: "3,50€/Stück"
    },
    {
      service: "Kleiderkisten mit Kleiderstange",
      price: "12€/Stück"
    },
    {
      service: "Packpapier (10kg)",
      price: "15€"
    },
    {
      service: "Luftpolsterfolie (100m)",
      price: "25€"
    }
  ];

  return (
    <div className={styles.prices}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Unsere Preise</h1>
        <p>Transparente Preise für Ihren individuellen Umzug</p>
      </motion.div>

      <section className={styles.packages}>
        <div className={styles.packageGrid}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              className={`${styles.package} ${pkg.recommended ? styles.recommended : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {pkg.recommended && <span className={styles.recommendedBadge}>Beliebt</span>}
              <h2>{pkg.title}</h2>
              <div className={styles.price}>{pkg.price}</div>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className={styles.note}>{pkg.note}</p>
              <a href="mailto:argumzuege@gmail.com" className={styles.button}>
                Angebot anfordern
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.additionalServices}>
        <h2>Zusätzliche Leistungen</h2>
        <div className={styles.servicesGrid}>
          {additionalServices.map((item, index) => (
            <motion.div
              key={item.service}
              className={styles.serviceItem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span>{item.service}</span>
              <span className={styles.servicePrice}>{item.price}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.info}>
        <h2>Wichtige Informationen</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <h3>Mindestbuchung</h3>
            <p>Die Mindestbuchungszeit beträgt 3 Stunden</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Anfahrt</h3>
            <p>Innerhalb von Wien kostenlos, außerhalb 1,20€/km</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Zahlungsmethoden</h3>
            <p>Bar, Überweisung, EC-Karte</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Stornierung</h3>
            <p>Bis 48h vorher kostenfrei möglich</p>
          </div>
        </div>
      </section>
    </div>
  );
}; 