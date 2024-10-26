import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Por favor insira um email válido.');
      return;
    }

    if (!password) {
      setError('Por favor insira a sua password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Erro no login');
      }
    } catch (error) {
      setError('Erro ao conectar ao servidor');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#1C1C1C] p-10 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-4xl font-bold text-[#A5E404] mb-2">Login</h2>
        <p className="text-[#C4C4C4] mb-8">Welcome back! Please log in to access your account.</p>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] focus:outline-none"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="/forgot-password" className="text-[#A5E404] text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#A5E404] text-black font-bold hover:bg-[#93c603] transition"
          >
            Login
          </button>

          {/* Sign Up Button */}
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="w-full py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] font-bold mt-4 hover:bg-[#3a3a3a] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Or Continue with */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-[#333]" />
          <span className="mx-4 text-[#C4C4C4]">Or Continue with</span>
          <hr className="flex-grow border-[#333]" />
        </div>

        {/* Social Media Login Options */}
        <div className="flex justify-center space-x-6">
          <button className="p-3 rounded-full bg-[#2C2C2C] text-[#A5E404]">
            <i className="fab fa-google"></i> {/* Replace with actual Google icon */}
          </button>
          <button className="p-3 rounded-full bg-[#2C2C2C] text-[#A5E404]">
            <i className="fab fa-facebook"></i> {/* Replace with actual Facebook icon */}
          </button>
          <button className="p-3 rounded-full bg-[#2C2C2C] text-[#A5E404]">
            <i className="fab fa-apple"></i> {/* Replace with actual Apple icon */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;