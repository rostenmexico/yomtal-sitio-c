import { useRef, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    {
  title: "Seguridad de TI",
  desc: "Protegemos la infraestructura tecnológica de tu empresa mediante soluciones avanzadas de ciberseguridad que previenen, detectan y responden a amenazas en tiempo real.",
  items: [
    "Firewall Next-Generation",
    "Prevención de Intrusiones IPS en tiempo real",
    "Protección avanzada de correo electrónico",
    "SIEM y correlación de eventos con IA",
    "Gestión continua de exposición a amenazas CTEM",
    "Validación continua de seguridad y prevención de fuga de datos",
  ],
  icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="#F7B017"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 4L6 10v9c0 9 6.3 16.8 14 18.7C27.7 35.8 34 28 34 19V10L20 4z" />
        <rect x="16" y="18" width="8" height="6" rx="1" />
        <path d="M20 18v-3a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v3" />
      </svg>
    ),
  },
  {
  title: "Redes de Alto Rendimiento y Continuidad Operativa",
  desc: "Diseñamos e implementamos infraestructuras de red modernas, seguras y altamente disponibles que optimizan el rendimiento, la escalabilidad y la continuidad de los servicios críticos.",
  items: [
    "Arquitectura de redes empresariales",
    "SD-WAN y optimización WAN",
    "Switching empresarial de alta disponibilidad",
    "Balanceo de carga para aplicaciones y centros de datos",
    "Gestión centralizada de DNS, DHCP e IP",
    "Diseño de redes tolerantes a fallos",
  ],
  icon: (
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="#F7B017"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20" cy="10" r="4" />
        <circle cx="10" cy="30" r="4" />
        <circle cx="30" cy="30" r="4" />
        <line x1="20" y1="14" x2="10" y2="26" />
        <line x1="20" y1="14" x2="30" y2="26" />
        <line x1="14" y1="30" x2="26" y2="30" />
      </svg>
    ),
  },
{
  title: "Auditoría, Riesgo y Cumplimiento Normativo",
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
  icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="#F7B017"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="20" y1="6" x2="20" y2="16" />
        <line x1="10" y1="16" x2="30" y2="16" />
        <line x1="10" y1="16" x2="7" y2="28" />
        <line x1="30" y1="16" x2="33" y2="28" />
        <circle cx="7" cy="30" r="3" />
        <circle cx="33" cy="30" r="3" />
        <circle cx="20" cy="5" r="2.5" />
      </svg>
    ),
  },
  {
  title: "Servicios Administrados de TI y Ciberseguridad",
  desc: "Maximizamos la disponibilidad, seguridad y rendimiento de tu infraestructura mediante servicios administrados, monitoreo continuo y soporte especializado.",
  items: [
    "Soporte administrado de infraestructura de redes y seguridad",
    "Servicios administrados de ciberseguridad MSSP",
    "Auditorías de infraestructura y seguridad",
    "Diseño e implementación de controles de TI",
    "Transferencia de conocimiento y capacitación",
    "Optimización de recursos para enfocarte en el crecimiento del negocio",
  ],
  icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="#F7B017"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 5h15l5 5v22a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
        <polyline points="25 5 25 10 30 10" />
        <polyline points="14 21 18 25 26 17" />
      </svg>
    ),
  },
  {
    title: "Soporte e Implementación Regional sin Fronteras",
    desc: "Brindamos soporte especializado e implementación de proyectos para infraestructura de redes y ciberseguridad en México, Estados Unidos y Latinoamérica.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="#F7B017"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="8" width="26" height="18" rx="2" />
        <path d="M12 31h16" />
        <path d="M20 26v5" />
        <path d="M13 15h14" />
        <path d="M13 20h9" />
      </svg>
    ),
  },
  {
    title: "Continuidad Operativa y Resiliencia Tecnológica",
    desc: "Diseñamos estrategias para mantener servicios críticos disponibles, reducir interrupciones y fortalecer la capacidad de recuperación ante incidentes, fallas o desastres.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="#F7B017"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20" cy="20" r="14" />
        <path d="M6 20h28" />
        <path d="M20 6c4 4 6 8.5 6 14s-2 10-6 14" />
        <path d="M20 6c-4 4-6 8.5-6 14s2 10 6 14" />
        <path d="M27 27l5 5" />
      </svg>
    ),
  },
];

const ServiceCard = ({ service, index }: { service: (typeof services)[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateY(-6px)`;
    cardRef.current.style.boxShadow = `${x * -12}px ${y * -12}px 32px rgba(247,176,23,0.12)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) translateY(0)";
    cardRef.current.style.boxShadow = "none";
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="p-8 rounded-2xl h-full flex flex-col"
        style={{
          backgroundColor: "#242424",
          border: "1px solid #333333",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="mb-5">{service.icon}</div>
        <h3 className="text-lg font-bold mb-3" style={{ color: "#ffffff" }}>
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#8a8a8a", lineHeight: 1.7 }}>
          {service.desc}
        </p>

        {service.items && (
          <ul className="mt-5 space-y-2 flex-1">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-2 text-sm" style={{ color: "#b8b8b8", lineHeight: 1.5 }}>
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-yomtal-orange flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        <div
          className="mt-6 h-[2px] rounded-full transition-all duration-300"
          style={{
            width: hovered ? "40px" : "0px",
            backgroundColor: "#F7B017",
          }}
        />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => (
  <section id="servicios" className="relative z-10 bg-[#1a1a1a]/80 section-padding">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="overline">Servicios</span>
        <h2 className="text-[2rem] font-bold mt-3" style={{ color: "#ffffff" }}>
          Soluciones integrales para seguridad, redes y continuidad operativa
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
