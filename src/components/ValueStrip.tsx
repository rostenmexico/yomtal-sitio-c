import { motion } from "framer-motion";

const items = [
  {
    metric: "99.9%",
    title: "Seguridad de TI",
    desc: "Protección integral de activos digitales",
  },
  {
    metric: "+200",
    title: "Redes de Alto Rendimiento",
    desc: "Infraestructura segura, escalable y disponible",
  },
  {
    metric: "<1ms",
    title: "Auditoría y Cumplimiento",
    desc: "Riesgo, controles y cumplimiento normativo",
  },
  {
    metric: "24/7",
    title: "Servicios Administrados",
    desc: "Monitoreo, soporte y operación continua",
  },
];

const ValueStrip = () => (
  <section
    className="relative z-10"
    style={{
      backgroundColor: "#0c0f18",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}
  >
    <div className="container mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group flex flex-col"
            style={{
              borderLeft: "1px solid #F7B017",
              paddingLeft: "14px",
            }}
          >
            {/* Metric value */}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "22px",
                fontWeight: 400,
                color: "#F7B017",
                lineHeight: 1,
                marginBottom: "8px",
                transition: "color 0.2s",
              }}
            >
              {item.metric}
            </span>

            {/* Title */}
            <span
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#e0e0e0",
                lineHeight: 1.4,
                marginBottom: "4px",
                transition: "color 0.2s",
              }}
              className="group-hover:text-white"
            >
              {item.title}
            </span>

            {/* Description */}
            <span
              style={{
                fontSize: "12px",
                color: "#606474",
                lineHeight: 1.5,
              }}
            >
              {item.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueStrip;
