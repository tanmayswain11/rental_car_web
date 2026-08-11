import { Link } from "react-router-dom";
import { CheckCircle2, Phone, ArrowRight, Home, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Success() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center px-4 sm:px-6">

      {/* ========================================= */}
      {/* BACKGROUND */}
      {/* ========================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Orange Glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -top-40
            -left-40
            w-[400px]
            h-[400px]
            rounded-full
            bg-orange-500/10
            blur-[130px]
          "
        />

        {/* Green Glow */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -bottom-40
            -right-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-green-500/10
            blur-[140px]
          "
        />

        {/* Center Glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[350px]
            h-[350px]
            rounded-full
            bg-green-400/10
            blur-[120px]
          "
        />

      </div>


      {/* ========================================= */}
      {/* SUCCESS CARD */}
      {/* ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          w-full
          max-w-xl
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-2xl
          shadow-2xl
          p-6
          sm:p-10
          md:p-12
          text-center
        "
      >

        {/* ========================================= */}
        {/* TOP BRAND */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            flex
            items-center
            justify-center
            gap-2
            mb-8
          "
        >

          <span className="text-2xl sm:text-3xl font-black">
            Ziba
            <span className="text-orange-500">
              Go
            </span>
          </span>

        </motion.div>


        {/* ========================================= */}
        {/* SUCCESS ICON */}
        {/* ========================================= */}

        <motion.div
          initial={{
            scale: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: "spring",
            stiffness: 180,
          }}
          className="
            relative
            mx-auto
            w-24
            h-24
            sm:w-28
            sm:h-28
            flex
            items-center
            justify-center
            rounded-full
            bg-green-500/10
            border
            border-green-400/30
          "
        >

          {/* Outer Ring */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-green-400/40
            "
          />

          <CheckCircle2
            size={58}
            className="text-green-400 sm:w-[65px] sm:h-[65px]"
            strokeWidth={1.8}
          />

        </motion.div>


        {/* ========================================= */}
        {/* HEADING */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
        >

          <div className="
            inline-flex
            items-center
            gap-2
            mt-8
            px-4
            py-2
            rounded-full
            bg-green-500/10
            border
            border-green-500/20
            text-green-400
            text-xs
            sm:text-sm
            font-semibold
          ">

            <Sparkles size={15} />

            Booking Request Received

          </div>


          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            mt-5
          ">

            Booking Request
            <span className="
              block
              bg-gradient-to-r
              from-green-400
              via-emerald-400
              to-green-500
              bg-clip-text
              text-transparent
            ">

              Sent Successfully!

            </span>

          </h1>


          <p className="
            text-gray-400
            mt-5
            text-sm
            sm:text-base
            leading-7
            max-w-md
            mx-auto
          ">

            Thank you for choosing

            <span className="text-orange-400 font-semibold">
              {" "}ZibaGo.
            </span>

            {" "}Your booking request has been received successfully.

          </p>

        </motion.div>


        {/* ========================================= */}
        {/* INFORMATION BOX */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="
            mt-8
            rounded-2xl
            border
            border-white/10
            bg-black/30
            p-5
            sm:p-6
            text-left
          "
        >

          <div className="flex items-start gap-4">

            <div className="
              w-11
              h-11
              shrink-0
              rounded-xl
              bg-orange-500/10
              border
              border-orange-500/20
              flex
              items-center
              justify-center
            ">

              <Phone
                size={20}
                className="text-orange-400"
              />

            </div>


            <div>

              <h3 className="
                text-white
                font-bold
                text-base
                sm:text-lg
              ">

                What happens next?

              </h3>

              <p className="
                text-gray-400
                text-sm
                leading-6
                mt-1
              ">

                The vehicle owner will review your request and
                contact you shortly to confirm availability and
                discuss the payment process.

              </p>

            </div>

          </div>

        </motion.div>


        {/* ========================================= */}
        {/* ACTION BUTTONS */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.75,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
          "
        >

          {/* Direct Contact */}

          <a
            href="tel:+917377747575"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              bg-gradient-to-r
              from-orange-500
              to-yellow-500
              hover:from-orange-400
              hover:to-yellow-400
              text-black
              font-bold
              py-3.5
              px-6
              rounded-xl
              transition-all
              duration-300
              active:scale-[0.98]
            "
          >

            <Phone size={19} />

            Contact Owner

          </a>


          {/* Home */}

          <Link
            to="/"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              bg-white/5
              border
              border-white/10
              hover:border-orange-500/50
              hover:bg-orange-500/10
              text-white
              font-semibold
              py-3.5
              px-6
              rounded-xl
              transition-all
              duration-300
              active:scale-[0.98]
            "
          >

            <Home size={18} />

            Back To Home

          </Link>

        </motion.div>


        {/* ========================================= */}
        {/* FOOTER MESSAGE */}
        {/* ========================================= */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            text-gray-600
            text-xs
            mt-8
          "
        >

          Thank you for trusting ZibaGo 🚗

        </motion.p>

      </motion.div>

    </main>
  );
}