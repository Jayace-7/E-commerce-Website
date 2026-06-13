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
  className="min-h-125 sm:min-h-150 bg-gray-100 dark:bg-gray-900 dark:text-white duration-300 flex justify-center items-center mt-4 sm:mt-0 rounded-lg shadow-lg"
>
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
            {/* text content section */}
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl sm:text-5xl font-bold text-orange-500 dark:text-white">
                Delicious Meals for <br /> Every Occasion
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover our collection of  mouth-watering dishes,<br />
                 crafted with the finest ingredients and passion.
              </p>
            </div>
            {/* image section */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;