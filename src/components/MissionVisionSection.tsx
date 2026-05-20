import { motion } from "framer-motion";

const MissionVisionSection = () => (
  <section className="relative z-10 bg-[#0f1117]/95 backdrop-blur-sm section-padding">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {[
          {
            label: "MISIÓN",
            text: "Crear soluciones de valor para nuestros clientes mediante la combinación de gente, procesos y herramientas de TI que generen alto valor al logro de sus objetivos de negocio.",
            from: -40,
          },
          {
            label: "VISIÓN",
            text: "Ser un referente y consultor de confianza para nuestros clientes, constituyéndonos como el mejor integrador de soluciones de valor agregado.",
            from: 40,
          },
        ].map((panel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: panel.from }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative p-10 md:p-14"
            style={{ borderLeft: i === 1 ? "1px solid #333" : "none" }}
          >
            <span className="absolute top-6 left-8 text-[80px] font-bold leading-none select-none" style={{ color: "rgba(247,176,23,0.15)" }}>"</span>
            <span className="overline relative z-10">{panel.label}</span>
            <p className="mt-6 text-[1.1rem] font-light leading-[1.9] relative z-10" style={{ color: "#cccccc" }}>
              {panel.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
