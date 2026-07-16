import type { CSSProperties } from "react";

interface Props {
  label: string;
  targetId: string;
}

const mono: CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

const NextSectionButton = ({ label, targetId }: Props) => (
  <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 28px" }}>
    <button
      onClick={() =>
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      aria-label={`Ir a ${label}`}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "7px",
        padding: "6px 16px",
        color: "#F7B017",
        opacity: 0.45,
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.9";
        e.currentTarget.style.transform = "translateY(3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "0.45";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span style={{ ...mono, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        {label}
      </span>
      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
        <path
          d="M1 1L6 6L11 1"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

export default NextSectionButton;
