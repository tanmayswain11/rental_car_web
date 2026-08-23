// import {
//   BadgeCheck,
//   IndianRupee,
//   Headphones,
//   MapPinned,
//   UserCheck,
//   Handshake,
// } from "lucide-react";

// import { motion } from "framer-motion";

// const features = [
//   {
//     icon: BadgeCheck,
//     title: "Verified Vehicles",
//     desc: "Every car is professionally inspected before every rental.",
//   },
//   {
//     icon: IndianRupee,
//     title: "Affordable Pricing",
//     desc: "Transparent pricing with no hidden charges.",
//   },
//   {
//     icon: Headphones,
//     title: "24/7 Customer Support",
//     desc: "We're always available whenever you need assistance.",
//   },
//   {
//     icon: MapPinned,
//     title: "Flexible Pickup",
//     desc: "Convenient pickup and drop-off locations.",
//   },
//   {
//   icon: UserCheck,
//   title: "Experienced Drivers",
//   desc: "Travel with confidence through our licensed, experienced, and professional drivers. Available for local rides, airport transfers, outstation journeys, business travel, and special occasions to ensure a safe, comfortable, and hassle-free experience.",
// },
// {
//   icon: Handshake,
//   title: "Become a ZibaGo Partner",
//   desc: "Own a car? Partner with ZibaGo and earn passive income by renting your vehicle to verified customers. We handle bookings, customer support, and help maximize your earnings.",
// },
// ];

// export default function WhyZibago() {
//   return (
//     <section
//       id="why"
//       className="py-24 bg-black"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >

//           <span className="text-orange-500 uppercase tracking-widest font-semibold">
//             Why Choose Us
//           </span>

//           <h2 className="text-5xl font-black mt-4">
//             Why
//             <span className="text-orange-500">
//               {" "}ZibaGo?
//             </span>
//           </h2>

//           <p className="text-gray-400 max-w-2xl mt-6 text-lg">
//             We combine premium vehicles, exceptional service,
//             and affordable pricing to deliver a luxury rental
//             experience you can trust.
//           </p>

//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.02,
//                 }}
//                 className="rounded-3xl border border-white/10 bg-[#111111] p-8"
//               >
//                 <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">

//                   <Icon
//                     size={32}
//                     className="text-orange-500"
//                   />

//                 </div>

//                 <h3 className="text-2xl font-bold mt-8">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-400 mt-4 leading-7">
//                   {item.desc}
//                 </p>

//               </motion.div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }



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
    desc: "Our available vehicles are inspected and maintained to provide a comfortable and reliable rental experience.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Get clear rental pricing with no unnecessary hidden charges, making it easier to plan your travel budget.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Our support team is available to help with your rental requirements before, during, and after your journey.",
  },
  {
    icon: MapPinned,
    title: "Flexible Pickup",
    desc: "Choose convenient pickup and drop-off options based on your travel requirements and available locations.",
  },
  {
    icon: UserCheck,
    title: "Experienced Drivers",
    desc: "For customers who choose a driver-assisted rental, experienced and professional drivers can help make local, airport, outstation, business, and special-event travel more comfortable.",
  },
  {
    icon: Handshake,
    title: "Become a ZibaGo Partner",
    desc: "Own a car? Partner with ZibaGo and list your vehicle for rental. We can help with bookings, customer communication, and rental operations.",
  },
];

export default function WhyZibago() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            SECTION INTRO
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2
            id="why-heading"
            className="text-4xl md:text-5xl font-black mt-4"
          >
            Why Choose{" "}
            <span className="text-orange-500">
              ZibaGo?
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mt-6 text-lg leading-8">
            ZibaGo aims to make car rental in Bhubaneswar simple,
            convenient, and reliable. From vehicle options and
            transparent pricing to customer support and flexible
            pickup arrangements, we focus on making every rental
            experience easier for our customers.
          </p>
        </motion.div>

        {/* =========================
            FEATURES
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/10 bg-[#111111] p-8"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <Icon
                    size={32}
                    className="text-orange-500"
                    aria-hidden="true"
                  />
                </div>

                {/* Heading */}
                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}