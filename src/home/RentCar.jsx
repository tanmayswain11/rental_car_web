import { motion } from "framer-motion";
import { Fuel, Gauge, Users, Snowflake } from "lucide-react";
import { useNavigate } from "react-router-dom";

import cars from "../data/cars";


export default function RentCar() {
  const navigate = useNavigate();
  return (
    <section id="cars" className="bg-[#0b0b0b] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Our Available Cars for Now
        </motion.h2>

        <p className="text-gray-400 text-center mt-4 mb-16">
          Premium vehicles for every journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              whileHover={{ y: -10 }}
              className="bg-[#151515] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{car.name}</h3>

                <h2 className="text-yellow-400 text-3xl font-bold mt-3">
                  ₹{car.minprice.toLocaleString()} - ₹
                  {car.maxprice.toLocaleString()}
                  <span className="text-lg text-gray-300"> / Day</span>
                </h2>

                <div className="grid grid-cols-2 gap-4 mt-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Fuel size={18} />
                    {car.fuel}
                  </div>

                  <div className="flex items-center gap-2">
                    <Gauge size={18} />
                    {car.transmission}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    {car.seats} Seats
                  </div>

                  <div className="flex items-center gap-2">
                    <Snowflake size={18} />
                    AC
                  </div>
                </div>

                <p className="text-gray-400 mt-5">Mileage : {car.mileage}</p>

                <button
                  onClick={() =>
                    navigate("/rent", {
                      state: car,
                    })
                  }
                  className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl"
                >
                  Rent This Car
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
