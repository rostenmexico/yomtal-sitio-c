const navLinks = ["Inicio", "Nosotros", "Servicios", "Socios", "Contacto"];

const Footer = () => (
  <footer className="relative z-10" style={{ backgroundColor: "rgba(17,17,17,0.9)" }}>
    <div className="container mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <img
            src="/logo-yomtal.png"
            alt="YOMTAL"
            className="w-auto object-contain"
            style={{
              height: "48px",
              maxWidth: "180px",
              mixBlendMode: "screen",
            }}
          />
          <p className="text-xs mt-3" style={{ color: "#666" }}>
            Seguridad e infraestructura tecnológica
          </p>
          <p className="text-xs mt-1 font-semibold tracking-wide" style={{ color: "#F7B017" }}>
            Protegiendo Estrategias
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap gap-4 md:justify-center">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm transition-colors duration-200 hover:text-yomtal-orange"
              style={{ color: "#888" }}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Contact & social */}
        <div className="md:text-right space-y-2">
          <a
            href="mailto:info@yomtal.mx"
            className="block text-sm transition-colors duration-200 hover:text-yomtal-orange"
            style={{ color: "#888" }}
          >
            info@yomtal.mx
          </a>

          <a
            href="https://wa.me/523336485683?text=Hola%2C%20quiero%20hablar%20con%20un%20especialista%20de%20YOMTAL."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm transition-colors duration-200 hover:text-yomtal-orange"
            style={{ color: "#888" }}
          >
            33 3648 5683
          </a>

          <p className="text-xs" style={{ color: "#666" }}>
            Guadalajara, Jalisco, México
          </p>

          <div className="flex gap-3 md:justify-end pt-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/yomtal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-200 hover:text-yomtal-orange"
              style={{ color: "#666" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/yomtalmx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors duration-200 hover:text-yomtal-orange"
              style={{ color: "#666" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/yomtal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors duration-200 hover:text-yomtal-orange"
              style={{ color: "#666" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: "1px solid #222" }}>
        <p className="text-xs text-center" style={{ color: "#555" }}>
          © 2026 YOMTAL. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
