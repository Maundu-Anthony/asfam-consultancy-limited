import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import registerBg from '../images/register.jpeg';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',

    // Professional Details
    organization: '',
    position: '',
    qualification: '',

    // Training Details
    course: '',
    preferredDate: '',
    batch: '',
    registrationType: '',
    participants: 1,

    // Logistics
    emergencyContact: '',
    emergencyPhone: '',
    dietary: '',
    accessibility: '',

    // Additional Notes
    additionalNotes: ''
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
          organization: formData.organization,
          position: formData.position,
          qualification: formData.qualification,
          course: formData.course,
          preferred_date: formData.preferredDate,
          batch: formData.batch,
          registration_type: formData.registrationType,
          participants: formData.participants,
          emergency_contact: formData.emergencyContact,
          emergency_phone: formData.emergencyPhone,
          dietary: formData.dietary,
          accessibility: formData.accessibility,
          additional_notes: formData.additionalNotes
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
            <button className="cta-button" onClick={() => setSubmitted(false)}>
              Submit Another Registration
            </button>
          </div>
        ) : (
          <form className="registration-form" onSubmit={handleSubmit}>
            {errorMsg && <div className="error-message">{errorMsg}</div>}

            {/* PERSONAL DETAILS */}
            <fieldset className="form-section">
              <legend>Personal Details</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
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
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="phone">Phone</label>
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
                  <label htmlFor="address">Address</label>
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

            {/* PROFESSIONAL DETAILS */}
            <fieldset className="form-section">
              <legend>Professional Details</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="qualification">Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>

            {/* TRAINING DETAILS */}
            <fieldset className="form-section">
              <legend>Training Details</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="course">Course</label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="batch">Batch</label>
                  <select
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                  >
                    <option value="">Select Batch</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
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

                <div className="form-group">
                  <label htmlFor="participants">Number of Participants</label>
                  <input
                    type="number"
                    id="participants"
                    name="participants"
                    min="1"
                    value={formData.participants}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>

            {/* LOGISTICS */}
            <fieldset className="form-section">
              <legend>Logistics</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="emergencyContact">Emergency Contact</label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emergencyPhone">Emergency Phone</label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dietary">Dietary Requirements</label>
                  <input
                    type="text"
                    id="dietary"
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="accessibility">Accessibility Requirements</label>
                  <input
                    type="text"
                    id="accessibility"
                    name="accessibility"
                    value={formData.accessibility}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>

            {/* ADDITIONAL NOTES */}
            <fieldset className="form-section">
              <legend>Additional Notes</legend>
              <div className="form-group full-width">
                <label htmlFor="additionalNotes">Notes / Special Requests</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows="4"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                ></textarea>
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