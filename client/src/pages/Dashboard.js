import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover o token JWT do localStorage
    localStorage.removeItem("token");
    // Redirecionar para o login
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
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
