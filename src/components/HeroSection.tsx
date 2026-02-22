import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f12]"
    >

      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-700/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-300px] right-[-200px] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[160px]" />
      </div>


      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      <div className="relative container mx-auto px-6 text-center z-10">
        

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-1.5 mb-8 text-xs tracking-widest uppercase rounded-full border border-yellow-500/30 text-yellow-400 bg-yellow-500/5">
            Guest Experience Intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white"
        >
          Elevating Hospitality
          <br />
          Through{" "}
          <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Measurable Guest Intelligence
          </span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We partner with hospitality leaders to uncover service gaps, measure
          operational performance, and transform real guest experiences into
          strategic, data-driven insights.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 rounded-lg font-medium bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:opacity-90 transition-all shadow-lg shadow-yellow-500/20"
          >
            Request Private Consultation
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 rounded-lg font-medium border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition-all"
          >
            Explore Our Approach
          </button>
        </motion.div>
      </div>


      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="text-gray-500" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;