import { motion } from "framer-motion";

const FinalCTASection = () => (
  <section className="relative z-10 section-padding overflow-hidden" style={{ backgroundColor: "rgba(8,10,16,0.95)" }}>
    {/* Background image */}
    <img
      src="/bg-final-cta.png"
      alt=""
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.14,
        pointerEvents: "none",
      }}
    />

    {/* Ambient glow — sits on top of image, tints it amber */}
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(circle at center, rgba(247,176,23,0.06) 0%, transparent 65%)",
      }}
    />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal label above headline */}
        <p className="terminal-label mb-6">// siguiente paso</p>

        <h2
          className="mt-0 leading-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            letterSpacing: "-0.03em",
            color: "#f0f0f0",
          }}
        >
          Fortalezcamos juntos la seguridad y continuidad de tu operación
        </h2>

        <p
          className="mt-5 max-w-2xl mx-auto"
          style={{ fontSize: "16px", color: "#606474", lineHeight: 1.85 }}
        >
          Ya sea que busques optimizar tu infraestructura, fortalecer tu estrategia de ciberseguridad, cumplir
          requerimientos regulatorios o incorporar capacidades especializadas, nuestro equipo puede ayudarte a
          identificar oportunidades de mejora alineadas a los objetivos de tu negocio.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* Primary: sharp orange fill */}
          <a
            href="https://wa.me/523336485683?text=Hola%2C%20quiero%20hablar%20con%20un%20especialista%20de%20YOMTAL."
            target="_blank"
            rel="noopener noreferrer"
            className="sharp-btn-primary"
          >
            Hablar con un especialista
          </a>

          {/* Ghost: sharp white border → orange on hover (via CSS) */}
          <a href="#contacto" className="sharp-btn-ghost">
            Solicitar contacto
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
