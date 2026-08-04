import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';
import investmentImg from '../images/services-images/Investment_Advisory_Services.jpg';
import tradeImg from '../images/services-images/Trade_Advisory_Services.jpeg';
import trainingImg from '../images/services-images/Training_and_Capacity_Building_Services.png';
import researchImg from '../images/services-images/Business_Research_and_Market_Intelligence_Services.jpeg';
import financialImg from '../images/services-images/Financial_Advisory_and_Credit_Facilitation_Services.jpeg';
import proposalImg from '../images/services-images/Proposal_Business_Case_&_Pitch_Development_Services.jpg';
import bankabilityImg from '../images/services-images/Bankability_&_Financial_Readiness_Services.jpg';
import resourceImg from '../images/services-images/Resource_Mobilization_Services.png';

function Services() {
  const mainServices = [
  {
  title: 'Investment Advisory & Facilitation Services',
  description: 'We provide integrated resource structuring, valuation, capital structuring, and growth strategies, while facilitating investor engagement, deal origination, due diligence coordination, and transaction closure. Advising on investment mobilization, capital raising, and structuring debt, equity, blended finance, and grant funding from banks, DFIs, private investors, impact investors, and development partners.',
  image: investmentImg,
},
{
  title: 'Trade Advisory & Facilitation Services',
  description: 'Supporting access to local, regional, and international markets through trade structuring, export and import advisory, trade finance facilitation, market entry strategies, and linkage to buyers, suppliers, and trade partners.',
  image: tradeImg,
},
{
  title: 'Training & Capacity Building (NITA Accredited)',
  description: 'Delivering certified and customized training programs in resource mobilization, investment readiness, trade development, credit management, financial governance, and institutional strengthening—supported by hands-on mentorship and coaching.',
  image: trainingImg,
},
{
  title: 'Business Research & Market Intelligence',
  description: 'Conducting in-depth business, sectoral, and market research to support investment decisions, market entry, expansion strategies, feasibility studies, and evidence-based planning.',
  image: researchImg,
},
{
  title: 'Financial Advisory and Credit Facilitation Services',
  description: 'Supporting clients facing credit constraints to access appropriate financing by restructuring credit proposals, improving risk profiles, aligning financial documentation to lender requirements, and facilitating engagement with banks and financing institutions.',
  image: financialImg,
},
{
  title: 'Proposal, Business Case & Pitch Development',
  description: 'Developing high-impact proposals, concept notes, investment memoranda, and pitch decks aligned to investor, donor, financier, and trade partner expectations.',
  image: proposalImg,
},
{
  title: 'Bankability & Financial Readiness',
  description: 'Preparing organizations and projects to meet lender and investor requirements through robust financial models, credit-ready documentation, and risk mitigation frameworks.',
  image: bankabilityImg,
},
{
  title: 'Resource Mobilization Strategy Development',
  description: 'Designing practical, results-driven strategies that diversify funding sources, strengthen institutional capacity, and enhance financial sustainability.',
  image: resourceImg,
},
  ];

  const trainingCategories = [
    {
      title: '1. Corporate Governance and Leadership & ESG',
      items: [
        'C-Suite Masterclass - AI Augmented Thinking, Board Governance & Re-evaluation, Roles and Effective Governance & ESG.',
        'C-Suite Masterclass - Corporate Governance & Board Competence, Corporate Risk Management.',
        'C-Suite Masterclass - Board Induction/Orientation Workshop, Boardroom Crisis Management & Institutional Risk.',
        'C-Suite Masterclass - Corporate Governance & AI Adaptive Leadership for Executives.',
        'ESG, Sustainability Reporting Compliance & Audit Excellence Masterclass.',
        'Occupational Safety & Health Administration Masterclass.',
        'Digital Transformation Strategy, Leadership & Change Management Masterclass.',
        'C-Suite Masterclass - Advanced Administrative Competencies for Senior Executives.',
        'Mastering Operational Excellence: Modern Strategies for Efficiency, Performance & Leadership.',
        'Institutional Change Management & Business Process Re-engineering.',
        'Legal Leadership & Strategic Advisory Masterclass: Drafting, Advisory, Litigation Strategy, Governance & Boardroom Advisory Excellence.',
        'Strategic Project Life Cycle Management Masterclass: Securing Funding, Agile Implementation, Performance Evaluation & Transparent AI Reporting.',
        'Effective Leadership, Operational Effectiveness & Administrative Competencies Masterclass.',
        'Modern Business Management Skills: Leadership & Administrative Effectiveness Masterclass.',
        'Data Protection & Cyber Security, Advanced Security, Surveillance & Access Control Masterclass.',
        'Environmental Social and Governance (ESG) Masterclass.',
        'Communication, Emotional Intelligence, PR & Interpersonal Skills Masterclass.',
        'Competency Profiling & Succession Planning Training for HR Managers.',
        'Performance Management & Employee Appraisal Techniques Masterclass.',
        'C-Suite Masterclass - Corporate Risk Management, Risk-Based Audit Planning, Internal Control Evaluation for Executives.',
        'Risk Management Strategies, Business Continuity Planning & Crisis Management Masterclass.',
        'Forensic Audit Fraud Investigation in Public Sector Masterclass.',
        'Integrated Enterprise Risk, Resilience & Governance Masterclass.'
      ]
    },
    {
      title: '2. AI & Digital Banking for Finance & Central Banks Professionals',
      items: [
        'Augmented Thinking, Adaptive Leadership, Leading with AI Confidence in a Changing World & ESG Masterclass.',
        'Corporate Governance & Adaptive Leadership, AI Augmented Thinking, Board Re-evaluation & ESG Masterclass for the Board.',
        'Retail & Cross-Border Payment Systems, Governance & Interoperability, Anti-Money Laundering & Counter Terrorism Financing Risk Prevention, Blockchain Technology & East African Payments Interoperability Masterclass.',
        'Anti-Money Laundering, Counter Terrorism Financing, Blockchain Technology Masterclass.',
        'Artificial Intelligence in Finance: Strategy, Analytics, Risk Management, and Digital Transformation.',
        'AI Fundamentals, Deep Learning, Generative AI, AI for Data Analysis Masterclass.',
        'AI Financial Analysis for Banking and Finance Professionals.',
        'Credit Process Management and Operational Excellence.'
      ]
    },
    {
      title: '3. Data Analytics & Automated Reporting, Data Protection & Cyber Security',
      items: [
        'Financial Modelling, Data Analytics, Automated Reporting, Artificial Intelligence, Excel Dashboards & Power BI Masterclass.',
        'Advanced Excel, AI & Power Query Training for Routine Tasks & Report Automation Masterclass.',
        'Data & AI-Powered Financial Reporting Template Automation.',
        'Data Intelligence with AI & Power BI for Effective Data Queries.',
        'Advanced Excel Skills for Finance & Non-Finance Professionals Training: Mastering AI-Driven Analytics, Data Modelling, DAX & Forecasting with Power BI Masterclass.',
        'Modern Reporting, Forecasting & Financial Analytics with Power BI and AI Masterclass.',
        'Data Protection & Cyber Security, Advanced Security, Surveillance & Access Control Masterclass.',
        'Simplified Excel Data Analytics Essentials and Spreadsheet Manipulation and AI Techniques for Effective Reporting.',
        'Improved and AI-Empowered Excel Formulas.',
        'Improved & AI-Powered Excel Formulas and Functions for Automated Reporting.'
      ]
    },
    {
      title: '4. AI Digital Marketing, PR & Customer Experience (CX)',
      items: [
        'Comprehensive Digital & AI Customer Excellence Masterclass: Navigating PR, Strategy, AI Data-Driven Service Management & Business Uncertainty.',
        'Strategic Customer Experience & Communication Mastery: Leveraging AI, Business Innovation, Ethical Leadership, & PR Techniques for Relationship Excellence & Brand Promotion Masterclass.',
        'Harnessing Digital Trends for Strategic Transformation: Navigating Innovation, Automation, & Competitive Advantage.',
        'Innovative Social Media Strategy: Transforming Organizational Social Media Presence with Innovative AI-Driven Strategies & Cutting-Edge Content Creation Masterclass.',
        'Strategic Customer Experience & Communication Mastery: Leveraging AI, Public Relations and Relationship Management Excellence Masterclass.',
        'Modern Marketing Techniques for Business Growth, Public Relations & Good Customer Management Masterclass.',
        'Modern Integrated Marketing Techniques, Public Relations & Customer Service Masterclass.',
        'Strategic Customer Service: Redefining Customer Obsession, Managing Client Complaints & Expectations, Harnessing Emotional Intelligence for Effective Service Delivery Masterclass.',
        'Good Customer Service: Redefining Customer Obsession, Managing Conflict, Digital Marketing Strategy & AI Augmented Leadership in the Competitive Digital Age.'
      ]
    },
    {
      title: '5. Public Finance Management, Taxation & Procurement',
      items: [
        'Public Sector Governance: Navigating the Complexities of Oversight, Risk Management, Stakeholder Engagement & Future-Ready Financial Reporting in the Public Sector.',
        'Public Sector Financial Transformation: IPSAS Accrual, Highlights, Emerging Insights, Best Practices, Implementation & Case Studies Masterclass.',
        'Public Policy Governance Formulation, Development, Implementation Analysis & Administration Masterclass.',
        'Data & AI-Powered Financial Reporting Template Automation: Insights Revolutionizing PSAB Board Reporting with Cutting-Edge Data Analytics in Excel.',
        'Modern Budget Control, PFM & Tax Compliance Mastery: Navigating the Future of Public Finance Training, Public Sector Budgeting, Accrual-Based Accounting, PFM Governance Training Masterclass.',
        'PFM Reforms Emerging Trends: Implementing the PFM Act 2012 & Regulations 2015 for Transparency & Accountability, Sustainability Reporting for Public Sector Institutions.',
        'Implementing IFRS 1, IFRS 2 & Strengthening Disclosure Governance Masterclass.',
        'Strategic Tax Leadership: Impact of the New Finance Act 2026 Provisions, Emerging Issues in ETIMS, Implementation & Tackling Tax Audit with Modern Approaches Masterclass.',
        'Tax Regime Changes, Implications for Organizations - Addressing Compliance Challenges Masterclass.'
      ]
    },
    {
      title: '6. Pension Management & Retirement',
      items: [
        'Board Trustees Fiduciary Duties, Pension Fund Risks, Administration, Re-Balancing of Assets, Communications & Strategy Masterclass.',
        'Strategic Governance & Leadership for Trustees & Secretariats, Alternative Investments for Pension Schemes, ESG, Climate Impact Investing for Pension Funds Masterclass.',
        'Innovative Tax Strategies in Pension Funds Management Masterclass.',
        'Best Practices in Pension Fund Assets Custody & Regulatory Compliance Masterclass.',
        'Retirement - Pre & Post Retirement Preparation & Modern AI Transition Planning, Retirement Readiness & Personal Finance Management Masterclass.',
        'Empowering Your Next Chapter: Strategic Life Transition Skills for a New Era, Retirement Readiness & Personal Finance Management Masterclass.'
      ]
    },
    {
      title: '7. Project Management, Monitoring & Evaluation, Funds & Resources Mobilization',
      items: [
        'Resource Mobilization & Proposal Development Training Masterclass.',
        'Strategic Project Life-Cycle Management: Securing Funding, Agile Implementation, Performance Evaluation & Transparent AI Reporting Masterclass.',
        'Project Life Cycle: Funding, Agile & Transparent Reporting, Scheduled Project Auditing & PPP\'s Management Masterclass.',
        'Contract Management Skills for Modern Professionals: Mastering the Art of Drafting, Negotiation & Compliance.',
        'Grant Management & Fundraising Training: From Fundamentals, Projects & Contract Management Masterclass.',
        'Advanced Project Management Masterclass, Automation, M&E, Hiring Multiple Projects, Reporting, Contract Management & Closure Masterclass.',
        'Monitoring & Evaluation Techniques Training: Improving Project Outcomes Masterclass.',
        'Effective Project Management Essentials Training: Planning, Execution, M&E, Reporting Masterclass.',
        'Modern Inspection & Standards Enforcement Masterclass: Ensuring Consistency, Compliance and Market Trust.'
      ]
    }
  ];

  return (
    <div className="services">
      <section className="page-header">
        <div className="container">
          <h1>OUR SERVICES.</h1>
          <p>
            Our mission is to unlock capital opportunities, mobilize strategic resources, and deliver high-impact Investment & Trade Advisory, Project funding Facilitation, Training and Capacity Building services that enable organizations to scale and compete effectively in markets, and achieve sustainable long-term growth.
          </p>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <p>
            We integrate advisory expertise, market intelligence, and structured capacity-building frameworks to ensure that our clients are not only able to access funding, but are also strategically positioned to secure credit, strengthen risk management, and scale their operations in a sustainable and resilient manner.
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
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="training-programs">
        <div className="container">
          <h2>Flexible, Reliable and Customized Training Programs</h2>
          <p className="section-intro">
            As a NITA-accredited training provider, we deliver certified, customized programs designed to strengthen capacity in the following specialized areas:
          </p>
          <div className="training-categories">
            {trainingCategories.map((category, index) => (
              <details key={index} className="training-category">
                <summary className="training-category-summary">
                  {category.title}
                </summary>
                <ul className="training-category-items">
                  {category.items.map((item, itemIndex) => (
                    <li key={`${index}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="credit-rating">
        <div className="container">
          <h2>Credit Rating Facilitation Services</h2>
          <p className="section-intro">
            ASFAM partners with ICRA LLC, an international credit rating agency based in the UAE with presence across Europe, Africa, and Southeast Asia. Through this partnership, we help clients improve credit readiness, make informed risk decisions, and access rating, portfolio, investor, and ESG services. ASFAM is the sole mandated agent for ICRA LLC in the region.
          </p>
          <div className="rating-services">
            <div className="rating-service">
              <h3>Credit Rating Services</h3>
            </div>
            <div className="rating-service">
              <h3>Portfolio Rating Services</h3>
            </div>
            <div className="rating-service">
              <h3>Investor Services</h3>
            </div>
            <div className="rating-service">
              <h3>ESG Rating Services</h3>
            </div>
            <div className="rating-service">
              <h3>ICRA Scorecard Rating System</h3>
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

      <section className="partnerships">
        <div className="container">
          <h2>Strategic Partnerships & Stakeholder Engagement</h2>
          <p>
            We identify, structure, and facilitate partnerships with investors, donors, financiers, trade partners, and ecosystem stakeholders locally and internationally. Our focus is to help clients strengthen credit readiness, secure funding, and improve competitiveness while managing risk.
          </p>
        </div>
      </section>

      <section className="contacts">
        <div className="container">
          <h2>Contacts</h2>
          <p>Email: <a href="mailto:info@asfam.co.ke">info@asfam.co.ke</a></p>
        </div>
      </section>
    </div>
  );
}

export default Services;