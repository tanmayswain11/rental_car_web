// import { CarFront, ShieldCheck, Clock3 } from "lucide-react";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-24 bg-[#0b0b0b]"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >

//           <span className="text-orange-500 font-semibold uppercase tracking-widest">
//             About ZibaGo
//           </span>

//           <h2 className="text-4xl md:text-5xl font-black mt-4">
//             Premium Car Rental
//             <span className="text-orange-500"> Experience</span>
//           </h2>

//           <p className="text-gray-400 mt-6 max-w-3xl leading-8 text-lg">
//             ZibaGo offers premium car rentals with comfort,
//             safety and transparent pricing.
//             Whether you need a luxury vehicle for a business meeting,
//             wedding, airport transfer or weekend getaway,
//             we provide well-maintained cars with hassle-free booking.
//           </p>

//         </motion.div>

//         {/* Cards */}

//         <div className="grid md:grid-cols-3 gap-8 mt-16">

//           <motion.div
//             whileHover={{ y: -8 }}
//             className="bg-[#111111] border border-white/10 rounded-3xl p-8"
//           >
//             <CarFront className="text-orange-500" size={40} />

//             <h3 className="text-2xl font-bold mt-6">
//               Premium Cars
//             </h3>

//             <p className="text-gray-400 mt-4 leading-7">
//               Luxury cars maintained in excellent condition
//               for a smooth and comfortable drive.
//             </p>

//           </motion.div>

//           <motion.div
//             whileHover={{ y: -8 }}
//             className="bg-[#111111] border border-white/10 rounded-3xl p-8"
//           >
//             <ShieldCheck className="text-orange-500" size={40} />

//             <h3 className="text-2xl font-bold mt-6">
//               Safe & Secure
//             </h3>

//             <p className="text-gray-400 mt-4 leading-7">
//               Every vehicle is regularly serviced and
//               inspected to ensure your safety.
//             </p>

//           </motion.div>

//           <motion.div
//             whileHover={{ y: -8 }}
//             className="bg-[#111111] border border-white/10 rounded-3xl p-8"
//           >
//             <Clock3 className="text-orange-500" size={40} />

//             <h3 className="text-2xl font-bold mt-6">
//               24/7 Support
//             </h3>

//             <p className="text-gray-400 mt-4 leading-7">
//               Our team is available around the clock to
//               assist you before, during and after your trip.
//             </p>

//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// }


import { CarFront, ShieldCheck, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-[#0b0b0b]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            ABOUT CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            About ZibaGo
          </span>

          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-black mt-4"
          >
            Car Rental in{" "}
            <span className="text-orange-500">
              Odisha & Bhubaneswar
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl leading-8 text-lg">
            ZibaGo provides convenient and reliable car rental services
            in Bhubaneswar and across Odisha. Whether you need a car for
            local travel, a business trip, a wedding, airport travel or
            a weekend getaway, we help you find a comfortable vehicle
            for your journey.
          </p>

          <p className="text-gray-400 mt-5 max-w-3xl leading-8 text-lg">
            Our focus is on a simple booking experience, well-maintained
            vehicles, transparent pricing and dependable customer support,
            making it easier to rent a car in Bhubaneswar for your travel
            needs.
          </p>
        </motion.div>

        {/* =========================
            BENEFIT CARDS
        ========================== */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Premium Cars */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8"
          >
            <CarFront
              className="text-orange-500"
              size={40}
              aria-hidden="true"
            />

            <h3 className="text-2xl font-bold mt-6">
              Quality Cars
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Explore comfortable and well-maintained vehicles suitable
              for different travel requirements in Bhubaneswar and
              across Odisha.
            </p>
          </motion.div>

          {/* Safety */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8"
          >
            <ShieldCheck
              className="text-orange-500"
              size={40}
              aria-hidden="true"
            />

            <h3 className="text-2xl font-bold mt-6">
              Safe & Reliable
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              We focus on vehicle maintenance and safety checks so you
              can enjoy a comfortable and dependable car rental
              experience.
            </p>
          </motion.div>

          {/* Support */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8"
          >
            <Clock3
              className="text-orange-500"
              size={40}
              aria-hidden="true"
            />

            <h3 className="text-2xl font-bold mt-6">
              Customer Support
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Our team is available to assist you with your rental
              requirements and help make your travel experience
              convenient.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}