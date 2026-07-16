import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Socios", href: "#socios" },
  { label: "Contacto", href: "#contacto" },
];

const NAV_LINK_STYLE: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "14px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  transition: "color 0.2s ease",
};

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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
        className="fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300"
        style={{
          height: "80px",
          backgroundColor: scrolled ? "rgba(8,10,16,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(247,176,23,0.08)" : "none",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img
              src="/logo-yomtal.png"
              alt="YOMTAL"
              className="w-auto object-contain"
              style={{ height: "68px", maxWidth: "240px" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    ...NAV_LINK_STYLE,
                    color: isActive ? "#F7B017" : "#c0c4d0",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "#f0f0f0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isActive ? "#F7B017" : "#c0c4d0";
                  }}
                >
                  {/* Active indicator: small orange square */}
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#F7B017",
                      marginRight: "8px",
                      flexShrink: 0,
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.2s ease",
                    }}
                    aria-hidden="true"
                  />
                  {item.label}
                </a>
              );
            })}

            {/* CTA: sharp ghost-orange button */}
            <a
              href="#contacto"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#F7B017",
                border: "1px solid #F7B017",
                borderRadius: "2px",
                padding: "9px 18px",
                backgroundColor: "transparent",
                transition: "background-color 0.2s ease, color 0.2s ease",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#F7B017";
                (e.currentTarget as HTMLElement).style.color = "#080a10";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#F7B017";
              }}
            >
              Solicitar asesoría
            </a>
          </nav>

          {/* Mobile hamburger */}
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
              style={{ backgroundColor: "#ffffff", opacity: mobileOpen ? 0 : 1 }}
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

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{ backgroundColor: "rgba(8,10,16,0.97)" }}
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
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "28px",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    color: activeSection === item.href.slice(1) ? "#F7B017" : "#f0f0f0",
                    textDecoration: "none",
                  }}
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
                className="sharp-btn-primary mt-4"
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
