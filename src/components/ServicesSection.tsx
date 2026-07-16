import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionGate from "@/components/SectionGate";

const services = [
  {
    title: "Seguridad de TI",
    command: "$ yomtal --scan perimeter",
    desc: "Protegemos la infraestructura tecnológica de tu empresa mediante soluciones avanzadas de ciberseguridad que previenen, detectan y responden a amenazas en tiempo real. Nuestro portafolio integra tecnologías líderes del mercado, inteligencia artificial y monitoreo continuo para reducir riesgos, garantizar la continuidad operativa y fortalecer la protección de la información crítica de tu organización.",
    items: [
      "Firewall Next-Generation (Check Point, Cisco y Meraki)",
      "Prevención de Intrusiones (IPS) en Tiempo Real",
      "Protección Avanzada de Correo Electrónico",
      "SIEM y Correlación de Eventos con IA (Exabeam)",
      "Gestión Continua de Exposición a Amenazas (CTEM)",
      "Validación Continua de Seguridad y Prevención de Fuga de Datos",
    ],
  },
  {
    title: "Redes de Alto Rendimiento y Continuidad Operativa",
    command: "$ yomtal --design topology",
    desc: "Diseñamos e implementamos infraestructuras de red modernas, seguras y altamente disponibles que permiten a las organizaciones operar con máxima eficiencia, escalabilidad y continuidad. Nuestras soluciones optimizan el rendimiento de las aplicaciones, mejoran la experiencia de los usuarios y garantizan la disponibilidad de los servicios críticos del negocio.",
    items: [
      "Arquitectura de Redes Empresariales",
      "SD-WAN: Conectividad Inteligente y Optimización WAN",
      "Switching Empresarial de Alta Disponibilidad",
      "Balanceo de Carga para Aplicaciones y Centros de Datos",
      "Gestión Centralizada de DNS, DHCP e IP (DDI)",
      "Diseño de Redes Tolerantes a Fallos",
    ],
  },
  {
    title: "Auditoría, Riesgo y Cumplimiento Normativo",
    command: "$ yomtal --audit compliance",
    desc: "Ayudamos a las organizaciones a identificar riesgos, fortalecer sus controles de seguridad y cumplir con las regulaciones aplicables mediante evaluaciones especializadas, auditorías, análisis de vulnerabilidades y estrategias alineadas a los objetivos del negocio. Nuestro enfoque integra personas, procesos y tecnología para construir una cultura de seguridad sostenible y una postura de ciberseguridad resiliente.",
    items: [
      "Diagnóstico Integral de Seguridad",
      "Hackeo Ético y Pruebas de Penetración",
      "Gestión de Seguridad basada en ISO 27001",
      "Continuidad del Negocio y Recuperación ante Desastres (BCP / DRP)",
      "Protección de Datos Personales y Privacidad",
      "Cumplimiento Normativo y Gestión de Riesgos",
      "Capacitación y Concientización en Ciberseguridad",
    ],
  },
  {
    title: "Servicios Administrados de TI y Ciberseguridad",
    command: "$ yomtal --manage infrastructure",
    desc: "Ayudamos a las organizaciones a maximizar la disponibilidad, seguridad y rendimiento de su infraestructura tecnológica mediante servicios administrados, monitoreo continuo y soporte especializado. Nuestro equipo de ingenieros certificados opera como una extensión de tu área de TI, permitiéndote reducir riesgos, optimizar costos y enfocar tus recursos internos en iniciativas estratégicas de negocio.",
    items: [
      "Soporte Administrado de Infraestructura de Redes y Seguridad",
      "Servicios Administrados de Ciberseguridad (MSSP)",
      "Auditorías de Infraestructura y Seguridad",
      "Diseño e Implementación de Controles de TI",
      "Transferencia de Conocimiento y Capacitación",
      "Enfócate en el Crecimiento de tu Negocio",
    ],
  },
  {
    title: "Soporte e Implementación Regional sin Fronteras",
    command: "$ yomtal --deploy regional",
    desc: "Brindamos soporte especializado e implementación de proyectos para infraestructura de redes y ciberseguridad en México, Estados Unidos y Latinoamérica, permitiendo a las organizaciones operar con confianza a través de un solo punto de contacto. Nuestro modelo de atención combina soporte remoto y asistencia en sitio, respaldado por ingenieros certificados y procesos orientados a garantizar la continuidad operativa de los servicios críticos del negocio.",
    items: [
      "Cobertura Regional para México, Estados Unidos y LATAM",
      "Implementaciones y Proyectos Multipaís",
      "Soporte Remoto y Asistencia en Sitio",
      "Atención Multilingüe",
      "Equipo de Ingenieros Especializados",
      "Continuidad Operativa Garantizada",
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

const ServiceItem = ({ item }: { item: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      className="flex gap-3"
      style={{ fontSize: "15px", lineHeight: 1.5, cursor: "default" }}
      whileHover={{ x: 10, transition: { duration: 0.2, ease: "easeOut" } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Arrow symbol — doubles and glows on hover */}
      <motion.span
        animate={{
          color: hovered ? "#ffffff" : "#F7B017",
          textShadow: hovered
            ? "0 0 8px rgba(247,176,23,0.9)"
            : "0 0 0px rgba(247,176,23,0)",
        }}
        transition={{ duration: 0.2 }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          lineHeight: "21px",
          flexShrink: 0,
          userSelect: "none",
        }}
      >
        {hovered ? "››" : "›"}
      </motion.span>

      {/* Text + underline that expands left→right */}
      <span style={{ flex: 1, position: "relative", minWidth: 0 }}>
        <motion.span
          animate={{ color: hovered ? "#F7B017" : "#b0b4c0" }}
          transition={{ duration: 0.2 }}
          style={{ display: "block" }}
        >
          {item}
        </motion.span>
        <motion.span
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "1px",
            background: "#F7B017",
            display: "block",
          }}
        />
      </span>
    </motion.li>
  );
};

const ServiceBlock = ({
  service,
  index,
  isOpen,
  onToggle,
  onHover,
  onLeave,
}: {
  service: (typeof services)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onHover: () => void;
  onLeave: () => void;
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
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
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
            fontSize: "12px",
            letterSpacing: "0.06em",
            color: isOpen ? "rgba(247,176,23,0.90)" : "rgba(247,176,23,0.80)",
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {service.command}
        </span>

        {/* Chevron */}
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="#606474"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={hovered && !isOpen ? { y: [0, 3, 0] } : { y: 0 }}
          transition={{
            duration: 0.5,
            repeat: hovered && !isOpen ? Infinity : 0,
            repeatDelay: 1.2,
          }}
          style={{
            flexShrink: 0,
            marginLeft: "4px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          aria-hidden="true"
        >
          <path d="M2 4.5l5 5 5-5" />
        </motion.svg>
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
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  color: "rgba(247,176,23,0.80)",
                }}
              >
                {service.command}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  color: "#a8acb8",
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
                  <ServiceItem key={i} item={item} />
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
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  const handleHover = (i: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setOpenIndex(i);
    }, 200);
  };

  const handleLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  return (
    <section
      id="servicios"
      className="relative z-10 section-padding"
      style={{
        // TODO: optimize — currently 2.6 MB JPEG renamed as .png, recommend converting to WebP (~200–400 KB)
        backgroundImage: "url('/Section-2.png')",
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
          backgroundColor: "rgba(12,15,24,0.58)",
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
              onHover={() => handleHover(i)}
              onLeave={handleLeave}
            />
          ))}
        </div>
      </div>
      </motion.div>
      <div className="next-section-wrap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        <SectionGate refId="003" label="Por qué YOMTAL" targetId="por-que" />
      </div>
    </section>
  );
};

export default ServicesSection;
