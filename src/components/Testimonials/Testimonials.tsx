import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './Testimonials.module.scss';

interface Testimonial {
  text: string;
  author: string;
  rating: number;
  date: string;
  longText?: string;
}

export const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      text: "Sehr professioneller und freundlicher Service. Alles wurde sorgfältig transportiert.",
      longText: "Das Team von ARG Umzüge war außerordentlich professionell und freundlich. Jedes Möbelstück wurde mit größter Sorgfalt behandelt und sicher transportiert. Die Kommunikation war durchgehend excellent und transparent. Besonders beeindruckt hat mich die Effizienz und Schnelligkeit, mit der der Umzug durchgeführt wurde.",
      author: "Maria S.",
      rating: 5,
      date: "15.01.2024"
    },
    {
      text: "Pünktlich, zuverlässig und faire Preise. Gerne wieder!",
      longText: "Von der ersten Anfrage bis zum letzten Karton war alles perfekt organisiert. Das Team erschien pünktlich und arbeitete sehr effizient. Die Preisgestaltung war transparent und fair - keine versteckten Kosten. Besonders positiv war die flexible Termingestaltung und die kompetente Beratung im Vorfeld.",
      author: "Thomas K.",
      rating: 5,
      date: "02.01.2024"
    },
    {
      text: "Kompetente Beratung und einwandfreie Durchführung des Umzugs.",
      longText: "Die Beratung war sehr ausführlich und hilfreich. Alle meine Fragen wurden geduldig beantwortet. Am Umzugstag lief alles wie am Schnürchen. Das Team war gut eingespielt und sehr vorsichtig im Umgang mit meinen Möbeln. Auch schwierige Situationen wurden professionell gemeistert.",
      author: "Stefan M.",
      rating: 5,
      date: "28.12.2023"
    },
    {
      text: "Hervorragende Arbeit beim Büroumzug. Minimal Ausfallzeit.",
      longText: "Unser Büroumzug wurde perfekt geplant und ausgeführt. Die Mitarbeiter haben auch am Wochenende gearbeitet, um die Ausfallzeit zu minimieren. Am Montag konnten wir direkt wieder normal arbeiten. Die Koordination war excellent und das Team sehr professionell.",
      author: "Michael B.",
      rating: 5,
      date: "20.01.2024"
    },
    {
      text: "Sehr zufrieden mit dem Komplettservice inkl. Ein- und Auspacken.",
      longText: "Der Komplettservice war sein Geld absolut wert. Das Team hat nicht nur alles transportiert, sondern auch professionell ein- und ausgepackt. Besonders die Küche wurde perfekt organisiert eingeräumt. Die Kartonagen wurden anschließend gleich mitgenommen. Ein rundum sorglos Paket!",
      author: "Julia F.",
      rating: 5,
      date: "15.01.2024"
    },
    {
      text: "Ausgezeichneter Service auch bei schwierigen Bedingungen.",
      longText: "Trotz engem Treppenhaus und Regen wurde unser Umzug perfekt gemeistert. Das Team fand für jedes Problem eine Lösung und blieb dabei immer freundlich und professionell. Besonders beeindruckt hat uns die positive Einstellung und die sorgfältige Arbeitsweise.",
      author: "Andreas H.",
      rating: 5,
      date: "05.01.2024"
    }
  ];

  return (
    <>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            className={styles.testimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedTestimonial(testimonial)}
          >
            <p>{testimonial.text}</p>
            <div className={styles.author}>
              <div>
                <span>{testimonial.author}</span>
                <small className={styles.date}>{testimonial.date}</small>
              </div>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
            <button className={styles.readMore}>Mehr lesen</button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className={styles.modal}
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
                onClick={() => setSelectedTestimonial(null)}
              >
                <i className="fas fa-times"></i>
              </button>
              <div className={styles.modalHeader}>
                <h3>{selectedTestimonial.author}</h3>
                <div className={styles.stars}>
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <small className={styles.date}>{selectedTestimonial.date}</small>
              </div>
              <p>{selectedTestimonial.longText || selectedTestimonial.text}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 