require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@asfam.co.ke';

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { 
    name, email, phone, subject, message,
    // Training registration specific fields
    fullName, address, dateOfBirth, gender, companyName, 
    jobTitle, educationalBackground, registrationType, 
    selectedModule, courseTitleCode, venueCategory, 
    trainingVenue, startDate, endDate, emergencyContactName, 
    emergencyContactPhone, specialRequests, preferredSchedule
  } = req.body;

  const isTraining = Boolean(courseTitleCode || selectedModule);
  const submitterName = name || fullName;
  const submitterEmail = email;
  const formSubject = subject || (isTraining ? `Training Registration: ${courseTitleCode}` : 'General Inquiry');

  if (!submitterName || !submitterEmail) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  // Generate CSV / Spreadsheet content attachment
  let csvHeader = "";
  let csvRow = "";
  let excelCsvAttachment = "";

  if (isTraining) {
    csvHeader = "Full Name,Email Address,Phone Number,Registration Type,Module,Course Title,Venue Category,Training Venue,Start Date,End Date,Company,Job Title,Submission Date\n";
    const safeCourse = `"${(courseTitleCode || '').replace(/"/g, '""')}"`;
    const safeModule = `"${(selectedModule || '').replace(/"/g, '""')}"`;
    csvRow = `"${submitterName}","${submitterEmail}","${phone || 'N/A'}","${registrationType || 'N/A'}",${safeModule},${safeCourse},"${venueCategory || 'N/A'}","${trainingVenue || 'N/A'}","${startDate || 'N/A'}","${endDate || 'N/A'}","${companyName || 'N/A'}","${jobTitle || 'N/A'}","${new Date().toISOString()}"\n`;
  } else {
    csvHeader = "Full Name,Email Address,Phone Number,Subject,Message,Submission Date\n";
    const safeMessage = `"${(message || '').replace(/"/g, '""')}"`;
    csvRow = `"${submitterName}","${submitterEmail}","${phone || 'N/A'}","${formSubject}",${safeMessage},"${new Date().toISOString()}"\n`;
  }
  
  excelCsvAttachment = csvHeader + csvRow;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = isTraining ? `
    <h2>New Training Registration Received</h2>
    <p><strong>Name:</strong> ${submitterName}</p>
    <p><strong>Email:</strong> ${submitterEmail}</p>
    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    <p><strong>Registration Type:</strong> ${registrationType || 'N/A'}</p>
    <p><strong>Module:</strong> ${selectedModule || 'N/A'}</p>
    <p><strong>Course:</strong> ${courseTitleCode || 'N/A'}</p>
    <p><strong>Venue:</strong> ${trainingVenue} (${venueCategory})</p>
    <p><strong>Schedule:</strong> ${preferredSchedule || `${startDate} to${endDate}`}</p>
    <p><strong>Company/Job:</strong> ${companyName || 'N/A'} - ${jobTitle || 'N/A'}</p>
    <hr/>
    <p><em>The full submission data is attached as a spreadsheet.</em></p>
  ` : `
    <h2>New Contact Form Message</h2>
    <p><strong>Name:</strong> ${submitterName}</p>
    <p><strong>Email:</strong> ${submitterEmail}</p>
    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    <p><strong>Subject:</strong> ${formSubject}</p>
    <p><strong>Message:</strong></p>
    <p>${(message || '').replace(/\n/g, '<br/>')}</p>
  `;

  const mailOptions = {
    from: `ASFAM Consultancy Website <${process.env.SMTP_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: submitterEmail,
    subject: `Website Submission: ${formSubject}`,
    text: `You have a new submission from ${submitterName}. Please see attached spreadsheet.`,
    html: htmlBody,
    attachments: [
      {
        filename: `asfam_submission_${Date.now()}.csv`,
        content: excelCsvAttachment,
        contentType: 'text/csv'
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ message: 'Submission sent successfully.' });
  } catch (error) {
    console.error('API sendMail error:', error);
    return res.status(500).json({ error: 'Unable to send submission at this time.' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});