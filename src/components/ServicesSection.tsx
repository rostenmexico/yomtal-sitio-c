import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Seguridad de TI",
    command: "$ yomtal --scan perimeter",
    desc: "Protegemos la infraestructura tecnológica de tu empresa mediante soluciones avanzadas de ciberseguridad que previenen, detectan y responden a amenazas en tiempo real.",
    items: [
      "Firewall Next-Generation",
      "Prevención de Intrusiones IPS en tiempo real",
      "Protección avanzada de correo electrónico",
      "SIEM y correlación de eventos con IA",
      "Gestión continua de exposición a amenazas CTEM",
      "Validación continua de seguridad y prevención de fuga de datos",
    ],
  },
  {
    title: "Redes de Alto Rendimiento y Continuidad Operativa",
    command: "$ yomtal --design topology",
    desc: "Diseñamos e implementamos infraestructuras de red modernas, seguras y altamente disponibles que optimizan el rendimiento, la escalabilidad y la continuidad de los servicios críticos.",
    items: [
      "Arquitectura de redes empresariales",
      "SD-WAN y optimización WAN",
      "Switching empresarial de alta disponibilidad",
      "Balanceo de carga para aplicaciones y centros de datos",
      "Gestión centralizada de DNS, DHCP e IP",
      "Diseño de redes tolerantes a fallos",
    ],
  },
  {
    title: "Auditoría, Riesgo y Cumplimiento Normativo",
    command: "$ yomtal --audit compliance",
    desc: "Ayudamos a identificar riesgos, fortalecer controles de seguridad y cumplir regulaciones mediante auditorías, análisis de vulnerabilidades y estrategias alineadas al negocio.",
    items: [
      "Diagnóstico integral de seguridad",
      "Hackeo ético y pruebas de penetración",
      "Gestión de seguridad basada en ISO 27001",
      "Continuidad del negocio y recuperación ante desastres",
      "Protección de datos personales y privacidad",
      "Cumplimiento normativo y gestión de riesgos",
      "Capacitación y concientización en ciberseguridad",
    ],
  },
  {
    title: "Servicios Administrados de TI y Ciberseguridad",
    command: "$ yomtal --manage infrastructure",
    desc: "Maximizamos la disponibilidad, seguridad y rendimiento de tu infraestructura mediante servicios administrados, monitoreo continuo y soporte especializado.",
    items: [
      "Soporte administrado de infraestructura de redes y seguridad",
      "Servicios administrados de ciberseguridad MSSP",
      "Auditorías de infraestructura y seguridad",
      "Diseño e implementación de controles de TI",
      "Transferencia de conocimiento y capacitación",
      "Optimización de recursos para enfocarte en el crecimiento del negocio",
    ],
  },
  {
    title: "Soporte e Implementación Regional sin Fronteras",
    command: "$ yomtal --deploy regional",
    desc: "Brindamos soporte especializado e implementación de proyectos para infraestructura de redes y ciberseguridad en México, Estados Unidos y Latinoamérica.",
    items: [
      "Cobertura regional para México, Estados Unidos y LATAM",
      "Implementaciones y proyectos multipaís",
      "Soporte remoto y asistencia en sitio",
      "Atención técnica en español e inglés",
      "Equipo de ingenieros especializados",
      "Continuidad operativa durante todo el ciclo de vida de la solución",
    ],
  },
  {
    title: "Continuidad Operativa y Resiliencia Tecnológica",
    command: "$ yomtal --init resilience",
    desc: "Diseñamos estrategias para mantener servicios críticos disponibles, reducir interrupciones y fortalecer la capacidad de recuperación ante incidentes, fallas o desastres.",
    items: [
      "Estrategias de continuidad operativa",
      "Planes de recuperación ante desastres",
      "Reducción de interrupciones en servicios críticos",
      "Arquitecturas resilientes y tolerantes a fallos",
      "Evaluación de riesgos operativos",
      "Fortalecimiento de la disponibilidad tecnológica",
    ],
  },
];

const ServiceBlock = ({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const active = isOpen || hovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* ── Header row ── */}
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full text-left flex items-center gap-4 py-5"
        style={{
          borderLeft: active ? "2px solid #F7B017" : "2px solid transparent",
          paddingLeft: "18px",
          transition: "border-color 0.2s ease",
          background: "none",
          cursor: "pointer",
        }}
      >
        {/* Title */}
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            letterSpacing: "-0.005em",
            color: isOpen ? "#F7B017" : "#f0f0f0",
            transition: "color 0.2s ease",
            lineHeight: 1.2,
          }}
        >
          {service.title}
        </span>

        {/* Dotted flex separator */}
        <span
          className="hidden sm:block flex-1 self-center"
          style={{
            borderBottom: "1px dotted rgba(255,255,255,0.1)",
            minWidth: "24px",
          }}
          aria-hidden="true"
        />

        {/* CLI command — hidden on small screens */}
        <span
          className="hidden sm:block flex-shrink-0"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.06em",
            color: isOpen ? "rgba(247,176,23,0.75)" : "rgba(247,176,23,0.45)",
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {service.command}
        </span>

        {/* Chevron */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="#606474"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            flexShrink: 0,
            marginLeft: "4px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          aria-hidden="true"
        >
          <path d="M2 4.5l5 5 5-5" />
        </svg>
      </button>

      {/* ── Expandable body ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingLeft: "20px", paddingBottom: "28px" }}>
              {/* CLI command — mobile only */}
              <p
                className="sm:hidden mb-4"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  color: "rgba(247,176,23,0.55)",
                }}
              >
                {service.command}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#707480",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                  maxWidth: "680px",
                }}
              >
                {service.desc}
              </p>

              {/* Capability list */}
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#8a9099", lineHeight: 1.5 }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#F7B017",
                        fontSize: "12px",
                        lineHeight: "21px",
                        flexShrink: 0,
                      }}
                    >
                      ›
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="servicios" className="relative z-10 section-padding" style={{ backgroundColor: "rgba(12,15,24,0.95)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="terminal-label mb-4">// servicios</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#f0f0f0",
            }}
          >
            Soluciones integrales para seguridad, redes y continuidad operativa
          </h2>
        </motion.div>

        {/* Accordion list */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {services.map((s, i) => (
            <ServiceBlock
              key={i}
              service={s}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
