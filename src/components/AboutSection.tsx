import { motion } from "framer-motion";

const benefits = [
  "Reducimos riesgos operativos y de ciberseguridad.",
  "Garantizamos la continuidad de servicios y operaciones críticas.",
  "Optimizamos costos de infraestructura, soporte y seguridad.",
  "Alineamos las soluciones tecnológicas a los objetivos del negocio.",
  "Acompañamos a nuestros clientes desde la evaluación inicial hasta la operación continua.",
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
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "rgba(247,176,23,0.6)",
          textTransform: "uppercase",
        }}
      >
        // estado operativo
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "9px",
          color: "rgba(255,255,255,0.18)",
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
              fontSize: "9px",
              color: "rgba(247,176,23,0.32)",
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
              fontSize: "12px",
              color: "#8a9099",
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
                fontSize: "9px",
                letterSpacing: "0.12em",
                color: "rgba(247,176,23,0.65)",
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
            fontSize: "9px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Operación ininterrumpida
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "9px",
            color: "rgba(247,176,23,0.45)",
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
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "rgba(247,176,23,0.55)",
            textTransform: "uppercase",
          }}
        >
          14 años · operación continua
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "rgba(247,176,23,0.38)",
            letterSpacing: "0.05em",
          }}
        >
          100%
        </span>
      </div>
    </div>
  </motion.div>
);

const AboutSection = () => (
  <section
    id="nosotros"
    className="relative z-10 bg-[#13151f]/90 backdrop-blur-sm section-padding"
  >
    <div className="container mx-auto px-6">
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
          <p className="mt-6" style={{ color: "#606474", lineHeight: 1.85 }}>
            En YOMTAL ayudamos a las organizaciones a reducir riesgos y garantizar la
            continuidad operativa mediante infraestructura tecnológica y ciberseguridad
            especializada alineadas a sus objetivos de negocio. Fundada en 2012, YOMTAL
            está conformada por especialistas con más de dos décadas de experiencia en
            ciberseguridad, infraestructura de redes y protección de entornos corporativos
            críticos.
          </p>
          <div className="mt-8 space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#F7B017",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    flexShrink: 0,
                    userSelect: "none",
                  }}
                >
                  —
                </span>
                <span style={{ color: "#d4d4d8", fontSize: "15px", lineHeight: 1.6 }}>
                  {b}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: NOC Status Panel */}
        <NocStatusPanel />
      </div>
    </div>
  </section>
);

export default AboutSection;
