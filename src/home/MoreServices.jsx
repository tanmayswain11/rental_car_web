import { motion } from "framer-motion";
import { UserRound, CarFront, Handshake, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MoreServices() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-black/60 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[6px] text-orange-500 font-semibold">
            More Services
          </span>

          <h2 className="text-5xl font-black mt-5">
            More Than Just Car Rentals
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            At ZibaGo, we're building a complete mobility platform. Whether you
            need a self-drive car, a professional driver, or want to partner
            with us, we've got exciting opportunities for you.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Driver Service */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-6">
              <UserRound className="text-black" size={30} />
            </div>

            <h3 className="text-2xl font-bold">Professional Drivers</h3>

            <p className="text-gray-400 mt-5 leading-8">
              Don't want to drive? We provide experienced, verified and
              courteous drivers for city rides, business trips, airport
              transfers and outstation travel.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Wedding */}

          <motion.div
            whileHover={{ y: -8 }}
            className="relative bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8"
          >
            <span className="absolute top-5 right-5 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold">
              Coming Soon
            </span>

            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
              <CarFront className="text-black" size={30} />
            </div>

            <h3 className="text-2xl font-bold">Wedding Car Rental</h3>

            <p className="text-gray-400 mt-5 leading-8">
              Make your wedding unforgettable with premium luxury vehicles.
              Beautifully maintained wedding cars will be available very soon.
            </p>

            <div className="flex items-center gap-2 mt-8 text-yellow-400 font-semibold">
              <Sparkles size={20} />
              Launching Soon
            </div>
          </motion.div>

          {/* Partner */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8"
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
              <Handshake className="text-black" size={30} />
            </div>

            <h3 className="text-2xl font-bold">Rent Your Car With Us</h3>

            <p className="text-gray-400 mt-5 leading-8">
              Own a car? Become a ZibaGo partner and earn income by listing your
              vehicle on our platform. We help you reach more customers while
              you keep control of your vehicle.
            </p>

            <button
              onClick={() => navigate("/partner")}
              className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold text-black"
            >
              Become a Partner
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
