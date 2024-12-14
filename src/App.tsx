import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Team } from './pages/About/Team';
import Career from './pages/About/Career';
import { Services } from './pages/Services/Services';
import { Contact } from './pages/Contact/Contact';
import { History } from './pages/About/History';
import { PrivateMoving } from './pages/Services/PrivateMoving/PrivateMoving';
import { OfficeMoving } from './pages/Services/OfficeMoving/OfficeMoving';
import { BusinessMoving } from './pages/Services/BusinessMoving/BusinessMoving';
import { MovingManagement } from './pages/Services/MovingManagement/MovingManagement';
import { MovingTips } from './pages/MovingTips/MovingTips';
import { Checklist } from './pages/Checklist/Checklist';
import { ServiceAreas } from './pages/ServiceAreas/ServiceAreas';
import { Privacy } from './pages/Privacy/Privacy';
import { Terms } from './pages/Terms/Terms';
import { FAQ } from './pages/FAQ/FAQ';
import { Imprint } from './pages/Imprint/Imprint';
import { Prices } from './pages/Prices/Prices';
import { References } from './pages/References/References';
import { CustomerReviews } from './pages/References/CustomerReviews';
import ProjectGallery from './pages/References/ProjectGallery';
import { SuccessStories } from './pages/References/SuccessStories';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Company } from './pages/AboutUs/Company';
import { Locations } from './pages/AboutUs/Locations';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Hauptrouten */}
          <Route path="/" element={<Home />} />
          <Route path="/wer-wir-sind" element={<About />} />
          <Route path="/unsere-geschichte" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/karriere" element={<Career />} />
          <Route path="/standorte" element={<ServiceAreas />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/preise" element={<Prices />} />

          {/* Leistungen */}
          <Route path="/leistungen" element={<Services />} />
          <Route path="/leistungen/privatumzug" element={<PrivateMoving />} />
          <Route path="/leistungen/bueroumzug" element={<OfficeMoving />} />
          <Route path="/leistungen/betriebsumzug" element={<BusinessMoving />} />
          <Route path="/leistungen/umzugsmanagement" element={<MovingManagement />} />

          {/* Referenzen */}
          <Route path="/referenzen" element={<References />} />
          <Route path="/referenzen/bewertungen" element={<CustomerReviews />} />
          <Route path="/referenzen/galerie" element={<ProjectGallery />} />
          <Route path="/referenzen/erfolge" element={<SuccessStories />} />

          {/* Informationen */}
          <Route path="/umzugstipps" element={<MovingTips />} />
          <Route path="/checkliste" element={<Checklist />} />
          <Route path="/service-gebiete" element={<ServiceAreas />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Rechtliches */}
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/agb" element={<Terms />} />

          {/* AboutUs */}
          <Route path="/ueberUns" element={<AboutUs />} />
          <Route path="/ueber-uns" element={<AboutUs />} />
          <Route path="/ueber-uns/unternehmen" element={<Company />} />
          <Route path="/ueber-uns/team" element={<Team />} />
          <Route path="/ueber-uns/karriere" element={<Career />} />
          <Route path="/ueber-uns/standorte" element={<Locations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 