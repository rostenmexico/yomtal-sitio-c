import { useState } from "react";
import { motion } from "framer-motion";
import SectionGate from "@/components/SectionGate";

const reasons = [
  {
    num: "01",
    title: "Experiencia comprobada",
    desc: "Más de una década acompañando proyectos de infraestructura y ciberseguridad.",
  },
  {
    num: "02",
    title: "Especialistas certificados",
    desc: "Equipo de ingenieros certificados y especialistas con amplia experiencia en entornos empresariales.",
  },
  {
    num: "03",
    title: "Cobertura regional",
    desc: "Cobertura y soporte para operaciones en México, Estados Unidos y Latinoamérica.",
  },
  {
    num: "04",
    title: "Enfoque consultivo",
    desc: "Enfoque consultivo orientado a resultados de negocio.",
  },
  {
    num: "05",
    title: "Capacidad integral",
    desc: "Capacidad para diseñar, implementar, administrar y soportar soluciones tecnológicas de misión crítica.",
  },
  {
    num: "06",
    title: "Compromiso a largo plazo",
    desc: "Compromiso con la continuidad operativa y la generación de valor a largo plazo.",
  },
];

const WhyRow = ({ reason, delay }: { reason: (typeof reasons)[0]; delay: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-b"
      style={{
        borderColor: hovered ? "rgba(247,176,23,0.45)" : "rgba(255,255,255,0.07)",
        backgroundColor: hovered ? "rgba(247,176,23,0.03)" : "transparent",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
        padding: "28px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow sweep */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: hovered ? "340px" : "0px",
          background: "linear-gradient(to right, rgba(247,176,23,0.07) 0%, transparent 100%)",
          transition: "width 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/*
        Mobile:  2 cols [40px | flex col: title + desc]
        Desktop: 3 cols [56px | title | desc] via lg:contents on wrapper
      */}
      <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[56px_1fr_1.8fr] gap-x-6 lg:gap-x-10 items-start">

        {/* Column 1 — number */}
        <motion.span
          animate={{
            fontSize: hovered ? "18px" : "11px",
            color: hovered ? "#ffffff" : "#F7B017",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.2em",
            paddingTop: "2px",
            display: "block",
            textShadow: hovered ? "0 0 12px rgba(247,176,23,0.85)" : "none",
          }}
        >
          {reason.num}
        </motion.span>

        {/* Mobile wrapper: title + desc stacked. On lg becomes transparent (contents) */}
        <div className="lg:contents">

          {/* Column 2 — title */}
          <motion.span
            animate={{
              x: hovered ? 6 : 0,
              color: hovered ? "#ffffff" : "#f0f0f0",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              letterSpacing: "-0.005em",
              lineHeight: 1.2,
              display: "block",
            }}
          >
            {reason.title}
          </motion.span>

          {/* Description — mobile only (inside the 2-col wrapper) */}
          <motion.p
            className="lg:hidden"
            animate={{
              filter: hovered ? "blur(0px)" : "blur(3px)",
              opacity: hovered ? 1 : 0.35,
              color: hovered ? "#c8ccd8" : "#606474",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ fontSize: "13.5px", lineHeight: 1.7, margin: "10px 0 0" }}
          >
            {reason.desc}
          </motion.p>
        </div>

        {/* Column 3 — description, desktop only */}
        <motion.p
          className="hidden lg:block"
          animate={{
            filter: hovered ? "blur(0px)" : "blur(3px)",
            opacity: hovered ? 1 : 0.35,
            color: hovered ? "#c8ccd8" : "#606474",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ fontSize: "13.5px", lineHeight: 1.7, margin: 0 }}
        >
          {reason.desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

const WhyYomtalSection = () => (
  <section
    id="por-que"
    className="relative z-10 section-padding"
    style={{
      // TODO: optimize — currently 2.6 MB JPEG renamed as .png, recommend converting to WebP (~200–400 KB)
      backgroundImage: "url('/Section-3.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark overlay — maintains text legibility over the background image */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(19,21,31,0.72)",
        pointerEvents: "none",
      }}
    />
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
    <div className="container mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="overline">Por qué elegirnos</span>

        <h2
          className="mt-3"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.01em",
            color: "#f0f0f0",
          }}
        >
          ¿Por qué YOMTAL?
        </h2>

        <p
          className="mt-4 max-w-3xl text-sm md:text-base"
          style={{ color: "#8a9099", lineHeight: 1.85 }}
        >
          Combinamos experiencia, especialización técnica y enfoque consultivo para ayudar a las organizaciones a
          reducir riesgos, fortalecer su infraestructura y mantener la continuidad de sus operaciones críticas.
        </p>

        <div
          className="mt-5"
          style={{ width: "40px", height: "2px", backgroundColor: "#F7B017", borderRadius: 0 }}
        />
      </motion.div>

      {/* Editorial rows */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        {reasons.map((reason, i) => (
          <WhyRow key={reason.num} reason={reason} delay={i * 0.07} />
        ))}
      </div>
    </div>
    </motion.div>
    <div className="next-section-wrap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
      <SectionGate refId="004" label="Socios" targetId="socios" />
    </div>
  </section>
);

export default WhyYomtalSection;
