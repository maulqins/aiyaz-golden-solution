import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black" />
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Small Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 mb-8 text-xs tracking-widest uppercase rounded-full border border-yellow-500/40 text-yellow-400 bg-yellow-500/5">
            Guest Experience Intelligence
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8"
        >
          Perfecting Hospitality
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Through the Eyes of Your Guests
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Kami adalah mitra transformasi hospitality berbasis insight dan pengalaman tamu nyata.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:opacity-90 transition-all shadow-lg shadow-yellow-500/20"
          >
            Konsultasi Sekarang
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg font-semibold border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-all"
          >
            Pelajari Pendekatan Kami
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-gray-500" size={22} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;