import React from 'react';
import './ServiceCard.css';

function ServiceCard({ title, description, icon, image }) {
  return (
    <div className="service-card">
      {image ? (
        <div className="service-media">
          <img src={image} alt={title} className="service-image" />
        </div>
      ) : icon ? (
        <div className="service-icon">{icon}</div>
      ) : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
