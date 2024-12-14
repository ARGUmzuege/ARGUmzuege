import React, { useState, useEffect } from 'react';
import styles from './References.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaBuilding, FaTools } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  date: string;
  details: string[];
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxuriöse Villa Umzug",
    description: "Kompletter Umzug einer 350m² Villa mit wertvollen Antiquitäten und Kunstwerken",
    category: "Privatumzüge",
    image: "/images/projects/Image 1.jpeg",
    location: "Wien, Österreich",
    date: "März 2023",
    details: [
      "350m² Wohnfläche",
      "Spezialverpackung für Antiquitäten",
      "Kunsttransport",
      "Komplette Montage/Demontage"
    ],
    features: [
      "Weiße Handschuhe Service",
      "Klimatisierter Transport",
      "Versicherung inklusive",
      "Express 24h Service"
    ]
  },
  {
    id: 2,
    title: "Großes Bürozentrum",
    description: "Umzug eines IT-Unternehmens mit 200 Arbeitsplätzen über ein Wochenende",
    category: "Büroumzüge",
    image: "/images/projects/Image 2.jpeg",
    location: "Wien, Österreich",
    date: "April 2023",
    details: [
      "200 Arbeitsplätze",
      "Serverraum Umzug",
      "IT-Equipment Transport",
      "Minimale Ausfallzeit"
    ],
    features: [
      "24/7 Service",
      "Spezialverpackung für IT",
      "Projektmanagement",
      "Versicherung inklusive"
    ]
  },
  {
    id: 3,
    title: "Internationaler Umzug",
    description: "Komplexer Haushaltsumzug von Wien nach Hamburg mit speziellem Equipment",
    category: "Privatumzüge",
    image: "/images/projects/Image 3.jpeg",
    location: "Wien → Hamburg",
    date: "Mai 2023",
    details: [
      "180m² Wohnfläche",
      "Internationale Logistik",
      "Zollabwicklung",
      "Komplett-Service"
    ],
    features: [
      "Grenzüberschreitend",
      "Tracking-System",
      "Vollversicherung",
      "Persönlicher Umzugsberater"
    ]
  },
  {
    id: 4,
    title: "Medizinische Praxis",
    description: "Präziser Umzug einer Zahnarztpraxis mit empfindlichen medizinischen Geräten",
    category: "Spezialumzüge",
    image: "/images/projects/Image 4.jpeg",
    location: "Wien, Österreich",
    date: "Juni 2023",
    details: [
      "150m² Praxisfläche",
      "Medizingeräte Transport",
      "Sterilbereich Umzug",
      "Termingerechte Ausführung"
    ],
    features: [
      "Medizintechnik-Expertise",
      "Hygiene-Standards",
      "Express-Service",
      "Spezialversicherung"
    ]
  },
  {
    id: 5,
    title: "Boutique Hotel",
    description: "Renovierungsumzug eines 4-Sterne Hotels mit 40 Zimmern",
    category: "Spezialumzüge",
    image: "/images/projects/Image 5.jpeg",
    location: "Wien, Österreich",
    date: "Juli 2023",
    details: [
      "40 Hotelzimmer",
      "Lobby & Restaurant",
      "Antiquitäten Transport",
      "Zeitkritische Ausführung"
    ],
    features: [
      "Nachteinsatz möglich",
      "Hotellogistik-Erfahrung",
      "Wertgegenstände-Transport",
      "Projektkoordination"
    ]
  },
  {
    id: 6,
    title: "Start-up Büro",
    description: "Agiler Umzug eines wachsenden Tech Start-ups mit flexiblem Zeitplan",
    category: "Büroumzüge",
    image: "/images/projects/Image 6.jpeg",
    location: "Wien, Österreich",
    date: "August 2023",
    details: [
      "50 Arbeitsplätze",
      "Flexible Planung",
      "IT-Infrastructure",
      "Wochenend-Service"
    ],
    features: [
      "Agile Umzugsplanung",
      "Tech-Equipment Expertise",
      "Express-Option",
      "Startup-freundlich"
    ]
  },
  {
    id: 7,
    title: "Penthouse Umzug",
    description: "Exklusiver Umzug eines 200m² Penthouses mit Dachterrasse",
    category: "Privatumzüge",
    image: "/images/projects/Image 7.jpeg",
    location: "Wien, Österreich",
    date: "September 2023",
    details: [
      "200m² Wohnfläche",
      "Dachterrassen-Möbel",
      "Designermöbel",
      "Höhenspezifischer Transport"
    ],
    features: [
      "Premium Service",
      "Höhenzugang-Expertise",
      "Spezialverpackung",
      "Concierge Service"
    ]
  },
  {
    id: 8,
    title: "Familienhaus Classic",
    description: "Umzug einer 5-köpfigen Familie mit Klavier und Heimkino",
    category: "Privatumzüge",
    image: "/images/projects/Image 8.jpeg",
    location: "Wien, Österreich",
    date: "Oktober 2023",
    details: [
      "160m² Wohnfläche",
      "Klaviertransport",
      "Heimkino-Ausstattung",
      "Kinderzimmer-Spezial"
    ],
    features: [
      "Familienfreundlich",
      "Musikinstrumente-Transport",
      "Elektronik-Sicherung",
      "Einpack-Service"
    ]
  },
  {
    id: 9,
    title: "Künstler Loft",
    description: "Umzug eines Künstlerateliers mit wertvollen Kunstwerken",
    category: "Privatumzüge",
    image: "/images/projects/Image 9.jpeg",
    location: "Wien, Österreich",
    date: "November 2023",
    details: [
      "120m² Loft",
      "Kunstwerke-Transport",
      "Atelier-Equipment",
      "Spezialverpackung"
    ],
    features: [
      "Kunst-Expertise",
      "Klimakontrolle",
      "Versicherung Plus",
      "Galerie-Service"
    ]
  }
];

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    setFilteredProjects(filtered);
  }, [filter]);

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];

  return (
    <div className={styles.projectGallery}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Unsere Projekte
      </motion.h1>

      <motion.div 
        className={styles.filterButtons}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category === 'all' ? 'Alle Projekte' : category}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className={styles.projectGrid}
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              layoutId={`project-${project.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.projectModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
            >
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className={styles.modalImage}>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className={styles.modalInfo}>
                <h2>{selectedProject.title}</h2>
                <p className={styles.description}>{selectedProject.description}</p>

                <div className={styles.metadata}>
                  <div>
                    <FaMapMarkerAlt />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div>
                    <FaCalendarAlt />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>

                <div className={styles.details}>
                  <h3>
                    <FaBuilding />
                    Projektdetails
                  </h3>
                  <ul>
                    {selectedProject.details.map((detail, index) => (
                      <li key={index}>
                        <FaCheckCircle />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.features}>
                  <h3>
                    <FaTools />
                    Leistungen
                  </h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery; 