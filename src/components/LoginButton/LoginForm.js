import React from 'react';
import './LoginForm.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const LoginForm = ({ setUsername, setPassword }) => {
    return (

        <div>
            <div className='inputbox'>
                <label>Usuário:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='inputbox'>
                <label>Senha:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    );
};

export default LoginForm;