import React from 'react';


function Layout({ children }) {
  return (
    <div className="bg-[#141313] min-h-screen">
      <main>{children}</main>
    </div>
  );
}

export default Layout;
