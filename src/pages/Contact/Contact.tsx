import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Initialize EmailJS
emailjs.init("gebv88-rRGCsSe300");

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.send(
        'service_kguix3p',
        'template_xskh3h1',
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone,
          message: formData.message
        },
        'gebv88-rRGCsSe300'
      );

      console.log('EmailJS Response:', result);

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden!'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error: any) {
      console.error('EmailJS Error Details:', {
        error,
        message: error.message,
        text: error.text,
        status: error.status
      });
      
      setSubmitStatus({
        type: 'error',
        message: 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map the form field names to state field names
    const fieldMap: { [key: string]: string } = {
      'from_name': 'name',
      'reply_to': 'email',
      'phone_number': 'phone',
      'message': 'message'
    };

    setFormData(prev => ({
      ...prev,
      [fieldMap[name] || name]: value
    }));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <h1>Kontaktieren Sie uns</h1>
        <p>Wir sind hier, um Ihnen bei Ihrem Umzug zu helfen</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <FaPhone className={styles.icon} />
            <h3>Telefon</h3>
            <p>068110608125</p>
          </div>
          <div className={styles.infoCard}>
            <FaEnvelope className={styles.icon} />
            <h3>E-Mail</h3>
            <p>argumzuege@gmail.com</p>
          </div>
          <div className={styles.infoCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Adresse</h3>
            <p>Musterstraße 123<br />1234 Wien</p>
          </div>
        </div>

        <form 
          className={styles.contactForm}
          onSubmit={handleSubmit}
        >
          {submitStatus.type && (
            <div className={`${styles.alert} ${styles[submitStatus.type]}`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Nachricht</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
          </button>
        </form>
      </div>
    </div>
  );
}; 