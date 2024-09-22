import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover o token JWT do localStorage
    localStorage.removeItem('token');
    // Redirecionar para o login
    navigate('/login');
  };

  return (
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;