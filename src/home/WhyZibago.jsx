import {
  BadgeCheck,
  IndianRupee,
  Headphones,
  MapPinned,
  UserCheck,
  Handshake,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Vehicles",
    desc: "Every car is professionally inspected before every rental.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "We're always available whenever you need assistance.",
  },
  {
    icon: MapPinned,
    title: "Flexible Pickup",
    desc: "Convenient pickup and drop-off locations.",
  },
  {
  icon: UserCheck,
  title: "Experienced Drivers",
  desc: "Travel with confidence through our licensed, experienced, and professional drivers. Available for local rides, airport transfers, outstation journeys, business travel, and special occasions to ensure a safe, comfortable, and hassle-free experience.",
},
{
  icon: Handshake,
  title: "Become a ZibaGo Partner",
  desc: "Own a car? Partner with ZibaGo and earn passive income by renting your vehicle to verified customers. We handle bookings, customer support, and help maximize your earnings.",
},
];

export default function WhyZibago() {
  return (
    <section
      id="why"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-black mt-4">
            Why
            <span className="text-orange-500">
              {" "}ZibaGo?
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mt-6 text-lg">
            We combine premium vehicles, exceptional service,
            and affordable pricing to deliver a luxury rental
            experience you can trust.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/10 bg-[#111111] p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">

                  <Icon
                    size={32}
                    className="text-orange-500"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}