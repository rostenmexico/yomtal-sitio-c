import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

const benefits = [
  "Disminuimos riesgos operativos.",
  "Mejoramos la disponibilidad de sus operaciones.",
  "Disminuimos los costos de operación y administración de seguridad y riesgos.",
  "Cumplimos la estrategia de la organización balanceando costo/beneficio.",
  "Aumentamos la productividad del negocio mediante tecnología alineada a objetivos.",
];

// Servicios flotando alrededor del icosaedro
const services = [
  { lines: ["Seguridad de TI"], theta: 20, elev: 0.75 },
  { lines: ["Arquitectura", "de redes"], theta: 80, elev: -0.4 },
  { lines: ["Balanceo y", "aceleración"], theta: 140, elev: 0.35 },
  { lines: ["Revisión y", "auditoría"], theta: 200, elev: -0.65 },
  { lines: ["Servicios", "Administrados"], theta: 260, elev: 0.5 },
  { lines: ["Soporte sin", "Fronteras"], theta: 320, elev: -0.3 },
];

// ============================================================
// 3D constellation component
// ============================================================
const Yomtal3DConstellation = () => {
  const mountRef = useRef(null);
  const labelRefs = useRef([]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight || 520;

    // ---- Scene + camera ----
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0c14, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(3.4, 1.7, 4.9);

    // ---- Renderer (transparent so YOMTAL bg shows through) ----
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    // ---- Post-processing bloom (controlled, no neón) ----
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(width, height), 0.85, 0.5, 0.85);
    bloom.threshold = 0.18;
    bloom.strength = 0.75;
    bloom.radius = 0.55;
    composer.addPass(bloom);

    // ---- OrbitControls ----
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI * 0.25;
    controls.maxPolarAngle = Math.PI * 0.75;

    // ---- Lighting ----
    scene.add(new THREE.AmbientLight(0x252830));
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 4, 5);
    scene.add(key);
    const amber = new THREE.PointLight(0xf5a623, 1.4, 14);
    amber.position.set(2, 0.5, 2);
    scene.add(amber);
    const cool = new THREE.PointLight(0x6b7d99, 0.35);
    cool.position.set(-3, 1, -2);
    scene.add(cool);

    // ---- Background stars (sutiles) ----
    const STARS = 600;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(STARS * 3);
    for (let i = 0; i < STARS; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 80;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 15;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(
      new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({ color: 0xaab4cc, size: 0.04, transparent: true, opacity: 0.5 }),
      ),
    );

    // ---- Core icosahedron (oscuro, metálico) ----
    const icoGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const core = new THREE.Mesh(
      icoGeo,
      new THREE.MeshStandardMaterial({
        color: 0x14161f,
        emissive: 0x2a1605,
        roughness: 0.35,
        metalness: 0.85,
        transparent: true,
        opacity: 0.95,
      }),
    );
    scene.add(core);

    // ---- Wireframe ámbar encima ----
    const wire = new THREE.Mesh(
      icoGeo,
      new THREE.MeshBasicMaterial({
        color: 0xf5a623,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      }),
    );
    wire.scale.setScalar(1.08);
    scene.add(wire);

    // ---- Ring particles (paleta ámbar) ----
    const RING = 1000;
    const ringGeo = new THREE.BufferGeometry();
    const rPos = new Float32Array(RING * 3);
    const rCol = new Float32Array(RING * 3);
    for (let i = 0; i < RING; i++) {
      const t = (i / RING) * Math.PI * 2;
      const r = 1.55;
      rPos[i * 3] = Math.cos(t) * r;
      rPos[i * 3 + 1] = Math.sin(t * 3) * 0.32;
      rPos[i * 3 + 2] = Math.sin(t) * r;
      rCol[i * 3] = 0.96;
      rCol[i * 3 + 1] = 0.55 + 0.25 * Math.sin(t * 2);
      rCol[i * 3 + 2] = 0.15;
    }
    ringGeo.setAttribute("position", new THREE.BufferAttribute(rPos, 3));
    ringGeo.setAttribute("color", new THREE.BufferAttribute(rCol, 3));
    const ringParticles = new THREE.Points(
      ringGeo,
      new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
      }),
    );
    scene.add(ringParticles);

    // ---- Toros brillantes (ámbar + ámbar claro) ----
    const torus1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.45, 0.04, 64, 400),
      new THREE.MeshStandardMaterial({
        color: 0xf5a623,
        emissive: 0xa86b15,
        roughness: 0.3,
        metalness: 0.9,
      }),
    );
    scene.add(torus1);

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.72, 0.025, 64, 400),
      new THREE.MeshStandardMaterial({
        color: 0xffd9a0,
        emissive: 0x603810,
        roughness: 0.45,
        metalness: 0.8,
      }),
    );
    scene.add(torus2);

    // ---- Service points (esferas pequeñas en 3D + labels HTML) ----
    const servicePoints = [];
    const serviceDots = [];
    services.forEach((s) => {
      const theta = (s.theta * Math.PI) / 180;
      const r = 2.5;
      const x = Math.cos(theta) * r;
      const y = s.elev;
      const z = Math.sin(theta) * r;

      const pos = new THREE.Vector3(x, y, z);
      servicePoints.push(pos);

      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffb84d }),
      );
      dot.position.copy(pos);
      scene.add(dot);
      serviceDots.push(dot);
    });

    // ---- Grid floor (apenas perceptible) ----
    const grid = new THREE.GridHelper(14, 28, 0x666688, 0x2a2a3a);
    grid.position.y = -1.8;
    grid.material.transparent = true;
    grid.material.opacity = 0.18;
    scene.add(grid);

    // ---- Animation loop ----
    let time = 0;
    let frameId;
    const tmpVec = new THREE.Vector3();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.012;

      core.rotation.y = time * 0.25;
      core.rotation.x = Math.sin(time * 0.37) * 0.2;
      core.rotation.z = Math.cos(time * 0.23) * 0.15;
      wire.rotation.copy(core.rotation);

      ringParticles.rotation.y = time * 0.4;
      ringParticles.rotation.x = Math.sin(time * 0.28) * 0.18;

      torus1.rotation.x = Math.PI / 2;
      torus1.rotation.z = time * 0.55;

      torus2.rotation.x = Math.PI / 2 + 0.3;
      torus2.rotation.z = -time * 0.4;

      // Service dots pulsando con desfase
      serviceDots.forEach((d, i) => {
        d.scale.setScalar(1 + 0.18 * Math.sin(time * 2 + i * 0.9));
      });

      controls.update();

      // ---- Proyectar puntos 3D a coordenadas de pantalla y posicionar labels ----
      const camDir = camera.position.clone().normalize();
      servicePoints.forEach((p, i) => {
        tmpVec.copy(p).project(camera);
        const x = (tmpVec.x * 0.5 + 0.5) * width;
        const y = (-tmpVec.y * 0.5 + 0.5) * height;

        // Opacidad por profundidad: los que están atrás del icosaedro se atenúan
        const dirToPoint = p.clone().normalize();
        const d = dirToPoint.dot(camDir);
        const opacity = Math.max(0.18, Math.min(1, d + 0.35));
        const scale = 0.85 + 0.15 * Math.max(0, d);

        const el = labelRefs.current[i];
        if (el) {
          el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y - 26}px) scale(${scale})`;
          el.style.opacity = String(opacity);
        }
      });

      composer.render();
    };
    animate();

    // ---- Resize ----
    const onResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight || 520;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // ---- Cleanup ----
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameId);
      controls.dispose();
      icoGeo.dispose();
      core.material.dispose();
      wire.material.dispose();
      ringGeo.dispose();
      ringParticles.material.dispose();
      torus1.geometry.dispose();
      torus1.material.dispose();
      torus2.geometry.dispose();
      torus2.material.dispose();
      starGeo.dispose();
      serviceDots.forEach((d) => {
        d.geometry.dispose();
        d.material.dispose();
      });
      renderer.dispose();
      composer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[520px] cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden"
    >
      {/* Labels HTML superpuestos */}
      {services.map((s, i) => (
        <div
          key={i}
          ref={(el) => (labelRefs.current[i] = el)}
          className="absolute top-0 left-0 pointer-events-none whitespace-nowrap"
          style={{ transform: "translate(-50%, -50%)", transition: "opacity 0.15s linear" }}
        >
          <div className="px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-sm border border-[#F5A623]/35 shadow-lg shadow-[#F5A623]/20">
            {s.lines.map((line, idx) => (
              <div
                key={idx}
                className="text-[10.5px] font-semibold text-[#ffd591] leading-tight"
                style={{ letterSpacing: "0.3px" }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Hint inferior */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-mono pointer-events-none tracking-wider">
        ✦ Arrastra para rotar ✦
      </div>
    </div>
  );
};

// ============================================================
// Section wrapper (texto + 3D)
// ============================================================
const AboutSection = () => (
  <section id="nosotros" className="relative z-10 bg-[#13151f]/90 backdrop-blur-sm section-padding">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Quiénes somos</span>
          <h2 className="text-[2.2rem] font-bold text-white mt-3 leading-tight">
            Reducimos riesgos y fortalecemos la continuidad operativa de tu organización
          </h2>
          <p className="mt-6 text-gray-400" style={{ lineHeight: 1.8 }}>
            En YOMTAL ayudamos a las organizaciones a reducir riesgos y garantizar la continuidad operativa mediante
            infraestructura tecnológica y ciberseguridad especializada alineadas a sus objetivos de negocio. Fundada en
            2012, YOMTAL está conformada por especialistas con más de dos décadas de experiencia en ciberseguridad,
            infraestructura de redes y protección de entornos corporativos críticos.
          </p>
          <div className="mt-8 space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-yomtal-orange flex-shrink-0" />
                <span className="text-gray-100 font-medium text-[15px]">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <Yomtal3DConstellation />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
