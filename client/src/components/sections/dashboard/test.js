import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Test = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      handleLogout();
      return;
    }
    const decodedToken = jwtDecode(token);
    const expirationTime = decodedToken.exp * 1000;
    const timeUntilExpiration = expirationTime - Date.now();
    if (timeUntilExpiration <= 0) {
      handleLogout();
    } else {
      const logoutTimer = setTimeout(handleLogout, timeUntilExpiration);
      return () => clearTimeout(logoutTimer);
    }
  }, [navigate]);

  return (
    <section className="flex justify-center items-center py-16">
     <div className="relative bg-[#1C1C1C] p-12 md:p-16 rounded-2xl shadow-md text-center">
      <h1 className="text-3xl font-bold text-[#A5E404] mb-6">Bem-vindo ao Dashboard!</h1>
      <p className="text-lg text-[#C4C4C4] mb-8">Clique abaixo para sair da conta.</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
     </div>
    </section>
  );
};

export default Test;
