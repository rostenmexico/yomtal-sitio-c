import { useState } from "react";
import { motion } from "framer-motion";
import SectionGate from "@/components/SectionGate";

const benefits = [
  "Reducir riesgos operativos y de ciberseguridad.",
  "Garantizar la continuidad de servicios y operaciones críticas.",
  "Optimizar costos de infraestructura, soporte y seguridad.",
  "Cumplir requerimientos regulatorios y mejores prácticas internacionales.",
  "Incrementar la productividad mediante tecnologías alineadas a los objetivos del negocio.",
  "Acceder a especialistas certificados sin incrementar la complejidad operativa interna.",
];

const statusRows = [
  { id: "SVC-01", label: "Gestión de riesgos" },
  { id: "SVC-02", label: "Continuidad operativa" },
  { id: "SVC-03", label: "Optimización de costos" },
  { id: "SVC-04", label: "Alineación tecnológica" },
  { id: "SVC-05", label: "Soporte ciclo completo" },
];

const NocStatusPanel = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    style={{
      backgroundColor: "#0c0f18",
      border: "1px solid rgba(247,176,23,0.12)",
      borderRadius: "2px",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: "440px",
      boxShadow: "0 0 48px rgba(247,176,23,0.04)",
    }}
  >
    {/* Scan line */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: "1px",
        background:
          "linear-gradient(90deg, transparent 0%, rgba(247,176,23,0.18) 40%, rgba(247,176,23,0.1) 65%, transparent 100%)",
        animation: "noc-scan 9s linear infinite",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />

    {/* Header bar */}
    <div
      style={{
        padding: "14px 20px",
        borderBottom: "1px solid rgba(247,176,23,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          letterSpacing: "0.15em",
          color: "rgba(247,176,23,0.85)",
          textTransform: "uppercase",
        }}
      >
        // estado operativo
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.08em",
        }}
      >
        GUADALAJARA · MX
      </span>
    </div>

    {/* Status rows */}
    <div style={{ flex: 1, padding: "6px 0" }}>
      {statusRows.map((row, i) => (
        <motion.div
          key={row.id}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.45 }}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            gap: "14px",
            borderBottom:
              i < statusRows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
          }}
        >
          {/* Service ID */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "rgba(247,176,23,0.60)",
              letterSpacing: "0.08em",
              flexShrink: 0,
              width: "46px",
            }}
          >
            {row.id}
          </span>

          {/* Label */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#b0b4c0",
              flex: 1,
              letterSpacing: "0.01em",
            }}
          >
            {row.label}
          </span>

          {/* Status indicator */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "7px", flexShrink: 0 }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#F7B017",
                animation: `noc-pulse 2.8s ease-in-out ${i * 0.5}s infinite`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "rgba(247,176,23,0.85)",
                textTransform: "uppercase",
              }}
            >
              ACTIVO
            </span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Footer — uptime bar */}
    <div
      style={{
        padding: "18px 20px 22px",
        borderTop: "1px solid rgba(247,176,23,0.08)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "rgba(255,255,255,0.50)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Operación ininterrumpida
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "rgba(247,176,23,0.70)",
            letterSpacing: "0.08em",
          }}
        >
          Est. 2012
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: 0,
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1.8, ease: "easeOut" }}
          style={{
            height: "100%",
            backgroundColor: "#F7B017",
            boxShadow: "0 0 8px rgba(247,176,23,0.35)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.12em",
            color: "rgba(247,176,23,0.75)",
            textTransform: "uppercase",
          }}
        >
          14 años · operación continua
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: "rgba(247,176,23,0.65)",
            letterSpacing: "0.05em",
          }}
        >
          100%
        </span>
      </div>
    </div>
  </motion.div>
);

const misionVisionPanels = [
  {
    label: "MISIÓN",
    text: "Crear soluciones de valor para nuestros clientes mediante la combinación de gente, procesos y herramientas de TI que fortalezcan la seguridad, continuidad operativa y logro de sus objetivos de negocio.",
    from: -40,
  },
  {
    label: "VISIÓN",
    text: "Ser un referente y consultor de confianza para nuestros clientes, constituyéndonos como un integrador especializado en soluciones de infraestructura tecnológica, ciberseguridad y continuidad operativa.",
    from: 40,
  },
];

const MisionVisionPanel = ({
  panel,
  index,
}: {
  panel: (typeof misionVisionPanels)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: panel.from }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-10 md:p-14"
      style={{
        borderLeft: index === 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
        borderTop: hovered ? "1px solid rgba(247,176,23,0.35)" : "1px solid transparent",
        backgroundColor: hovered ? "rgba(247,176,23,0.04)" : "transparent",
        transition: "background-color 0.35s ease, border-color 0.35s ease",
        cursor: "default",
      }}
    >
      {/* Comilla decorativa */}
      <span
        className="absolute top-6 left-8 text-[80px] font-bold leading-none select-none"
        style={{
          color: hovered ? "rgba(247,176,23,0.50)" : "rgba(247,176,23,0.15)",
          transition: "color 0.35s ease",
        }}
      >
        "
      </span>

      {/* Label MISIÓN / VISIÓN */}
      <span
        className="overline relative z-10"
        style={{
          display: "block",
          filter: hovered
            ? "drop-shadow(0 0 8px rgba(247,176,23,0.55))"
            : "none",
          transition: "filter 0.35s ease",
        }}
      >
        {panel.label}
      </span>

      {/* Texto del panel */}
      <motion.p
        className="mt-6 relative z-10"
        animate={{
          color: hovered ? "#f0f2f8" : "#a0a4b2",
          scale: hovered ? 1.025 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          fontSize: "1rem",
          lineHeight: 1.9,
          transformOrigin: "top left",
        }}
      >
        {panel.text}
      </motion.p>
    </motion.div>
  );
};

const BenefitItem = ({ text, delay }: { text: string; delay: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-start gap-3"
      style={{
        borderLeft: hovered ? "2px solid rgba(247,176,23,0.6)" : "2px solid transparent",
        backgroundColor: hovered ? "rgba(247,176,23,0.04)" : "transparent",
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "4px",
        paddingBottom: "4px",
        marginLeft: "-10px",
        borderRadius: "1px",
        transition: "border-color 0.25s ease, background-color 0.25s ease",
        cursor: "default",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: hovered ? "#ffffff" : "#F7B017",
          fontSize: "14px",
          lineHeight: 1.5,
          flexShrink: 0,
          userSelect: "none",
          transition: "color 0.25s ease",
        }}
      >
        {hovered ? "›" : "—"}
      </span>
      <span
        style={{
          color: hovered ? "#ffffff" : "#dcdde2",
          fontSize: "16px",
          lineHeight: 1.6,
          transition: "color 0.25s ease",
        }}
      >
        {text}
      </span>
    </motion.div>
  );
};

const AboutSection = () => (
  <section
    id="nosotros"
    className="relative z-10 section-padding"
    style={{
      // TODO: optimize — currently 2 MB JPEG renamed as .png, recommend converting to WebP (~200–400 KB)
      backgroundImage: "url('/2nd-Section.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark overlay — keeps text legible over the background image */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(19,21,31,0.58)",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: text content — copy and structure unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Quiénes somos</span>
          <h2
            className="mt-3 leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#f0f0f0",
            }}
          >
            Reducimos riesgos y fortalecemos la continuidad operativa de tu organización
          </h2>
          <p className="mt-6" style={{ color: "#a0a4b2", lineHeight: 1.85 }}>
            En YOMTAL ayudamos a las organizaciones a reducir riesgos y garantizar la continuidad operativa, mediante infraestructura tecnológica y ciberseguridad especializada alineadas a sus objetivos de negocio.
          </p>
          <p className="mt-4" style={{ color: "#a0a4b2", lineHeight: 1.85 }}>
            Fundada en 2012, YOMTAL conformada por especialistas con más de dos décadas de experiencia en ciberseguridad, infraestructura de redes y protección de entornos corporativos críticos. Esta trayectoria nos permite diseñar e implementar soluciones efectivas para entornos complejos, ayudando a nuestros clientes a reducir riesgos, fortalecer la continuidad operativa y tomar decisiones tecnológicas con mayor confianza.
          </p>
          <div className="mt-8 space-y-4">
            {benefits.map((b, i) => (
              <BenefitItem key={i} text={b} delay={0.3 + i * 0.15} />
            ))}
          </div>
        </motion.div>

        {/* Right: NOC Status Panel */}
        <NocStatusPanel />
      </div>

      {/* Misión y Visión — subsección integrada */}
      <hr
        aria-hidden="true"
        style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "64px 0 56px" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {misionVisionPanels.map((panel, i) => (
          <MisionVisionPanel key={i} panel={panel} index={i} />
        ))}
      </div>
    </div>
    </motion.div>
    <div className="next-section-wrap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
      <SectionGate refId="002" label="Servicios" targetId="servicios" />
    </div>
  </section>
);

export default AboutSection;
