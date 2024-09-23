import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logotipo e Navegação */}
        <div className="mb-4">
          <img src="/logo.png" alt="YourBank Logo" className="h-12 mx-auto mb-2" />
          <ul className="flex justify-center space-x-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </div>

        {/* Informações de contacto */}
        <div className="mb-4 text-sm">
          <p>Email: hello@skillbridge.com</p>
          <p>Telefone: +91 91813 23 2309</p>
          <p>Localização: Somewhere in the World</p>
        </div>

        {/* Ícones das Redes Sociais */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com"><FaFacebook className="h-6 w-6 text-green-400" /></a>
          <a href="https://twitter.com"><FaTwitter className="h-6 w-6 text-green-400" /></a>
          <a href="https://linkedin.com"><FaLinkedin className="h-6 w-6 text-green-400" /></a>
        </div>

        {/* Direitos Reservados e Links Legais */}
        <p className="mb-2 text-sm">&copy; 2024 YourBanK. Todos os direitos reservados.</p>
        <p className="text-sm">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;