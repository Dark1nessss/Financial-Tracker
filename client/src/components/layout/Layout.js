import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <div className="bg-[#141313] min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
