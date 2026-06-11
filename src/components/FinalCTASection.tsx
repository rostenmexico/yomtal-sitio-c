import { motion } from "framer-motion";

const FinalCTASection = () => (
  <section className="relative z-10 section-padding overflow-hidden" style={{ backgroundColor: "rgba(17,17,17,0.8)" }}>
    {/* Animated gradient bg */}
    <div
      className="absolute inset-0 animate-gradient-shift"
      style={{
        background: "radial-gradient(circle at center, rgba(247,176,23,0.08) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="overline">Solicita asesoría</span>

        <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight" style={{ color: "#ffffff" }}>
          Fortalezcamos juntos la seguridad y continuidad de tu operación
        </h2>

        <p className="mt-5 text-sm md:text-base max-w-3xl mx-auto" style={{ color: "#888888", lineHeight: 1.8 }}>
          Ya sea que busques optimizar tu infraestructura, fortalecer tu estrategia de ciberseguridad, cumplir
          requerimientos regulatorios o incorporar capacidades especializadas, nuestro equipo puede ayudarte a
          identificar oportunidades de mejora alineadas a los objetivos de tu negocio.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/523336485683?text=Hola%2C%20quiero%20hablar%20con%20un%20especialista%20de%20YOMTAL."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3.5 text-sm font-bold"
          >
            Hablar con un especialista
          </a>

          <a
            href="#contacto"
            className="px-8 py-3.5 text-sm font-medium rounded-full border transition-colors duration-200"
            style={{ borderColor: "#555", color: "#cccccc" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#F7B017";
              e.currentTarget.style.color = "#F7B017";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#555";
              e.currentTarget.style.color = "#cccccc";
            }}
          >
            Solicitar contacto
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
