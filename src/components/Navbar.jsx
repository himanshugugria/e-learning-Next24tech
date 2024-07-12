// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">E-Learn</a>
        <div className="flex space-x-4">
          <a href="/courses" className="text-white">Courses</a>
          <a href="/about" className="text-white">About</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
