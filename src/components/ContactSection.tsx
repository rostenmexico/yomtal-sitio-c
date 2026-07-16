import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface FormData {
  nombre: string;
  correo: string;
  empresa: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  empresa?: string;
  mensaje?: string;
}

const INPUT_BASE: React.CSSProperties = {
  borderRadius: "2px",
  border: "1px solid rgba(255,255,255,0.1)",
  backgroundColor: "#0e1118",
  color: "#f0f0f0",
  width: "100%",
  padding: "12px 16px",
  fontSize: "14px",
  lineHeight: 1.6,
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "#606474",
  marginBottom: "8px",
};

const LABEL_MAP: Record<string, string> = {
  nombre: "Nombre",
  correo: "Correo electrónico",
  empresa: "Empresa",
  mensaje: "Mensaje",
};

const TypewriterText = ({
  text,
  delay = 0,
  className = "",
  style = {},
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
          setDisplayed("");
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 38);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [started, text, delay]);

  return (
    <p ref={ref} className={className} style={style}>
      {displayed}
      {displayed.length < text.length && started && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            backgroundColor: "#F7B017",
            marginLeft: "2px",
            animation: "noc-pulse 0.7s ease-in-out infinite",
            verticalAlign: "text-bottom",
          }}
        />
      )}
    </p>
  );
};

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({ nombre: "", correo: "", empresa: "", mensaje: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: false, margin: "-15%" });

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es requerido";
    if (!form.correo.trim()) e.correo = "El correo es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = "Correo no válido";
    if (!form.mensaje.trim()) e.mensaje = "El mensaje es requerido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(247,176,23,0.5)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(247,176,23,0.07)";
  };

  const onBlur = (
    field: keyof FormErrors,
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = errors[field] ? "#e05555" : "rgba(255,255,255,0.1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="contacto"
      className="relative z-10 overflow-hidden section-padding bg-[#13151f]/90 backdrop-blur-sm"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(247,176,23,0.06) 0%, transparent 65%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <div className="container mx-auto px-6 relative z-10">

        {/* ── CTA block ── */}
        <div ref={ctaRef} className="text-center">

          {/* Step 1: Label — parpadeo eléctrico */}
          <motion.p
            className="terminal-label mb-6"
            initial={{ opacity: 0 }}
            animate={ctaInView ? {
              opacity: [0, 0.8, 0.2, 1, 0.4, 1],
              textShadow: [
                "0 0 0px rgba(247,176,23,0)",
                "0 0 18px rgba(247,176,23,0.9)",
                "0 0 6px rgba(247,176,23,0.5)",
              ],
            } : { opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          >
            // siguiente paso
          </motion.p>

          {/* Step 2: Titular emerge desde el fondo oscuro */}
          <motion.h2
            className="mt-0 leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              letterSpacing: "-0.03em",
              color: "#f0f0f0",
            }}
            initial={{ opacity: 0, scale: 0.92, filter: "brightness(0.1)" }}
            animate={ctaInView
              ? { opacity: 1, scale: 1, filter: "brightness(1)" }
              : { opacity: 0, scale: 0.92, filter: "brightness(0.1)" }
            }
            transition={{ delay: 1.4, duration: 1.6, ease: "easeOut" }}
          >
            Fortalezcamos juntos la seguridad y continuidad de tu operación
          </motion.h2>

          {/* Step 3: Descripción — typewriter */}
          <TypewriterText
            text="Ya sea que busques optimizar tu infraestructura, fortalecer tu estrategia de ciberseguridad, cumplir requerimientos regulatorios o incorporar capacidades especializadas, nuestro equipo puede ayudarte a identificar oportunidades de mejora alineadas a los objetivos de tu negocio."
            delay={3.0}
            style={{ fontSize: "16px", color: "#a8acb8", lineHeight: 1.85, maxWidth: "640px", margin: "20px auto 0" }}
          />

          {/* Step 4: Botones se iluminan */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 5.5, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="https://wa.me/523336485683?text=Hola%2C%20quiero%20hablar%20con%20un%20especialista%20de%20YOMTAL."
              target="_blank"
              rel="noopener noreferrer"
              className="sharp-btn-primary"
              style={{ animation: "btn-pulse-attention 2s ease-in-out 6.2s 3" }}
            >
              Hablar con un especialista
            </a>
            <a href="#contacto" className="sharp-btn-ghost">
              Solicitar contacto
            </a>
          </motion.div>
        </div>

        {/* Separator */}
        <hr
          aria-hidden="true"
          style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "72px 0 64px" }}
        />

        {/* ── Form block ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="overline">Contacto</span>
          <h2
            className="mt-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
              letterSpacing: "-0.02em",
              color: "#f0f0f0",
            }}
          >
            Solicita asesoría especializada
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div
                  className="flex items-center justify-center mb-4"
                  style={{ width: 56, height: 56, backgroundColor: "rgba(247,176,23,0.08)", borderRadius: "4px" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F7B017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "#f0f0f0",
                  }}
                >
                  Mensaje enviado
                </h3>
                <p style={{ fontSize: "14px", color: "#606474", marginTop: "8px" }}>
                  Nos pondremos en contacto pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {(["nombre", "correo", "empresa", "mensaje"] as const).map((field) => (
                  <div key={field}>
                    <label style={LABEL_STYLE}>{LABEL_MAP[field]}</label>

                    {field === "mensaje" ? (
                      <textarea
                        rows={4}
                        style={{
                          ...INPUT_BASE,
                          resize: "none",
                          borderColor: errors[field] ? "#e05555" : "rgba(255,255,255,0.1)",
                        }}
                        placeholder=""
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        onFocus={onFocus}
                        onBlur={(e) => onBlur(field, e)}
                      />
                    ) : (
                      <input
                        type={field === "correo" ? "email" : "text"}
                        style={{
                          ...INPUT_BASE,
                          borderColor: errors[field] ? "#e05555" : "rgba(255,255,255,0.1)",
                        }}
                        placeholder=""
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        onFocus={onFocus}
                        onBlur={(e) => onBlur(field, e)}
                      />
                    )}

                    {errors[field] && (
                      <p style={{ fontSize: "11px", color: "#e05555", marginTop: "5px", fontFamily: "'JetBrains Mono', monospace" }}>
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="sharp-btn-primary w-full disabled:opacity-60"
                  style={{ justifyContent: "center" }}
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Contact info ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7B017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                content: (
                  <a
                    href="mailto:info@yomtal.mx"
                    style={{ fontSize: "14px", fontWeight: 500, color: "#e0e0e0", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F7B017")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#e0e0e0")}
                  >
                    info@yomtal.mx
                  </a>
                ),
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7B017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                label: "Teléfono",
                content: (
                  <a
                    href="https://wa.me/523336485683?text=Hola%2C%20quiero%20hablar%20con%20un%20especialista%20de%20YOMTAL."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "14px", fontWeight: 500, color: "#e0e0e0", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F7B017")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#e0e0e0")}
                  >
                    33 3648 5683
                  </a>
                ),
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7B017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Ubicación",
                content: <p style={{ fontSize: "14px", fontWeight: 500, color: "#e0e0e0" }}>Guadalajara, Jalisco, México</p>,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7B017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Horario comercial",
                content: (
                  <>
                    <p style={{ fontSize: "14px", fontWeight: 500, color: "#e0e0e0" }}>Lunes a viernes: 9:00–19:00</p>
                    <p style={{ fontSize: "12px", color: "#606474", marginTop: "2px" }}>Sábado y domingo: cerrado</p>
                  </>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "4px",
                    backgroundColor: "rgba(247,176,23,0.08)",
                    border: "1px solid rgba(247,176,23,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p style={LABEL_STYLE}>{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
