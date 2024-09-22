import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Se não houver token, redireciona para a página de login
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
    </div>
  );
}

export default Dashboard;