// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-100 h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.vhv.rs/viewpic/TTJRobb_transparent-background-education-logo-hd-png-download/#')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-75"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg animate-fade-in">Welcome to E-Learn</h1>
        <p className="text-xl mb-8 text-white drop-shadow-md animate-fade-in delay-1s">Learn from the best instructors around the world.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-bounce">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
