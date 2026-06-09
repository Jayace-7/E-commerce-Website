import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;