import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award } from "lucide-react";

const values = [
  { 
    icon: Target, 
    title: "Misi Kami", 
    desc: [
      "Memberikan pelayanan berkualitas tinggi yang mengutamakan integritas dan profesionalisme.",
      "Meningkatkan standar hospitality secara berkelanjutan melalui perbaikan kinerja yang terukur.",
      "Mengevaluasi layanan hospitality secara objektif melalui perspektif tamu nyata."
    ]
  },
  { 
    icon: Eye, 
    title: "Visi Kami", 
    desc: [
      "Menjadi perusahaan terpercaya yang mentransformasikan pengalaman tamu menjadi standar layanan yang terukur dan unggul."
    ]
  },
  { 
    icon: Award, 
    title: "Nilai Kami", 
    desc: [
      "Integritas, inovasi, kolaborasi dan komitmen menjadi fondasi dalam setiap proyek yang kami jalankan dan membangun hubungan jangka panjang dengan setiap client."
    ]
  },
];

const stats = [
  { value: "0", label: "Proyek Selesai" },
  { value: "0", label: "Klien Aktif" },
  { value: "5", label: "tahun pengalaman" },
  { value: "2", label: "Tim Profesional" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Tentang Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Siapa <span className="text-gradient-purple">Kami</span>?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            AIYAZ adalah perusahaan riset yang berdedikasi untuk menghadirkan
            transformasi pelayanan bagi bisnis di seluruh Indonesia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 hover-glow transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>

              <h3 className="text-xl font-heading font-semibold mb-4">
                {item.title}
              </h3>

              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                {item.desc.map((text, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-center glass-card py-8 px-4"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;