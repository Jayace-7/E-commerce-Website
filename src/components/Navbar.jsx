
import logo from '../assets/food-logo.png';
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const navLinks = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
  { label: 'testimonials', href: '#testimonials' },
];

function Navbar() {
  return (
    <nav className='bg-white dark:bg-gray-900 text-orange-700 dark:text-white p-4 sticky top-0 z-50 border-b border-orange dark:border-orange-500 shadow-lg w-full py-3 sm:py-0 transition-colors duration-300'>
      <div className='flex justify-between items-center px-6 max-w-7xl mx-auto'>

        {/* Logo */}
        <div>
          <a
            href="#"
            className='flex items-center gap-2 font-bold text-2xl sm:text-3xl text-orange-700 dark:text-white dark:[text-shadow:0_0_3px_#f97316,0_0_8px_#f97316] transition-all duration-300'
          >
            <img src={logo} alt="Logo" className='h-16 w-16' />
            Classic Food
          </a>
        </div>

        {/* Nav Links */}
        <div className='flex items-center gap-4'>
          <ul className='flex gap-6 font-semibold text-lg pr-12'>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className='capitalize inline-block transition-all duration-300 text-orange-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-300 hover:scale-105 before:content-[""] before:inline-block before:w-2 before:h-2 before:rounded-full before:mr-2 before:bg-orange-400 dark:before:bg-white hover:before:bg-orange-500 dark:hover:before:bg-orange-300 dark:[text-shadow:0_0_2px_#f97316,0_0_8px_#f97316]'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: DarkMode + Order button */}
        <div className='flex items-center gap-4'>
          <DarkMode />
          <button className='bg-linear-to-r from-orange-400 to-orange-500 dark:from-white dark:to-gray-100 text-white dark:text-orange-600 font-bold py-2 px-4 rounded-full hover:from-orange-500 hover:to-orange-600 dark:hover:from-gray-100 dark:hover:to-gray-200 transition-all duration-300 border-2 border-orange-300 dark:border-orange-400 hover:scale-105 shadow-2xl flex items-center gap-2 cursor-pointer'>
            Order
            <FaCartShopping className='text-xl drop-shadow-sm cursor-pointer' />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;