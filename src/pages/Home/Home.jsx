import React, { useState, useEffect } from 'react';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];
    setServices(storedServices);
  }, []);

  const enabledServices = services.filter((service) => service.enabled);

  return (
    <div>
      <h1>SERVIÇOS</h1>
      <div className="services-container">
        {enabledServices.map((service) => (
          <div key={service.id} className="service-box">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <img src={service.icon} alt={service.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;