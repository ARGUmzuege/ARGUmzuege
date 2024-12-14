import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.scss';

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: "Privatumzug",
      description: "Professionelle und stressfreie Umzüge für Privatpersonen",
      icon: "home",
      link: "/leistungen/privatumzug",
      features: [
        "Individuelle Beratung",
        "Komplettes Verpackungsservice",
        "Möbelmontage/-demontage",
        "Versicherung inklusive"
      ],
      color: "rgba(44, 62, 80, 0.4)"
    },
    {
      title: "Büroumzug",
      description: "Effiziente und organisierte Büroumzüge",
      icon: "building",
      link: "/leistungen/bueroumzug",
      features: [
        "Minimale Ausfallzeiten",
        "IT-Equipment Transport",
        "Wochenendservice",
        "Projektmanagement"
      ],
      color: "rgba(52, 73, 94, 0.4)"
    },
    {
      title: "Betriebsumzug",
      description: "Komplexe Betriebsverlagerungen professionell umgesetzt",
      icon: "industry",
      link: "/leistungen/betriebsumzug",
      features: [
        "Maschinen & Anlagen",
        "Lagerlogistik",
        "Spezialequipment",
        "Terminplanung"
      ],
      color: "rgba(47, 54, 64, 0.4)"
    },
    {
      title: "Umzugsmanagement",
      description: "Professionelle Planung und Koordination von Großprojekten",
      icon: "tasks",
      link: "/leistungen/umzugsmanagement",
      features: [
        "Projektplanung",
        "Ressourcenmanagement",
        "Qualitätskontrolle",
        "Dokumentation"
      ],
      color: "rgba(45, 52, 54, 0.4)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 4px 20px rgba(0, 0, 0, 0.03)",
      "0 4px 30px rgba(255, 255, 255, 0.1)",
      "0 4px 20px rgba(0, 0, 0, 0.03)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const calculateDistance = (cardRect: DOMRect) => {
    const dx = mousePosition.x - (cardRect.left + cardRect.width / 2);
    const dy = mousePosition.y - (cardRect.top + cardRect.height / 2);
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div className={styles.services}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unsere Leistungen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Maßgeschneiderte Umzugslösungen für jeden Bedarf
        </motion.p>
      </motion.div>

      <motion.div 
        className={styles.servicesGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className={styles.serviceCard}
            variants={itemVariants}
            animate={hoveredCard === service.title ? "hover" : "rest"}
            onHoverStart={() => setHoveredCard(service.title)}
            onHoverEnd={() => setHoveredCard(null)}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{
              background: `linear-gradient(135deg, ${service.color}, ${service.color.replace('0.4', '0.5')}), rgba(255, 255, 255, 0.02)`
            }}
          >
            <Link to={service.link}>
              <motion.div 
                className={styles.cardContent}
                animate={hoveredCard === service.title ? floatingAnimation : {}}
              >
                <motion.div 
                  className={styles.iconWrapper}
                  animate={hoveredCard === service.title ? {
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                    transition: { duration: 0.5 }
                  } : {}}
                >
                  <motion.i 
                    className={`fas fa-${service.icon}`}
                    animate={hoveredCard === service.title ? {
                      scale: [1, 1.2, 1],
                      transition: { duration: 0.3 }
                    } : {}}
                  />
                </motion.div>
                <motion.h2
                  animate={hoveredCard === service.title ? {
                    color: "rgba(255, 255, 255, 1)",
                    transition: { duration: 0.3 }
                  } : {}}
                >
                  {service.title}
                </motion.h2>
                <motion.p>{service.description}</motion.p>
                <ul className={styles.features}>
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.i 
                        className="fas fa-check"
                        animate={hoveredCard === service.title ? {
                          scale: [1, 1.3, 1],
                          transition: { duration: 0.3, delay: index * 0.1 }
                        } : {}}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div 
                  className={styles.learnMore}
                  whileHover={{ x: 10 }}
                  animate={hoveredCard === service.title ? {
                    x: [0, 5, 0],
                    transition: { duration: 1, repeat: Infinity }
                  } : {}}
                >
                  <span>Mehr erfahren</span>
                  <motion.i 
                    className="fas fa-arrow-right"
                    animate={hoveredCard === service.title ? {
                      x: [0, 5, 0],
                      transition: { duration: 1, repeat: Infinity }
                    } : {}}
                  />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.section 
        className={styles.cta}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.div 
          className={styles.container}
          whileInView={{ 
            opacity: [0, 1],
            y: [50, 0]
          }}
          viewport={{ once: true }}
        >
          <motion.h2
            animate={{
              scale: [1, 1.02, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            Bereit für Ihren Umzug?
          </motion.h2>
          <motion.p>Kontaktieren Sie uns für ein unverbindliches Angebot</motion.p>
          <div className={styles.ctaButtons}>
            <motion.a 
              href="mailto:argumzuege@gmail.com" 
              className={styles.primaryButton}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Kostenlos anfragen
            </motion.a>
            <motion.a 
              href="/preise" 
              className={styles.secondaryButton}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Preise ansehen
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}; 