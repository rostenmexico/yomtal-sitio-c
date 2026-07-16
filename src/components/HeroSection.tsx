import { useState } from "react";
import { motion } from "framer-motion";
import SectionGate from "@/components/SectionGate";

const HeroSection = () => {
  const headline = "Protegemos la infraestructura que sostiene tu operación";
  const words = headline.split(" ");
  const [spotlightVisible, setSpotlightVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--sp-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--sp-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="inicio"
      className="relative z-10 min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#080a10" }}
    >
      {/* ── Right: hero image — absolutely covers right 58% of viewport ── */}
      <motion.div
        id="hero-radar-anchor"
        className="hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "58%",
          zIndex: 0,
          overflow: "hidden",
          cursor: "crosshair",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setSpotlightVisible(true)}
        onMouseLeave={() => setSpotlightVisible(false)}
      >
        {/* Base image */}
        <img
          src="/hero-shield.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center right",
          }}
        />

        {/* Living shadow — amber drift */}
        <div className="hero-shadow-amber" aria-hidden="true" />

        {/* Living shadow — cyan drift */}
        <div className="hero-shadow-cyan" aria-hidden="true" />

        {/* Spotlight — follows cursor */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle 320px at var(--sp-x, 50%) var(--sp-y, 50%), rgba(247,176,23,0.20), transparent 70%)",
            opacity: spotlightVisible ? 1 : 0,
            transition: "opacity 0.35s ease",
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
        />

        {/* Left edge blend — dissolves image into dark background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #080a10 0%, #080a10 6%, rgba(8,10,16,0.85) 18%, rgba(8,10,16,0.4) 32%, transparent 52%)",
            pointerEvents: "none",
          }}
        />

        {/* Top edge blend */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "28%",
            background: "linear-gradient(to bottom, #080a10 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom edge blend */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "22%",
            background: "linear-gradient(to top, #080a10 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </motion.div>

      {/* ── Left: text content — sits above image in z-order ── */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center">
          <div className="flex-1 max-w-[520px] pt-20 lg:pt-0">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center mb-6"
              style={{
                borderLeft: "2px solid #F7B017",
                paddingLeft: "10px",
                paddingTop: "3px",
                paddingBottom: "3px",
                backgroundColor: "transparent",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F7B017",
                }}
              >
                Protegiendo Estrategias
              </span>
            </motion.div>

            {/* Headline: Barlow Condensed 700 — word-by-word animation */}
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                lineHeight: 1.0,
                color: "#f0f0f0",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Body paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7"
              style={{ fontSize: "18px", color: "#a8acb8", lineHeight: 1.85, maxWidth: "440px" }}
            >
              En YOMTAL diseñamos e integramos soluciones de seguridad, arquitectura de redes que ayudan a las organizaciones a reducir riesgos, fortalecer su resiliencia y mantener la disponibilidad de sus servicios críticos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#contacto" className="sharp-btn-primary">
                Solicitar asesoría
                <svg
                  style={{ width: "15px", height: "15px", transition: "transform 0.2s" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#servicios" className="sharp-btn-ghost">
                Conocer servicios →
              </a>
            </motion.div>

            {/* Divider + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="mt-10"
            >
              <hr
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  borderTopWidth: "1px",
                  borderStyle: "solid",
                }}
              />
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.50)",
                  marginTop: "10px",
                  textTransform: "uppercase",
                }}
              >
                // Guadalajara · México · Est. 2012
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* HUD bottom nav — absolute so it doesn't interfere with the flex centering layout */}
      <div className="next-section-wrap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        <SectionGate refId="001" label="Nosotros" targetId="nosotros" />
      </div>
    </section>
  );
};

export default HeroSection;
