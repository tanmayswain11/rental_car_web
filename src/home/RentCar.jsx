import { motion } from "framer-motion";
import { Fuel, Gauge, Users, ArrowRight } from "lucide-react";
import car from "../assets/images/car1.jpg";

export default function RentCar() {
  return (
    <section id="rent" className="py-24 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Featured Vehicle
          </span>

          <h2 className="text-5xl font-black mt-4">
            Rent Your
            <span className="text-orange-500"> Dream Car</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            Enjoy luxury, comfort, and performance with our premium vehicle.
            Easy booking, affordable pricing, and professional service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">

          {/* Car Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={car}
              alt="Luxury Car"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold">
              Mercedes-Benz C-Class
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              Experience the perfect combination of luxury, comfort,
              and performance. Ideal for business trips, weddings,
              vacations, and city travel.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div className="bg-[#111] rounded-2xl p-6 text-center">
                <Fuel className="mx-auto text-orange-500" size={30} />
                <p className="mt-3 text-gray-300">Petrol</p>
              </div>

              <div className="bg-[#111] rounded-2xl p-6 text-center">
                <Gauge className="mx-auto text-orange-500" size={30} />
                <p className="mt-3 text-gray-300">Automatic</p>
              </div>

              <div className="bg-[#111] rounded-2xl p-6 text-center">
                <Users className="mx-auto text-orange-500" size={30} />
                <p className="mt-3 text-gray-300">5 Seats</p>
              </div>

            </div>

            <div className="flex flex-wrap justify-between items-center mt-12">

              <div>
                <p className="text-gray-400">Starting From</p>
                <h2 className="text-5xl font-black text-orange-500">
                  ₹4,999
                  <span className="text-xl text-white"> / Day</span>
                </h2>
              </div>

              <button className="mt-6 lg:mt-0 flex items-center gap-3 bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-full font-semibold">

                Rent Now

                <ArrowRight size={20} />

              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}