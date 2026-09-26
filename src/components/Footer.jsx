import { Navigation, Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import logo from '../assets/food-logo.png';

const linkColumns = [
  { title: 'Important Links', links: ['Home', 'About', 'Services', 'Login'] },
  { title: 'Important Links', links: ['Home', 'About', 'Services', 'Login'] },
  { title: 'Important Links', links: ['Home', 'About', 'Services', 'Login'] },
];

const socials = [
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
];

function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 text-gray-900 pt-16 pb-6 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand / About ── */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-1 font-bold text-2xl mr-4">
              <img src={logo} alt="Logo" className="h-30 w-30" />
              FOODIE
            </div>

            <p className="text-gray-600 max-w-xs dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic
              consequatur omnis dolor voluptatibus illo, tempore eum tenetur.
            </p>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-100">
              <Navigation className="w-5 h-5 shrink-0" />
              <span>Ikeja, Lagos</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-100">
              <Phone className="w-5 h-5 shrink-0" />
              <span>+234 123456789</span>
            </div>

            {/* ── Social Icons with glow on hover ── */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-white text-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_4px_rgba(251,146,60,0.6)] hover:bg-orange-400 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-orange-400 dark:hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link Columns ── */}
          {linkColumns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">{col.title}</h3>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-700 hover:text-orange-400 transition-colors duration-300 w-fit dark:text-gray-200 dark:hover:text-orange-400"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <hr className="border-gray-300 mb-6 dark:border-gray-700" />

        {/* ── Bottom bar ── */}
        <p className="text-center text-gray-600 dark:text-gray-300">
          @copyright 2026 All rights reserved || Made with{' '}
          <span className="text-pink-500">♥</span> by Forge
        </p>
      </div>
    </footer>
  );
}

export default Footer;