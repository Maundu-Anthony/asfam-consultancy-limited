import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

function Services() {
  const mainServices = [
  {
  title: 'Investment Advisory & Facilitation Services',
  description: 'We provide integrated resource structuring, valuation, capital structuring, and growth strategies, while facilitating investor engagement, deal origination, due diligence coordination, and transaction closure. Advising on investment mobilization, capital raising, and structuring debt, equity, blended finance, and grant funding from banks, DFIs, private investors, impact investors, and development partners.',
  icon: '💼'
},
{
  title: 'Trade Advisory & Facilitation Services',
  description: 'Supporting access to local, regional, and international markets through trade structuring, export and import advisory, trade finance facilitation, market entry strategies, and linkage to buyers, suppliers, and trade partners.',
  icon: '🌍'
},
{
  title: 'Training & Capacity Building (NITA Accredited)',
  description: 'Delivering certified and customized training programs in resource mobilization, investment readiness, trade development, credit management, financial governance, and institutional strengthening—supported by hands-on mentorship and coaching.',
  icon: '📚'
},
{
  title: 'Business Research & Market Intelligence',
  description: 'Conducting in-depth business, sectoral, and market research to support investment decisions, market entry, expansion strategies, feasibility studies, and evidence-based planning.',
  icon: '📊'
},
{
  title: 'Credit Facilitation Services',
  description: 'Supporting clients facing credit constraints to access appropriate financing by restructuring credit proposals, improving risk profiles, aligning financial documentation to lender requirements, and facilitating engagement with banks and financing institutions.',
  icon: '💳'
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
  title: 'Resource Mobilization Strategy Development',
  description: 'Designing practical, results-driven strategies that diversify funding sources, strengthen institutional capacity, and enhance financial sustainability.',
  icon: '💰'
},
  ];

  const trainingCategories = [
    {
      title: 'A. Corporate Governance, Leadership & ESG Training',
      items: [
        'Board AI Augmented Thinking, Board Governance & Board Re-Evaluation, Roles/Effectiveness of Board Committees & ESG Masterclass',
        'Corporate Governance & Board Competence, Corporate Risk Management for Board Committees Masterclass',
        'Board Induction/Orientation Workshop, Boardroom Crisis Management & Institutional Risk Masterclass',
        'Corporate Governance & AI Augmented Thinking, AI Adaptive Leadership for C-Suite Executives Masterclass',
        'ESG, Sustainability Reporting Compliance & Audit Excellence Masterclass',
        'Occupational Safety & Health Administration Masterclass',
        'Digital Transformation Strategy, Leadership & Change Management Masterclass',
        'Enhancing Strategic Support: Advanced Administrative Competencies for Senior Executives in C-Suite Leadership Enablement Masterclass',
        'Mastering Operational Excellence: Modern Strategies for Efficiency, Performance & Leadership',
        'Institutional Change Management & Business Process Re-Engineering',
        'Legal Leadership & Strategic Advisory Masterclass: Drafting, Advisory, Litigation Strategy, Governance & Boardroom Advisory Excellence',
        'Strategic Project Life Cycle Management Masterclass: Securing Funding, Agile Implementation, Performance Evaluation & Transparent AI Reporting',
        'Effective Leadership, Operational Effectiveness & Vital Administrative Competencies for Administrative & Executive Assistants Masterclass',
        'Modern Business Management Skills: Leadership & Administrative Effectiveness Masterclass',
        'Data Protection & Cyber Security, Advanced Security, Surveillance & Access Control Masterclass'
      ]
    },
    {
      title: 'B. AI & Digital Banking',
      items: [
        'Augmented Thinking, Adaptive Leadership, Leading with AI Confidence in a Changing World & ESG Masterclass',
        'Corporate Governance & Adaptive Leadership, AI Augmented Thinking, Board Re-Evaluation & ESG Masterclass for the Board',
        'Retail & Cross-Border Payment Systems, Governance & Interoperability, AML/CFT Risk Prevention, Blockchain & East African Payments Interoperability Masterclass',
        'Anti Money Laundering, Counter Terrorism Financing, Blockchain, Cryptocurrency, Central Bank Digital Currency, Token Coins & East African Payments Interoperability Masterclass',
        'Digital Banking, Integrated Digital Marketing, PR & Data-Driven Customer Service, Portfolio Management, High Net-Worth (HNI) Management Training integrating AI & Social Media Marketing, Data Protection & Cyber Security Masterclass',
        'Digital Marketing, PR, Data-Driven Decision Making in Customer Service, Innovative Social Media Strategy Training, Chatbots integrating Data Protection & Cyber Security Masterclass',
        'Credit Digitization, Revolutionizing Digital Customer Service, Security Realization for Non-Performing Loans & Insolvency Management Masterclass, Data Protection & Cyber Security Training',
        'Strategic Credit Governance: Enhancing Risk Management Analysis & Regulatory Framework Development for Sustainable Credit Operations',
        'Adaptive Leadership & Governance for C-Suite Executives Masterclass: Emotional Intelligence, Change Management, Performance Management, integrating AI, Data Protection & Cyber Security Training',
        'Next-Gen Administrative Skills for Supervisors & Admin Assistants for C-Suite Executives: Change Management, Performance Management, Team Efficiency & Productivity, Emotional Intelligence & Personal Development, integrating AI, Data Protection & Cyber Security Training',
        'Banc-Assurance: Mastering Insurance Operations & Strategy, Navigating Risk Assessment, Underwriting, Claims Handling & Regulatory Compliance Excellence Masterclass'
      ]
    },
    {
      title: 'C. Data Analytics & Power BI, Data Protection & Cyber Security',
      items: [
        'Financial Modelling, Analysis Reporting with AI, Excel Dashboards & Power BI Masterclass',
        'Advanced Excel, AI & Power Query Training for Routine Tasks & Report Automation Masterclass',
        'Data Intelligence with AI & Power BI for Effective Data Queries',
        'Advanced Excel Skills for Finance & Non-Finance Professionals Training: Mastering AI-Driven Analytics, Data Modelling, DAX & Forecasting with Power BI Masterclass',
        'Power BI Mastery, Automated Financial Reporting & Budget Modelling Masterclass',
        'Artificial Intelligence in Modern Reporting, Forecasting & Financial Analysis with Power BI Masterclass',
        'Data Protection & Cyber Security, Advanced Security, Surveillance & Access Control Masterclass'
      ]
    },
    {
      title: 'D. AI Digital Marketing, PR & Customer Experience (CX) & User Experience (UX)',
      items: [
        'The Complete Digital & AI Customer Excellence Masterclass: Navigating PR, Strategy, AI Data-Driven Service Management & Business Uncertainty',
        'Strategic Customer Experience & Communication Mastery: Leveraging AI, Business Innovation, Ethical Leadership & PR Techniques for Relationship Excellence & Brand Growth Masterclass',
        'Harnessing Digital Trends for Strategic Transformation: Navigating Innovation, Automation & Competitive Advantage',
        'New Marketing Techniques for Brand & Revenue Growth in the Digital Era Masterclass integrating ESG Masterclass',
        'Integrating Digital Marketing Strategies & Techniques, Public Relations & Good Customer Service in the Competitive Digital Age for Brand Communication Officers & Innovative Social Media Strategy Masterclass',
        'Innovative Social Media Strategy: Transforming Your Social Media Presence with Innovative AI-Driven Strategies & Cutting-Edge Content Creation Masterclass',
        'Strategic Customer Service: Redefining Customer Obsession, Managing Client Complaints & Expectations, Harnessing Emotional Intelligence for Effective Service Delivery Masterclass',
        'Revolutionizing Customer Service: AI & the New Age of Customer Obsession Masterclass',
        'Good Customer Service: Redefining Customer Obsession, Managing Conflict, Digital Marketing Strategy & AI Augmented Leadership in the Competitive Digital Age'
      ]
    },
    {
      title: 'E. Enterprise Risk Management',
      items: [
        'Corporate Risk Management for Board Committees, Risk-Based Audit Planning & Internal Control Evaluation Masterclass',
        'Risk Management Strategies, Business Continuity Planning & Crisis Management Masterclass',
        'Integrated Enterprise Risk, Resilience & Governance Masterclass',
        'The Future of Governance & Emerging Risks, Integrated Risk Management Masterclass',
        'Risk-Based Audit Planning & Internal Control Evaluation Masterclass',
        'Forensic Audit & Fraud Investigation in Public Sector Masterclass'
      ]
    },
    {
      title: 'F. Public Finance Management, Taxation & Procurement',
      items: [
        'Public Sector Corporate Governance: Navigating the Complexities of Oversight, Risk Management, Stakeholder Engagement & Future-Ready Financial Reporting in the Public Sector: Integrating IPSAS, AI Integration & Innovative PFM Reforms Masterclass',
        'Public Sector Financial Transformation: IPSAS Accrual, Highlights, Emerging Insights, Best Practices, Implementation & Case Studies Masterclass',
        'Public Policy Governance Formulation, Development, Implementation Analysis & Administration Masterclass',
        'Modern Budget Control, PFM & Tax Compliance Mastery: Navigating the Future of Public Finance Training, Public Sector Budgeting, Accrual-Based Accounting & PFM Governance Masterclass',
        'PFM Reforms Emerging Trends: Implementing the PFM Act 2012 & Regulations 2015 for Transparency & Accountability, Sustainability Reporting for Public Sector Institutions: Implementing IFRS 1, IFRS 2 & Strengthening Disclosure Governance Masterclass',
        'Strategic Tax Leadership: Impact of the New Finance Act 2026 Provisions, Emerging Issues in ETIMS, Implementation & Tackling Tax Audit with Modern Approaches Masterclass',
        'Tax Regime Changes, Implications for Organizations & Addressing Compliance Challenges Masterclass',
        'Risk-Based Audit Planning, Internal Control Evaluation & Forensic Audit Fraud Investigation in Public Sector Masterclass',
        'Tax Planning, Implementation Techniques, New Finance Act Provisions & Responding to Tax Audits Masterclass'
      ]
    },
    {
      title: 'G. Pension Management & Retirement',
      items: [
        'Board Trustees Fiduciary Duties, Pension Fund Risks, Administration, Re-Balancing of Assets, Communications & Strategy Masterclass',
        'Strategic Governance & Leadership for Trustees & Secretariats, Alternative Investments for Pension Schemes, ESG & Climate Impact Investing for Pension Funds Masterclass',
        'Innovative Tax Strategies in Pension Funds Management Masterclass',
        'Best Practices in Pension Fund Assets Custody & Regulatory Compliance Masterclass',
        'Retirement: Pre & Post Retirement Preparation & Modern AI Transition Planning, Retirement Readiness & Personal Finance Management Masterclass',
        'Empowering Your Next Chapter: Strategic Life Transition Skills for a New Era, Retirement Readiness & Personal Finance Management Masterclass'
      ]
    },
    {
      title: 'H. Records Management',
      items: [
        'Mastering Records Management Standards & Best Practices: Disposal, Data Protection & Compliance for Public & Private Sectors Professionals for C-Suite Executives Masterclass',
        'Executive Certificate in Records & Information Management, Basic Electronic Records Administration: Structuring, Maintaining & Retrieving Digital Files Masterclass',
        'Records Automation & Information Systems Management Masterclass'
      ]
    },
    {
      title: 'I. Project Management, Monitoring & Evaluation, Fund Raising & Resource Mobilization',
      items: [
        'Resource Mobilization & Proposal Development Training Masterclass',
        'Strategic Project Life-Cycle Management: Securing Funding, Agile Implementation, Performance Evaluation & Transparent AI Reporting Masterclass',
        'Project Life Cycle: Funding, Agile & Transparent Reporting, Schedule, Project Auditing & PPP Scope Creep Management Masterclass',
        'Contract Management Skills for Modern Professionals: Mastering the Art of Drafting, Negotiation & Compliance',
        'Grant Management & Fundraising Training: From Fundamentals, Projects & Contract Management Masterclass',
        'Project Auditing & PPP’s Scope Creep Management & Contract Management Masterclass',
        'Advanced Project Management Masterclass: Automation, M&E, Hiring Multiple Projects, Reporting, Contract Management & Closure Masterclass',
        'Monitoring & Evaluation Techniques Training: Improving Project Outcomes Masterclass',
        'Effective Project Management Essentials Training: Planning, Execution, M&E & Reporting Masterclass'
      ]
    },
    {
      title: 'J. Health & Safety Management',
      items: [
        'Occupational Safety & Health Administration',
        'Health & Safety Management Training: OSHA Compliance & Best Practices'
      ]
    },
    {
      title: 'K. SACCOS',
      items: [
        'Legal & Regulatory Compliance, Board Effectiveness & Performance, Technology & Digital Transformation in ESG in SACCOSs, Financial Management & Oversight Masterclass',
        'Roles & Effectiveness of SACCOS Supervisory Committees: Legal Compliance, Interpretation of Financial Reports, Basic Accounting & Basic Auditing & Report Writing Skills Training, IFRS Integrated Reporting & ESG Framework Masterclass',
        'Public Sector Financial Transformation: IPSAS Accrual, Highlights, Emerging Insights, Best Practices, Implementation & Case Studies Masterclass',
        'ESG, Sustainability Reporting Compliance & Audit Excellence Masterclass',
        'Digital Banking, Integrated Digital Marketing, PR & Data-Driven Customer Service, Portfolio Management, High Net-Worth (HNI) Management Training integrating AI & Social Media Marketing, Data Protection & Cyber Security Masterclass',
        'Credit Digitization, Revolutionizing Digital Customer Service: Security Realization for Non-Performing Loans & Insolvency Management Masterclass, Data Protection & Cyber Security Training',
        'Strategic Credit Governance: Enhancing Risk Management Analysis & Regulatory Framework Development for Sustainable Credit Operations',
        'Retail & Cross-Border Payment Systems, Governance & Interoperability, AML/CFT Risk Prevention, Blockchain Technology & East African Payments Interoperability Masterclass; Data Protection & Cyber Security Advanced Security, Surveillance & Access Control Systems Masterclass'
      ]
    },
    {
      title: 'L. Central Bank Trainings',
      items: [
        'Augmented Thinking: Leading with AI Confidence in a Changing World Masterclass',
        'Retail & Cross-Border Payment Systems, Governance & Interoperability, AML/CFT Risk Prevention, Blockchain Technology & East African Payments Interoperability Masterclass',
        'Anti Money Laundering, Counter Terrorism Financing, Blockchain Technology, Cryptocurrency, Central Bank Digital Currency, Token Coins & East African Payments Interoperability Masterclass',
        'Harnessing Digital Trends for Strategic Transformation: Navigating Innovation, Automation & Competitive Advantage Masterclass',
        'ESG, Sustainability Reporting Compliance, Audit, Inspection & Regulatory Excellence Masterclass',
        'Occupational Safety & Health Administration Masterclass',
        'Effective Pension Secretariats Masterclass for Governance Compliance Board Support: Audit, Pensions Compliance & Risk Fiduciary Oversight Masterclass',
        'Facility Management Masterclass: Managing Building Safety & Security Strategies — Protecting People, Property & Assets',
        'Anti Money Laundering & Financial Risk Prevention Masterclass'
      ]
    },
    {
      title: 'M. Insurance Companies Training Programmes',
      items: [
        'Banc-Assurance: Digital Operations & Strategy, Risk, Underwriting, Claims, Innovation & AI Future Readiness',
        'Digital Insurance, Technology & Operational Excellence, Enterprise Risk Management, Innovation & AI Future Readiness',
        'Augmented Thinking, Adaptive Leadership, Leading with AI Confidence in a Changing World & ESG',
        'Insurance Industry Transformation, Governance, AI-Driven Marketing, Customer Service & ESG',
        'Core Insurance Operations, Modern Digital Underwriting, Claims Management, AI, Finance & Investment & Enterprise Risk Management',
        'Data Protection & Cyber Security, Advanced Security, Surveillance & Access Control Systems',
        'Financial Modelling, Data Analysis Reporting with AI, Advanced Excel Dashboards & Power BI',
        'ESG, Sustainability Reporting Compliance & Audit Excellence',
        'Crisis Management, Business Continuity Planning & Integrated Risk Management Strategies',
        'Health & Safety Management Training: OSHA Compliance & Best Practices'
      ]
    },
    {
      title: 'N. Human Resource & Organisational Development',
      items: [
        'Environmental Management Practices & Sustainable Solutions (ESG) Masterclass',
        'Communication Skills Development Training Masterclass: Communication, Emotional Intelligence, PR & Interpersonal Skills',
        'Competency Profiling & Succession Planning Training for HR Managers',
        'Performance Management & Employee Appraisal Techniques Masterclass'
      ]
    },
    {
      title: 'Additional Specialized Trainings',
      items: [
        'Counselling Masterclass',
        'Mediation Masterclass',
        'Mental Health Masterclass',
        'Web Development Masterclass'
      ]
    }
  ];

  return (
    <div className="services">
      <section className="services-header">
        <div className="container">
          <h1>OUR SERVICES.</h1>
          <p>
            Our mission is to unlock capital opportunities, mobilize strategic resources, and deliver high-impact Investment & Trade Advisory, Business Research, Credit Facilitation, Training and Capacity Building, and Mentorship services that enable organizations, enterprises, and projects to expand, scale, compete effectively in markets, and achieve sustainable long-term growth.
          </p>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <p>
            As a NITA-accredited training provider, we integrate advisory expertise, market intelligence, and structured capacity-building frameworks to ensure that our clients are not only able to access funding, but are also strategically positioned to secure credit, strengthen risk management, and scale their operations in a sustainable and resilient manner.
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
          <h2>CREDIT RATING FACILITATION SERVICES.</h2>
          <p className="section-intro">
            In our quest to provide all-inclusive financial consultancy services, ASFAM have partners with International Credit Rating Agency (ICRA - LLC) based in UAE. The Agency is one of the fastest growing companies providing credit rating and credit recommendation services. It has presences across Europe, Africa and South East Asia. Through our partners ICRA-LLC, we provide useful information, tools and expertise to help our customers take confident decision in mitigating any commercial risk. We are a sole agents mandated by ICRA-LLC, to facilitate issuance of the following services.
          </p>
          <div className="rating-services">
            <div className="rating-service">
              <h3>Credit Rating Services</h3>
            </div>
            <div className="rating-service">
              <h3>Portfolio Rating Services.</h3>
            </div>
            <div className="rating-service">
              <h3>Investor Services</h3>
            </div>
            <div className="rating-service">
              <h3>ESG Rating Services.</h3>
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

      <section className="training-programs">
        <div className="container">
          <h2>Specialized Training Programs</h2>
          <p className="section-intro">
            As a NITA-accredited training provider, we deliver certified, customized training programs across the following specialised areas:
          </p>
          <div className="training-categories">
            {trainingCategories.map((category, index) => (
              <div key={index} className="training-category">
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={`${index}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
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
          <p>Email: <a href="mailto:info@asfamconsultancy.com">info@asfamconsultancy.com</a></p>
        </div>
      </section>
    </div>
  );
}

export default Services;