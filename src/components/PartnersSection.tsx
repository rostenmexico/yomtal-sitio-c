import { motion } from "framer-motion";

const partners = ["Check Point", "Cisco", "A10", "Exabeam / LogRhythm", "Picus", "DigiCert", "NordPass / NordStellar"];

const PartnersSection = () => (
  <section id="socios" className="relative z-10 bg-[#0f1117]/95 backdrop-blur-sm section-padding">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="overline">Ecosistema tecnológico</span>

        <h2 className="text-[1.4rem] md:text-[1.8rem] font-bold text-white mt-3">
          Certificados por Líderes Globales en Tecnología
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-400 max-w-[760px] mx-auto leading-relaxed">
          Trabajamos con fabricantes líderes en infraestructura, ciberseguridad y continuidad operativa para ofrecer
          soluciones confiables, escalables y alineadas a las necesidades de nuestros clientes. Nuestras certificaciones
          y alianzas estratégicas respaldan la capacidad de YOMTAL para diseñar, implementar y soportar tecnologías
          críticas para el negocio.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mt-12">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-lg font-bold tracking-tight transition-all duration-300 cursor-default select-none"
            style={{ color: "#666666", filter: "grayscale(1)", opacity: 0.5 }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.filter = "none";
              el.style.opacity = "1";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.filter = "grayscale(1)";
              el.style.opacity = "0.5";
              el.style.color = "#666666";
            }}
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
