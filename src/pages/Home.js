import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

function Home() {
  const services = [
    {
      title: 'Investment Advisory',
      description: 'Expert guidance in structuring investments, sourcing debt, equity, and blended finance solutions tailored to your business needs.',
      icon: '💼'
    },
    {
      title: 'Financial Advisory & Credit Facilitation',
      description: 'Supporting access to local, regional, and international markets through trade structuring and market entry strategies.',
      icon: '🌍'
    },
    {
      title: 'Credit Rating Facilitation Services',
      description: 'Helping businesses overcome financing barriers by improving risk profiles and facilitating engagement with lenders.',
      icon: '💳'
    },
    {
      title: 'Training & Capacity',
      description: 'NITA-accredited training programs in resource mobilization, financial governance, and institutional strengthening.',
      icon: '📚'
    },
    {
      title: 'Business Research',
      description: 'In-depth market research and intelligence to support investment decisions and expansion strategies.',
      icon: '📊'
    },
    {
      title: 'Resource Mobilization',
      description: 'Strategic development of funding sources diversification and financial sustainability enhancement.',
      icon: '💰'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Unlock Your Business Potential</h1>
          <p>Transform ideas into funded, investable, trade-ready, and ESG sustainable reality</p>
          <p className="hero-subtitle">ASFAM Consultancy - Financial & Trade Advisory Excellence</p>
          <Link to="/services" className="cta-button">Explore Our Services</Link>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>Who We Are</h2>
          <div className="mission-grid">
            <div className="mission-item">
              <h3>Our Mission</h3>
              <p>
                We offer consultancy and trade facilitation services through linkages whilst nurturing relationships among business community.
              </p>
            </div>
            <div className="mission-item">
              <h3>Our Vision</h3>
              <p>
                To be the Consultant of Choice in Trade Facilitation and Public Relations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="cta-button secondary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2>Why Choose ASFAM</h2>
          <div className="reasons-grid">
            <div className="reason">
              <h3>✓ Committed to Your Goals</h3>
              <p>We understand your specific needs and design tailored solutions that align with your growth objectives.</p>
            </div>
            <div className="reason">
              <h3>✓ End-to-End Facilitation</h3>
              <p>From advisory and research to credit access, investment, and deal closure - we walk the journey with you.</p>
            </div>
            <div className="reason">
              <h3>✓ Evidence-Based Advisory</h3>
              <p>Our recommendations are backed by solid business research, market intelligence, and financial analysis.</p>
            </div>
            <div className="reason">
              <h3>✓ Capacity Building You Can Trust</h3>
              <p>As a NITA-accredited training provider, we build skills, systems, and confidence for long-term sustainability.</p>
            </div>
            <div className="reason">
              <h3>✓ Bankability & Credit Focused</h3>
              <p>We help clients overcome financing barriers by strengthening structures, documentation, and risk profiles.</p>
            </div>
            <div className="reason">
              <h3>✓ Experienced Multidisciplinary Team</h3>
              <p>Financial experts, legal professionals, HR consultants, and accountants with deep local market knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Discover Your Business Potential with Us</h2>
          <p>Let's partner to unlock your opportunities and drive sustainable growth.</p>
          <Link to="/contact" className="cta-button">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
