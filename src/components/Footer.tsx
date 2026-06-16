const navLinks = ["Inicio", "Nosotros", "Servicios", "Socios", "Contacto"];

const MONO: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
};

const Footer = () => (
  <footer
    className="relative z-10"
    style={{
      backgroundColor: "rgba(6,8,14,0.98)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}
  >
    <div className="container mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ── Logo + taglines ── */}
        <div>
          <img
            src="/logo-yomtal.png"
            alt="YOMTAL"
            className="w-auto object-contain"
            style={{ height: "48px", maxWidth: "180px", mixBlendMode: "screen" }}
          />
          <p
            style={{
              ...MONO,
              fontSize: "10px",
              color: "#444",
              marginTop: "12px",
              letterSpacing: "0.06em",
            }}
          >
            Seguridad e infraestructura tecnológica
          </p>
          <p
            style={{
              ...MONO,
              fontSize: "10px",
              color: "#F7B017",
              marginTop: "4px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Protegiendo Estrategias
          </p>
        </div>

        {/* ── Nav links ── */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-center md:content-start">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                ...MONO,
                fontSize: "11px",
                letterSpacing: "0.06em",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F7B017")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* ── Contact & social ── */}
        <div className="md:text-right space-y-2">
          <a
            href="mailto:info@yomtal.mx"
            style={{ display: "block", fontSize: "13px", color: "#666", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F7B017")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            info@yomtal.mx
          </a>
          <a
            href="https://wa.me/523336485683?text=Hola%2C%20quiero%20hablar%20con%20un%20especialista%20de%20YOMTAL."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", fontSize: "13px", color: "#666", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F7B017")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            33 3648 5683
          </a>
          <p style={{ fontSize: "12px", color: "#444" }}>Guadalajara, Jalisco, México</p>

          {/* Social icons */}
          <div className="flex gap-4 md:justify-end pt-2">
            {[
              {
                href: "https://www.linkedin.com/company/yomtal/",
                label: "LinkedIn",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                href: "https://www.instagram.com/yomtalmx",
                label: "Instagram",
                path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.059 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.059 2.148-.261 2.913-.558.788-.306 1.459-.717 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.059-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
              },
              {
                href: "https://www.facebook.com/yomtal",
                label: "Facebook",
                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
            ].map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                style={{ color: "#555", transition: "color 0.2s ease", display: "flex", alignItems: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F7B017")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* Left: build credit */}
        <p
          style={{
            ...MONO,
            fontSize: "10px",
            color: "#2e2e2e",
            letterSpacing: "0.06em",
          }}
        >
          // built with precision in Guadalajara, MX
        </p>

        {/* Right: copyright */}
        <p style={{ fontSize: "11px", color: "#444" }}>
          © 2026 YOMTAL. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
