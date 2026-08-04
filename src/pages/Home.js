import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import heroBackground from '../images/homepage.jpg';
import whoWeAreImage from '../images/who_we_are_section.png';
import investmentSectionImage from '../images/Investment_Advisory_&_Facilitation_Services_section.png';
import financialAdvisorySectionImage from '../images/Financial_Advisory_&_Credit_Facilitation_Services_section.png';
import creditRatingSectionImage from '../images/Credit_Rating_section.png';
import trainingSectionImage from '../images/training_section.png';
import businessResearchSectionImage from '../images/Business_Research_section.png';
import resourceMobilizationSectionImage from '../images/Resource_Mobilization_section.png';
import './Home.css';

function Home() {
  const services = [
    {
      title: 'Investment Advisory & Facilitation Services',
      description: 'Expert guidance in structuring investments, sourcing debt, equity, and blended finance solutions tailored to your business needs.',
      image: investmentSectionImage
    },
    {
      title: 'Financial Advisory & Credit Facilitation Services',
      description: 'Supporting access to local, regional, and international markets through trade structuring and market entry strategies.',
      image: financialAdvisorySectionImage
    },
    {
      title: 'Credit Rating Facilitation Services',
      description: 'Helping businesses overcome financing barriers by improving risk profiles and facilitating engagement with lenders.',
      image: creditRatingSectionImage
    },
    {
      title: 'Training & Capacity Building',
      description: 'NITA-accredited training programs in resource mobilization, financial governance, and institutional strengthening.',
      image: trainingSectionImage
    },
    {
      title: 'Business Research',
      description: 'In-depth market research and intelligence to support investment decisions and expansion strategies.',
      image: businessResearchSectionImage
    },
    {
      title: 'Resource Mobilization',
      description: 'Strategic development of funding sources diversification and financial sustainability enhancement.',
      image: resourceMobilizationSectionImage
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <img className="hero-background" src={heroBackground} alt="" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-top-title">
            <span className="line"></span>
            Unlock Your
            <span className="line"></span>
          </p>

          <h1 className="hero-title">
            <span className="business">Business</span>{' '}
            <span className="potential">Potential</span>
          </h1>

          <p className="hero-description">
            Transform ideas into
            <span className="funded"> funded</span>,
            <span className="investable"> investable</span>,
            <span className="trade"> trade-ready</span>,
            and
            <span className="esg"> ESG sustainable</span>
            reality
          </p>

          <p className="hero-company">
            <span className="company-name">
              ASFAM Consultancy
            </span>{' '}
            – Financial &amp; Trade Advisory Excellence
          </p>

          <Link to="/services" className="cta-button">
            Explore Our Services
            <span className="arrow"> →</span>
          </Link>
        </div>
      </section>

      {/* Rest of your component... */}
      
      <section className="mission">
        <div className="container">
          <h2>Who We Are</h2>
          <div className="section-visuals">
            <div className="section-image-card section-image-card-large">
              <img
                src={whoWeAreImage}
                alt="Who we are section illustration"
                className="section-image who-we-are-image"
              />
            </div>
          </div>
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
                image={service.image}
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
          <h2>Why ASFAM?</h2>
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