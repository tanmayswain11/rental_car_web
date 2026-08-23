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
    <main
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
      aria-labelledby="rent-cars-heading"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
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
            aria-labelledby="rent-cars-heading"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6">
              <Sparkles size={16} aria-hidden="true" />
              ZibaGo Car Rental
            </div>

            {/* MAIN SEO H1 */}

            <h1
              id="rent-cars-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              Rent a Car in
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Bhubaneswar
              </span>
              with ZibaGo
            </h1>

            {/* SEO INTRODUCTION */}

            <p className="text-gray-400 mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-7 sm:leading-8">
              Find affordable and reliable cars for rent in Bhubaneswar
              with ZibaGo. Choose from our available vehicles for daily
              travel, business trips, airport travel, family journeys,
              weekend getaways and other transportation needs.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                <ShieldCheck
                  size={17}
                  className="text-orange-400"
                  aria-hidden="true"
                />
                Verified Vehicles
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                <Gauge
                  size={17}
                  className="text-yellow-400"
                  aria-hidden="true"
                />
                Well Maintained
              </div>
            </div>
          </motion.section>

          {/* ================= AFFORDABLE RENTAL CARS ================= */}

          <section
            aria-labelledby="affordable-cars-heading"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 text-orange-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
                <span className="w-8 h-px bg-orange-500" />
                Cars for Rent
                <span className="w-8 h-px bg-orange-500" />
              </div>

              <h2
                id="affordable-cars-heading"
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black"
              >
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Affordable Car Rental in Bhubaneswar
                </span>
              </h2>

              <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-7">
                Explore our available rental cars in Bhubaneswar with
                different seating capacities, fuel options and
                transmissions. Choose a vehicle based on your budget,
                travel plans and rental requirements.
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
                      alt={`${car.name} available for rent in Bhubaneswar`}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      whileHover={{ scale: 1.12 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />

                    {/* Availability */}

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-green-400 font-semibold">
                        <span
                          className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                          aria-hidden="true"
                        />
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

                      <span className="text-gray-500 mx-1">
                        -
                      </span>

                      <span className="text-orange-400 text-2xl sm:text-3xl font-black">
                        ₹{car.maxprice.toLocaleString()}
                      </span>

                      <span className="text-gray-500 text-sm ml-1">
                        / Day
                      </span>
                    </div>

                    {/* Specifications */}

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <CarSpec
                        icon={<Fuel size={16} />}
                        label={car.fuel}
                      />

                      <CarSpec
                        icon={<Gauge size={16} />}
                        label={car.transmission}
                      />

                      <CarSpec
                        icon={<Users size={16} />}
                        label={`${car.seats} Seats`}
                      />

                      <CarSpec
                        icon={<Snowflake size={16} />}
                        label="AC"
                      />
                    </div>

                    {/* Mileage */}

                    <div className="mt-5 pt-5 border-t border-white/10 text-sm text-gray-400">
                      Mileage:
                      <span className="text-gray-200 ml-1">
                        {car.mileage}
                      </span>
                    </div>

                    {/* Booking Button */}

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
                        aria-hidden="true"
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

            <div
              className="relative mx-auto w-fit px-6 bg-[#050505] text-yellow-400"
              aria-hidden="true"
            >
              <Crown size={25} />
            </div>
          </div>

          {/* ================= PREMIUM WEDDING CARS ================= */}

          <section
            aria-labelledby="wedding-cars-heading"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs sm:text-sm font-bold">
                <Crown size={16} aria-hidden="true" />
                WEDDING COLLECTION
                <Crown size={16} aria-hidden="true" />
              </div>

              <h2
                id="wedding-cars-heading"
                className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black"
              >
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Wedding Car Rental in Bhubaneswar
                </span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-7 max-w-3xl mx-auto mt-6">
                Make your wedding memorable with our collection of
                premium wedding cars. Choose a stylish vehicle for
                your special occasion and contact ZibaGo for
                availability and rental details.
              </p>

              <p className="mt-5 text-sm text-gray-500">
                Looking for an everyday rental car?
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("affordable-cars-heading")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="text-orange-400 font-semibold ml-1 hover:text-orange-300"
                >
                  Explore our rental cars.
                </button>
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
                      <Crown size={13} aria-hidden="true" />
                      PREMIUM
                    </span>
                  </div>

                  {/* Image */}

                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <motion.img
                      src={car.image}
                      alt={`${car.name} wedding car available in Bhubaneswar`}
                      loading="lazy"
                      decoding="async"
                      whileHover={{ scale: 1.12 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />
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

                      <span className="text-gray-500 mx-1">
                        -
                      </span>

                      <span className="text-yellow-400 text-2xl sm:text-3xl font-black">
                        ₹{car.maxprice.toLocaleString()}
                      </span>

                      <span className="text-gray-500 text-sm ml-1">
                        / Day
                      </span>
                    </div>

                    {/* Specifications */}

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <CarSpec
                        icon={<Fuel size={16} />}
                        label={car.fuel}
                      />

                      <CarSpec
                        icon={<Gauge size={16} />}
                        label={car.transmission}
                      />

                      <CarSpec
                        icon={<Users size={16} />}
                        label={`${car.seats} Seats`}
                      />

                      <CarSpec
                        icon={<Snowflake size={16} />}
                        label="AC"
                      />
                    </div>

                    {/* Mileage */}

                    <div className="mt-5 pt-5 border-t border-yellow-500/10 text-sm text-gray-400">
                      Mileage:
                      <span className="text-gray-200 ml-1">
                        {car.mileage}
                      </span>
                    </div>

                    {/* Booking Button */}

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
                        aria-hidden="true"
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
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-orange-500/20 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative">
              <Sparkles
                className="mx-auto text-orange-400 mb-4"
                size={28}
                aria-hidden="true"
              />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
                Need Help Choosing a Rental Car?
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
                Our team can help you choose a suitable vehicle
                according to your budget, occasion, number of
                passengers and travel requirements.
              </p>

              <button
                type="button"
                onClick={() => navigate("/#contact")}
                className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold hover:bg-orange-500 transition-all duration-300"
              >
                Talk To Us
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
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
      <span
        className="text-orange-400 shrink-0"
        aria-hidden="true"
      >
        {icon}
      </span>

      <span className="truncate">
        {label}
      </span>
    </div>
  );
}