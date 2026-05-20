import { motion } from "framer-motion";

const benefits = [
  "Disminuimos riesgos operativos.",
  "Mejoramos la disponibilidad de sus operaciones.",
  "Disminuimos los costos de operación y administración de seguridad y riesgos.",
  "Cumplimos la estrategia de la organización balanceando costo/beneficio.",
  "Aumentamos la productividad del negocio mediante tecnología alineada a objetivos.",
];

// Geometría centrada — viewBox ampliado para dar respiro a las etiquetas en TODA la rotación
const CENTER = 350;
const HEX_RADIUS = 88;
const NODE_RADIUS = 160;
const LABEL_RADIUS = 218;
const ORBIT_OUTER = 195;
const ORBIT_INNER = 118;
const SPIN_DURATION = 50; // segundos

const services = [
  { angle: -90, lines: ["Seguridad de TI"], anchor: "middle" },
  { angle: -30, lines: ["Arquitectura", "de redes"], anchor: "start" },
  { angle: 30, lines: ["Balanceo y", "aceleración"], anchor: "start" },
  { angle: 90, lines: ["Revisión y", "auditoría"], anchor: "middle" },
  { angle: 150, lines: ["Servicios", "Administrados"], anchor: "end" },
  { angle: 210, lines: ["Soporte sin", "Fronteras"], anchor: "end" },
];

const polar = (angleDeg, r) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
};

const hexPoints = [-90, -30, 30, 90, 150, 210]
  .map((a) => polar(a, HEX_RADIUS))
  .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
  .join(" ");

const AboutSection = () => (
  <section id="nosotros" className="relative z-10 bg-[#13151f]/90 backdrop-blur-sm section-padding">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Quiénes somos</span>
          <h2 className="text-[2.2rem] font-bold text-white mt-3 leading-tight">
            Una organización enfocada en brindar soluciones de TI que apoyan las estrategias de negocio
          </h2>
          <p className="mt-6 text-gray-400" style={{ lineHeight: 1.8 }}>
            Desde 2012, YOMTAL es una organización enfocada en brindar soluciones de TI que apoyan las estrategias de
            negocio de sus clientes. Su enfoque consultivo busca soluciones que aporten un mejor costo total de
            propiedad durante todo el ciclo de uso de la tecnología.
          </p>
          <div className="mt-8 space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-yomtal-orange flex-shrink-0" />
                <span className="text-gray-100 font-medium text-[15px]">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SVG rotando — viewBox y geometría rediseñados */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center overflow-visible"
        >
          <svg
            viewBox="0 0 700 700"
            className="w-full max-w-[600px]"
            style={{
              overflow: "visible",
              animation: `yomtal-spin ${SPIN_DURATION}s linear infinite`,
              transformOrigin: "center center",
            }}
          >
            <defs>
              <radialGradient id="hexFill" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#F5A623" stopOpacity="0.04" />
              </radialGradient>
            </defs>

            <style>{`
              @keyframes yomtal-spin {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
              }
              @keyframes yomtal-counter {
                from { transform: rotate(0deg); }
                to   { transform: rotate(-360deg); }
              }
              .yomtal-label {
                animation: yomtal-counter ${SPIN_DURATION}s linear infinite;
                transform-box: fill-box;
                transform-origin: center;
              }
            `}</style>

            {/* Órbita exterior punteada */}
            <circle
              cx={CENTER}
              cy={CENTER}
              r={ORBIT_OUTER}
              fill="none"
              stroke="#F5A623"
              strokeWidth="1"
              opacity="0.18"
              strokeDasharray="5 11"
            />

            {/* Órbita interior */}
            <circle
              cx={CENTER}
              cy={CENTER}
              r={ORBIT_INNER}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              opacity="0.08"
              strokeDasharray="2 8"
            />

            {/* Hexágono central */}
            <polygon points={hexPoints} fill="url(#hexFill)" stroke="#F5A623" strokeWidth="1.5" />

            {/* Diagonales del hexágono */}
            {[
              [-90, 90],
              [-30, 150],
              [30, 210],
            ].map(([a, b], i) => {
              const p1 = polar(a, HEX_RADIUS);
              const p2 = polar(b, HEX_RADIUS);
              return (
                <line
                  key={`diag-${i}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="#cdcfd1"
                  strokeWidth="1"
                  opacity="0.30"
                />
              );
            })}

            {/* Nodos + etiquetas con contra-rotación */}
            {services.map((s, i) => {
              const node = polar(s.angle, NODE_RADIUS);
              const label = polar(s.angle, LABEL_RADIUS);
              const multiline = s.lines.length > 1;
              return (
                <g key={`svc-${i}`}>
                  {/* Línea del centro al nodo */}
                  <line
                    x1={CENTER}
                    y1={CENTER}
                    x2={node.x}
                    y2={node.y}
                    stroke="#cdcfd1"
                    strokeWidth="1"
                    opacity="0.28"
                  />
                  {/* Aro del nodo */}
                  <circle cx={node.x} cy={node.y} r="11" fill="#11131c" stroke="#F5A623" strokeWidth="2" />
                  {/* Núcleo del nodo */}
                  <circle cx={node.x} cy={node.y} r="4" fill="#F5A623" opacity="0.85" />
                  {/* Etiqueta con contra-rotación para mantenerse legible */}
                  <g className="yomtal-label">
                    <text
                      x={label.x}
                      y={label.y}
                      textAnchor={s.anchor}
                      fontSize="11"
                      fill="#cdcfd1"
                      fontFamily="Inter, system-ui, sans-serif"
                      fontWeight="600"
                    >
                      {s.lines.map((line, idx) => (
                        <tspan key={idx} x={label.x} dy={multiline ? (idx === 0 ? -6 : 13) : 4}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
