import React from 'react';
import PartnerCard from '../components/PartnerCard';
import partnersBg from '../images/partners_background.png';
import './Partners.css';

function Partners() {
  const localPartners = [
    { name: 'Commercial Banks', category: 'Financial Institutions' },
    { name: 'Microfinance Institutions', category: 'Financial Institutions' },
    { name: 'SACCOs & Cooperative Banks', category: 'Financial Institutions' },
    { name: 'Rural Community Finance Institutions', category: 'Financial Institutions' }
  ];

  const internationalPartners = [
    { name: 'ROWAD Capital LLC', category: 'Dubai, UAE' },
    { name: 'Safwat Al Zad Trading Company', category: 'UAE & Libya' },
    { name: 'JD Euroway Trust', category: 'Canada' },
    { name: 'All Trust Foundation', category: 'United Kingdom' },
    { name: 'ICRA Credit Rating Agency', category: 'Dubai, UAE' },
    { name: 'Bakhresa Group of Companies', category: 'Tanzania' }
  ];

  return (
    <div 
      className="partners-page"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.30), rgba(255, 255, 255, 0.30)), url(${partnersBg})`
      }}
    >
      <section className="partners-section">
        <div className="container">
          <h2>Our Partners</h2>
          <p className="section-intro">
            We work with a number of trusted partners drawn from multiple sectors of the economy.
          </p>

          <div className="partners-subsection" style={{ marginBottom: '3rem' }}>
            <h3>Local Partners</h3>
            <div className="partners-grid">
              {localPartners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  category={partner.category}
                  image={null}
                />
              ))}
            </div>
          </div>

          <div className="partners-subsection">
            <h3>International Partners</h3>
            <div className="partners-grid">
              {internationalPartners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  category={partner.category}
                  image={null}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;