interface Props {
  refId: string;
  sysRef: string;
}

const SectionDivider = ({ refId, sysRef }: Props) => (
  <div
    aria-hidden="true"
    style={{
      display: "flex",
      alignItems: "center",
      padding: "0 32px",
      height: "28px",
    }}
  >
    <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(247,176,23,0.15)" }} />
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.18em",
        color: "rgba(247,176,23,0.35)",
        textTransform: "uppercase",
        padding: "0 14px",
        whiteSpace: "nowrap",
      }}
    >
      {`[ SYS.REF:${refId} / ${sysRef} ]`}
    </span>
    <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(247,176,23,0.15)" }} />
  </div>
);

export default SectionDivider;
