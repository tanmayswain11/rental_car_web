import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./home/Hero";
import About from "./home/About";
import WhyZibago from "./home/WhyZibago";
import RentCar from "./home/RentCar";
import Contact from "./home/Contact";
import MapSection from "./home/MapSection";

function App() {
  return (
    <div className="bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <About />
      <WhyZibago />
      <RentCar />
      <Contact />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;