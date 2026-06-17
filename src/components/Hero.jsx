import React from 'react';
import bg from '../assets/bg.png';
import rice from '../assets/rice.png';
import stew from '../assets/stew.png';
import spag from '../assets/spag.png';
import ppsoup from '../assets/pp-soup.png';

const imagelist = [
  { src: stew, alt: 'Delicious Rice Stew' },
  { src: spag, alt: 'Delicious Spaghetti' },
  { src: ppsoup, alt: 'Delicious Pepper Soup' },
  { src: rice, alt: 'Delicious Jellof Rice' }
];

const bgimage = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
};

function Hero() {
  const [currentImage, setCurrentImage] = React.useState(bgimage);

  return (
   <section className="bg-white dark:bg-gray-950 transition-colors duration-300">
  <div
    style={{ ...currentImage, backgroundSize: '100%' }}
    className="min-h-125 sm:min-h-150 bg-gray-100 dark:bg-gray-900 dark:text-white duration-300 mt-4 sm:mt-0 rounded-lg shadow-lg"
  >
    {/* ✅ Removed flex justify-center items-center — let the grid handle layout */}
    <div className="container h-full py-8 sm:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-125 sm:min-h-150">
        
        {/* Left: Text content */}
        <div className="flex flex-col justify-center items-start text-left gap-2 sm:gap-4 order-2 sm:order-1 pl-6 sm:pl-12 lg:pl-16">
          <h1 className="text-5xl sm:text-6xl">
            Welcome to <br />
            <span className="text-orange-400 font-bold text-5xl pl-3 text-shadow-[0_0_8px_#f97316] dark:text-shadow-[0_0_16px_#ffffff]">
              Foodie Zone
            </span>
          </h1>
        </div>

        {/* Right: Image section (empty for now) */}
        <div className="order-1 sm:order-2">
          {/* your food image goes here */}
        </div>

      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;