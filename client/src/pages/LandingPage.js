import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Bem-vindo ao Financial Tracker</h1>
      <p className="text-lg mb-6">Organize as suas finanças e visualize todas as suas contas bancárias e plataformas de trading num só lugar.</p>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Login</Link>
        <Link to="/register" className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Registo</Link>
      </div>
    </div>
  );
}

export default LandingPage;
