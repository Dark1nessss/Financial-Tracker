import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    if (!password || !confirmPassword) {
      setError('Por favor preencha a password e a confirmação da password.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As passwords não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registo bem-sucedido!');
        navigate('/login'); // Navigate to login after successful registration
      } else {
        setError(data.message || 'Erro no registo');
      }
    } catch (error) {
      setError('Erro ao conectar ao servidor');
    }
  };

  return (
    <section className="flex justify-center items-center py-16">
      <div className="bg-[#1C1C1C] p-10 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-4xl font-bold text-[#A5E404] mb-2">Registo</h2>
        <p className="text-[#C4C4C4] mb-8">Create a new account by filling in the information below.</p>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#A5E404] text-black font-bold hover:bg-[#93c603] transition"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] font-bold mt-4 hover:bg-[#3a3a3a] transition"
          >
            Already Have an Account?
          </button>
        </form>

        {/* Or Continue with */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-[#333]" />
          <span className="mx-4 text-[#C4C4C4]">Or Continue with</span>
          <hr className="flex-grow border-[#333]" />
        </div>

        {/* Social Media Register Options */}
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
    </section>
  );
}

export default Register;
