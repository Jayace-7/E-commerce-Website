import appIllustration from '../assets/Gif.gif';
import { FaGooglePlay, FaApple } from 'react-icons/fa6';

function Download() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">

          {/* ── LEFT: Text + Store Badges ── */}
          <div className="flex flex-col gap-6 text-center sm:text-left order-2 sm:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-white leading-snug">
              Foodly is Available for <br className="hidden sm:block" />
              Android and IOS
            </h2>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              {/* Google Play badge */}
              <a
                href="#"
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white rounded-xl px-5 py-2.5 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaGooglePlay className="text-3xl" />
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[11px] text-gray-300">GET IT ON</span>
                  <span className="text-lg font-semibold -mt-0.5">Google Play</span>
                </span>
              </a>

              {/* App Store badge */}
              <a
                href="#"
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white rounded-xl px-5 py-2.5 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaApple className="text-3xl" />
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[11px] text-gray-300">Download on the</span>
                  <span className="text-lg font-semibold -mt-0.5">App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="order-1 sm:order-2 bg-white rounded-xl shadow-lg p-3 w-fit max-w-65 sm:max-w-70 flex justify-center sm:mr-6">
            <img
              src={appIllustration}
              alt="Delivery app illustration"
              className="w-52 h-52 sm:w-60 sm:h-60 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Download;