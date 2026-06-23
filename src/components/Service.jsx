import React from 'react';
import rice from '../assets/rice.png';
import spag from '../assets/spag.png';
import ppsoup from '../assets/pp-soup.png';

const services = [
  {
    id: 1,
    name: 'Jollof Rice',
    image: rice,
    description: 'Smoky, spiced rice cooked slow in a rich tomato base.',
  },
  {
    id: 2,
    name: 'Spaghetti',
    image: spag,
    description: 'Classic spaghetti tossed in a savory house sauce.',
  },
  {
    id: 3,
    name: 'Pepper Soup',
    image: ppsoup,
    description: 'A bold, peppery broth simmered with fresh spices.',
  },
];

function Service() {
  return ( 
    <section className="py-16 bg-gray-100 dark:bg-gray-800" >
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-20 max-w-100 mx-auto">
     <p className='text-5xl font-bold uppercase sm:text-4xl lg:text-5xl bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent'>Our Services</p>
        <h2 className="text-3xl font-semibold text-orange-400 dark:text-white mb-6 ">Services</h2>
        <p className='text-gray-700 text-xm dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, beatae! Tempore maxime enim unde omnis quas odit incidunt ratione, porro sed aliquam, deleniti sunt rerum a! Deleniti ut debitis optio.</p>
       </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service) => (
            <div key={service.id} className="group relative pt-20">

              { /* ── Circular image, overlapping the card above ── */}
              {/* Increased again, now w-44/sm:w-56 (11rem mobile, 14rem
                  desktop) — noticeably bigger food photo. */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden transition-transform duration-500 group-hover:-translate-y-3 cursor-pointer">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:rotate-6"
                />
              </div>

              { /* ── Card ── */}
              {/* pt-28 increased from pt-24 to give the now-bigger circle
                  more clearance above the name text.
                  shadow-md gives a visible black shadow at rest in light mode.
                  group-hover:shadow-xl (replacing invalid shadow-3xl) grows
                  the shadow on hover in light mode.
                  dark:shadow-none removes the rest-state shadow in dark mode,
                  since a black shadow barely reads on a dark background.
                  dark:group-hover:shadow-lg (replacing invalid dark:shadow-3xl)
                  keeps the dark-mode hover shadow more restrained than the
                  light-mode one, since the card turns orange-400 underneath it. */}
              <div className="bg-white rounded-xl border-2 border-white pt-28 pb-16 px-6 text-center mx-auto max-w-75 shadow-md transition-all duration-300 group-hover:bg-orange-300 group-hover:shadow-xl group-hover:-translate-y-3 dark:bg-gray-900 dark:border-orange-400 dark:shadow-none dark:group-hover:bg-orange-400 dark:group-hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white dark:text-white">
                  {service.name}
                </h3>
                <p className="mt-2 text-md text-gray-600 transition-colors duration-300 group-hover:text-white dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
     </div>
    </section>
    );
}

export default Service;