import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "inicio",    label: "Inicio" },
  { id: "nosotros",  label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "por-que",   label: "Por qué" },
  { id: "socios",    label: "Socios" },
  { id: "contacto",  label: "Contacto" },
];

const SectionDotNav = () => {
  const [activeId, setActiveId] = useState("inicio");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-50% 0px -50% 0px" },
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* Outer shell: full-height fixed column, hidden on mobile */
    <div
      className="hidden lg:block"
      style={{
        position: "fixed",
        top: 0,
        right: 28,
        bottom: 0,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          alignItems: "flex-end",
          pointerEvents: "auto",
        }}
      >
        {SECTIONS.map((section, i) => {
          const isActive = activeId === section.id;
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={section.id}
              style={{ position: "relative", display: "flex", alignItems: "center" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip — slides in from right */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "calc(100% + 12px)",
                  whiteSpace: "nowrap",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#F7B017",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateX(0)" : "translateX(5px)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {section.label}
              </span>

              {/* Hit area wrapper — larger target than the 2px line */}
              <button
                aria-label={`Ir a ${section.label}`}
                onClick={() => scrollTo(section.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 18,
                  height: 44,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {/* Visual line */}
                <span
                  style={{
                    display: "block",
                    width: 2,
                    height: isActive ? 36 : isHovered ? 26 : 20,
                    backgroundColor: isActive
                      ? "#F7B017"
                      : isHovered
                        ? "rgba(247,176,23,0.55)"
                        : "rgba(247,176,23,0.3)",
                    borderRadius: 1,
                    transition: "height 0.3s ease, background-color 0.3s ease",
                  }}
                />
              </button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SectionDotNav;
