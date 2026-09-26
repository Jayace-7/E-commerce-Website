import spag from '../assets/spag.png';
import { Lock, Salad, Truck } from 'lucide-react';
 
function Banner() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center md:justify-start self-start">
            <div className="relative w-50 h-60 md:w-95 md:h-95 aspect-square rounded-full overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.18)] bg-orange-300  dark:bg-gray-700 transition-transform duration-500 hover:scale-105">
              <img
                src={spag}
                alt="Spaghetti"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
 
          {/* Text content */}
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Lorem ipsum dolor
            </h2>
 
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis
              inventore iste ratione ex alias quis magni at optio
            </p>
 
            <p className="text-gray-500 dark:text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed,
              exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam
              hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.
            </p>
 
            {/* Feature icons */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Lock className="w-6 h-6 text-gray-900" />
              </div>
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <Salad className="w-6 h-6 text-gray-900" />
              </div>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Truck className="w-6 h-6 text-gray-900" />
              </div>
            </div>
 
            {/* CTA button */}
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-scale duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Banner;