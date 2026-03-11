import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-header">
        <div className="container">
          <h1>About ASFAM Consultancy</h1>
          <p>Transformative financial and trade advisory facilitation servives for East Africa</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Who We Are</h2>
            <p>
              ASFAM Consultancy Company Limited (ASFAM) is a transformative financial and trade advisory firm dedicated to advancing financial and business inclusion to its clients across Kenya. We bridge critical economic gaps by providing strategic financial facilitation, advisory, and trade facilitation services that empower enterprises to grow, compete, and thrive.
            </p>
            <p>
              At ASFAM Consultancy Company Limited, we go beyond offering advisory services. We structure, connect, and facilitate solutions that unlock capital, credit, and market opportunities. Our work is anchored on our deep understanding of Kenya's financial and private capital markets and a hands-on, client-focused approach.
            </p>
          </div>
        </div>
      </section>

      <section className="company-history">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="history-grid">
            <div className="history-item">
              <h3>Founded in 2019</h3>
              <p>Following extensive research into the challenges faced by SMEs and MSMEs in accessing finance, ASFAM was established to address funding challenges and stimulate enterprise growth.</p>
            </div>
            <div className="history-item">
              <h3>Our Approach</h3>
              <p>Through interactive and direct hands-on engagement, we help organizations unlock opportunities, sustain growth, and maximize value by combining strategic management insight with practical implementation proposals.</p>
            </div>
            <div className="history-item">
              <h3>Our Expertise</h3>
              <p>ASFAM is led by a multidisciplinary team of seasoned financial experts, legal professionals, HR consultants, and accountants with deep knowledge of Kenya's financial sector, regulatory framework, and corporate laws.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <p>
            We believe that our client's success is our goal; we serve in Integrity, Professionalism, Passion, Humility, Creativity and innovative way as we consistently maintain high standards of customer service.
          </p>
          <p>
            We understand our client's business needs; we comprehend their business specific needs. We walk through customer experience. We help businesses explore extraordinary opportunities, manage and sustain growth, and maximize revenue through management approaches and technical implementation of business plans.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <h3>1. Creativity and Innovative</h3>
              <p>We encourage inventive thinking and practical solutions to complex business challenges.</p>
            </div>
            <div className="value-card">
              <h3>2. Humility</h3>
              <p>Our highest priority is serving the interests of our clients and investors - your success defines our destiny.</p>
            </div>
            <div className="value-card">
              <h3>3. Integrity</h3>
              <p>We believe trust is earned through consistent, reliable, and results-driven service. We uphold honesty, transparency, and ethics in all our business dealings.</p>
            </div>
            <div className="value-card">
              <h3>4. Professionalism</h3>
              <p>We strive to deliver high standards consulting services by understanding of each client's unique needs.</p>
            </div>
            <div className="value-card">
              <h3>5. Passion</h3>
              <p>Guided by the passion to exceed customer expectations, we commit to delivering measurable results and exceptional value to our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="competitive-advantages">
        <div className="container">
          <h2>Competitive Advantages</h2>
          <div className="advantages-list">
            <div className="advantage">
              <h3>Strong Market Linkages</h3>
              <p>Trusted relationships with financiers, investors, off-takers, and trade partners across sectors and regions.</p>
            </div>
            <div className="advantage">
              <h3>Evidence-Based Decisions</h3>
              <p>Our recommendations are backed by solid business research, market intelligence, and financial analysis.</p>
            </div>
            <div className="advantage">
              <h3>NITA-Accredited Training</h3>
              <p>As a NITA-accredited training provider, we deliver quality-assured capacity building programs.</p>
            </div>
            <div className="advantage">
              <h3>Bankability & Credit Focus</h3>
              <p>Strong focus on credit access, investability, and market entry for sustainable business growth.</p>
            </div>
            <div className="advantage">
              <h3>ESG Sustainability</h3>
              <p>Long-term focus on sustainable growth, competitiveness, and institutional resilience.</p>
            </div>
            <div className="advantage">
              <h3>Integrated Solutions</h3>
              <p>Practical, transaction-oriented, and results-driven solutions combining advisory, research, and facilitation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-serve">
        <div className="container">
          <h2>Who We Serve</h2>
          <div className="clients-grid">
            <div className="client-group">
              <h3>Public Sector</h3>
              <ul>
                <li>Government Agencies</li>
                <li>County Governments</li>
                <li>Public Bodies & Parastatals</li>
              </ul>
            </div>
            <div className="client-group">
              <h3>Private Sector</h3>
              <ul>
                <li>Corporates & SMEs/MSMEs</li>
                <li>Exporters & Importers</li>
                <li>Trade-Oriented Enterprises</li>
              </ul>
            </div>
            <div className="client-group">
              <h3>Financial Institutions</h3>
              <ul>
                <li>Commercial Banks</li>
                <li>Microfinance Institutions</li>
                <li>SACCOs & Cooperative Banks</li>
              </ul>
            </div>
            <div className="client-group">
              <h3>Non-Profit Sector</h3>
              <ul>
                <li>NGOs & Foundations</li>
                <li>Development Projects</li>
                <li>Social Enterprises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
