import { motion } from "framer-motion";

const items = [
  {
    title: "Seguridad de TI",
    desc: "Protección integral de activos digitales",
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
        <path d="M16 3L4 8v7c0 7.18 5.12 13.4 12 15 6.88-1.6 12-7.82 12-15V8L16 3z" />
        <rect x="13" y="14" width="6" height="5" rx="1" />
        <path d="M16 14v-2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: "Redes de Alto Rendimiento",
    desc: "Infraestructura segura, escalable y disponible",
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
        <circle cx="16" cy="8" r="3" />
        <circle cx="8" cy="24" r="3" />
        <circle cx="24" cy="24" r="3" />
        <line x1="16" y1="11" x2="8" y2="21" />
        <line x1="16" y1="11" x2="24" y2="21" />
        <line x1="11" y1="24" x2="21" y2="24" />
      </svg>
    ),
  },
  {
    title: "Auditoría y Cumplimiento",
    desc: "Riesgo, controles y cumplimiento normativo",
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
        <path d="M8 4h12l4 4v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <polyline points="20 4 20 8 24 8" />
        <polyline points="11 17 14 20 21 13" />
      </svg>
    ),
  },
  {
    title: "Servicios Administrados",
    desc: "Monitoreo, soporte y operación continua",
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
        <rect x="5" y="6" width="22" height="15" rx="2" />
        <path d="M10 26h12" />
        <path d="M16 21v5" />
        <path d="M10 12h12" />
        <path d="M10 16h7" />
      </svg>
    ),
  },
];

const ValueStrip = () => (
  <section className="relative z-10 bg-[#0f1117]/95 backdrop-blur-sm border-t border-b border-white/10">
    <div className="container mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group flex flex-col items-center text-center relative"
          >
            {i > 0 && (
              <div
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              />
            )}

            <div className="text-yomtal-orange transition-colors duration-200 group-hover:text-yomtal-orange-secondary mb-3">
              {item.icon}
            </div>

            <h3 className="text-[15px] font-semibold text-gray-100 group-hover:text-yomtal-orange transition-colors duration-200">
              {item.title}
            </h3>

            <p className="text-xs mt-1 text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueStrip;
