import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/images/zibago.jpeg";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white border-t border-white/10"
      aria-label="ZibaGo website footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* =========================
              COMPANY
          ========================== */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="ZibaGo home"
            >
              <img
                src={logo}
                alt="ZibaGo car rental logo"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                className="w-12 h-12 rounded-xl object-cover"
              />

              <span className="text-3xl font-black">
                Ziba
                <span className="text-orange-500">Go</span>
              </span>
            </Link>

            <p className="text-gray-400 mt-6 leading-7 max-w-sm">
              ZibaGo provides convenient car rental services in
              Bhubaneswar and Odisha, with a focus on comfortable
              vehicles, transparent pricing and reliable customer
              support.
            </p>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Quick Links
            </h2>

            <nav aria-label="Footer navigation">
              <ul className="space-y-4">

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <a
                    href="/#about"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    About ZibaGo
                  </a>
                </li>

                <li>
                  <a
                    href="/#why"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Why ZibaGo
                  </a>
                </li>

                <li>
                  <Link
                    to="/rent-cars"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Rent a Car in Bhubaneswar
                  </Link>
                </li>

                <li>
                  <a
                    href="/#services"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Our Services
                  </a>
                </li>

                <li>
                  <a
                    href="/#contact"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Contact ZibaGo
                  </a>
                </li>

                <li>
                  <Link
                    to="/partner"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    Become a Partner
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Contact ZibaGo
            </h2>

            <div className="space-y-5">

              {/* Phone */}
              <a
                href="tel:+917377747575"
                className="flex items-start gap-3 group"
                aria-label="Call ZibaGo at 7377747575"
              >
                <Phone
                  size={20}
                  className="text-orange-500 group-hover:text-orange-400 mt-1 shrink-0"
                  aria-hidden="true"
                />

                <span className="text-gray-400 group-hover:text-orange-500 transition duration-300">
                  +91 7377747575
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:zibago.drive@gmail.com"
                className="flex items-start gap-3 group"
                aria-label="Email ZibaGo"
              >
                <Mail
                  size={20}
                  className="text-orange-500 group-hover:text-orange-400 mt-1 shrink-0"
                  aria-hidden="true"
                />

                <span className="text-gray-400 group-hover:text-orange-500 transition duration-300 break-all">
                  zibago.drive@gmail.com
                </span>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=BDA+Market+Complex+F-21+K-7+Kalinganagar+Bhubaneswar+Odisha+751029"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
                aria-label="View ZibaGo location on Google Maps"
              >
                <MapPin
                  size={20}
                  className="text-orange-500 group-hover:text-orange-400 mt-1 shrink-0"
                  aria-hidden="true"
                />

                <address className="not-italic text-gray-400 group-hover:text-orange-500 transition duration-300 leading-6">
                  BDA Market Complex, F-21, K-7,
                  <br />
                  Kalinganagar, Bhubaneswar,
                  <br />
                  Odisha - 751029, India
                </address>
              </a>

            </div>
          </div>

          {/* =========================
              SOCIAL
          ========================== */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Follow ZibaGo
            </h2>

            <div className="flex gap-4 flex-wrap">

              {/* Email */}
              <a
                href="mailto:zibago.drive@gmail.com"
                aria-label="Email ZibaGo"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <Mail size={20} aria-hidden="true" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zibago_drive/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ZibaGo on Instagram"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <FaInstagram
                  size={21}
                  aria-hidden="true"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DB8iyj1ma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ZibaGo on Facebook"
                className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <FaFacebookF
                  size={19}
                  aria-hidden="true"
                />
              </a>

            </div>

            {/* Location */}
            <div className="mt-8">
              <p className="text-gray-500 text-sm leading-6">
                Car rental services in{" "}
                <span className="text-gray-300">
                  Bhubaneswar, Odisha
                </span>
                .
              </p>
            </div>
          </div>

        </div>

        {/* =========================
            BOTTOM FOOTER
        ========================== */}
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

              <span
                className="text-gray-700"
                aria-hidden="true"
              >
                |
              </span>

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