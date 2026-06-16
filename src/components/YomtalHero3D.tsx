import { useRef, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Initialise RectAreaLight support for MeshStandardMaterial
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
RectAreaLightUniformsLib.init();

// ─── Inner scene ────────────────────────────────────────────────────────────

interface LogoProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}

function YomtalLogo({ mousePos }: LogoProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const mouseTiltX = useRef(0);
  const mouseTiltY = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const maxAngle = THREE.MathUtils.degToRad(15);

    // Smooth mouse-tracking tilt (lerp toward cursor-driven target)
    mouseTiltX.current = THREE.MathUtils.lerp(
      mouseTiltX.current,
      -mousePos.current.y * maxAngle,
      0.08
    );
    mouseTiltY.current = THREE.MathUtils.lerp(
      mouseTiltY.current,
      mousePos.current.x * maxAngle,
      0.08
    );

    groupRef.current.rotation.y = mouseTiltY.current;
    groupRef.current.rotation.x = mouseTiltX.current;

    // Smooth hover scale
    const targetScale = hovered ? 1.05 : 1.0;
    const s = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.08);
    groupRef.current.scale.setScalar(s);
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/*
        T horizontal bar
        width 2.0 → spans x –1.0 … +1.0
        bottom edge at y = 0.45 – 0.125 = 0.325 (connects to stem top)
      */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[2.0, 0.25, 0.2]} />
        <meshStandardMaterial
          color="#F97316"
          metalness={0.85}
          roughness={0.15}
          emissive="#F97316"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/*
        T vertical stem
        top edge at y = –0.375 + 0.7 = 0.325 — aligns with bar bottom
        bottom edge at y = –0.375 – 0.7 = –1.075
      */}
      <mesh position={[0, -0.375, 0]}>
        <boxGeometry args={[0.38, 1.4, 0.2]} />
        <meshStandardMaterial
          color="#F97316"
          metalness={0.85}
          roughness={0.15}
          emissive="#F97316"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/*
        Half-circle arch (Spartan-helmet dome) above the bar.
        TorusGeometry ring lies in the XY plane; with arc = PI the half-torus
        is the TOP half — starts at (+R, 0), peaks at (0, +R), ends at (–R, 0).
        Placing the torus centre at y = bar_top = 0.575 puts the arch feet
        exactly at bar top and the dome peak at y = 0.575 + 0.85 = 1.425.
      */}
      <mesh position={[0, 0.575, 0]}>
        <torusGeometry args={[0.85, 0.1, 24, 64, Math.PI]} />
        <meshStandardMaterial
          color="#9CA3AF"
          metalness={0.9}
          roughness={0.1}
          emissive="#9CA3AF"
          emissiveIntensity={0.06}
        />
      </mesh>
    </group>
  );
}

// ─── Lights ─────────────────────────────────────────────────────────────────

function Lights() {
  const rectRef = useRef<THREE.RectAreaLight>(null);

  return (
    <>
      <ambientLight intensity={0.3} />
      {/* Orange key from top-left */}
      <pointLight position={[-3, 3, 2]} color="#F97316" intensity={2} />
      {/* White fill from right */}
      <pointLight position={[3, 0, 2]} color="#ffffff" intensity={1} />
      {/* Soft white rect-area from front */}
      <rectAreaLight
        ref={rectRef}
        position={[0, 0, 3]}
        width={5}
        height={5}
        intensity={0.8}
        color="#ffffff"
      />
    </>
  );
}

// ─── Public component ────────────────────────────────────────────────────────

interface YomtalHero3DProps {
  width?: string | number;
  height?: string | number;
}

export default function YomtalHero3D({ width = "100%", height = "100%" }: YomtalHero3DProps) {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePos.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mousePos.current = { x: 0, y: 0 };
  }, []);

  return (
    <div
      style={{ width, height, display: "none" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ fov: 45, position: [0, 0, 5] }}
        gl={{ alpha: true, antialias: true }}
      >
        <Lights />
        <YomtalLogo mousePos={mousePos} />

        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
