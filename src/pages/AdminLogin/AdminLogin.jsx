import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginButton/LoginForm';
import LoginButton from '../../components/LoginButton/LoginButton';
import './AdminLogin.css'

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // AUTENTICAÇÃO DE ADMINISTRADOR

    // EXEMPLO PARA TESTES
    //--> SUBSTITUIR PELO TOKEN JWT QUE VAI VIR DO BACK
    if (username === 'admin' && password === 'admin123') {
      const adminToken = 'your-admin-token';

      // SALVANDO NO LOCALSTORAGE -- TESTES FRONT --
      localStorage.setItem('adminToken', adminToken);
      navigate('/admin/panel');
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "#add8e6" }}>
        <div className="form-box">
          <div className='form-value'>
            <h1>Login do Administrador</h1>
            <LoginForm setUsername={setUsername} setPassword={setPassword} />
            <LoginButton handleLogin={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;