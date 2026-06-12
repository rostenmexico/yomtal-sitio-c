import { useState } from "react";
import { motion } from "framer-motion";

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

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({ nombre: "", correo: "", empresa: "", mensaje: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
    // Simulate send (EmailJS can be integrated here)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-[10px] border border-white/10 text-sm bg-[#1a1c2e]/80 text-gray-100 placeholder-gray-500 transition-all duration-200 outline-none focus:border-yomtal-orange focus:ring-[3px] focus:ring-yomtal-orange/15";

  return (
    <section id="contacto" className="relative z-10 bg-[#13151f]/90 backdrop-blur-sm section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="overline">Contacto</span>
          <h2 className="text-[2rem] font-bold text-white mt-3">Solicita asesoría especializada</h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-400" style={{ lineHeight: 1.8 }}>
            Ya sea que busques optimizar tu infraestructura, fortalecer tu estrategia de ciberseguridad, cumplir
            requerimientos regulatorios o incorporar capacidades especializadas, nuestro equipo puede ayudarte a
            identificar oportunidades de mejora alineadas a los objetivos de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 rounded-full bg-yomtal-orange/10 flex items-center justify-center mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F7B017"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Mensaje enviado</h3>
                <p className="text-sm text-gray-400 mt-2">Nos pondremos en contacto pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {(["nombre", "correo", "empresa", "mensaje"] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 capitalize">
                      {field === "correo" ? "Correo electrónico" : field}
                    </label>
                    {field === "mensaje" ? (
                      <textarea
                        rows={4}
                        className={`${inputClass} resize-none`}
                        style={{ borderColor: errors[field] ? "#e05555" : undefined }}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      />
                    ) : (
                      <input
                        type={field === "correo" ? "email" : "text"}
                        className={inputClass}
                        style={{ borderColor: errors[field] ? "#e05555" : undefined }}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      />
                    )}
                    {errors[field] && (
                      <p className="text-xs mt-1" style={{ color: "#e05555" }}>
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-yomtal-orange/10 flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7B017"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <a
                  href="mailto:info@yomtal.mx"
                  className="text-sm font-semibold text-gray-100 hover:text-yomtal-orange transition-colors"
                >
                  info@yomtal.mx
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-yomtal-orange/10 flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7B017"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Teléfono</p>
                <a
                  href="https://wa.me/523336485683?text=Hola%2C%20quiero%20hablar%20con%20un%20especialista%20de%20YOMTAL."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-100 hover:text-yomtal-orange transition-colors"
                >
                  33 3648 5683
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-yomtal-orange/10 flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7B017"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Ubicación</p>
                <p className="text-sm font-semibold text-gray-100">Guadalajara, Jalisco, México</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-yomtal-orange/10 flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7B017"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Horario comercial</p>
                <p className="text-sm font-semibold text-gray-100">Lunes a viernes: 9:00–19:00</p>
                <p className="text-xs text-gray-400">Sábado y domingo: cerrado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
