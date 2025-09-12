import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/dashboard');
    };
    return (
        <>
            <h2>Home Page</h2>
            <Button variant="contained" color="primary" onClick={handleLogin}>
                login
            </Button>
        </>
    );
};

export default Home;
