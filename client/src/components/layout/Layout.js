import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="bg-[#141313] min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
