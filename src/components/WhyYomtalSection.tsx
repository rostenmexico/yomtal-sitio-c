import { motion } from "framer-motion";

const blocks = [
  {
    num: "01",
    title: "Preventa",
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
        <circle cx="14" cy="14" r="9" />
        <line x1="20.5" y1="20.5" x2="28" y2="28" />
      </svg>
    ),
    items: [
      "Ofrecemos al menos 2 alternativas que cumplan los requerimientos de nuestros clientes.",
      "Hacemos la evaluación costo/beneficio antes de emitir recomendaciones.",
      "Clasificamos los requerimientos del cliente para evaluar el costo/beneficio de la solución.",
    ],
  },
  {
    num: "02",
    title: "Implementación",
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
        <circle cx="16" cy="16" r="6" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" />
      </svg>
    ),
    items: [
      "Ofrecemos autonomía a los clientes con las soluciones que entregamos.",
      "Todas las etapas de implementación incluyen transferencia de conocimientos.",
      "Buscamos que el cliente aproveche al máximo la solución implementada.",
    ],
  },
  {
    num: "03",
    title: "Soporte",
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
        <path d="M5 18v-4a11 11 0 0 1 22 0v4" />
        <path d="M5 18a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h1v-7H5zM27 18a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1v-7h1z" />
      </svg>
    ),
    items: [
      "Actualizamos los conocimientos de los administradores de nuestras soluciones.",
      "Brindamos soluciones con bajo costo de propiedad para nuestros clientes.",
      "Acompañamos la operación, mejora y evolución de las soluciones implementadas.",
    ],
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
        <h2 className="text-[2rem] font-bold text-white">¿Por qué YOMTAL?</h2>
        <div className="mx-auto mt-3 w-10 h-[3px] bg-yomtal-orange rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blocks.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="bg-[#1a1c2e]/80 p-9 rounded-2xl border border-white/10 hover:border-yomtal-orange/60 transition-all duration-250 hover:-translate-y-1 group"
          >
            <span className="text-[13px] font-bold tracking-widest text-yomtal-orange">{b.num}</span>
            <div className="text-yomtal-orange mt-4 mb-3">{b.icon}</div>
            <h3 className="text-lg font-bold text-white mb-4">{b.title}</h3>
            <ul className="space-y-2.5">
              {b.items.map((item, j) => (
                <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-yomtal-orange mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyYomtalSection;
