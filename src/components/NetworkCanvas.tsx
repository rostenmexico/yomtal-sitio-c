import { useRef, useEffect, useCallback } from "react";

interface Hex {
  x: number;
  y: number;
  pulse: number;
  alertPulse: number;
  isAlert: boolean;
  alertTimer: number;
  clickPulse: number;
}

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hexesRef = useRef<Hex[]>([]);
  const animRef = useRef<number>(0);
  const scanAngleRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const mouseRef = useRef({ x: -999, y: -999 });

  const HEX_SIZE = window.innerWidth < 768 ? 52 : 36;

  const hexCenter = useCallback((col: number, row: number, W: number, H: number) => {
    const w = HEX_SIZE * 2;
    const h = Math.sqrt(3) * HEX_SIZE;
    const cols = Math.ceil(W / (w * 0.75)) + 2;
    const rows = Math.ceil(H / h) + 2;
    const totalW = cols * w * 0.75;
    const totalH = rows * h;
    const x = col * w * 0.75 + (W - totalW) / 2 + w * 0.75;
    const y = row * h + (col % 2 === 0 ? 0 : h / 2) + (H - totalH) / 2 + h;
    return { x, y };
  }, []);

  const buildGrid = useCallback(
    (W: number, H: number) => {
      const hexes: Hex[] = [];
      const w = HEX_SIZE * 2;
      const h = Math.sqrt(3) * HEX_SIZE;
      const cols = Math.ceil(W / (w * 0.75)) + 3;
      const rows = Math.ceil(H / h) + 3;
      for (let c = -1; c < cols; c++) {
        for (let r = -1; r < rows; r++) {
          const pos = hexCenter(c, r, W, H);
          if (pos.x > -HEX_SIZE && pos.x < W + HEX_SIZE && pos.y > -HEX_SIZE && pos.y < H + HEX_SIZE) {
            hexes.push({
              x: pos.x,
              y: pos.y,
              pulse: 0,
              alertPulse: 0,
              isAlert: Math.random() < 0.04,
              alertTimer: Math.random() * 200,
              clickPulse: 0,
            });
          }
        }
      }
      hexesRef.current = hexes;
    },
    [hexCenter],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid(window.innerWidth, window.innerHeight);
    };

    resize();
    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    window.addEventListener("resize", debouncedResize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const handleClick = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;
      hexesRef.current.forEach((h) => {
        const dx = h.x - mx;
        const dy = h.y - my;
        if (dx * dx + dy * dy < HEX_SIZE * HEX_SIZE * 2) {
          h.clickPulse = 1;
          hexesRef.current.forEach((n) => {
            const nx = h.x - n.x;
            const ny = h.y - n.y;
            const dist = Math.sqrt(nx * nx + ny * ny);
            if (dist < HEX_SIZE * 3 && dist > 0) {
              setTimeout(() => {
                n.clickPulse = Math.max(n.clickPulse, 0.7 * (1 - dist / (HEX_SIZE * 3)));
              }, dist * 2);
            }
          });
        }
      });
    };
    window.addEventListener("click", handleClick);

    const drawHex = (cx: number, cy: number, size: number, strokeAlpha: number, fillColor: string | null) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i - 30);
        const x = cx + size * Math.cos(a);
        const y = cy + size * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
      }
      ctx.strokeStyle = `rgba(247,176,23,${strokeAlpha})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    };

    const isMobile = window.innerWidth < 768;
    const fpsInterval = isMobile ? 1000 / 30 : 1000 / 60;
    let lastFrameTime = 0;

    const draw = (timestamp: number) => {
      animRef.current = requestAnimationFrame(draw);
      if (timestamp - lastFrameTime < fpsInterval) return;
      lastFrameTime = timestamp;

      timeRef.current += isMobile ? 0.032 : 0.016;
      scanAngleRef.current += isMobile ? 0.006 : 0.003;

      const W = window.innerWidth;
      const H = window.innerHeight;
      const cx = W / 2;
      const cy = H / 2;
      const time = timeRef.current;
      const scanAngle = scanAngleRef.current;

      ctx.fillStyle = "#080a10";
      ctx.fillRect(0, 0, W, H);

      // Radar sweep
      ctx.save();
      ctx.translate(cx, cy);
      const sweepSteps = isMobile ? 35 : 70;
      for (let i = 0; i < sweepSteps; i++) {
        const a = scanAngle - i * 0.022;
        const alpha = (1 - i / sweepSteps) * 0.055;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, Math.max(W, H) * 0.9, a, a + 0.025);
        ctx.closePath();
        ctx.fillStyle = `rgba(247,176,23,${alpha})`;
        ctx.fill();
      }
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(scanAngle) * Math.max(W, H), Math.sin(scanAngle) * Math.max(W, H));
      ctx.strokeStyle = "rgba(247,176,23,0.55)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      // Hexes
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      hexesRef.current.forEach((h) => {
        // Mouse hover
        const mdx = h.x - mx;
        const mdy = h.y - my;
        if (mdx * mdx + mdy * mdy < HEX_SIZE * HEX_SIZE) {
          h.pulse = Math.min(1, h.pulse + 0.35);
        }

        // Scan hit
        const dx = h.x - cx;
        const dy = h.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const dot = (dx * Math.cos(scanAngle) + dy * Math.sin(scanAngle)) / dist;
        const angleDiff = Math.acos(Math.min(1, Math.max(-1, dot)));
        if (angleDiff < 0.07) h.pulse = 1;
        h.pulse *= 0.965;

        // Alert pulse
        h.alertTimer++;
        if (h.isAlert && h.alertTimer > 200) {
          h.alertPulse = 1;
          h.alertTimer = 0;
        }
        h.alertPulse *= 0.94;

        // Click pulse decay
        h.clickPulse *= 0.88;

        const isRed = h.alertPulse > 0.08;
        // Hex opacity reduced ~15% from original values
        const baseAlpha = 0.06 + h.pulse * 0.32 + (isRed ? h.alertPulse * 0.47 : 0);
        const fillAlpha = isRed ? h.alertPulse * 0.15 : h.pulse * 0.08;
        const fillColor = isRed ? `rgba(255,70,70,${fillAlpha})` : `rgba(247,176,23,${fillAlpha})`;

        drawHex(h.x, h.y, HEX_SIZE - 2, baseAlpha, fillColor);

        if (h.pulse > 0.08 || h.alertPulse > 0.08) {
          ctx.beginPath();
          ctx.arc(h.x, h.y, isRed ? 3 : 2, 0, Math.PI * 2);
          ctx.fillStyle = isRed ? `rgba(255,100,100,${h.alertPulse})` : `rgba(247,176,23,${h.pulse * 0.9})`;
          ctx.fill();
        }

        // Click flash ring
        if (h.clickPulse > 0.05) {
          const ringSize = HEX_SIZE * (1 + (1 - h.clickPulse) * 1.5);
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 180) * (60 * i - 30);
            const x = h.x + ringSize * Math.cos(a);
            const y = h.y + ringSize * Math.sin(a);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(247,220,80,${h.clickPulse * 0.9})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Brillo interior
          ctx.beginPath();
          ctx.arc(h.x, h.y, HEX_SIZE * h.clickPulse * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(247,200,80,${h.clickPulse * 0.25})`;
          ctx.fill();
        }
      });

      // Center rings
      [1, 0.55, 0.28].forEach((factor, i) => {
        const r = 38 * factor + 4 * Math.sin(time * 1.5 + i);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(247,176,23,${0.5 - i * 0.12})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Crosshair
      ctx.strokeStyle = "rgba(247,176,23,0.2)";
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 7]);
      ctx.beginPath();
      ctx.moveTo(cx - 80, cy);
      ctx.lineTo(cx + 80, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - 80);
      ctx.lineTo(cx, cy + 80);
      ctx.stroke();
      ctx.setLineDash([]);

      // HUD text
      ctx.fillStyle = "rgba(247,176,23,0.3)";
      ctx.font = "10px monospace";
      const t2 = (time * 10).toFixed(0).padStart(6, "0");
      ctx.fillText(`SYS:${t2}`, 16, H - 16);
      ctx.fillText(`HEX:${hexesRef.current.length}`, 120, H - 16);

    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      animRef.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("click", handleClick);
    };
  }, [buildGrid]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "all",
      }}
    />
  );
};

export default NetworkCanvas;
