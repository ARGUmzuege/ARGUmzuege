import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaPlus, FaMinus, FaCalendar, FaClock, FaTruck, FaBoxes, 
  FaTools, FaBuilding, FaMoneyBillWave, FaShieldAlt, 
  FaMapMarkerAlt, FaCalculator, FaFileContract, FaCheckCircle, FaCalendarAlt, FaComment, FaChevronDown, FaChevronUp 
} from 'react-icons/fa';
import styles from './InteractiveArea.module.scss';
import { BackgroundAnimation } from '../BackgroundAnimation/BackgroundAnimation';

interface Room {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface MoveDetails {
  date: string;
  time: 'morning' | 'afternoon' | 'flexible';
  floor: number;
  hasElevator: boolean;
  needsPacking: boolean;
  needsAssembly: boolean;
  specialItems: string[];
  additionalNotes: string;
}

interface CostEstimate {
  basePrice: number;
  packingCost: number;
  assemblyCost: number;
  specialItemsCost: number;
  insuranceCost: number;
  totalCost: number;
}

interface LocationDetails {
  fromAddress: string;
  toAddress: string;
  fromFloor: number;
  toFloor: number;
  distance: number;
  hasFromElevator: boolean;
  hasToElevator: boolean;
  parkingAvailable: boolean;
}

interface InsuranceOptions {
  basicCoverage: boolean;
  fullCoverage: boolean;
  customValue: number;
}

const availableRooms: Room[] = [
  { 
    id: 'living', 
    name: 'Wohnzimmer', 
    description: 'Der zentrale Lebensraum Ihrer Wohnung',
    icon: '🛋️'
  },
  { 
    id: 'bedroom', 
    name: 'Schlafzimmer', 
    description: 'Ihr persönlicher Rückzugsort',
    icon: '🛏️'
  },
  { 
    id: 'kitchen', 
    name: 'Küche', 
    description: 'Das Herz des Haushalts',
    icon: '🍳'
  },
  { 
    id: 'bathroom', 
    name: 'Badezimmer', 
    description: 'Ihr Wellness-Bereich',
    icon: '🚿'
  },
  { 
    id: 'office', 
    name: 'Arbeitszimmer', 
    description: 'Ihr produktiver Arbeitsplatz',
    icon: '💼'
  },
  { 
    id: 'storage', 
    name: 'Abstellraum', 
    description: 'Stauraum für Verschiedenes',
    icon: '📦'
  }
];

const initialMoveDetails: MoveDetails = {
  date: '',
  time: 'flexible',
  floor: 0,
  hasElevator: false,
  needsPacking: false,
  needsAssembly: false,
  specialItems: [],
  additionalNotes: ''
};

const calculateCosts = (
  rooms: Room[], 
  moveDetails: MoveDetails, 
  locationDetails: LocationDetails
): CostEstimate => {
  const basePrice = rooms.length * 250; // Grundpreis pro Raum
  const packingCost = moveDetails.needsPacking ? rooms.length * 100 : 0;
  const assemblyCost = moveDetails.needsAssembly ? rooms.length * 150 : 0;
  const specialItemsCost = moveDetails.specialItems.length * 100;
  const insuranceCost = basePrice * 0.05; // 5% des Grundpreises
  
  return {
    basePrice,
    packingCost,
    assemblyCost,
    specialItemsCost,
    insuranceCost,
    totalCost: basePrice + packingCost + assemblyCost + specialItemsCost + insuranceCost
  };
};

const CompanyHistory = () => {
  const timelineEvents = [
    {
      year: '2015',
      title: 'Die Gründung',
      description: 'Mit einem kleinen Team und der Vision, Umzüge persönlicher und effizienter zu gestalten, starteten wir unser Unternehmen.',
      icon: '🚚'
    },
    {
      year: '2017',
      title: 'Erste Expansion',
      description: 'Erweiterung unseres Teams und Anschaffung weiterer Fahrzeuge, um der steigenden Nachfrage gerecht zu werden.',
      icon: '📈'
    },
    {
      year: '2019',
      title: 'Spezialisierung',
      description: 'Entwicklung maßgeschneiderter Umzugslösungen für Privat- und Geschäftskunden. Einführung unseres Premium-Service.',
      icon: '⭐'
    },
    {
      year: '2021',
      title: 'Digitale Innovation',
      description: 'Launch unserer Online-Plattform für einfachere Umzugsplanung und besseren Kundenservice.',
      icon: '💻'
    },
    {
      year: '2023',
      title: 'Heute',
      description: 'Ein etabliertes Team von Umzugsprofis, das jährlich hunderte zufriedene Kunden bei ihrem Umzug begleitet.',
      icon: '👥'
    }
  ];

  return (
    <div className={styles.historySection}>
      <h2 className={styles.historyTitle}>Unsere Geschichte</h2>
      <p className={styles.historySubtitle}>Eine Erfolgsgeschichte seit 2015</p>
      
      <div className={styles.timeline}>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className={styles.timelineEvent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.timelineContent}>
              <div className={styles.timelineIcon}>{event.icon}</div>
              <div className={styles.timelineYear}>{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
        <div className={styles.timelineLine} />
      </div>

      <div className={styles.companyStats}>
        <motion.div 
          className={styles.statCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.statNumber}>8</span>
          <span className={styles.statLabel}>Jahre Erfahrung</span>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.statNumber}>2.000+</span>
          <span className={styles.statLabel}>Erfolgreiche Umzüge</span>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.statNumber}>15+</span>
          <span className={styles.statLabel}>Experten im Team</span>
        </motion.div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
      <div className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <span className={styles.cardIcon}>🎯</span>
          <h3>Unsere Mission</h3>
          <p>Wir machen Umzüge stressfrei und effizient. Mit persönlicher Betreuung und professioneller Durchführung sorgen wir für einen reibungslosen Ablauf Ihres Umzugs.</p>
        </div>

        <div className={styles.aboutCard}>
          <span className={styles.cardIcon}>🚛</span>
          <h3>Unsere Expertise</h3>
          <p>Spezialisiert auf Privat-, Büro- und Spezialumzüge bieten wir maßgeschneiderte Lösungen für jeden Bedarf. Unser erfahrenes Team garantiert höchste Qualität.</p>
        </div>

        <div className={styles.aboutCard}>
          <span className={styles.cardIcon}>👥</span>
          <h3>Unser Team</h3>
          <p>Unser motiviertes Team besteht aus gut ausgebildeten Fachkräften, die mit Sorgfalt und Engagement für Ihre Zufriedenheit sorgen.</p>
        </div>

        <div className={styles.aboutCard}>
          <span className={styles.cardIcon}>⭐</span>
          <h3>Unsere Werte</h3>
          <p>Zuverlässigkeit, Qualität und Kundenorientierung stehen bei uns an erster Stelle. Wir behandeln Ihr Umzugsgut, als wäre es unser eigenes.</p>
        </div>
      </div>
      
      <CompanyHistory />
    </>
  );
};

export const InteractiveArea: React.FC = () => {
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);
  const [showDetailPlanning, setShowDetailPlanning] = useState(false);
  const [moveDetails, setMoveDetails] = useState<MoveDetails>(initialMoveDetails);
  const [currentStep, setCurrentStep] = useState(1);
  const [showCostPlanning, setShowCostPlanning] = useState(false);
  const [locationDetails, setLocationDetails] = useState<LocationDetails>({
    fromAddress: '',
    toAddress: '',
    fromFloor: 0,
    toFloor: 0,
    distance: 0,
    hasFromElevator: false,
    hasToElevator: false,
    parkingAvailable: false
  });
  const [insuranceOptions, setInsuranceOptions] = useState<InsuranceOptions>({
    basicCoverage: false,
    fullCoverage: false,
    customValue: 0
  });
  const [costEstimate, setCostEstimate] = useState<CostEstimate | null>(null);
  const [finalStep, setFinalStep] = useState(false);
  const [isRoomSectionCollapsed, setIsRoomSectionCollapsed] = useState(true);

  const handleRoomToggle = (room: Room) => {
    const isSelected = selectedRooms.find(r => r.id === room.id);
    if (isSelected) {
      setSelectedRooms(selectedRooms.filter(r => r.id !== room.id));
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const handleDetailChange = (field: keyof MoveDetails, value: any) => {
    setMoveDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSpecialItemAdd = (item: string) => {
    if (item && !moveDetails.specialItems.includes(item)) {
      handleDetailChange('specialItems', [...moveDetails.specialItems, item]);
    }
  };

  const handleLocationChange = (field: keyof LocationDetails, value: any) => {
    setLocationDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInsuranceChange = (field: keyof InsuranceOptions, value: any) => {
    setInsuranceOptions(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCostCalculation = () => {
    // Calculate costs regardless of validation
    const costs = calculateCosts(selectedRooms, moveDetails, locationDetails);
    setCostEstimate(costs);
    setShowCostPlanning(true);
    setFinalStep(true);
  };

  const handleSubmit = () => {
    // Formatiere die gesammelten Daten als Text
    const emailBody = `
Neue Umzugsanfrage

AUSGEWÄHLTE RÄUME:
${selectedRooms.map(room => `- ${room.name}`).join('\n')}

UMZUGSDETAILS:
- Datum: ${moveDetails.date}
- Tageszeit: ${moveDetails.time === 'morning' ? 'Vormittag' : moveDetails.time === 'afternoon' ? 'Nachmittag' : 'Flexibel'}
- Stockwerk: ${moveDetails.floor}
- Aufzug vorhanden: ${moveDetails.hasElevator ? 'Ja' : 'Nein'}

ZUSÄTZLICHE SERVICES:
- Einpackservice: ${moveDetails.needsPacking ? 'Ja' : 'Nein'}
- Möbelmontage: ${moveDetails.needsAssembly ? 'Ja' : 'Nein'}

BESONDERE GEGENSTÄNDE:
${moveDetails.specialItems.length > 0 ? moveDetails.specialItems.map(item => `- ${item}`).join('\n') : '- Keine'}

ADRESSEN:
- Von: ${locationDetails.fromAddress}
- Nach: ${locationDetails.toAddress}

VERSICHERUNG:
- Option: ${insuranceOptions.fullCoverage ? 'Premium-Schutz' : 'Basis-Schutz'}

KOSTENÜBERSICHT:
- Grundpreis: ${costEstimate?.basePrice}€
- Verpackungsservice: ${costEstimate?.packingCost}€
- Möbelmontage: ${costEstimate?.assemblyCost}€
- Spezielle Gegenstände: ${costEstimate?.specialItemsCost}€
- Versicherung: ${costEstimate?.insuranceCost}€
- Gesamtkosten: ${costEstimate?.totalCost}€

ZUSÄTZLICHE NOTIZEN:
${moveDetails.additionalNotes || 'Keine zusätzlichen Notizen'}
`.trim();

    // Öffne den E-Mail-Client mit vorausgefüllten Daten
    const mailtoLink = `mailto:info@arg-umzuege.de?subject=Neue Umzugsanfrage&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const renderCostPlanning = () => (
    <motion.div
      className={styles.costPlanning}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className={styles.title}>Kostenplanung & finale Details</h2>

      {/* Adressen */}
      <div className={styles.planningSection}>
        <h3><FaMapMarkerAlt /> Adressen</h3>
        <div className={styles.formGroup}>
          <label>Abholadresse</label>
          <input
            type="text"
            value={locationDetails.fromAddress}
            onChange={(e) => handleLocationChange('fromAddress', e.target.value)}
            placeholder="Straße, Hausnummer, PLZ, Ort"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Zieladresse</label>
          <input
            type="text"
            value={locationDetails.toAddress}
            onChange={(e) => handleLocationChange('toAddress', e.target.value)}
            placeholder="Straße, Hausnummer, PLZ, Ort"
          />
        </div>
      </div>

      {/* Versicherungsoptionen */}
      <div className={styles.planningSection}>
        <h3><FaShieldAlt /> Versicherungsschutz</h3>
        <div className={styles.insuranceOptions}>
          <div className={styles.insuranceCard}>
            <h4>Basis-Schutz</h4>
            <p>Grundlegende Absicherung für Ihren Umzug</p>
            <ul>
              <li>Transportschäden</li>
              <li>Bis 10.000€ Deckung</li>
              <li>Selbstbeteiligung 250€</li>
            </ul>
            <label>
              <input
                type="radio"
                checked={insuranceOptions.basicCoverage}
                onChange={() => handleInsuranceChange('basicCoverage', true)}
                name="insurance"
              />
              Auswählen
            </label>
          </div>
          <div className={styles.insuranceCard}>
            <h4>Premium-Schutz</h4>
            <p>Umfassender Schutz ohne Selbstbeteiligung</p>
            <ul>
              <li>Alle Schäden abgedeckt</li>
              <li>Bis 50.000€ Deckung</li>
              <li>Keine Selbstbeteiligung</li>
            </ul>
            <label>
              <input
                type="radio"
                checked={insuranceOptions.fullCoverage}
                onChange={() => handleInsuranceChange('fullCoverage', true)}
                name="insurance"
              />
              Auswählen
            </label>
          </div>
        </div>
      </div>

      {/* Kostenübersicht */}
      {costEstimate && (
        <div className={styles.costSummary}>
          <h3><FaCalculator /> Kostenübersicht</h3>
          <div className={styles.costGrid}>
            <div className={styles.costItem}>
              <span>Grundpreis</span>
              <span>{costEstimate.basePrice}€</span>
            </div>
            <div className={styles.costItem}>
              <span>Verpackungsservice</span>
              <span>{costEstimate.packingCost}€</span>
            </div>
            <div className={styles.costItem}>
              <span>Möbelmontage</span>
              <span>{costEstimate.assemblyCost}€</span>
            </div>
            <div className={styles.costItem}>
              <span>Spezielle Gegenstände</span>
              <span>{costEstimate.specialItemsCost}€</span>
            </div>
            <div className={styles.costItem}>
              <span>Versicherung</span>
              <span>{costEstimate.insuranceCost}€</span>
            </div>
            <div className={styles.costItemTotal}>
              <span>Gesamtkosten</span>
              <span>{costEstimate.totalCost}€</span>
            </div>
          </div>
        </div>
      )}

      {/* Finale Bestätigung */}
      {finalStep && (
        <div className={styles.finalConfirmation}>
          <h3><FaFileContract /> Abschluss</h3>
          <div className={styles.confirmationContent}>
            <div className={styles.confirmationCheck}>
              <FaCheckCircle />
              <p>Ihre Umzugsanfrage ist fast fertig!</p>
            </div>
            <div className={styles.confirmationDetails}>
              <h4>Zusammenfassung:</h4>
              <ul>
                <li>{selectedRooms.length} Räume ausgewählt</li>
                <li>Umzug am {moveDetails.date}</li>
                <li>Von: {locationDetails.fromAddress}</li>
                <li>Nach: {locationDetails.toAddress}</li>
                <li>Versicherung: {insuranceOptions.fullCoverage ? 'Premium' : 'Basis'}</li>
              </ul>
            </div>
            <button 
              className={styles.submitButton}
              onClick={handleSubmit}
            >
              Umzugsanfrage verbindlich absenden
            </button>
          </div>
        </div>
      )}

      <div className={styles.navigationButtons}>
        <button
          className={styles.navButton}
          onClick={() => setShowCostPlanning(false)}
        >
          Zurück
        </button>
        {!finalStep ? (
          <button
            className={styles.navButton}
            onClick={handleCostCalculation}
          >
            Kosten berechnen
          </button>
        ) : null}
      </div>
    </motion.div>
  );

  return (
    <>
      <BackgroundAnimation />
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          {!showDetailPlanning ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.collapsibleSection}>
                <div 
                  className={styles.collapsibleHeader}
                  onClick={() => setIsRoomSectionCollapsed(!isRoomSectionCollapsed)}
                >
                  {isRoomSectionCollapsed ? (
                    <h2>Wollen Sie einen schnellen und unverbindlichen Preis für Ihren Auftrag?</h2>
                  ) : (
                    <h2>Wählen Sie Ihre Räume</h2>
                  )}
                  {isRoomSectionCollapsed ? <FaChevronDown /> : <FaChevronUp />}
                </div>

                <motion.div 
                  className={styles.collapsibleContent}
                  initial={false}
                  animate={{ 
                    height: isRoomSectionCollapsed ? 0 : "auto",
                    opacity: isRoomSectionCollapsed ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={styles.roomSelectionInfo}>
                    Klicken Sie auf die Räume, die umgezogen werden sollen
                  </p>

                  <div className={styles.roomGrid}>
                    {availableRooms.map((room) => {
                      const isSelected = selectedRooms.find(r => r.id === room.id);
                      
                      return (
                        <motion.div
                          key={room.id}
                          className={`${styles.roomCard} ${isSelected ? styles.selected : ''}`}
                          onClick={() => handleRoomToggle(room)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className={styles.roomIcon}>{room.icon}</span>
                          <h3 className={styles.roomName}>{room.name}</h3>
                          <p className={styles.roomDescription}>{room.description}</p>
                          <button className={styles.toggleButton}>
                            {isSelected ? <FaMinus /> : <FaPlus />}
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {selectedRooms.length > 0 && (
                <div className={styles.summary}>
                  <h3>Ausgewählte Räume: {selectedRooms.length}</h3>
                  <div className={styles.selectedRoomsList}>
                    {selectedRooms.map(room => (
                      <span key={room.id} className={styles.selectedRoom}>
                        {room.icon} {room.name}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className={styles.continueButton}
                    onClick={() => setShowDetailPlanning(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Weiter zur Detailplanung
                  </motion.button>
                </div>
              )}
            </motion.div>
          ) : !showCostPlanning ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={styles.planningSection}
            >
              <h3><FaCalendarAlt /> Terminplanung</h3>
              
              {/* All form fields in one view */}
              <div className={styles.formGroup}>
                <label>Umzugsdatum</label>
                <input
                  type="date"
                  value={moveDetails.date || ''}
                  onChange={(e) => handleDetailChange('date', e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Bevorzugte Tageszeit</label>
                <select
                  value={moveDetails.timePreference || ''}
                  onChange={(e) => handleDetailChange('timePreference', e.target.value)}
                >
                  <option value="">Bitte wählen</option>
                  <option value="morning">Vormittag</option>
                  <option value="afternoon">Nachmittag</option>
                  <option value="flexible">Flexibel</option>
                </select>
              </div>

              <h3><FaBuilding /> Zugangsinformationen</h3>
              <div className={styles.formGroup}>
                <label>Stockwerk</label>
                <input
                  type="number"
                  value={moveDetails.floor || ''}
                  onChange={(e) => handleDetailChange('floor', e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label>
                  <input
                    type="checkbox"
                    checked={moveDetails.hasElevator || false}
                    onChange={(e) => handleDetailChange('hasElevator', e.target.checked)}
                  />
                  Aufzug vorhanden
                </label>
              </div>

              <h3><FaTools /> Zusätzliche Services</h3>
              <div className={styles.formGroup}>
                <label>
                  <input
                    type="checkbox"
                    checked={moveDetails.needsPacking || false}
                    onChange={(e) => handleDetailChange('needsPacking', e.target.checked)}
                  />
                  Einpackservice gewünscht
                </label>
              </div>

              <div className={styles.formGroup}>
                <label>
                  <input
                    type="checkbox"
                    checked={moveDetails.needsAssembly || false}
                    onChange={(e) => handleDetailChange('needsAssembly', e.target.checked)}
                  />
                  Möbelmontage/-demontage gewünscht
                </label>
              </div>

              <h3><FaBoxes /> Besondere Gegenstände</h3>
              <div className={styles.formGroup}>
                <label>Besondere Gegenstände hinzufügen</label>
                <input
                  type="text"
                  placeholder="z.B. Klavier, Tresor, antike Möbel"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSpecialItemAdd((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                />
                <div className={styles.specialItemsList}>
                  {moveDetails.specialItems.map((item, index) => (
                    <span key={index} className={styles.specialItem}>
                      {item}
                      <button onClick={() => handleDetailChange('specialItems', 
                        moveDetails.specialItems.filter((_, i) => i !== index)
                      )}>×</button>
                    </span>
                  ))}
                </div>
              </div>

              <h3><FaComment /> Zusätzliche Notizen</h3>
              <div className={styles.formGroup}>
                <textarea
                  value={moveDetails.additionalNotes || ''}
                  onChange={(e) => handleDetailChange('additionalNotes', e.target.value)}
                  placeholder="Weitere wichtige Informationen für Ihren Umzug..."
                  rows={4}
                />
              </div>

              <div className={styles.navigationButtons}>
                <button
                  className={styles.navButton}
                  onClick={() => setShowDetailPlanning(false)}
                >
                  Zurück
                </button>
                <button
                  className={styles.navButton}
                  onClick={handleCostCalculation}
                >
                  Weiter zur Kostenübersicht
                </button>
              </div>
            </motion.div>
          ) : (
            renderCostPlanning()
          )}
        </AnimatePresence>
      </div>
    </>
  );
}; 