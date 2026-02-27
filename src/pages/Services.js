import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

function Services() {
  const mainServices = [
    {
      title: 'Investment Advisory & Facilitation Services',
      description: 'We provide integrated resource structuring, valuation, capital allocation, and growth strategies, while facilitating investor engagement, deal origination, due diligence coordination, and transaction closure. Advising on investment mobilization, capital raising, and structuring debt, equity, blended finance, and grant funding from banks, DFIs, private investors, impact investors, and development partners.',
      icon: '💼'
    },
    {
      title: 'Trade Advisory & Facilitation Services',
      description: 'Supporting access to local, regional, and international markets through trade structuring, export and import advisory, trade finance facilitation, market entry strategies, and linkage to buyers, suppliers, and trade partners.',
      icon: '🌍'
    },
    {
      title: 'Business Research & Market Intelligence',
      description: 'Conducting in-depth business, sectoral, and market research to support investment decisions, market entry, expansion strategies, feasibility studies, and evidence-based planning.',
      icon: '📊'
    },
    {
      title: 'Credit Rationing & Financing Facilitation Services',
      description: 'Supporting clients facing credit constraints to access appropriate financing by restructuring credit proposals, improving risk profiles, aligning financial documentation to lender requirements, and facilitating engagement with banks and financing institutions.',
      icon: '💳'
    },
    {
      title: 'Resource Mobilization Strategy Development',
      description: 'Designing practical, results-driven strategies that diversify funding sources, strengthen institutional capacity, and enhance financial sustainability.',
      icon: '💰'
    },
    {
      title: 'Proposal, Business Case & Pitch Development',
      description: 'Developing high-impact proposals, concept notes, investment memoranda, and pitch decks aligned to investor, donor, financier, and trade partner expectations.',
      icon: '📝'
    },
    {
      title: 'Bankability & Financial Readiness',
      description: 'Preparing organizations and projects to meet lender and investor requirements through robust financial models, credit-ready documentation, and risk mitigation frameworks.',
      icon: '✓'
    },
    {
      title: 'Training & Mentorship (NITA Accredited)',
      description: 'Delivering certified and customized training programs in resource mobilization, investment readiness, trade development, credit management, financial governance, and institutional strengthening—supported by hands-on mentorship and coaching.',
      icon: '📚'
    }
  ];

  const trainingPrograms = [
    'AI Integrated Leadership & Governance for Board of Directors Master Class',
    'Board Governance, Audit, Risk & Compliance Master Class',
    'Project Management & Resource Mobilization Master Class',
    'Digital Banking, Marketing, AI Integrated Marketing, PR, Customer Service & Social Media Marketing Master Class',
    'FINTECH,REGTECH, Digital Products, Data Protection & Cyber Security Master Class',
    'Advanced Excel, Power BI & Data Analytics with Python Master Class',
    'Credit Digitization Security & Non-performing Loans Management Master Class',
    'Bank Digitization & Alternative Business Channel Master Class',
    'Business Continuity Planning Master Class',
    'Public Finance Management & Modern AI Budget Development Master Class',
    'Sacco Society Digitization & Sacco Management Board Committees Master Class',
    'Pension Schemes Fiduciary Management Master Class',
    'Restructuring, Mergers & Acquisitions Master Class',
    'Records Digitization, Management and Disposal Master Class',
    'Mental Health Mediation Master Class',
    'Website Creation & Digital Development Master Class'
  ];

  return (
    <div className="services">
      <section className="services-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Turning Vision into Funded, Investable, Trade-Ready, and ESG Sustainable Reality</p>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <p>
            At ASFAM Consultancy Limited, we unlock capital, mobilize strategic resources, and deliver expert Investment & Trade Advisory, Business Research, Credit Facilitation, Training/Capacity Building, and Mentorship Services that empower organizations, businesses, and projects to grow, upscale, trade competitively, and sustain long-term impact.
          </p>
          <p>
            As a NITA-Accredited Training Provider, we combine advisory excellence, market intelligence, and structured capacity building—ensuring our clients are not only funded, but also positioned to access credit, manage risk, and scale sustainably.
          </p>
        </div>
      </section>

      <section className="main-services">
        <div className="container">
          <h2>Core Services</h2>
          <div className="services-grid">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="credit-rating">
        <div className="container">
          <h2>Credit Rating Facilitation Services</h2>
          <p className="section-intro">
            In our quest to provide all-inclusive financial consultancy services, ASFAM has partnered with International Credit Rating Agency (ICRA-LLC) based in UAE. The Agency is one of the fastest-growing credit rating agencies, providing useful information, tools, and confidence in decision-making to mitigate commercial risk.
          </p>
          <div className="rating-services">
            <div className="rating-service">
              <h3>◆ Issuer Credit Rating Services</h3>
              <p>Comprehensive evaluation of credit risk for businesses and organizations</p>
            </div>
            <div className="rating-service">
              <h3>◆ Portfolio Rating Services</h3>
              <p>Assessment of investment portfolios and their credit quality</p>
            </div>
            <div className="rating-service">
              <h3>◆ Investor Services</h3>
              <p>Detailed information and analysis for investment decision-making</p>
            </div>
            <div className="rating-service">
              <h3>◆ ESG Rating Services</h3>
              <p>Environmental, Social, and Governance assessment for sustainable investing</p>
            </div>
            <div className="rating-service">
              <h3>◆ ICRA Scorecard Rating System</h3>
              <p>Systematic evaluation framework using proven rating methodologies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="value-proposition">
        <div className="container">
          <h2>Our Value Proposition</h2>
          <div className="proposition-grid">
            <div className="proposition">
              <h3>NITA-Accredited Quality Assurance</h3>
              <p>Our capacity building programs meet national standards for training and professional development.</p>
            </div>
            <div className="proposition">
              <h3>Strong Bankability Focus</h3>
              <p>Dedicated focus on credit access, investability, and market entry for sustainable business growth.</p>
            </div>
            <div className="proposition">
              <h3>Evidence-Based Decision Making</h3>
              <p>Our recommendations driven by business research and market intelligence.</p>
            </div>
            <div className="proposition">
              <h3>Practical Solutions</h3>
              <p>Transaction-oriented, results-driven approach with measurable outcomes.</p>
            </div>
            <div className="proposition">
              <h3>Long-Term ESG Focus</h3>
              <p>Commitment to sustainable growth, competitiveness, and institutional resilience.</p>
            </div>
            <div className="proposition">
              <h3>Integrated Approach</h3>
              <p>Combining advisory, research, facilitation, and mentorship for comprehensive solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="training-programs">
        <div className="container">
          <h2>Specialized Training Programs</h2>
          <p className="section-intro">
            As a NITA-accredited training provider, we deliver certified, customized training programs including:
          </p>
          <div className="programs-grid">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="program-item">
                <span className="program-number">{index + 1}</span>
                <p>{program}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnerships">
        <div className="container">
          <h2>Strategic Partnerships & Stakeholder Engagement</h2>
          <p>
            We identify, structure, and facilitate partnerships with investors, donors, financiers, trade partners, and ecosystem stakeholders locally and internationally to help our customers take growing companies providing credit rating and credit recommendation services, while ensuring risk mitigation and competitive advantage.
          </p>
        </div>
      </section>

      <section className="contacts">
        <div className="container">
          <h2>Contacts</h2>
          
          <p>
            Email: <a href="mailto:info@asfamconsultancy.com">info@asfamconsultancy.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;