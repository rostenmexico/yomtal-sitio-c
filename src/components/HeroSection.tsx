import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const headline = "Protegemos la infraestructura que sostiene tu operación";
  const words = headline.split(" ");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="inicio" className="relative z-10 min-h-screen flex items-center bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between gap-8 lg:gap-16">

          {/* ── Left: text content ── */}
          <div className="flex-1 max-w-xl pt-20 lg:pt-0">

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
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F7B017",
                }}
              >
                Protegiendo Estrategias
              </span>
            </motion.div>

            {/* Headline: Barlow Condensed 700 */}
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
              style={{ fontSize: "18px", color: "#707480", lineHeight: 1.85, maxWidth: "440px" }}
            >
              En YOMTAL diseñamos e integramos soluciones de ciberseguridad, arquitectura de redes e infraestructura
              tecnológica que ayudan a las organizaciones a reducir riesgos, fortalecer su resiliencia y mantener la
              disponibilidad de sus servicios críticos.
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
              <hr style={{ borderColor: "rgba(255,255,255,0.08)", borderTopWidth: "1px", borderStyle: "solid" }} />
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.22)",
                  marginTop: "10px",
                  textTransform: "uppercase",
                }}
              >
                // Guadalajara · México · Est. 2012
              </p>
            </motion.div>
          </div>

          {/* ── Right: Logo with radar-synced rings + hover ping effect ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
            style={{ width: "420px", height: "420px", position: "relative", cursor: "crosshair" }}
            aria-hidden="true"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Static concentric rings — brighten on hover */}
            {[
              { size: 300, alpha: 0.13 },
              { size: 360, alpha: 0.08 },
              { size: 416, alpha: 0.05 },
            ].map(({ size, alpha }) => (
              <div
                key={size}
                style={{
                  position: "absolute",
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius: "50%",
                  border: `1px solid rgba(247,176,23,${isHovered ? Math.min(alpha * 2.2, 0.35) : alpha})`,
                  boxShadow: isHovered ? `0 0 10px rgba(247,176,23,${alpha * 0.6})` : "none",
                  transition: "border-color 0.5s ease, box-shadow 0.5s ease",
                  flexShrink: 0,
                  pointerEvents: "none",
                }}
              />
            ))}

            {/*
              Rotating sweep arc — conic-gradient masked to ring band,
              duration 34.9s matches NetworkCanvas scanAngle += 0.003 rad/frame @ 60fps
            */}
            <div
              style={{
                position: "absolute",
                width: "416px",
                height: "416px",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, rgba(247,176,23,0.28) 0deg, rgba(247,176,23,0.08) 12deg, transparent 18deg, transparent 360deg)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, transparent 148px, rgba(0,0,0,1) 150px, rgba(0,0,0,1) 206px, transparent 208px)",
                maskImage:
                  "radial-gradient(circle at center, transparent 148px, rgba(0,0,0,1) 150px, rgba(0,0,0,1) 206px, transparent 208px)",
                animation: "logo-radar-spin 34.9s linear infinite",
                pointerEvents: "none",
              }}
            />

            {/* Ping rings — sonar emanation on hover */}
            {[0, 0.55, 1.1].map((delay, i) => (
              <motion.div
                key={`ping-${i}`}
                style={{
                  position: "absolute",
                  width: "416px",
                  height: "416px",
                  borderRadius: "50%",
                  border: "1px solid rgba(247,176,23,0.55)",
                  pointerEvents: "none",
                }}
                animate={
                  isHovered
                    ? { scale: [0.05, 1.05], opacity: [0.7, 0] }
                    : { scale: 0.05, opacity: 0 }
                }
                transition={
                  isHovered
                    ? { duration: 1.6, repeat: Infinity, delay, ease: "easeOut", repeatDelay: 0 }
                    : { duration: 0.3 }
                }
              />
            ))}

            {/* Ambient amber halo behind logo */}
            <div
              style={{
                position: "absolute",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: isHovered
                  ? "radial-gradient(circle at center, rgba(247,176,23,0.16) 0%, rgba(247,176,23,0.07) 40%, transparent 68%)"
                  : "radial-gradient(circle at center, rgba(247,176,23,0.10) 0%, rgba(247,176,23,0.04) 40%, transparent 68%)",
                transition: "background 0.5s ease",
                pointerEvents: "none",
              }}
            />

            {/* YOMTAL logo — fade + scale entrance, screen blend removes white bg */}
            <motion.img
              src="/logo-yomtal-main.png"
              alt="YOMTAL"
              style={{
                width: "280px",
                height: "auto",
                mixBlendMode: "screen",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1.4, ease: "easeOut" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
