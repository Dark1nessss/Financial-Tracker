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
    <section className="flex justify-center items-center py-16">
      <div className="relative bg-[#1C1C1C] p-12 md:p-16 rounded-2xl shadow-md w-full max-w-5xl text-center">
        <img src="/abstract_design.png" alt="Mesh" className="absolute inset-0 h-full w-full object-cover opacity-5 pointer-events-none rounded-lg" />
        <h2 className="text-4xl text-[#A5E404] mb-4">Login</h2>
        <p className="text-[#C4C4C4] mb-8">Welcome back! Please log in to access your account.</p>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="">
          <div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
            />

            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="/forgotpass" className="text-[#A5E404] text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login and Sign Up Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <button
              type="submit"
              className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => navigate('/register')}
              className="w-5/12 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] hover:bg-[#3a3a3a] transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Or Continue with */}
        <div className="flex justify-center items-center my-6">
          <hr className="flex-grow border-[#333]" />
          <span className="mx-4 text-[#C4C4C4]">Or Continue with</span>
          <hr className="flex-grow border-[#333]" />
        </div>

        {/* Social Media Login Options */}
        <div className="flex justify-center space-x-6 mt-6">
          <button className="rounded-full shadow-lg transition duration-300 hover:shadow-[0_0_20px_#A5E404]">
            <img src="/google_ico.png" alt="Google" className="h-20 w-20" />
          </button>
          <button className="rounded-full shadow-lg transition duration-300 hover:shadow-[0_0_20px_#A5E404]">
            <img src="/facebook_ico.png" alt="Facebook" className="h-20 w-20" />
          </button>
          <button className="rounded-full shadow-lg transition duration-300 hover:shadow-[0_0_20px_#A5E404]">
            <img src="/apple_ico.png" alt="Apple" className="h-20 w-20" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;