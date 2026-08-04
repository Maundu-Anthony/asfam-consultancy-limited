import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ title, description, icon, image, link }) {
  const content = (
    <div className="service-card">
      {image ? (
        <div className="service-media">
          <img src={image} alt={title} className="service-image" />
        </div>
      ) : icon ? (
        <div className="service-icon">{icon}</div>
      ) : null}
      
      <div className="service-content-wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="service-card-link-wrapper">
        {content}
      </Link>
    );
  }

  return content;
}

export default ServiceCard;