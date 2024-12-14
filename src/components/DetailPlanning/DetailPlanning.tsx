import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaParking, FaClock, FaBoxOpen, FaTools } from 'react-icons/fa';
import styles from './DetailPlanning.module.scss';

interface DetailPlanningProps {
  onComplete: (data: DetailPlanningData) => void;
  onBack: () => void;
}

export interface DetailPlanningData {
  access: {
    hasElevator: boolean;
    floor: number;
    parkingAvailable: boolean;
    parkingDistance: number;
  };
  time: {
    moveDate: Date | null;
    timePreference: 'morning' | 'afternoon' | 'flexible';
    estimatedDuration: number;
  };
  specialItems: string[];
  additionalServices: string[];
}

const steps = [
  {
    id: 'access',
    title: 'Zugang & Parkmöglichkeiten',
    description: 'Details zu Aufzug, Treppen und Parksituation',
    icon: <FaParking />
  },
  {
    id: 'time',
    title: 'Zeitplanung',
    description: 'Wunschtermin und Zeitfenster',
    icon: <FaClock />
  },
  {
    id: 'special',
    title: 'Besondere Gegenstände',
    description: 'Klavier, Tresor, antike Möbel etc.',
    icon: <FaBoxOpen />
  },
  {
    id: 'services',
    title: 'Zusätzliche Services',
    description: 'Verpackung, Montage, Entsorgung',
    icon: <FaTools />
  }
];

export const DetailPlanning: React.FC<DetailPlanningProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState<string>('access');
  const [formData, setFormData] = useState<DetailPlanningData>({
    access: {
      hasElevator: false,
      floor: 0,
      parkingAvailable: false,
      parkingDistance: 0
    },
    time: {
      moveDate: null,
      timePreference: 'flexible',
      estimatedDuration: 0
    },
    specialItems: [],
    additionalServices: []
  });

  const handleStepChange = (stepId: string) => {
    setCurrentStep(stepId);
  };

  const handleInputChange = (section: keyof DetailPlanningData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleComplete = () => {
    onComplete(formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'access':
        return (
          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>Zugang & Parkmöglichkeiten</h3>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label>Stockwerk</label>
                <input
                  type="number"
                  value={formData.access.floor}
                  onChange={(e) => handleInputChange('access', 'floor', parseInt(e.target.value))}
                />
              </div>
              <div className={styles.formField}>
                <label>Aufzug vorhanden?</label>
                <select
                  value={formData.access.hasElevator ? 'yes' : 'no'}
                  onChange={(e) => handleInputChange('access', 'hasElevator', e.target.value === 'yes')}
                >
                  <option value="yes">Ja</option>
                  <option value="no">Nein</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label>Parkmöglichkeit vorhanden?</label>
                <select
                  value={formData.access.parkingAvailable ? 'yes' : 'no'}
                  onChange={(e) => handleInputChange('access', 'parkingAvailable', e.target.value === 'yes')}
                >
                  <option value="yes">Ja</option>
                  <option value="no">Nein</option>
                </select>
              </div>
              {formData.access.parkingAvailable && (
                <div className={styles.formField}>
                  <label>Entfernung zum Parkplatz (Meter)</label>
                  <input
                    type="number"
                    value={formData.access.parkingDistance}
                    onChange={(e) => handleInputChange('access', 'parkingDistance', parseInt(e.target.value))}
                  />
                </div>
              )}
            </div>
          </div>
        );
      case 'time':
        return (
          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>Zeitplanung</h3>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label>Umzugsdatum</label>
                <input
                  type="date"
                  value={formData.time.moveDate?.toISOString().split('T')[0] || ''}
                  onChange={(e) => handleInputChange('time', 'moveDate', new Date(e.target.value))}
                />
              </div>
              <div className={styles.formField}>
                <label>Bevorzugte Tageszeit</label>
                <select
                  value={formData.time.timePreference}
                  onChange={(e) => handleInputChange('time', 'timePreference', e.target.value)}
                >
                  <option value="morning">Vormittag</option>
                  <option value="afternoon">Nachmittag</option>
                  <option value="flexible">Flexibel</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'special':
        return (
          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>Besondere Gegenstände</h3>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label>Wählen Sie besondere Gegenstände aus</label>
                <div className={styles.checkboxGroup}>
                  {['Klavier', 'Tresor', 'Antike Möbel', 'Kunstwerke', 'Aquarium'].map(item => (
                    <label key={item} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={formData.specialItems.includes(item)}
                        onChange={(e) => {
                          const newItems = e.target.checked
                            ? [...formData.specialItems, item]
                            : formData.specialItems.filter(i => i !== item);
                          setFormData(prev => ({ ...prev, specialItems: newItems }));
                        }}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>Zusätzliche Services</h3>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label>Wählen Sie zusätzliche Services aus</label>
                <div className={styles.checkboxGroup}>
                  {[
                    'Verpackungsservice',
                    'Möbelmontage',
                    'Entsorgung',
                    'Reinigung',
                    'Zwischenlagerung'
                  ].map(service => (
                    <label key={service} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service)}
                        onChange={(e) => {
                          const newServices = e.target.checked
                            ? [...formData.additionalServices, service]
                            : formData.additionalServices.filter(s => s !== service);
                          setFormData(prev => ({ ...prev, additionalServices: newServices }));
                        }}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepGrid}>
        {steps.map(step => (
          <motion.div
            key={step.id}
            className={`${styles.stepCard} ${currentStep === step.id ? styles.active : ''}`}
            onClick={() => handleStepChange(step.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.stepIcon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderStepContent()}
      </motion.div>

      <div className={styles.navigationButtons}>
        <button onClick={onBack}>
          Zurück
        </button>
        <button
          className={styles.primary}
          onClick={handleComplete}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}; 