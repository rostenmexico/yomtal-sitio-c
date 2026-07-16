import { motion } from "framer-motion";
import SectionGate from "@/components/SectionGate";

const partners = ["Check Point", "Cisco", "A10", "Exabeam / LogRhythm", "Picus", "DigiCert", "NordPass / NordStellar"];

const PartnersSection = () => (
  <section
    id="socios"
    className="relative z-10 section-padding overflow-hidden"
    style={{
      // TODO: optimize — currently 1.9 MB JPEG renamed as .png, recommend converting to WebP (~200–400 KB)
      // Replaces former <img src="/bg-partners.png"> (file kept in public/ for cleanup pass)
      backgroundImage: "url('/Section-5.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark overlay — maintains text legibility over the background image */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(15,17,23,0.72)",
        pointerEvents: "none",
      }}
    />
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
    <div className="container mx-auto px-6 text-center" style={{ position: "relative", zIndex: 1 }}>
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
            style={{ color: "#888888", filter: "grayscale(1)", opacity: 0.75 }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.filter = "none";
              el.style.opacity = "1";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.filter = "grayscale(1)";
              el.style.opacity = "0.75";
              el.style.color = "#888888";
            }}
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
    </motion.div>
    <div className="next-section-wrap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
      <SectionGate refId="006" label="Contáctanos" targetId="contacto" />
    </div>
  </section>
);

export default PartnersSection;
