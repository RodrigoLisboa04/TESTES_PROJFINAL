import React, { useState, useEffect } from 'react';
import './AdminPanel.css'

const AdminPanel = () => {
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    icon: '',
    enabled: true,
  });

  const [services, setServices] = useState([]);

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];
    setServices(storedServices);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleServiceCreate = () => {
    const newServiceWithId = { ...newService, id: Date.now() };
    const updatedServices = [...services, newServiceWithId];
    setServices(updatedServices);
    localStorage.setItem('services', JSON.stringify(updatedServices));
    setNewService({ name: '', description: '', icon: '', enabled: true });
  };

  const handleServiceDelete = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
    localStorage.setItem('services', JSON.stringify(updatedServices));
  };

  const handleServiceToggle = (id) => {
    const updatedServices = services.map((service) => {
      if (service.id === id) {
        return { ...service, enabled: !service.enabled };
      }
      return service;
    });
    setServices(updatedServices);
    localStorage.setItem('services', JSON.stringify(updatedServices));
  };

  return (
    <div>
      <div className='header'>
        <h1>Painel Administrativo</h1>
      </div>
      <div className='container'>
        <div className='addService'>

          <h3>Adicionar Serviço</h3>
          <div className='linha'>
          </div>

          <div className='serviceTxt'>
            <h1>Nome</h1>
            <input className='InputService'
              type="text"
              name="name"
              value={newService.name}
              onChange={handleInputChange}
              placeholder="Nome do serviço"
            />

            <h1>Descrição</h1>
            <input className='InputService'
              type="text"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              placeholder="Descrição do serviço"
            />

            <h1>Link Ícone</h1>
            <input className='InputService'
              type="text"
              name="icon"
              value={newService.icon}
              onChange={handleInputChange}
              placeholder="URL do ícone"
            />
          </div>

          <button onClick={handleServiceCreate} class="btn">Salvar</button>
        </div>
      </div>
      <div>
        <h3>Serviços</h3>
        {services.map((service) => (
          <div key={service.id}>
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <img src={service.icon} alt={service.name} />
            <button onClick={() => handleServiceDelete(service.id)}>Excluir</button>
            <button onClick={() => handleServiceToggle(service.id)}>
              {service.enabled ? 'Desabilitar' : 'Habilitar'}
            </button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default AdminPanel;