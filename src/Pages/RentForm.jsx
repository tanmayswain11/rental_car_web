// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function RentForm() {

//   const { state } = useLocation();

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     location: "",
//     duration: "",
//     licence: "",
//   });

//   function handleChange(e) {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleSubmit(e) {

//     e.preventDefault();

//     navigate("/success", {
//       state: {
//         car: state,
//         customer: form,
//       },
//     });

//   }

//   return (
//     <div className="min-h-screen bg-black text-white flex justify-center items-center p-10">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#111] p-8 rounded-2xl w-full max-w-xl space-y-5"
//       >

//         <h2 className="text-3xl font-bold text-yellow-400">

//           Rent {state.name}

//         </h2>

//         <p>Price : ₹{state.price} / Day</p>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-800"
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Mobile Number"
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-800"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-800"
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-800"
//           required
//         />

//         <input
//           type="text"
//           name="duration"
//           placeholder="How many Hours / Days?"
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-800"
//           required
//         />

//         <select
//           name="licence"
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-800"
//           required
//         >

//           <option value="">Driving Licence?</option>

//           <option>Yes</option>

//           <option>No</option>

//         </select>

//         <button
//           className="bg-yellow-500 text-black w-full py-3 rounded-xl font-bold"
//         >

//           Submit Request

//         </button>

//       </form>

//     </div>
//   );
// }

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
// import { CarFront } from "lucide-react";
import API from "../api/bookingApi";

export default function RentForm() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    duration: "",
    licence: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   navigate("/success", {
  //     state: {
  //       car: state,
  //       customer: form,
  //     },
  //   });
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const bookingData = {
        car: state.name,
        minPrice: state.minprice,
        maxPrice: state.maxprice,

        name: form.name,
        phone: form.phone,
        email: form.email,
        location: form.location,
        duration: form.duration,
        licence: form.licence,
      };

      const response = await API.post("/booking", bookingData);

      if (response.data.success) {
        navigate("/success", {
          state: {
            car: state,
            customer: form,
          },
        });
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Booking Failed. Please try again.",
      );
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black flex justify-center items-center p-6">
      {/* Floating Background Circle 1 */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-80 h-80 rounded-full bg-yellow-500/20 blur-3xl"
      />

      {/* Floating Background Circle 2 */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-orange-500/10 blur-3xl"
      />

      {/* Floating Background Circle 3 */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <motion.form
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8"
      >
        <motion.h2
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="text-3xl font-bold text-center text-yellow-400"
        >
          Rent {state.name}
        </motion.h2>

        <p className="text-center text-gray-300 mt-3 mb-8">
          Price :
          <span className="text-yellow-400 font-semibold">
            {" "}
            ₹{state.minprice?.toLocaleString()} - ₹
            {state.maxprice?.toLocaleString()} / Day
          </span>
        </p>

        <div className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 focus:border-yellow-400 outline-none text-white"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 focus:border-yellow-400 outline-none text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 focus:border-yellow-400 outline-none text-white"
          />

          <input
            type="text"
            name="location"
            placeholder="Pickup Location"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 focus:border-yellow-400 outline-none text-white"
          />

          <input
            type="text"
            name="duration"
            placeholder="Rent Duration (Hours / Days)"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 focus:border-yellow-400 outline-none text-white"
          />

          <select
            name="licence"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 focus:border-yellow-400 outline-none text-white"
          >
            <option value="">Do you have a valid Driving Licence?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="w-full py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg transition"
          >
            Submit Booking Request
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
