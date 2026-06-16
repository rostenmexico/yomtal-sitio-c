import { useEffect } from "react";
import { motion } from "framer-motion";

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#080a10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Scan line — single top-to-bottom pass */}
      <motion.div
        initial={{ y: "-2px", opacity: 0 }}
        animate={{ y: "100vh", opacity: [0, 0.75, 0.75, 0] }}
        transition={{ delay: 0.25, duration: 1.9, ease: "linear" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(247,176,23,0.4) 25%, rgba(247,176,23,0.18) 75%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ring anchor — 0×0 div at viewport center */}
      <div style={{ position: "absolute", top: "50%", left: "50%" }} aria-hidden="true">
        {[0.25, 0.7, 1.15].map((delay, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "280px",
              height: "280px",
              top: "-140px",
              left: "-140px",
              borderRadius: "50%",
              border: "1px solid rgba(247,176,23,0.45)",
              pointerEvents: "none",
            }}
            animate={{ scale: [0.1, 1.85], opacity: [0.65, 0] }}
            transition={{ delay, duration: 1.65, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Logo + wordmark */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "22px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo — fade+scale in, then single pulse */}
        <motion.img
          src="/logo-yomtal-main.png"
          alt="YOMTAL"
          style={{
            width: "220px",
            height: "auto",
            mixBlendMode: "screen",
            display: "block",
          }}
          animate={{
            opacity: [0, 1, 1, 1, 1],
            scale: [0.8, 1.0, 1.0, 1.06, 1.0],
          }}
          transition={{
            duration: 2.1,
            times: [0, 0.36, 0.54, 0.74, 1.0],
            ease: "easeOut",
          }}
        />

        {/* YOMTAL wordmark */}
        <motion.span
          initial={{ opacity: 0, y: 7 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.55, ease: "easeOut" }}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.55em",
            textTransform: "uppercase",
            color: "#F7B017",
            paddingLeft: "0.55em",
          }}
        >
          YOMTAL
        </motion.span>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
