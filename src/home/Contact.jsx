import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-black mt-4">
            Let's Talk
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have questions or want to reserve your dream car?
            We'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}

          <form className="bg-[#111111] rounded-3xl p-10 border border-white/10">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 mb-5 outline-none border border-transparent focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 mb-5 outline-none border border-transparent focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 mb-5 outline-none border border-transparent focus:border-orange-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#1b1b1b] rounded-xl px-5 py-4 outline-none border border-transparent focus:border-orange-500"
            ></textarea>

            <button
              type="submit"
              className="mt-8 w-full bg-orange-500 hover:bg-orange-600 duration-300 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </form>

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="flex gap-5 items-start">

              <div className="bg-orange-500/20 p-4 rounded-2xl">
                <Phone className="text-orange-500" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Phone
                </h3>
                <p className="text-gray-400 mt-2">
                  +91 7377747575
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-start">

              <div className="bg-orange-500/20 p-4 rounded-2xl">
                <Mail className="text-orange-500" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Email
                </h3>
                <p className="text-gray-400 mt-2">
                  zibago.drive@gmail.com
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-start">

              <div className="bg-orange-500/20 p-4 rounded-2xl">
                <MapPin className="text-orange-500" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Address
                </h3>

                <p className="text-gray-400 mt-2">
                  BDA Market Complex, F-21, K-7, Kalinganagar, Bhubaneswar, Odisha, 751029
                </p>

              </div>

            </div>

            <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 mt-8">

              <h3 className="text-3xl font-bold">
                Business Hours
              </h3>

              <div className="mt-6 space-y-3 text-gray-400">

                <p>Monday - Friday : 9:00 AM - 8:00 PM</p>

                <p>Saturday : 9:00 AM - 6:00 PM</p>

                <p>Sunday : Closed</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}