import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import registerBg from '../images/register.jpeg';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    // Personal and Contact Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',

    // Professional or Academic Background
    companyName: '',
    jobTitle: '',
    educationalBackground: '',

    // Course and Session Details
    courseTitleCode: '',
    preferredSchedule: '',
    registrationType: '',

    // Logistics and Compliance
    emergencyContactName: '',
    emergencyContactPhone: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

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
          course_title_code: formData.courseTitleCode,
          preferred_schedule: formData.preferredSchedule,
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

  return (
    <div 
      className="registration-page"
      style={{ '--bg-image': `url(${registerBg})` }}
    >
      <section className="registration-header">
        <div className="container">
          <h1>NEW TRAINING REGISTRATION</h1>
          <p>Please review and complete your details to register for your upcoming training session.</p>
        </div>
      </section>

      <div className="container form-container">
        {submitted ? (
          <div className="success-message">
            <h2>Thank You for Registering!</h2>
            <p>Your registration details have been sent to <strong>info@asfam.co.ke</strong>.</p>
            <button className="cta-button primary" onClick={() => setSubmitted(false)}>
              Submit Another Registration
            </button>
          </div>
        ) : (
          <form className="registration-form" onSubmit={handleSubmit}>
            {errorMsg && <div className="error-message">{errorMsg}</div>}

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
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="courseTitleCode">Training Course Title or Code *</label>
                  <input
                    type="text"
                    id="courseTitleCode"
                    name="courseTitleCode"
                    value={formData.courseTitleCode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredSchedule">Preferred Cohort, Date, or Schedule</label>
                  <input
                    type="text"
                    id="preferredSchedule"
                    name="preferredSchedule"
                    placeholder="e.g. Q4 Cohort / Oct 15, 2026"
                    value={formData.preferredSchedule}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="registrationType">Registration Type</label>
                  <select
                    id="registrationType"
                    name="registrationType"
                    value={formData.registrationType}
                    onChange={handleChange}
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

            <div className="form-actions">
              <button type="submit" className="cta-button primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Complete Registration'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Registration;