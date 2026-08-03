import { Mail, MailIcon, Phone,  Globe,  } from "lucide-react";
import logo from "../../assets/images/zibago.jpeg";
// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   Phone,
//   Globe,
// } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="ZibaGo"
                className="w-12 h-12 rounded-xl"
              />

              <h2 className="text-3xl font-black">
                Ziba
                <span className="text-orange-500">
                  Go
                </span>
              </h2>

            </div>

            <p className="text-gray-400 mt-6 leading-7">
              Luxury car rental service offering premium
              vehicles with comfort, safety and affordable
              pricing.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500">
                  About
                </a>
              </li>

              <li>
                <a href="#why" className="text-gray-400 hover:text-orange-500">
                  Why ZibaGo
                </a>
              </li>

              <li>
                <a href="#rent" className="text-gray-400 hover:text-orange-500">
                  Rent Car
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone className="text-orange-500" />

                <span className="text-gray-400">
                  +91 7377747575
                </span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-orange-500" />

                <span className="text-gray-400">
                  zibago.drive@gmail.com
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center hover:bg-orange-500 duration-300"
              >
                <Globe/>
              </a>

              {/* <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center hover:bg-orange-500 duration-300"
              >
                <Instagram/>
              </a> */}

              {/* <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center hover:bg-orange-500 duration-300"
              >
                <Linkedin/>
              </a> */}

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center hover:bg-orange-500 duration-300"
              >
                <MailIcon/>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center hover:bg-orange-500 duration-300"
              >
                <Phone />
              </a>


            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} ZibaGo.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}