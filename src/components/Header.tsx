import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Socios", href: "#socios" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(7,11,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(247,176,23,0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <img
              src="/logo-yomtal.png"
              alt="YOMTAL"
              className="w-auto object-contain"
              style={{
                height: "64px",
                maxWidth: "220px",
                mixBlendMode: "screen",
                borderRadius: "0",
              }}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{
                  color: activeSection === item.href.slice(1) ? "#F7B017" : "#cccccc",
                }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] bg-yomtal-orange transition-all duration-200"
                  style={{ width: activeSection === item.href.slice(1) ? "100%" : "0%" }}
                />
                <span className="absolute -bottom-1 left-0 h-[2px] bg-yomtal-orange transition-all duration-200 w-0 group-hover:w-full" />
              </a>
            ))}
            <a href="#contacto" className="btn-primary px-5 py-2.5 text-sm font-semibold inline-block">
              Solicitar asesoría
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span
              className="w-6 h-[2px] transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
                transform: mobileOpen ? "rotate(45deg) translateY(5px)" : "none",
              }}
            />
            <span
              className="w-6 h-[2px] transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-[2px] transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
                transform: mobileOpen ? "rotate(-45deg) translateY(-5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{ backgroundColor: "rgba(7,11,20,0.97)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              <img src="/logo-yomtal.png" alt="YOMTAL" className="h-10 w-auto object-contain mb-4" />
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold"
                  style={{ color: "#ffffff" }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="btn-primary px-8 py-3 text-base font-semibold mt-4"
              >
                Solicitar asesoría
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
