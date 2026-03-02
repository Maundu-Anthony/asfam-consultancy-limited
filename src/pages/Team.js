import React from 'react';
import TeamMember from '../components/TeamMember';
import './Team.css';

function Team() {
  const teamMembers = [
  {
    "name": "Mwenda Kabeere E. M'Marete",
    "title": "Chairman",
    "bio": "Seasoned Financial-Sector Executive and Governance Professional with over 30 years of deep banking experience across Payments, Banking Services and Oversight, and Financial Markets. Proven expertise in Corporate Governance, Payment Systems Strategy, Financial Markets and Public Debt Management, Risk, Compliance & Operational Resilience, Strategic Leadership & Change Management, and Digital Finance & Financial Inclusion. Prior to joining ASFAM, worked at Central Bank of Kenya (CBK) for 34 years in various capacities including Divisional Deputy Director—Banking, Payment Services Department.",
    "image": null
  },
  {
    "name": "Said Athman",
    "title": "Managing Director",
    "bio": "Results-driven financial services professional with over 15 years' experience in Corporate and Institutional Banking, Financial Consultancy, and Business Development. Expert in Business Management, Strategic Planning, Resource Mobilization, Credit Management, and Structuring. Developed and set up TIER 1 BANKS in East Africa with focus on Market Development, Business Growth, Fund Mobilization, Portfolio Management and Public-Private Partnerships. Leadership defined by Innovation in FINTECH & AI and ability to deliver measurable impact across public and private sector environments.",
    "image": null
  },
  {
    "name": "Roy Muli",
    "title": "Director Marketing & Business Development",
    "bio": "Versatile professional with over 25-30 years of experience in financial sector. Deep expertise spanning Finance, Investment, Fintech, Marketing, Public Relations and Communications, and Resource Mobilization from Donor Funds. Seasoned Corporate Trainer and Part-Time Lecturer mentoring professionals in Corporate Governance and AI-Integrated Leadership Skills. Previously worked for Equity Bank as Pioneer Head of Public Sector Government & Parastatals, Co-operative Bank as Relationship Manager – Institutional Banking, and other leading financial institutions.",
    "email": "rmuli@asfam.co.ke",
    "phone": "+254 722 709 200 / +254 785 762 888",
    "image": null
  },
  {
    "name": "Ms. Eunice Mutava",
    "title": "Human Resource Consultant & Trainer",
    "bio": "Career HR and Strategic Planning Specialist with 12 years' experience in providing Human Resource and Administrative Support to Executive Management. Possesses wide experience in all aspects including staff training, recruitment, team leadership, mentorship and coaching. Prior to joining ASFAM, worked for Gulf African Bank as Human Resources Manager in Training and Capacity Building. Brings wide knowledge in administration and talent nurturing.",
    "image": null
  }
];

  return (
    <div className="team">
      <section className="team-header">
        <div className="container">
          <h1>Our Leadership Team</h1>
          <p>Experienced Professionals Committed to Your Success</p>
        </div>
      </section>

      <section className="team-intro">
        <div className="container">
          <p>
            ASFAM is led by a multidisciplinary team of seasoned financial experts, legal professionals, HR consultants, and accountants with deep knowledge of Kenya's financial sector, regulatory framework, and corporate laws—ensuring our clients receive credible, compliant, and results-driven solutions.
          </p>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <h2>Senior Management</h2>
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                email={member.email}
                phone={member.phone}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="team-competencies">
        <div className="container">
          <h2>Our Expertise & Competencies</h2>
          <div className="competencies-grid">
            <div className="competency-area">
              <h3>Financial Services</h3>
              <ul>
                <li>Corporate Banking</li>
                <li>Institutional Banking</li>
                <li>Investment Advisory</li>
                <li>Capital Structuring</li>
                <li>Financial Markets</li>
              </ul>
            </div>
            <div className="competency-area">
              <h3>Strategic Management</h3>
              <ul>
                <li>Business Planning</li>
                <li>Resource Mobilization</li>
                <li>Risk Management</li>
                <li>Change Management</li>
                <li>Strategic Partnerships</li>
              </ul>
            </div>
            <div className="competency-area">
              <h3>Technology & Innovation</h3>
              <ul>
                <li>Fintech Solutions</li>
                <li>Digital Banking</li>
                <li>AI Integration</li>
                <li>Cybersecurity</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            <div className="competency-area">
              <h3>Compliance & Governance</h3>
              <ul>
                <li>Corporate Governance</li>
                <li>Regulatory Compliance</li>
                <li>Audit & Control</li>
                <li>Board Advisory</li>
                <li>Risk Compliance</li>
              </ul>
            </div>
            <div className="competency-area">
              <h3>Training & Development</h3>
              <ul>
                <li>Capacity Building</li>
                <li>NITA-Accredited Programs</li>
                <li>Executive Training</li>
                <li>Mentorship</li>
                <li>Skills Development</li>
              </ul>
            </div>
            <div className="competency-area">
              <h3>Trade & Market</h3>
              <ul>
                <li>Trade Facilitation</li>
                <li>Market Entry</li>
                <li>Export/Import Advisory</li>
                <li>Market Intelligence</li>
                <li>Business Linkages</li>
              </ul>
            </div>

            {/* NEW COMPETENCY AREAS */}
            <div className="competency-area">
              <h3>Mental Health</h3>
              <ul>
                <li>Mental Wellbeing Programs</li>
                <li>Resilience & Stress Management</li>
                <li>Psychological Support Frameworks</li>
                <li>Workplace Mental Health Awareness</li>
                <li>Capacity Building for Mental Health</li>
              </ul>
            </div>
            <div className="competency-area">
              <h3>Mediation & Conflict Resolution</h3>
              <ul>
                <li>Professional Mediation Services</li>
                <li>Dispute Resolution</li>
                <li>Dialogue Facilitation</li>
                <li>Organizational Conflict Management</li>
                <li>Community & Stakeholder Mediation</li>
              </ul>
            </div>
            <div className="competency-area">
              <h3>Web Development & Digital Solutions</h3>
              <ul>
                <li>Responsive Web Design</li>
                <li>Custom Digital Platforms</li>
                <li>UI/UX Development</li>
                <li>Digital Transformation</li>
                <li>Service Delivery Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-culture">
        <div className="container">
          <h2>Our Culture & Values</h2>
          <div className="culture-grid">
            <div className="culture-item">
              <h3>Excellence</h3>
              <p>We strive for the highest standards in everything we do and deliver exceptional value to our clients.</p>
            </div>
            <div className="culture-item">
              <h3>Innovation</h3>
              <p>We foster a culture that encourages inventiveness, independent thinking, and practical solutions.</p>
            </div>
            <div className="culture-item">
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and unwavering ethical standards.</p>
            </div>
            <div className="culture-item">
              <h3>Collaboration</h3>
              <p>We work together and with our clients as true partners in achieving shared success.</p>
            </div>
            <div className="culture-item">
              <h3>Accountability</h3>
              <p>We take responsibility for our deliverables and maintain commitment to measurable results.</p>
            </div>
            <div className="culture-item">
              <h3>Client Focus</h3>
              <p>Your success is our success. We prioritize understanding and meeting your unique needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;