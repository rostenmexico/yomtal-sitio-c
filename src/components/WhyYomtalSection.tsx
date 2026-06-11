import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Experiencia comprobada",
    desc: "Más de una década acompañando proyectos de infraestructura tecnológica y ciberseguridad para entornos empresariales.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 26V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18" />
        <path d="M4 26h24" />
        <path d="M11 12h10" />
        <path d="M11 17h10" />
        <path d="M11 22h6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Especialistas certificados",
    desc: "Contamos con ingenieros certificados y especialistas con amplia experiencia en redes, seguridad e infraestructura crítica.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="11" r="6" />
        <path d="M11 17l-2 10 7-4 7 4-2-10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Cobertura regional",
    desc: "Brindamos soporte e implementación para operaciones en México, Estados Unidos y Latinoamérica bajo un solo punto de contacto.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24" />
        <path d="M16 4c4 4 6 8 6 12s-2 8-6 12" />
        <path d="M16 4c-4 4-6 8-6 12s2 8 6 12" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Enfoque consultivo",
    desc: "Diseñamos soluciones alineadas a los objetivos del negocio, priorizando continuidad, reducción de riesgos y generación de valor.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="14" r="8" />
        <path d="M20 20l7 7" />
        <path d="M10 14l3 3 6-6" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Capacidad integral",
    desc: "Diseñamos, implementamos, administramos y soportamos soluciones tecnológicas de misión crítica durante todo su ciclo de vida.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4l10 6v12l-10 6-10-6V10l10-6z" />
        <path d="M16 16l10-6" />
        <path d="M16 16v12" />
        <path d="M16 16L6 10" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Compromiso a largo plazo",
    desc: "Acompañamos la operación, mejora y evolución de las soluciones implementadas para fortalecer la continuidad operativa.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 16a10 10 0 0 1 17-7" />
        <path d="M23 9V4h5" />
        <path d="M26 16a10 10 0 0 1-17 7" />
        <path d="M9 23v5H4" />
      </svg>
    ),
  },
];

const WhyYomtalSection = () => (
  <section className="relative z-10 bg-[#13151f]/90 backdrop-blur-sm section-padding">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="overline">Por qué elegirnos</span>
        <h2 className="text-[2rem] font-bold text-white mt-3">¿Por qué YOMTAL?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-400" style={{ lineHeight: 1.8 }}>
          Combinamos experiencia, especialización técnica y enfoque consultivo para ayudar a las organizaciones a
          reducir riesgos, fortalecer su infraestructura y mantener la continuidad de sus operaciones críticas.
        </p>
        <div className="mx-auto mt-5 w-10 h-[3px] bg-yomtal-orange rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="bg-[#1a1c2e]/80 p-8 rounded-2xl border border-white/10 hover:border-yomtal-orange/60 transition-all duration-250 hover:-translate-y-1 group"
          >
            <span className="text-[13px] font-bold tracking-widest text-yomtal-orange">{reason.num}</span>
            <div className="text-yomtal-orange mt-4 mb-3">{reason.icon}</div>
            <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
            <p className="text-sm text-gray-400" style={{ lineHeight: 1.7 }}>
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyYomtalSection;
