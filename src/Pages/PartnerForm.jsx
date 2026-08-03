// import { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function PartnerForm() {

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     ownerName: "",
//     phone: "",
//     email: "",
//     address: "",
//     carBrand: "",
//     carModel: "",
//     year: "",
//     fuel: "",
//     transmission: "",
//     registrationNumber: "",
//     expectedPrice: "",
//     insurance: "",
//     rcAvailable: "",
//     message: "",
//   });

//   function handleChange(e) {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function handleSubmit(e) {

//     e.preventDefault();

//     try {

//     console.log(form)

//       const response = await axios.post(
//         "http://localhost:5000/api/partner",
//         form
//       );

//       if (response.data.success) {
//         navigate("/success");
//       }

//     } catch (err) {

//       alert("Unable to submit request.");

//     }

//   }

//   return (

//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black py-20 px-6">

//       <motion.form

//         initial={{ opacity:0,y:40 }}

//         animate={{ opacity:1,y:0 }}

//         className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10"

//         onSubmit={handleSubmit}

//       >

//         <h1 className="text-4xl text-center font-bold text-yellow-400 mb-10">

//           Become a ZibaGo Partner

//         </h1>

//         <div className="grid md:grid-cols-2 gap-6">

//           <input
//             type="text"
//             name="ownerName"
//             placeholder="Owner Name"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <input
//             type="text"
//             name="address"
//             placeholder="City / Address"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <input
//             type="text"
//             name="carBrand"
//             placeholder="Car Brand"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <input
//             type="text"
//             name="carModel"
//             placeholder="Car Model"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <input
//             type="number"
//             name="year"
//             placeholder="Manufacturing Year"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <select
//             name="fuel"
//             onChange={handleChange}
//             required
//             className="input"
//           >

//             <option value="">Fuel Type</option>
//             <option>Petrol</option>
//             <option>Diesel</option>
//             <option>CNG</option>
//             <option>Electric</option>

//           </select>

//           <select
//             name="transmission"
//             onChange={handleChange}
//             required
//             className="input"
//           >

//             <option value="">Transmission</option>
//             <option>Manual</option>
//             <option>Automatic</option>

//           </select>

//           <input
//             type="text"
//             name="registrationNumber"
//             placeholder="Vehicle Registration Number"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <input
//             type="number"
//             name="expectedPrice"
//             placeholder="Expected Rent Per Day"
//             onChange={handleChange}
//             required
//             className="input"
//           />

//           <select
//             name="insurance"
//             onChange={handleChange}
//             required
//             className="input"
//           >

//             <option value="">Insurance Available?</option>
//             <option>Yes</option>
//             <option>No</option>

//           </select>

//           <select
//             name="rcAvailable"
//             onChange={handleChange}
//             required
//             className="input"
//           >

//             <option value="">RC Available?</option>
//             <option>Yes</option>
//             <option>No</option>

//           </select>

//         </div>

//         <textarea

//           rows="5"

//           name="message"

//           placeholder="Additional Information"

//           onChange={handleChange}

//           className="input mt-6"

//         />

//         <button

//           className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl mt-8 font-bold text-lg"

//         >

//           Submit Partnership Request

//         </button>

//       </motion.form>

//     </div>

//   );

// }

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import partnerVideo from "../assets/videos/partner-bg.mp4";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PartnerForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    carBrand: "",
    carModel: "",
    manufacturingDate: null,
    fuel: "",
    transmission: "",
    registrationNumber: "",
    expectedPrice: "",
    insurance: "",
    rcAvailable: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/partner",
        form,
      );

      if (response.data.success) {
        navigate("/success");
      }
    } catch (err) {
      alert("Unable to submit request.");
    }
  }

  const inputClass =
    "w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition";

  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-center px-6 py-20">
      {/* Background Video */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={partnerVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Orange Glow */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-[150px]"></div>

      {/* Form */}

      <motion.form
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_60px_rgba(255,123,0,.25)] p-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-400 mb-3">
          Become a ZibaGo Partner
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Partner with ZibaGo and earn by renting your vehicle to verified
          customers.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <input
            type="text"
            name="address"
            placeholder="City / Address"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <input
            type="text"
            name="carBrand"
            placeholder="Car Brand"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <input
            type="text"
            name="carModel"
            placeholder="Car Model"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <div className="w-full">
            <DatePicker
              selected={form.manufacturingDate}
              onChange={(date) =>
                setForm({
                  ...form,
                  manufacturingDate: date,
                })
              }
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              placeholderText="Select Manufacturing Date"
              className={inputClass}
              showPopperArrow={false}
              required
            />
          </div>

          <select
            name="fuel"
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
            <option>Electric</option>
          </select>

          <select
            name="transmission"
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Transmission</option>
            <option>Manual</option>
            <option>Automatic</option>
          </select>

          <input
            type="text"
            name="registrationNumber"
            placeholder="Vehicle Registration Number"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <input
            type="number"
            name="expectedPrice"
            placeholder="Expected Rent Per Day (₹)"
            onChange={handleChange}
            required
            className={inputClass}
          />

          <select
            name="insurance"
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Insurance Available?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="rcAvailable"
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">RC Available?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <textarea
          rows="5"
          name="message"
          placeholder="Additional Information (Optional)"
          onChange={handleChange}
          className={`${inputClass} mt-6 resize-none`}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-lg shadow-lg transition"
        >
          Submit Partnership Request
        </motion.button>
      </motion.form>
    </div>
  );
}
