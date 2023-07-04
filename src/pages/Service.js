import React from 'react';

function Service({ service }) {
  const { name, description, icon } = service;

  return (
    <div className="service">
      <div className="service-icon">{icon}</div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Service;