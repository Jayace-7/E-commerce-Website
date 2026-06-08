import React, { useState } from 'react';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />
    </div>
  );
};

export default App;