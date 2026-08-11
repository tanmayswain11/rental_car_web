// import { motion } from "framer-motion";
// import { Fuel, Gauge, Users, Snowflake } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import cars from "../data/cars";
// import weddingCars from "../data/weddingCars";

// export default function RentCar() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#030303] via-[#0b0b0b] to-black py-24 px-6">

//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             x: [0, 150, 0],
//             y: [0, 80, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-orange-500/20 blur-[120px]"
//         />

//         <motion.div
//           animate={{
//             x: [0, -180, 0],
//             y: [0, -120, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[180px]"
//         />

//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//           }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-400/10 blur-[150px]"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* ================= Hero ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-20"
//         >
//           <h1 className="text-5xl md:text-6xl font-black text-white">
//             Find Your
//             <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
//               {" "}
//               Perfect Ride
//             </span>
//           </h1>

//           <p className="text-gray-300 mt-6 max-w-4xl mx-auto leading-8 text-lg">
//             Choose from our carefully maintained fleet of affordable rental cars
//             and premium wedding vehicles. Whether it's daily travel, business
//             trips, airport transfers, family vacations or your special wedding
//             day, ZibaGo has the perfect ride waiting for you.
//           </p>
//         </motion.div>

//         {/* ================= Affordable Cars ================= */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-center text-4xl md:text-5xl font-black">
//             <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
//               Affordable Rental Cars
//             </span>
//           </h2>

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "150px" }}
//             transition={{ duration: 0.8 }}
//             className="h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mt-5"
//           />

//           <p className="text-gray-300 text-center mt-8 mb-16 max-w-4xl mx-auto leading-8 text-lg">
//             Explore our affordable, comfortable, and reliable rental cars
//             perfect for daily travel, business trips, airport transfers, family
//             vacations, weekend getaways, and outstation journeys.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {cars.map((car) => (
//             <motion.div
//               key={car.id}
//               whileHover={{
//                 y: -12,
//                 scale: 1.03,
//               }}
//               transition={{ duration: 0.3 }}
//               className="bg-[#151515] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-orange-500 transition-all duration-500"
//             >
//               <img
//                 src={car.image}
//                 alt={car.name}
//                 className="w-full h-60 object-cover"
//               />

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-white">{car.name}</h3>

//                 <h2 className="text-yellow-400 text-3xl font-bold mt-3">
//                   ₹{car.minprice.toLocaleString()} - ₹
//                   {car.maxprice.toLocaleString()}
//                   <span className="text-lg text-gray-300"> / Day</span>
//                 </h2>

//                 <div className="grid grid-cols-2 gap-4 mt-6 text-gray-300">
//                   <div className="flex items-center gap-2">
//                     <Fuel size={18} />
//                     {car.fuel}
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <Gauge size={18} />
//                     {car.transmission}
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <Users size={18} />
//                     {car.seats} Seats
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <Snowflake size={18} />
//                     AC
//                   </div>
//                 </div>

//                 <p className="text-gray-400 mt-5">Mileage : {car.mileage}</p>

//                 <button
//                   onClick={() =>
//                     navigate("/rent", {
//                       state: car,
//                     })
//                   }
//                   className="w-full mt-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-3 rounded-xl transition duration-300"
//                 >
//                   Rent This Car
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================= Premium Wedding Cars Starts Here ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-32"
//         >
//           {/* Section Heading */}

//           <h2 className="text-center text-4xl md:text-5xl font-black">
//             <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
//               Premium Wedding Cars
//             </span>
//           </h2>

//           {/* Animated Underline */}

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "170px" }}
//             transition={{ duration: 0.8 }}
//             className="h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full mx-auto mt-5"
//           />

//           {/* Description */}

//           <p className="text-gray-300 text-center mt-8 mb-16 max-w-4xl mx-auto leading-8 text-lg">
//             Celebrate your special day with elegance, luxury, and style. Our
//             exclusive collection of premium wedding cars is carefully selected
//             to make your wedding, engagement, reception, or VIP event truly
//             unforgettable.
//             <br />
//             <br />
//             Enjoy a grand entrance with luxury vehicles that perfectly
//             complement your once-in-a-lifetime celebration.
//           </p>

//           {/* Wedding Cars Grid */}

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {weddingCars.map((car) => (
//               <motion.div
//                 key={car.id}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.03,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative bg-[#151515] rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 hover:border-yellow-400 transition-all duration-500"
//               >
//                 {/* Premium Badge */}

//                 <div className="absolute top-4 left-4 z-20">
//                   <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xs px-4 py-2 rounded-full shadow-lg">
//                     ⭐ PREMIUM
//                   </span>
//                 </div>

//                 {/* Image */}

//                 <img
//                   src={car.image}
//                   alt={car.name}
//                   className="w-full h-60 object-cover"
//                 />

//                 {/* Details */}

//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-white">{car.name}</h3>

//                   <h2 className="text-yellow-400 text-3xl font-bold mt-3">
//                     ₹{car.minprice.toLocaleString()} - ₹
//                     {car.maxprice.toLocaleString()}
//                     <span className="text-lg text-gray-300"> / Day</span>
//                   </h2>

//                   <div className="grid grid-cols-2 gap-4 mt-6 text-gray-300">
//                     <div className="flex items-center gap-2">
//                       <Fuel size={18} />
//                       {car.fuel}
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Gauge size={18} />
//                       {car.transmission}
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Users size={18} />
//                       {car.seats} Seats
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Snowflake size={18} />
//                       AC
//                     </div>
//                   </div>

//                   <p className="text-gray-400 mt-5">Mileage : {car.mileage}</p>

//                   <button
//                     onClick={() =>
//                       navigate("/rent", {
//                         state: car,
//                       })
//                     }
//                     className="w-full mt-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 rounded-xl transition duration-300 shadow-lg"
//                   >
//                     Book Wedding Car
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import {
  Fuel,
  Gauge,
  Users,
  Snowflake,
  Sparkles,
  Crown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import cars from "../data/cars";
import weddingCars from "../data/weddingCars";

export default function RentCar() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Orange Glow */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[140px]"
        />

        {/* Yellow Glow */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[150px]"
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-orange-400/10 blur-[140px]"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 py-24 sm:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* ================= HERO ================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto mb-20 sm:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              ZibaGo Premium Fleet
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Perfect Ride
              </span>
            </h1>

            <p className="text-gray-400 mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-7 sm:leading-8">
              Choose from our carefully maintained fleet of affordable rental
              cars and premium wedding vehicles. Whether you're planning a daily
              journey, business trip, airport transfer, family vacation, or your
              special wedding day —
              <span className="text-white font-medium">
                {" "}
                ZibaGo has the perfect ride for you.
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                <ShieldCheck size={17} className="text-orange-400" />
                Verified Vehicles
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                <Gauge size={17} className="text-yellow-400" />
                Well Maintained
              </div>
            </div>
          </motion.section>

          {/* ================= AFFORDABLE RENTAL CARS ================= */}

          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 text-orange-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
                <span className="w-8 h-px bg-orange-500" />
                Everyday Travel
                <span className="w-8 h-px bg-orange-500" />
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Affordable Rental Cars
                </span>
              </h2>

              <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-7">
                Explore our affordable, comfortable and reliable rental cars —
                perfect for daily travel, business trips, airport transfers,
                family vacations, weekend getaways and outstation journeys.
              </p>
            </motion.div>

            {/* ================= CAR GRID ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {cars.map((car, index) => (
                <motion.article
                  key={car.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/[0.04] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-500 shadow-2xl"
                >
                  {/* Image */}

                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <motion.img
                      src={car.image}
                      alt={car.name}
                      whileHover={{ scale: 1.12 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Availability */}

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-green-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {car.name}
                    </h3>

                    {/* Price */}

                    <div className="mt-3">
                      <span className="text-orange-400 text-2xl sm:text-3xl font-black">
                        ₹{car.minprice.toLocaleString()}
                      </span>

                      <span className="text-gray-500 mx-1">-</span>

                      <span className="text-orange-400 text-2xl sm:text-3xl font-black">
                        ₹{car.maxprice.toLocaleString()}
                      </span>

                      <span className="text-gray-500 text-sm ml-1">/ Day</span>
                    </div>

                    {/* Specifications */}

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <CarSpec icon={<Fuel size={16} />} label={car.fuel} />

                      <CarSpec
                        icon={<Gauge size={16} />}
                        label={car.transmission}
                      />

                      <CarSpec
                        icon={<Users size={16} />}
                        label={`${car.seats} Seats`}
                      />

                      <CarSpec icon={<Snowflake size={16} />} label="AC" />
                    </div>

                    {/* Mileage */}

                    <div className="mt-5 pt-5 border-t border-white/10 text-sm text-gray-400">
                      Mileage:
                      <span className="text-gray-200 ml-1">{car.mileage}</span>
                    </div>

                    {/* Button */}

                    <button
                      type="button"
                      onClick={() =>
                        navigate("/rent", {
                          state: car,
                        })
                      }
                      className="group/btn w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 active:scale-[0.98] text-black font-bold py-3.5 rounded-xl transition-all duration-300"
                    >
                      Rent This Car
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ================= WEDDING DIVIDER ================= */}

          <div className="relative my-28 sm:my-32">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

            <div className="relative mx-auto w-fit px-6 bg-[#050505] text-yellow-400">
              <Crown size={25} />
            </div>
          </div>

          {/* ================= PREMIUM WEDDING CARS ================= */}

          <section>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs sm:text-sm font-bold">
                <Crown size={16} />
                WEDDING COLLECTION
                <Crown size={16} />
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Premium Wedding Cars
                </span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-7 max-w-3xl mx-auto mt-6">
                Make your wedding unforgettable with our premium collection of
                luxury wedding cars. Arrive in elegance and style on your
                special day.
              </p>

              <p className="mt-5 text-sm text-gray-500">
                Looking for an affordable ride?
                <span className="text-orange-400 font-semibold ml-1">
                  Explore our rental cars above.
                </span>
              </p>
            </motion.div>

            {/* ================= WEDDING CAR GRID ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {weddingCars.map((car, index) => (
                <motion.article
                  key={car.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-gradient-to-b from-yellow-500/[0.08] to-white/[0.03] backdrop-blur-xl rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400/60 transition-all duration-500 shadow-2xl"
                >
                  {/* Premium Badge */}

                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 text-black text-xs font-black shadow-lg">
                      <Crown size={13} />
                      PREMIUM
                    </span>
                  </div>

                  {/* Image */}

                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <motion.img
                      src={car.image}
                      alt={car.name}
                      whileHover={{ scale: 1.12 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Card Content */}

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {car.name}
                    </h3>

                    {/* Price */}

                    <div className="mt-3">
                      <span className="text-yellow-400 text-2xl sm:text-3xl font-black">
                        ₹{car.minprice.toLocaleString()}
                      </span>

                      <span className="text-gray-500 mx-1">-</span>

                      <span className="text-yellow-400 text-2xl sm:text-3xl font-black">
                        ₹{car.maxprice.toLocaleString()}
                      </span>

                      <span className="text-gray-500 text-sm ml-1">/ Day</span>
                    </div>

                    {/* Specifications */}

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <CarSpec icon={<Fuel size={16} />} label={car.fuel} />

                      <CarSpec
                        icon={<Gauge size={16} />}
                        label={car.transmission}
                      />

                      <CarSpec
                        icon={<Users size={16} />}
                        label={`${car.seats} Seats`}
                      />

                      <CarSpec icon={<Snowflake size={16} />} label="AC" />
                    </div>

                    {/* Mileage */}

                    <div className="mt-5 pt-5 border-t border-yellow-500/10 text-sm text-gray-400">
                      Mileage:
                      <span className="text-gray-200 ml-1">{car.mileage}</span>
                    </div>

                    {/* Button */}

                    <button
                      type="button"
                      onClick={() =>
                        navigate("/rent", {
                          state: car,
                        })
                      }
                      className="group/btn w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 hover:from-yellow-300 hover:to-orange-400 active:scale-[0.98] text-black font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg"
                    >
                      Book Wedding Car
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ================= BOTTOM CTA ================= */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-24 sm:mt-32 overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-orange-500/10 p-8 sm:p-12 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-orange-500/20 blur-[100px]" />

            <div className="relative">
              <Sparkles className="mx-auto text-orange-400 mb-4" size={28} />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
                Can't Decide Which Car?
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
                Our team is here to help you choose the perfect vehicle
                according to your budget, occasion and travel requirements.
              </p>

              {/* <button
                type="button"
                onClick={() =>navigate("#contact")
                  // document
                  //   .getElementById("contact")
                  //   ?.scrollIntoView({
                  //     behavior: "smooth",
                  //   })
                }
                className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold hover:bg-orange-500 transition-all duration-300"
              >

                Talk To Us

                <ArrowRight size={18} />

              </button> */}

              <button
                type="button"
                onClick={() => navigate("/#contact")}
                className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold hover:bg-orange-500 transition-all duration-300"
              >
                Talk To Us
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

/* ================================================= */
/* CAR SPEC COMPONENT */
/* ================================================= */

function CarSpec({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-2.5 text-xs sm:text-sm text-gray-300">
      <span className="text-orange-400 shrink-0">{icon}</span>

      <span className="truncate">{label}</span>
    </div>
  );
}
