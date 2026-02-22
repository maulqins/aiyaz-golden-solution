import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = form;

    const { error } = await supabase
      .from("contact")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    if (error) {
      alert("Gagal kirim pesan ❌");
      console.error(error);
      return;
    }

    alert("Pesan berhasil dikirim ✅");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    window.location.href = `/chat?email=${email}`;
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Kontak
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Hubungi <span className="text-gradient-purple">Kami</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Siap untuk memulai transformasi pelayanan bisnis Anda?
              Hubungi tim kami untuk reservasi serta dapatkan
              penawaran terbaik.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, text: "aiyazgolds@gmail.com" },
                { icon: Phone, text: "+62 857 1872 3025" },
                { icon: MapPin, text: "Tangerang, Indonesia" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 space-y-5"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama lengkap Anda"
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@contoh.com"
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50"
              required
            />

            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ceritakan kebutuhan Anda..."
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 resize-none"
              required
            />

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg font-medium bg-accent text-accent-foreground"
            >
              Kirim Pesan
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
