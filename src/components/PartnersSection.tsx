import { motion } from "framer-motion";

const partners = ["Checkpoint", "Cisco", "A10", "Exabeam/LoghRythm", "Picus", "Digicert", "NordPass/NordStellar"];

const PartnersSection = () => (
  <section id="socios" className="relative z-10 bg-[#0f1117]/95 backdrop-blur-sm section-padding">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[1.4rem] font-bold text-white">Socios tecnológicos</h2>
        <p className="mt-3 text-sm text-gray-400 max-w-[560px] mx-auto leading-relaxed">
          Trabajamos con fabricantes y soluciones que fortalecen la estrategia tecnológica, la seguridad y la
          continuidad operativa de nuestros clientes.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-12 mt-12">
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
