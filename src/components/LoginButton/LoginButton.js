import React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import './LogginButton.css'

const LoginButton = ({ handleLogin }) => {
    return <Button variant="contained" startIcon={<LoginIcon />} onClick={handleLogin} className='button'>Login</Button>;
};

export default LoginButton;