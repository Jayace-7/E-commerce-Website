import React from 'react';
import { Quote, UserRound } from 'lucide-react';

const testimonials = [
  {
    name: 'Mr John',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
  },
  {
    name: 'Samuel',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed exercitationem minima aliquid eligendi distinctio fugit',
  },
  {
    name: 'Peter',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam ad nam velit quasi quidem aspernatur recusandae hic',
  },
  {
    name: 'Sarah',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique neque illo deleniti error dolores earum dolorum fugit',
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // ── AUTO-ROTATE ──────────────────────────────────────────
  // Same pattern as Hero.jsx: cycle through testimonials
  // every 3 seconds, wrapping back to 0 with modulo.
  // ─────────────────────────────────────────────────────────
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="bg-white dark:bg-gray-950 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">

        {/* ── Section Heading ── */}
        <div className="text-center mb-12">
          <p className="text-orange-400 font-semibold mb-1">Testimonial</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Testimonial
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt
            explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?
          </p>
        </div>

        {/* ── Testimonial Card ── */}
        <div className="max-w-xl mx-auto">
          <div
            key={activeIndex}
            className="relative bg-amber-50 dark:bg-gray-800 rounded-2xl shadow-xl px-6 py-10 sm:px-10 sm:py-12 flex flex-col items-center text-center animate-fade-in transition-colors duration-300"
          >
            {/* Quote icon */}
            <Quote
              className="absolute top-8 right-8 sm:top-10 sm:right-12 w-10 h-10 sm:w-12 sm:h-12 text-stone-300 dark:text-gray-600 fill-stone-300 dark:fill-gray-600"
            />

            {/* Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-100 dark:bg-gray-700 flex items-center justify-center mb-6 shadow-md ring-4 ring-white dark:ring-gray-900">
              <UserRound className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 dark:text-orange-300" />
            </div>

            {/* Text */}
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-lg mb-4">
              {active.text}
            </p>

            {/* Name */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {active.name}
            </h3>
          </div>

          {/* ── Dot Indicators ── */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-4 h-2.5 bg-gray-900 dark:bg-white'
                    : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;