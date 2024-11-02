import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Support from './pages/Support';
import Careers from './pages/Careers';
import About from './pages/About';
import Security from './pages/Security';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
