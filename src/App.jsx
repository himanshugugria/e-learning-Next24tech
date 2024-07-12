// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
    </div>
  );
}

export default App;
