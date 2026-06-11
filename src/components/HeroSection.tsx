import { motion } from "framer-motion";

const HeroSection = () => {
  const headline = "Protegemos la infraestructura que sostiene tu operación";
  const words = headline.split(" ");

  return (
    <section id="inicio" className="relative z-10 min-h-screen flex items-center bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Text */}
          <div className="pt-20 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-yomtal-orange/40 px-4 py-1.5 mb-5"
              style={{ color: "#F7B017", backgroundColor: "rgba(247,176,23,0.08)" }}
            >
              <span className="text-xs font-semibold tracking-[0.18em] uppercase">Protegiendo Estrategias</span>
            </motion.div>
            <h1
              className="font-bold tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.1, color: "#ffffff" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 max-w-[480px]"
              style={{ fontSize: "17px", color: "#a0a0a0", lineHeight: 1.8 }}
            >
              En YOMTAL diseñamos e integramos soluciones de ciberseguridad, arquitectura de redes e infraestructura
              tecnológica que ayudan a las organizaciones a reducir riesgos, fortalecer su resiliencia y mantener la
              disponibilidad de sus servicios críticos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contacto"
                className="btn-primary px-8 py-4 text-[15px] font-bold inline-flex items-center gap-2 group"
              >
                Solicitar asesoría
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#servicios"
                className="text-sm transition-colors duration-200 hover:underline"
                style={{ color: "#cdcfd1" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#cdcfd1")}
              >
                Conocer servicios →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
