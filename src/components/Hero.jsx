import React from 'react';
import bg from '../assets/bg.png';
import rice from '../assets/rice.png';
import stew from '../assets/stew.png';
import spag from '../assets/spag.png';
import ppsoup from '../assets/pp-soup.png';

const imagelist = [
  { src: stew,   alt: 'Delicious Rice Stew'   },
  { src: spag,   alt: 'Delicious Spaghetti'   },
  { src: ppsoup, alt: 'Delicious Pepper Soup' },
  { src: rice,   alt: 'Delicious Jellof Rice' },
];

function Hero() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // ── AUTO-ROTATE ──────────────────────────────────────────
  // useEffect runs once on mount (empty [] dependency).
  // setInterval fires every 3000ms (3 seconds).
  // Each tick: take current index, add 1, wrap back to 0
  // using modulo (%) when it exceeds the array length.
  // Example: 0 → 1 → 2 → 3 → 0 → 1 → ... forever.
  // clearInterval on cleanup prevents memory leaks when
  // the component unmounts (e.g. navigating away).
  // ─────────────────────────────────────────────────────────
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagelist.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="min-h-screen mt-4 sm:mt-0 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="container h-full py-8 sm:py-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center min-h-screen ">

            {/* ── LEFT: Text ── */}
            <div className="flex flex-col justify-center items-start text-left gap-4 order-2 sm:order-1 pl-6 sm:pl-12 lg:pl-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white">
                Welcome to the <br />
                <span className="text-orange-400">Foodie</span> Zone
              </h1>
              <p className="text-md text-gray-600 dark:text-gray-300 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique neque
                illo deleniti error dolores earum dolorum fugit delectus numquam.
              </p>
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                Order Now
              </button>
            </div>

            {/* ── RIGHT: Food image + thumbnails ── */}
            <div className="order-1 sm:order-2 relative flex justify-center items-center min-h-125">

              {/* ── GLOW SHADOW BEHIND THE FOOD ── */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0
                              w-708h-70-[360px] sm:h-90 lg:w-105 lg:h-105
                              bg-orange-400 opacity-40 rounded-full blur-3xl" />

              {/* ── MAIN FOOD IMAGE ── */}
              <div className="relative z-10
                              w-70 h-70 sm:w-90 sm:h-90 lg:w-105 lg:h-105
                              flex items-center justify-center">
                <img
                  key={activeIndex}
                  src={imagelist[activeIndex].src}
                  alt={imagelist[activeIndex].alt}
                  className="w-full h-full object-contain animate-spin-in"
                />
              </div>

              {/* ── THUMBNAIL STRIP ──────────────────────────────────
                * Thumbnails are now indicators only, not buttons.
                * The active one grows + glows to show which food
                * is currently displayed. No onClick needed.
                * pointer-events-none prevents any accidental clicks.
                * ─────────────────────────────────────────────────── */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 pr-2 pointer-events-none">
                {imagelist.map((item, idx) => (
                  <div
                    key={idx}
                    className={`
                      rounded-full border-2 overflow-hidden
                      transition-all duration-500
                      ${activeIndex === idx
                        ? 'w-24 h-24 border-orange-500 opacity-100 shadow-lg shadow-orange-400'
                        : 'w-20 h-20 border-white opacity-50'
                      }
                    `}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;