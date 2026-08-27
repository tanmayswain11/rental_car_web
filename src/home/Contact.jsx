import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="text-center">
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Contact ZibaGo
          </span>

          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-black mt-4"
          >
            Car Rental in{" "}
            <span className="text-orange-500">
              Bhubaneswar
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            Looking to rent a car in Bhubaneswar or need help
            choosing a vehicle? Contact ZibaGo for rental enquiries,
            booking assistance, driver services and other car rental
            requirements.
          </p>
        </div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* =========================
              CONTACT FORM
          ========================== */}
          <form
            className="bg-[#111111] rounded-3xl p-8 md:p-10 border border-white/10"
            aria-label="Contact ZibaGo"
          >
            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <label htmlFor="contact-name" className="sr-only">
              Full Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="name"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 mb-5 outline-none border border-transparent focus:border-orange-500"
            />

            <label htmlFor="contact-email" className="sr-only">
              Email Address
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 mb-5 outline-none border border-transparent focus:border-orange-500"
            />

            <label htmlFor="contact-phone" className="sr-only">
              Phone Number
            </label>

            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              autoComplete="tel"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 mb-5 outline-none border border-transparent focus:border-orange-500"
            />

            <label htmlFor="contact-message" className="sr-only">
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 outline-none border border-transparent focus:border-orange-500"
            />

            <button
              type="submit"
              className="mt-8 w-full bg-orange-500 hover:bg-orange-600 duration-300 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* =========================
              BUSINESS INFORMATION
          ========================== */}
          <div className="space-y-8">

            {/* Phone */}
            <div className="flex gap-5 items-start">
              <div
                className="bg-orange-500/20 p-4 rounded-2xl"
                aria-hidden="true"
              >
                <Phone className="text-orange-500" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Phone
                </h3>

                <a
                  href="tel:+917377747575"
                  className="text-gray-400 mt-2 inline-block hover:text-orange-400 transition"
                >
                  +91 8117812565
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 items-start">
              <div
                className="bg-orange-500/20 p-4 rounded-2xl"
                aria-hidden="true"
              >
                <Mail className="text-orange-500" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Email
                </h3>

                <a
                  href="mailto:zibago.drive@gmail.com"
                  className="text-gray-400 mt-2 inline-block hover:text-orange-400 transition"
                >
                  zibago.drive@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-5 items-start">
              <div
                className="bg-orange-500/20 p-4 rounded-2xl"
                aria-hidden="true"
              >
                <MapPin className="text-orange-500" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  ZibaGo Location
                </h3>

                <address className="not-italic text-gray-400 mt-2 leading-7">
                  BDA Market Complex, F-21, K-7,
                  <br />
                  Kalinganagar, Bhubaneswar,
                  <br />
                  Odisha - 751029, India
                </address>
              </div>
            </div>

            {/* =========================
                BUSINESS HOURS
            ========================== */}
            <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 mt-8">
              <h3 className="text-3xl font-bold">
                Business Hours
              </h3>

              <div className="mt-6 space-y-3 text-gray-400">
                <p>
                  <span className="text-gray-200">
                    Monday - Friday:
                  </span>{" "}
                  9:00 AM - 10:00 PM
                </p>

                <p>
                  <span className="text-gray-200">
                    Saturday:
                  </span>{" "}
                  9:00 AM - 8:00 PM
                </p>

                <p>
                  <span className="text-gray-200">
                    Sunday:
                  </span>{" "}
                  9:00 AM - 8:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}