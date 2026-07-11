import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from './components/Service';
import Banner from './components/Banner';

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
    </div>
  );
};

export default App;