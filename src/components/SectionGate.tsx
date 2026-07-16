import { motion, useReducedMotion } from "framer-motion";

interface Props {
  refId: string;
  label: string;
  targetId: string;
}

const AMBER = "#F7B017";
const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

const SectionGate = ({ refId, label, targetId }: Props) => {
  const reduced = useReducedMotion();
  const nextRefId = String(parseInt(refId, 10) + 1).padStart(3, "0");

  const feederVariants = {
    hidden: { opacity: reduced ? 0 : 1, scaleX: reduced ? 1 : 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.28, ease: "easeOut" as const },
    },
  };

  const gateVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, delay: 0.08 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.15, delay: 0.25 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      style={{ display: "flex", alignItems: "center", height: "60px" }}
    >
      {/* Left feeder line — expands rightward from viewport edge toward gate */}
      <motion.div
        aria-hidden="true"
        variants={feederVariants}
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "rgba(247,176,23,0.18)",
          transformOrigin: "right center",
        }}
      />

      {/* Central gate zone */}
      <motion.div
        variants={gateVariants}
        style={{ position: "relative", width: "320px", flexShrink: 0, height: "44px" }}
      >
        {/* Interior ambient tint */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(247,176,23,0.03)",
            pointerEvents: "none",
          }}
        />

        {/* Corner L-brackets */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "16px", height: "10px", borderTop: "1px solid rgba(247,176,23,0.65)", borderLeft: "1px solid rgba(247,176,23,0.65)" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "16px", height: "10px", borderTop: "1px solid rgba(247,176,23,0.65)", borderRight: "1px solid rgba(247,176,23,0.65)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, width: "16px", height: "10px", borderBottom: "1px solid rgba(247,176,23,0.65)", borderLeft: "1px solid rgba(247,176,23,0.65)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, right: 0, width: "16px", height: "10px", borderBottom: "1px solid rgba(247,176,23,0.65)", borderRight: "1px solid rgba(247,176,23,0.65)" }} />

        {/* Text + nav layer */}
        <motion.div
          variants={textVariants}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: "8px",
          }}
        >
          {/* Exit metadata */}
          <span
            aria-hidden="true"
            style={{
              ...mono,
              fontSize: "8px",
              letterSpacing: "0.18em",
              color: "rgba(247,176,23,0.38)",
              whiteSpace: "nowrap",
              userSelect: "none",
              textTransform: "uppercase",
            }}
          >
            {`// EXIT·${refId}`}
          </span>

          {/* Nav button */}
          <button
            onClick={() =>
              document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            aria-label={`Ir a ${label}`}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 0",
              minHeight: "44px",
              color: AMBER,
              opacity: 0.92,
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.92"; }}
          >
            <span
              aria-hidden="true"
              style={{
                ...mono,
                fontSize: "9.5px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                userSelect: "none",
                filter: "drop-shadow(0 0 2.5px rgba(247,176,23,0.6))",
              }}
            >
              {label}
            </span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path d="M1 1L5 5L9 1" stroke={AMBER} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Enter metadata */}
          <span
            aria-hidden="true"
            style={{
              ...mono,
              fontSize: "8px",
              letterSpacing: "0.18em",
              color: "rgba(247,176,23,0.38)",
              whiteSpace: "nowrap",
              userSelect: "none",
              textTransform: "uppercase",
            }}
          >
            {`ENTER·${nextRefId} //`}
          </span>
        </motion.div>
      </motion.div>

      {/* Right feeder line — expands leftward from viewport edge toward gate */}
      <motion.div
        aria-hidden="true"
        variants={feederVariants}
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "rgba(247,176,23,0.18)",
          transformOrigin: "left center",
        }}
      />
    </motion.div>
  );
};

export default SectionGate;
