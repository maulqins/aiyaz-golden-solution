import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/logo AIYAZ.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Logo FULL */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={heroBg}
          alt="AIYAZ Logo Background"
          className="w-[90%] max-w-[1100px] h-auto object-contain opacity-40"
        />
      </div>

      {/* Soft overlay biar text tetap kebaca */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase rounded-full border border-accent/30 text-accent bg-accent/5">
            improvisasi hospitality tanpa batas
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6"
        >
          Perfecting Hospitality Through
          <br />
          <span className="text-gradient-purple">The Eyes</span>{" "}
          <span className="text-white">Of </span>
          <span className="text-accent">Your Guests</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Kami adalah mitra transformasi hospitality berbasis insight dan
          pengalaman tamu nyata.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all"
          >
            Lihat Layanan
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-lg font-medium border border-accent/50 text-accent hover:bg-accent/10 transition-all"
          >
            Hubungi Kami
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;