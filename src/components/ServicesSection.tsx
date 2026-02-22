import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ghost } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Layanan Utama
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Mystery <span className="text-gradient-gold">Guest</span> Evaluation
          </h2>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Evaluasi profesional berbasis pengalaman tamu nyata untuk
            mengidentifikasi blind spot operasional dan meningkatkan standar
            hospitality secara terukur.
          </p>
        </motion.div>

        {/* Single Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card p-12 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Icon */}
            <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Ghost className="text-accent" size={48} />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Insight Hospitality Melalui Perspektif Tamu
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Tim kami melakukan kunjungan sebagai tamu anonim untuk
                mengevaluasi kualitas layanan, standar operasional, interaksi
                staf, kebersihan, hingga detail pengalaman pelanggan.
                Setiap temuan disusun dalam laporan komprehensif berbasis data
                dan observasi objektif.
              </p>

              <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                <li>✔ Evaluasi layanan & SOP</li>
                <li>✔ Analisis pengalaman pelanggan end-to-end</li>
                <li>✔ Identifikasi area peningkatan</li>
                <li>✔ Rekomendasi strategis berbasis fakta lapangan</li>
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3.5 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                Diskusikan Kebutuhan Anda
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;