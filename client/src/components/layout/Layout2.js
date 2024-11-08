import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="bg-[#141313] min-h-screen">
      <main>{children}</main>
      <Outlet />
    </div>
  );
}

export default Layout;
