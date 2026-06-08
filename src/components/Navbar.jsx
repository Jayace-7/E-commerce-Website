import React from 'react';
import logo from '../assets/food-logo.png';
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode'; // 👈 import it

function Navbar() {
  return (
    <nav className='bg-white dark:bg-gray-900 text-orange-700 p-4 fixed top-0 z-50 border-b border-orange dark:border-orange-500 shadow-lg w-full py-3 sm:py-0'>
      <div className='flex justify-between items-center px-6 max-w-7xl mx-auto'>
        <div>
          <a href="#" className='flex items-center gap-2 font-bold text-2xl sm:text-3xl text-outline-orange'>
            <img src={logo} alt="Logo" className='h-16 w-16' />Classic Food
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <ul className='flex gap-6 font-semibold text-lg pr-12 text-outline-orange'>
            <li><a href='#home' className='hover:text-orange-400 dark:hover:text-orange-300 transition before:content-[""] before:w-2 before:h-2 before:bg-orange-400 before:rounded-full before:mr-2 before:inline-block hover:before:bg-orange-500'>Home</a></li>
            <li><a href='#about' className='hover:text-orange-400 dark:hover:text-orange-300 transition before:content-[""] before:w-2 before:h-2 before:bg-orange-400 before:rounded-full before:mr-2 before:inline-block hover:before:bg-orange-500'>About</a></li>
            <li><a href='#contact' className='hover:text-orange-400 dark:hover:text-orange-300 transition before:content-[""] before:w-2 before:h-2 before:bg-orange-400 before:rounded-full before:mr-2 before:inline-block hover:before:bg-orange-500'>Contact</a></li>
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <DarkMode /> {/* 👈 toggle sits here, next to the Order button */}
          <button className='bg-linear-to-r from-orange-400 to-orange-500 dark:bg-white text-white dark:text-white font-bold py-2 px-4 rounded-full hover:from-orange-500 hover:to-orange-600 dark:hover:bg-gray-100 transition border-2 border-orange-300 dark:border-white hover:scale-105 duration-200 shadow-2xl flex items-center gap-2'>Order Now
            <FaCartShopping className='text-xl dark:text-white drop-shadow-sm cursor-pointer' />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;