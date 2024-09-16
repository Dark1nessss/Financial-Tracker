"use client";

export default function Navbar() {
    return (
      <header className="bg-[#1C1C1C] rounded-full py-4 px-10 mx-auto max-w-screen-xl flex items-center justify-between mt-6 transition duration-400 ease-in-out">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="YourBank Logo" className="h-8 w-8 transition duration-400 ease-in-out" />
          <h1 className="text-white font-bold text-2xl ml-4 transition duration-400 ease-in-out">YourBanK</h1>
        </div>
  
        {/* Navigation Links */}
        <nav className="flex space-x-10">
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Home</a>
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Careers</a>
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">About</a>
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Security</a>
        </nav>
  
        {/* Sign Up and Login Buttons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Sign Up</a>
          <a href="#" className="bg-[#CCFF00] text-black rounded-full px-6 py-2 font-semibold hover:bg-[#9FBD0A] transition duration-400 ease-in-out">Login</a>
        </div>
      </header>
    );
}
  