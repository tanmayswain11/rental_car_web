// import heroCar from "../assets/images/car-hero.jpg";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">

//       {/* Glow */}

//       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[180px] opacity-20"></div>

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* Left */}

//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >

//           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500 text-orange-400 mb-8">

//             Premium Car Rental

//           </div>

//           <h1 className="text-5xl md:text-7xl font-black leading-tight">

//             Drive Your

//             <br />

//             <span className="text-orange-500">

//               Dream Ride

//             </span>

//             <br />

//             with ZibaGo

//           </h1>

//           <p className="text-gray-400 text-lg mt-8 max-w-xl leading-8">

//             Experience luxury, comfort and performance with
//             premium cars available for rent.
//             Fast booking, affordable pricing and trusted service.

//           </p>

//           <div className="flex flex-wrap gap-5 mt-10">

//             <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-full font-semibold">

//               Rent Now

//               <ArrowRight size={20} />

//             </button>

//             <button className="border border-white/20 px-8 py-4 rounded-full hover:border-orange-500 duration-300">

//               Learn More

//             </button>

//           </div>

//           {/* Statistics */}

//           <div className="grid grid-cols-3 mt-20 gap-8">

//             <div>

//               <h2 className="text-4xl font-bold text-orange-500">

//                 500+

//               </h2>

//               <p className="text-gray-400 mt-2">

//                 Happy Clients

//               </p>

//             </div>

//             <div>

//               <h2 className="text-4xl font-bold text-orange-500">

//                 24/7

//               </h2>

//               <p className="text-gray-400 mt-2">

//                 Support

//               </p>

//             </div>

//             <div>

//               <h2 className="text-4xl font-bold text-orange-500">

//                 100%

//               </h2>

//               <p className="text-gray-400 mt-2">

//                 Insured

//               </p>

//             </div>

//           </div>

//         </motion.div>

//         {/* Right */}

//         <motion.div
//           initial={{ opacity: 0, x: 70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >

//           <img
//             src={heroCar}
//             alt="Luxury Car"
//             className="w-full drop-shadow-[0_30px_60px_rgba(249,115,22,0.35)]"
//           />

//         </motion.div>

//       </div>

//     </section>
//   );
// }

// import heroCar from "../assets/images/car-hero.jpg";
import heroVideo from "../assets/images/zibago_message.mp4";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef(null);

  const handleRentNow = () => {
    // If already on the home page
    if (location.pathname === "/") {
      document.getElementById("cars")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    // If on another page (like /rent), go home then scroll
    navigate("/");

    setTimeout(() => {
      document.getElementById("cars")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // Mute after the first complete play
      videoRef.current.muted = true;

      // Start looping silently
      videoRef.current.play();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[180px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500 text-orange-400 mb-8">
            Premium Car Rental
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Drive Your
            <br />
            <span className="text-orange-500">Dream Ride</span>
            <br />
            with ZibaGo
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-xl leading-8">
            Experience luxury, comfort and performance with premium cars
            available for rent. Fast booking, affordable pricing and trusted
            service.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            {/* Rent Now Button */}
            <button
              onClick={handleRentNow}
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-full font-semibold"
            >
              Rent Now
              <ArrowRight size={20} />
            </button>

            {/* Learn More */}
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="border border-white/20 px-8 py-4 rounded-full hover:border-orange-500 duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 mt-20 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-500">500+</h2>

              <p className="text-gray-400 mt-2">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">24/7</h2>

              <p className="text-gray-400 mt-2">Support</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">100%</h2>

              <p className="text-gray-400 mt-2">Insured</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.02,
          }}
          className="relative"
        >
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-3xl object-cover shadow-[0_40px_80px_rgba(249,115,22,0.35)]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video> */}

          <video
            ref={videoRef}
            autoPlay
            controls={true}
            playsInline
            onEnded={handleVideoEnd}
            className="w-full rounded-3xl object-cover shadow-[0_40px_80px_rgba(249,115,22,0.35)]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
