import { Mail, MailIcon,Phone } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/images/zibago.jpeg";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ========================= */}
          {/* Company */}
          {/* ========================= */}

          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="ZibaGo"
                className="w-12 h-12 rounded-xl object-cover"
              />

              <h2 className="text-3xl font-black">
                Ziba
                <span className="text-orange-500">Go</span>
              </h2>
            </div>

            <p className="text-gray-400 mt-6 leading-7 max-w-sm">
              Luxury car rental service offering premium vehicles with comfort,
              safety and affordable pricing.
            </p>
          </div>

          {/* ========================= */}
          {/* Quick Links */}
          {/* ========================= */}

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#why"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Why ZibaGo
                </a>
              </li>

              <li>
                <a
                  href="/rent-cars"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Rent Car
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Contact
                </a>
              </li>

              {/* Privacy Policy */}

              <li>
                <a
                  href="/legal/privacypolicy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>

              {/* Terms & Conditions */}

              <li>
                <a
                  href="/legal/termsandconditions.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* ========================= */}
          {/* Contact */}
          {/* ========================= */}

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact</h3>

            <div className="space-y-5">
              {/* Phone */}

              <a
                href="tel:+917377747575"
                className="flex items-center gap-3 group"
              >
                <Phone
                  size={20}
                  className="text-orange-500 group-hover:text-orange-400"
                />

                <span className="text-gray-400 group-hover:text-orange-500 transition duration-300">
                  +91 7377747575
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:zibago.drive@gmail.com"
                className="flex items-center gap-3 group"
              >
                <Mail
                  size={20}
                  className="text-orange-500 group-hover:text-orange-400"
                />

                <span className="text-gray-400 group-hover:text-orange-500 transition duration-300 break-all">
                  zibago.drive@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* ========================= */}
          {/* Social */}
          {/* ========================= */}

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Follow Us</h3>

            <div className="flex gap-4 flex-wrap">
              {/* Website */}

              {/* <a
                href="/"
                aria-label="ZibaGo Website"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <Globe size={20} />
              </a> */}

              {/* Email */}

              <a
                href="mailto:zibago.drive@gmail.com"
                aria-label="Email ZibaGo"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <MailIcon size={20} />
              </a>

              {/* Phone */}

              {/* <a
                href="tel:+917377747575"
                aria-label="Call ZibaGo"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <Phone size={20} />
              </a> */}

              {/* Instagram */}

              <a
                href="https://www.instagram.com/zibago_drive?igsh=MTdrNnVxMTFyNHE2cA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZibaGo Instagram"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <FaInstagram size={21} />
              </a>

              {/* Facebook */}

              <a
                href="https://www.facebook.com/share/1DB8iyj1ma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZibaGo Facebook"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <FaFacebookF size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* Bottom Footer */}
        {/* ========================= */}

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ZibaGo. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <a
                href="/legal/privacypolicy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition duration-300"
              >
                Privacy Policy
              </a>

              <span className="text-gray-700">|</span>

              <a
                href="/legal/termsandconditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
