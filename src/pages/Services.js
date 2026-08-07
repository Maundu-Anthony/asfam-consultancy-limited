import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
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
import registerBg from '../images/register.jpeg';

function Services() {
  const { hash } = useLocation();
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

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

  // Venue mapping configuration based on your attached image
  const venueOptions = {
    Local: ['Naivasha', 'Mombasa', 'Diani', 'Kisumu', 'Nakuru', 'Eldoret'],
    Regional: ['Rwanda', 'Tanzania', 'Uganda'],
    International: ['Malaysia', 'Singapore', 'Dubai']
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    companyName: '',
    jobTitle: '',
    educationalBackground: '',
    selectedModule: '',
    courseTitleCode: '',
    venueCategory: '',
    trainingVenue: '',
    startDate: '',
    endDate: '',
    registrationType: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    specialRequests: ''
  });

  const [availableCourses, setAvailableCourses] = useState([]);
  const [availableVenues, setAvailableVenues] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const handleOpenRegistration = () => {
    setShowRegistrationModal(true);
    const element = document.getElementById('training-programs-section');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' });
    }
  };

  const handleCloseRegistration = () => {
    setShowRegistrationModal(false);
    setSubmitted(false);
    setErrorMsg('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'selectedModule') {
      const foundCategory = trainingCategories.find(cat => cat.title === value);
      setAvailableCourses(foundCategory ? foundCategory.items : []);
      setFormData((prev) => ({
        ...prev,
        selectedModule: value,
        courseTitleCode: '' 
      }));
      return;
    }

    if (name === 'venueCategory') {
      setAvailableVenues(venueOptions[value] || []);
      setFormData((prev) => ({
        ...prev,
        venueCategory: value,
        trainingVenue: ''
      }));
      return;
    }

    if (name === 'startDate') {
      if (!value) {
        setFormData(prev => ({ ...prev, startDate: '', endDate: '' }));
        setErrorMsg('');
        return;
      }

      const dateObj = new Date(value);
      const dayOfWeek = dateObj.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        setErrorMsg('Training cannot start on a weekend (Saturday or Sunday). Please select a weekday.');
        setFormData(prev => ({ ...prev, startDate: value, endDate: '' }));
        return;
      }

      setErrorMsg('');

      let addedDays = 0;
      let currentIterDate = new Date(dateObj);
      
      while (addedDays < 3) {
        currentIterDate.setDate(currentIterDate.getDate() + 1);
        const currentDayOfWeek = currentIterDate.getDay();
        if (currentDayOfWeek !== 0 && currentDayOfWeek !== 6) {
          addedDays++;
        }
      }

      const calculatedEndDate = currentIterDate.toISOString().split('T')[0];

      setFormData(prev => ({
        ...prev,
        startDate: value,
        endDate: calculatedEndDate
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const scheduleSpan = formData.startDate && formData.endDate 
      ? `From ${formData.startDate} To ${formData.endDate} (4 Consecutive Days, No Weekends)` 
      : '';

    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: 'info@asfam.co.ke',
          full_name: formData.fullName,
          user_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          date_of_birth: formData.dateOfBirth,
          gender: formData.gender,
          company_name: formData.companyName,
          job_title: formData.jobTitle,
          educational_background: formData.educationalBackground,
          selected_module: formData.selectedModule,
          course_title_code: formData.courseTitleCode,
          venue_category: formData.venueCategory,
          training_venue: formData.trainingVenue,
          preferred_schedule: scheduleSpan,
          registration_type: formData.registrationType,
          emergency_contact_name: formData.emergencyContactName,
          emergency_contact_phone: formData.emergencyContactPhone,
          special_requests: formData.specialRequests
        },
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          console.error('Email failed to send:', error.text);
          setLoading(false);
          setErrorMsg('Failed to send registration. Please try again or contact info@asfam.co.ke directly.');
        }
      );
  };

  const mainServices = [
    {
      id: 'investment-advisory',
      title: 'Investment Advisory & Facilitation Services',
      description: 'We provide integrated resource structuring, valuation, capital structuring, and growth strategies, while facilitating investor engagement, deal origination, due diligence coordination, and transaction closure. Advising on investment mobilization, capital raising, and structuring debt, equity, blended finance, and grant funding from banks, DFIs, private investors, impact investors, and development partners.',
      image: investmentImg,
    },
    {
      id: 'trade-advisory',
      title: 'Trade Advisory & Facilitation Services',
      description: 'Supporting access to local, regional, and international markets through trade structuring, export and import advisory, trade finance facilitation, market entry strategies, and linkage to buyers, suppliers, and trade partners.',
      image: tradeImg,
    },
    {
      id: 'customized-training',
      title: 'Training & Capacity Building (NITA Accredited)',
      description: 'Delivering certified and customized training programs in resource mobilization, investment readiness, trade development, credit management, financial governance, and institutional strengthening—supported by hands-on mentorship and coaching.',
      image: trainingImg,
    },
    {
      id: 'business-research',
      title: 'Business Research & Market Intelligence',
      description: 'Conducting in-depth business, sectoral, and market research to support investment decisions, market entry, expansion strategies, feasibility studies, and evidence-based planning.',
      image: researchImg,
    },
    {
      id: 'financial-advisory',
      title: 'Financial Advisory and Credit Facilitation Services',
      description: 'Supporting clients facing credit constraints to access appropriate financing by restructuring credit proposals, improving risk profiles, aligning financial documentation to lender requirements, and facilitating engagement with banks and financing institutions.',
      image: financialImg,
    },
    {
      id: 'proposal-development',
      title: 'Proposal, Business Case & Pitch Development',
      description: 'Developing high-impact proposals, concept notes, investment memoranda, and pitch decks aligned to investor, donor, financier, and trade partner expectations.',
      image: proposalImg,
    },
    {
      id: 'bankability',
      title: 'Bankability & Financial Readiness',
      description: 'Preparing organizations and projects to meet lender and investor requirements through robust financial models, credit-ready documentation, and risk mitigation frameworks.',
      image: bankabilityImg,
    },
    {
      id: 'resource-mobilization',
      title: 'Resource Mobilization Strategy Development',
      description: 'Designing practical, results-driven strategies that diversify funding sources, strengthen institutional capacity, and enhance financial sustainability.',
      image: resourceImg,
    },
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

      {/* CORE SERVICES */}
      <section className="main-services">
        <div className="container">
          <h2>Core Services</h2>
          <div className="services-grid">
            {mainServices.map((service) => (
              <div id={service.id} key={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="training-programs-section" className="training-programs">
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

          {/* TOP REGISTRATION BUTTON */}
          {!showRegistrationModal && (
            <div style={{ textAlign: 'center', margin: '3.5rem 0 1.5rem' }}>
              <button onClick={handleOpenRegistration} className="cta-button" style={{ 
                backgroundColor: '#d91424', 
                color: '#ffffff', 
                padding: '1rem 2.5rem', 
                borderRadius: '6px', 
                border: 'none',
                cursor: 'pointer',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 14px rgba(217, 20, 36, 0.3)',
                transition: 'background 0.3s ease, transform 0.2s ease'
              }}>
                REGISTER FOR OUR TRAINING PROGRAMS <span className="arrow">➜</span>
              </button>
            </div>
          )}
        </div>

        {/* FULL-WIDTH EMBEDDED REGISTRATION FORM CONTAINER */}
        {showRegistrationModal && (
          <div className="services-registration-wrapper" style={{ marginTop: '3rem' }}>
            <div 
              className="registration-page embedded-registration"
              style={{ '--bg-image': `url(${registerBg})` }}
            >
              <section className="registration-header">
                <div className="container">
                  <h1>TRAINING REGISTRATION</h1>
                  <p>Please review and complete your details to register for your upcoming training session.</p>
                </div>
              </section>

              <div className="container form-container">
                {submitted ? (
                  <div className="success-message">
                    <h2>Thank You for Registering!</h2>
                    <p>Your registration details have been sent to <strong>info@asfam.co.ke</strong>.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                      <button className="cta-button primary" onClick={() => setSubmitted(false)}>
                        Submit Another Registration
                      </button>
                      <button onClick={handleCloseRegistration} className="cta-button" style={{ 
                        backgroundColor: '#0f2c59', 
                        color: '#ffffff', 
                        padding: '0.75rem 1.5rem', 
                        borderRadius: '6px', 
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        Close Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="registration-form" onSubmit={handleSubmit}>

                    {/* 1. PERSONAL AND CONTACT INFORMATION */}
                    <fieldset className="form-section">
                      <legend>Personal and Contact Information</legend>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name *</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="address">Home or Work Address</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="dateOfBirth">Date of Birth</label>
                          <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="gender">Gender</label>
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    {/* 2. PROFESSIONAL OR ACADEMIC BACKGROUND */}
                    <fieldset className="form-section">
                      <legend>Professional or Academic Background</legend>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="companyName">Company Name or Organization</label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="jobTitle">Job Title, Department, or Designation</label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group full-width">
                          <label htmlFor="educationalBackground">Educational Background or Qualifications</label>
                          <input
                            type="text"
                            id="educationalBackground"
                            name="educationalBackground"
                            value={formData.educationalBackground}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </fieldset>

                    {/* 3. COURSE AND SESSION DETAILS */}
                    <fieldset className="form-section">
                      <legend>Course and Session Details</legend>
                      
                      {errorMsg && <div className="error-message full-width" style={{ marginBottom: '1.5rem', backgroundColor: '#fed7d7', color: '#9b2c2c', padding: '10px', borderRadius: '4px', fontWeight: '600' }}>{errorMsg}</div>}

                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="selectedModule">Module *</label>
                          <select
                            id="selectedModule"
                            name="selectedModule"
                            value={formData.selectedModule}
                            onChange={handleChange}
                            required
                          >
                            <option value="">-- Select Module --</option>
                            {trainingCategories.map((cat, idx) => (
                              <option key={idx} value={cat.title}>
                                {cat.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="courseTitleCode">Training Course Title *</label>
                          <select
                            id="courseTitleCode"
                            name="courseTitleCode"
                            value={formData.courseTitleCode}
                            onChange={handleChange}
                            required
                            disabled={!formData.selectedModule}
                          >
                            <option value="">-- Select Course Program --</option>
                            {availableCourses.map((course, idx) => (
                              <option key={idx} value={course}>
                                {course}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Venue Classification Dropdown */}
                        <div className="form-group">
                          <label htmlFor="venueCategory">Venue Classification *</label>
                          <select
                            id="venueCategory"
                            name="venueCategory"
                            value={formData.venueCategory}
                            onChange={handleChange}
                            required
                          >
                            <option value="">-- Select Classification --</option>
                            <option value="Local">Local</option>
                            <option value="Regional">Regional</option>
                            <option value="International">International</option>
                          </select>
                        </div>

                        {/* Corresponding Venue Dropdown */}
                        <div className="form-group">
                          <label htmlFor="trainingVenue">Training Venue *</label>
                          <select
                            id="trainingVenue"
                            name="trainingVenue"
                            value={formData.trainingVenue}
                            onChange={handleChange}
                            required
                            disabled={!formData.venueCategory}
                          >
                            <option value="">-- Select Venue --</option>
                            {availableVenues.map((venue, idx) => (
                              <option key={idx} value={venue}>
                                {venue}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* From Date Selection */}
                        <div className="form-group">
                          <label htmlFor="startDate">Training Start Date (From) *</label>
                          <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                          />
                          <small style={{ display: 'block', marginTop: '4px', color: '#4a5568', fontSize: '0.8rem' }}>
                            ℹ️ Weekends (Saturday/Sunday) are excluded from training schedules.
                          </small>
                        </div>

                        {/* To Date Display / Calculation */}
                        <div className="form-group">
                          <label htmlFor="endDate">Training End Date (To) *</label>
                          <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            readOnly
                            required
                            style={{ backgroundColor: '#edf2f7', cursor: 'not-allowed' }}
                          />
                          <small style={{ display: 'block', marginTop: '4px', color: '#1e3c72', fontSize: '0.8rem', fontWeight: '700' }}>
                            🔒 Automatically calculated as exactly 4 consecutive working days.
                          </small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="registrationType">Registration Type *</label>
                          <select
                            id="registrationType"
                            name="registrationType"
                            value={formData.registrationType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Type</option>
                            <option value="Individual">Individual</option>
                            <option value="Corporate">Corporate</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    {/* 4. LOGISTICS AND COMPLIANCE */}
                    <fieldset className="form-section">
                      <legend>Logistics and Compliance</legend>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="emergencyContactName">Emergency Contact Name</label>
                          <input
                            type="text"
                            id="emergencyContactName"
                            name="emergencyContactName"
                            value={formData.emergencyContactName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="emergencyContactPhone">Emergency Contact Phone</label>
                          <input
                            type="tel"
                            id="emergencyContactPhone"
                            name="emergencyContactPhone"
                            value={formData.emergencyContactPhone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group full-width">
                          <label htmlFor="specialRequests">Dietary Needs or Special Accessibility Requests</label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            rows="3"
                            value={formData.specialRequests}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </fieldset>

                    <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <button type="submit" className="cta-button primary" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
                      
                      <button type="button" onClick={handleCloseRegistration} className="cta-button" style={{ 
                        backgroundColor: '#718096', 
                        color: '#ffffff', 
                        padding: '0.75rem 1.5rem', 
                        borderRadius: '6px', 
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        Close Form
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="credit-rating" className="credit-rating">
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