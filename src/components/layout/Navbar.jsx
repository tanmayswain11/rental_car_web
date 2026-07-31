// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../../assets/images/zibago.jpeg";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     {
//       name: "About ZibaGo",
//       href: "#about",
//     },
//     {
//       name: "Why ZibaGo",
//       href: "#why",
//     },
//     {
//       name: "Rent Car",
//       href: "#cars",
//     },
//     {
//       name: "Contact",
//       href: "#contact",
//     },

//     //  {
//     //   name: "Book Now",
//     //   href: "#cars",
//     // },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="flex justify-between items-center h-20">

//           {/* Logo */}

//           <div className="flex items-center gap-3">

//             <img
//               src={logo}
//               alt="ZibaGo"
//               className="w-12 h-12 rounded-xl"
//             />

//             <h1 className="text-3xl font-black tracking-wide">
//               Ziba<span className="text-orange-500">Go</span>
//             </h1>

//           </div>

//           {/* Desktop Menu */}

//           <nav className="hidden lg:flex gap-10">

//             {links.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-300 hover:text-orange-500 duration-300"
//               >
//                 {item.name}
//               </a>
//             ))}

//           </nav>

//           {/* Button */}

//           <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 duration-300 px-6 py-3 rounded-full font-semibold">
//             Book Now
//           </button>

//           {/* Mobile */}

//           <button
//             className="lg:hidden"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={30} /> : <Menu size={30} />}
//           </button>

//         </div>

//       </div>

//       {/* Mobile Menu */}

//       {open && (
//         <div className="lg:hidden bg-[#111] border-t border-neutral-800">

//           <div className="flex flex-col p-6 gap-6">

//             {links.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="text-lg"
//               >
//                 {item.name}
//               </a>
//             ))}

//             <button  className="bg-orange-500 py-3 rounded-full font-semibold">
//               Book Now
//             </button>

//           </div>

//         </div>
//       )}
//     </header>
//   );
// }

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/zibago.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleBookNow = () => {
    // If already on home page
    if (location.pathname === "/") {
      document.getElementById("cars")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    // Navigate home then scroll
    navigate("/");

    setTimeout(() => {
      document.getElementById("cars")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  const links = [
    {
      name: "About ZibaGo",
      href: "#about",
    },
    {
      name: "Why ZibaGo",
      href: "#why",
    },
    {
      name: "Rent Car",
      href: "#cars",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="ZibaGo"
              className="w-12 h-12 rounded-xl"
            />

            <h1 className="text-3xl font-black tracking-wide">
              Ziba<span className="text-orange-500">Go</span>
            </h1>

          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex gap-10">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-500 duration-300"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Desktop Button */}

          <button
            onClick={handleBookNow}
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 duration-300 px-6 py-3 rounded-full font-semibold"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-[#111] border-t border-neutral-800">

          <div className="flex flex-col p-6 gap-6">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                handleBookNow();
              }}
              className="bg-orange-500 py-3 rounded-full font-semibold"
            >
              Book Now
            </button>

          </div>

        </div>
      )}
    </header>
  );
}