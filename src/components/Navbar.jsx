import React from 'react';
import logo from '../assets/food-logo.png';
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className='bg-white text-orange-700 p-4 fixed top-0 z-50 border-b border-orange  shadow-lg w-full'>
      <div className='flex justify-between items-center px-6 max-w-7xl mx-auto'>
        <div>
          <a href="#" className='flex items-center gap-2 font-bold text-2xl sm:text-3xl'>
            <img src={logo} alt="Logo" className='h-16 w-16' />Classic Food
          </a>
        </div>
        <ul className='flex gap-6 font-semibold text-lg pr-12'>
          <li><a href='#home' className='hover:text-orange-400 transition before:content-[""] before:w-2 before:h-2 before:bg-orange-400 before:rounded-full before:mr-2 before:inline-block hover:before:bg-orange-500'>Home</a></li>
          <li><a href='#about' className='hover:text-orange-400 transition before:content-[""] before:w-2 before:h-2 before:bg-orange-400 before:rounded-full before:mr-2 before:inline-block hover:before:bg-orange-500'>About</a></li>
          <li><a href='#contact' className='hover:text-orange-400 transition before:content-[""] before:w-2 before:h-2 before:bg-orange-400 before:rounded-full before:mr-2 before:inline-block hover:before:bg-orange-500'>Contact</a></li>
        </ul>
        <button className='bg-linear-to-r from-orange-400 to-orange-500 text-white font-bold py-2 px-4 rounded-full hover:from-orange-500 hover:to-orange-600 transition border-2 border-orange-300 hover:scale-105 duration-200 shadow-2xl flex items-center gap-2'>Order Now
          <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;