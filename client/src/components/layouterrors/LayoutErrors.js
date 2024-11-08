import React from 'react';

function LayoutErrors({ children }) {
  return (
    <div className="bg-[#141313] h-screen flex items-center justify-center">
      <main className="w-full">{children}</main>
    </div>
  );
}

export default LayoutErrors;