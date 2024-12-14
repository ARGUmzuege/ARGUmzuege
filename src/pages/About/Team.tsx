import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import styles from './About.module.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Auran Mamedov",
    position: "Geschäftsführer & Gründer",
    description: "Mit seiner Vision und Führungsstärke leitet Auran das Unternehmen seit der Gründung und hat es zu dem gemacht, was es heute ist.",
    image: "/images/team/team1.jpg"
  },
  {
    id: 2,
    name: "Ahmad Al-Rashid",
    position: "Operativer Leiter",
    description: "Als rechte Hand der Geschäftsführung koordiniert Ahmad alle operativen Abläufe und sorgt für reibungslose Prozesse.",
    image: "/images/team/team2.jpg"
  },
  {
    id: 3,
    name: "Turpal Bisultanov",
    position: "Creative Director & Tech Lead",
    description: "Turpal ist der kreative Kopf hinter unserem Markenauftritt. Er verantwortet das gesamte Design, Marketing und die technische Entwicklung unserer digitalen Präsenz.",
    image: "/images/team/team3.jpg"
  },
  {
    id: 4,
    name: "Yusuf Özturk",
    position: "Teamleiter Umzüge",
    description: "Mit über 8 Jahren Erfahrung leitet Yusuf die Umzugsteams und garantiert höchste Qualität bei der Ausführung.",
    image: "/images/team/team4.jpg"
  },
  {
    id: 5,
    name: "Karim Hassan",
    position: "Kundenberater",
    description: "Karim ist der erste Ansprechpartner für unsere Kunden und sorgt mit seiner empathischen Art für optimale Beratung.",
    image: "/images/team/team5.jpg"
  },
  {
    id: 6,
    name: "Malik Al-Sayed",
    position: "Spezialist für Büroumzüge",
    description: "Malik hat sich auf Büroumzüge spezialisiert und kennt alle Herausforderungen bei der Verlegung von Unternehmen.",
    image: "/images/team/team6.jpg"
  },
  {
    id: 7,
    name: "Omar Rahman",
    position: "Projektmanager",
    description: "Omar koordiniert Großprojekte und sorgt dafür, dass auch komplexe Umzüge perfekt ablaufen.",
    image: "/images/team/team7.jpg"
  },
  {
    id: 8,
    name: "Amir Nasir",
    position: "Fuhrparkmanager",
    description: "Amir kümmert sich um unseren Fuhrpark und stellt sicher, dass alle Fahrzeuge optimal gewartet und einsatzbereit sind.",
    image: "/images/team/team8.jpg"
  },
  {
    id: 9,
    name: "Zain Al-Abidin",
    position: "Qualitätsmanager",
    description: "Zain überwacht die Qualitätsstandards und entwickelt Prozesse kontinuierlich weiter.",
    image: "/images/team/team9.jpg"
  },
  {
    id: 10,
    name: "Ibrahim Khoury",
    position: "Spezialumzüge",
    description: "Ibrahim ist unser Experte für besonders anspruchsvolle Umzüge wie Kunsttransporte oder medizinische Einrichtungen.",
    image: "/images/team/team10.jpg"
  }
];

export const Team: React.FC = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

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
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: ["-2%", "2%"],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 20px rgba(218,165,32,0.3)",
      "0 0 40px rgba(218,165,32,0.5)",
      "0 0 20px rgba(218,165,32,0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className={styles.team}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <motion.div
        className={styles.backgroundParticles}
        style={{ y: backgroundY, opacity }}
      />

      <motion.h1
        variants={titleVariants}
        initial="initial"
        animate="animate"
        className={styles.title}
      >
        Unser Team
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Lernen Sie die Menschen kennen, die ARG Umzüge zu etwas Besonderem machen
      </motion.p>

      <motion.div
        className={styles.teamGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className={styles.teamMember}
            variants={itemVariants}
            whileHover="hover"
            custom={index}
            animate={controls}
            initial="hidden"
          >
            <motion.div 
              className={styles.memberImage}
              variants={imageVariants}
              animate={floatingAnimation}
            >
              <motion.img 
                src={member.image} 
                alt={member.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className={styles.imageGlow}
                animate={glowAnimation}
              />
            </motion.div>

            <motion.div 
              className={styles.memberInfo}
              animate={floatingAnimation}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                {member.name}
              </motion.h3>
              
              <motion.h4
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * index }}
              >
                {member.position}
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 * index }}
              >
                {member.description}
              </motion.p>

              <motion.div className={styles.socialLinks}>
                <motion.a 
                  href="#" 
                  className={styles.socialIcon}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="#" 
                  className={styles.socialIcon}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <FaEnvelope />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}; 