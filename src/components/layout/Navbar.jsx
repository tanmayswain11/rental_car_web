import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/zibago.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
      name: "Rent Cars",
      path: "/rent-cars",
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

          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={logo}
              alt="ZibaGo"
              className="w-12 h-12 rounded-xl"
            />

            <h1 className="text-3xl font-black tracking-wide text-white">
              Ziba<span className="text-orange-500">Go</span>
            </h1>
          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) =>
              item.path ? (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="text-gray-300 hover:text-orange-500 transition"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-500 transition"
                >
                  {item.name}
                </a>
              )
            )}

          </nav>

          {/* Desktop Button */}

          <button
            onClick={() => navigate("/rent-cars")}
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold text-white"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-[#111] border-t border-neutral-800">

          <div className="flex flex-col gap-6 p-6">

            {links.map((item) =>
              item.path ? (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className="text-left text-lg text-white hover:text-orange-500"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white hover:text-orange-500"
                >
                  {item.name}
                </a>
              )
            )}

            <button
              onClick={() => {
                navigate("/rent-cars");
                setOpen(false);
              }}
              className="bg-orange-500 hover:bg-orange-600 transition py-3 rounded-full font-semibold text-white"
            >
              Book Now
            </button>

          </div>

        </div>

      )}

    </header>
  );
}

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/zibago.jpeg";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();

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
//       name: "Rent Cars",
//       path: "/rent-cars",
//     },
//     {
//       name: "Contact",
//       href: "#contact",
//     },
//   ];

//   const handleNavigation = (item) => {
//     setOpen(false);

//     if (item.path) {
//       navigate(item.path);
//       return;
//     }

//     if (window.location.pathname !== "/") {
//       navigate("/");

//       setTimeout(() => {
//         document
//           .getElementById(item.href.replace("#", ""))
//           ?.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//       }, 300);

//       return;
//     }

//     document
//       .getElementById(item.href.replace("#", ""))
//       ?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//   };

//   const handleBookNow = () => {
//     setOpen(false);
//     navigate("/rent-cars");
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         <div className="flex justify-between items-center h-20">

//           {/* Logo */}

//           <button
//             type="button"
//             onClick={() => {
//               setOpen(false);
//               navigate("/");
//             }}
//             className="flex items-center gap-3 cursor-pointer"
//           >

//             <img
//               src={logo}
//               alt="ZibaGo"
//               className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover"
//             />

//             <h1 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
//               Ziba
//               <span className="text-orange-500">
//                 Go
//               </span>
//             </h1>

//           </button>


//           {/* Desktop Menu */}

//           <nav className="hidden lg:flex items-center gap-8 xl:gap-10">

//             {links.map((item) => (
//               <button
//                 key={item.name}
//                 type="button"
//                 onClick={() => handleNavigation(item)}
//                 className="text-gray-300 hover:text-orange-500 transition duration-300 font-medium"
//               >
//                 {item.name}
//               </button>
//             ))}

//           </nav>


//           {/* Desktop Button */}

//           <button
//             type="button"
//             onClick={handleBookNow}
//             className="hidden lg:block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold text-white"
//           >
//             Book Now
//           </button>


//           {/* Mobile Menu Button */}

//           <button
//             type="button"
//             aria-label="Open menu"
//             onClick={() => setOpen(!open)}
//             className="lg:hidden text-white w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5"
//           >
//             {open ? (
//               <X size={30} />
//             ) : (
//               <Menu size={30} />
//             )}
//           </button>

//         </div>

//       </div>


//       {/* Mobile Menu */}

//       {open && (
//         <div className="lg:hidden bg-[#111] border-t border-neutral-800">

//           <div className="flex flex-col gap-2 p-5">

//             {links.map((item) => (
//               <button
//                 key={item.name}
//                 type="button"
//                 onClick={() => handleNavigation(item)}
//                 className="w-full text-left px-4 py-3 text-lg text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-xl transition duration-300"
//               >
//                 {item.name}
//               </button>
//             ))}


//             {/* Mobile Book Now */}

//             <button
//               type="button"
//               onClick={handleBookNow}
//               className="mt-3 bg-orange-500 hover:bg-orange-600 transition py-3.5 rounded-full font-semibold text-white"
//             >
//               Book Now
//             </button>

//           </div>

//         </div>
//       )}

//     </header>
//   );
// }