import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
} from "lucide-react";

export default function MapSection() {
  return (
    <section
      id="location"
      className="py-24 bg-[#0b0b0b] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Find Us
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            Visit Our Office
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Visit <span className="text-yellow-400 font-semibold">
              ZibaGo - Self Drive Rental Services
            </span>{" "}
            in Kalinga Nagar, Bhubaneswar and explore our premium collection
            of self-drive rental cars.
          </p>
        </motion.div>

        {/* Google Map */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500"
        >
          <iframe
            title="ZibaGo Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4512.7083741936785!2d85.7634023!3d20.270385299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a99bdf6754b5%3A0x7b072cf33326dfb3!2sZibaGo%20-%20Self%20Drive%20Rental%20Services!5e1!3m2!1sen!2sin!4v1785494954822!5m2!1sen!2sin"
            width="100%"
            height="520"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          ></iframe>
        </motion.div>

        {/* Information Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Address */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#141414] rounded-3xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
              <MapPin className="text-black" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Address
            </h3>

            <p className="text-gray-400 leading-7">
              F-21, BDA Market Complex,
              <br />
              K-7, Kalinga Nagar,
              <br />
              Bhubaneswar,
              <br />
              Odisha - 751029
            </p>
          </motion.div>

          {/* Contact */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#141414] rounded-3xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
              <Phone className="text-black" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Contact
            </h3>

            <p className="text-gray-400 leading-8">
              +91 7377747575
              <br />
              zibago.drive@gmail.com
            </p>
          </motion.div>

          {/* Working Hours */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#141414] rounded-3xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
              <Clock className="text-black" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Working Hours
            </h3>

            <p className="text-gray-400 leading-8">
              Monday - Sunday
              <br />
              8:00 AM - 10:00 PM
            </p>
          </motion.div>

        </div>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://maps.google.com/?q=ZibaGo+Self+Drive+Rental+Services+Bhubaneswar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition duration-300"
          >
            <Navigation size={20} />
            Get Directions
          </a>
        </motion.div>

      </div>
    </section>
  );
}