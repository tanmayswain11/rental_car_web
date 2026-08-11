import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../home/Hero";
import About from "../home/About";
import WhyZibago from "../home/WhyZibago";
// import RentCar from "./RentCar";
import Contact from "../home/Contact";
import MapSection from "../home/MapSection";
import MoreServices from "../home/MoreServices";
import ChatBot from "../chatbot/ChatBot";
import FloatingWhatsApp from "../chatbot/FloatingWhatsApp";

function App() {
  return (
    <div className="bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <About />
      <WhyZibago />
      {/* <RentCar /> */}
      <MoreServices/>
      <Contact />
      <MapSection />
      <Footer />
      <ChatBot/>
      <FloatingWhatsApp/>
    </div>
  );
}

export default App;