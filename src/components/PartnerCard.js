import React from 'react';
import './PartnerCard.css';

function PartnerCard({ name, category, image }) {
  return (
    <div className="partner-card">
      <div className="partner-logo">
        {image ? <img src={image} alt={name} /> : <div className="placeholder">{name}</div>}
      </div>
      {/* Only show h4 if image exists, otherwise name is already in placeholder */}
      {image && <h4>{name}</h4>}
      <p>{category}</p>
    </div>
  );
}

export default PartnerCard;