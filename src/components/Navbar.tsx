import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Beranda", "Tentang", "Layanan", "Kontak", "Obrolan"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const sectionMap: Record<string, string> = {
    Beranda: "hero",
    Tentang: "about",
    Layanan: "services",
    Kontak: "contact",
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80; 
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  const handleClick = (item: string) => {
    if (item === "Obrolan") {
      navigate("/chat");
      setIsOpen(false);
      return;
    }

    const targetId = sectionMap[item];

    setIsOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(targetId);
      });
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick("Beranda")}
          className="text-2xl font-heading font-bold text-gradient-purple"
        >
          AIYAZ<span className="text-accent">.</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/30 glass-card overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="block w-full text-left px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;