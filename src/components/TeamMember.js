import React from 'react';
import './TeamMember.css';

function TeamMember({ name, title, email, phone, bio, image }) {
  return (
    <div className="team-member">
      <div className="member-image">
        {image ? <img src={image} alt={name} /> : <div className="placeholder">Photo</div>}
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p className="bio">{bio}</p>
        <div className="contact-info">
          {email && <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>}
          {phone && <p><strong>Phone:</strong> {phone}</p>}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
