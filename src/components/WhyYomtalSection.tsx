import { useState } from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Experiencia comprobada",
    desc: "Más de una década acompañando proyectos de infraestructura tecnológica y ciberseguridad para entornos empresariales.",
  },
  {
    num: "02",
    title: "Especialistas certificados",
    desc: "Contamos con ingenieros certificados y especialistas con amplia experiencia en redes, seguridad e infraestructura crítica.",
  },
  {
    num: "03",
    title: "Cobertura regional",
    desc: "Brindamos soporte e implementación para operaciones en México, Estados Unidos y Latinoamérica bajo un solo punto de contacto.",
  },
  {
    num: "04",
    title: "Enfoque consultivo",
    desc: "Diseñamos soluciones alineadas a los objetivos del negocio, priorizando continuidad, reducción de riesgos y generación de valor.",
  },
  {
    num: "05",
    title: "Capacidad integral",
    desc: "Diseñamos, implementamos, administramos y soportamos soluciones tecnológicas de misión crítica durante todo su ciclo de vida.",
  },
  {
    num: "06",
    title: "Compromiso a largo plazo",
    desc: "Acompañamos la operación, mejora y evolución de las soluciones implementadas para fortalecer la continuidad operativa.",
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
        borderColor: "rgba(255,255,255,0.07)",
        backgroundColor: hovered ? "rgba(247,176,23,0.03)" : "transparent",
        transition: "background-color 0.2s ease",
        padding: "28px 0",
      }}
    >
      {/*
        Mobile:  2 cols [40px | flex col: title + desc]
        Desktop: 3 cols [56px | title | desc] via lg:contents on wrapper
      */}
      <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[56px_1fr_1.8fr] gap-x-6 lg:gap-x-10 items-start">

        {/* Column 1 — number */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: hovered ? "#f0f0f0" : "#F7B017",
            paddingTop: "2px",
            transition: "color 0.2s ease",
            display: "block",
          }}
        >
          {reason.num}
        </span>

        {/* Mobile wrapper: title + desc stacked. On lg becomes transparent (contents) */}
        <div className="lg:contents">

          {/* Column 2 — title */}
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              letterSpacing: "-0.005em",
              color: hovered ? "#F7B017" : "#f0f0f0",
              lineHeight: 1.2,
              display: "block",
              transition: "color 0.2s ease",
            }}
          >
            {reason.title}
          </span>

          {/* Description — mobile only (inside the 2-col wrapper) */}
          <p
            className="lg:hidden"
            style={{
              fontSize: "13.5px",
              color: "#606474",
              lineHeight: 1.7,
              margin: "10px 0 0",
            }}
          >
            {reason.desc}
          </p>
        </div>

        {/* Column 3 — description, desktop only */}
        <p
          className="hidden lg:block"
          style={{ fontSize: "13.5px", color: "#606474", lineHeight: 1.7, margin: 0 }}
        >
          {reason.desc}
        </p>
      </div>
    </motion.div>
  );
};

const WhyYomtalSection = () => (
  <section className="relative z-10 bg-[#13151f]/90 backdrop-blur-sm section-padding">
    <div className="container mx-auto px-6">
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
          style={{ color: "#606474", lineHeight: 1.85 }}
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
  </section>
);

export default WhyYomtalSection;
