import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from './components/Service';
import Banner from './components/Banner';
import Download from './components/Download';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <Download />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;