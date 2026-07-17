import * as THREE from "three";

/**
 * The deep layer (Dive 04): a single WebGL scene painted behind the
 * homepage HTML. Volumetric light rays near the surface, marine snow with
 * true 3D parallax, bioluminescent plankton that ignites past the midnight
 * zone, and faint abyssal glows at the bottom. The camera sinks with the
 * page's native scroll — the layer responds to scrolling, it never controls
 * it, and every element is decorative (the host div is aria-hidden and
 * pointer-events: none).
 *
 * Guardrail built in: after a warm-up it measures its own frame rate and
 * disposes itself if the machine can't hold the budget, leaving the CSS
 * descent gradient from Dive 03 as the experience.
 */

const WORLD_DEPTH = 24; // camera travel from surface (0) to page bottom (-24)
const SNOW_COUNT = 420;
const PLANKTON_COUNT = 260;
const MOTE_COUNT = 10;
const MIN_FPS = 42;

/** Soft radial glow texture, generated on the fly (no assets to fetch). */
function glowTexture(): THREE.Texture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.45)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Vertical shaft of light for the sunlight zone. */
function rayTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 0, 8, 64, 0, 250);
  g.addColorStop(0, "rgba(190,236,255,0.9)");
  g.addColorStop(0.5, "rgba(120,200,240,0.25)");
  g.addColorStop(1, "rgba(80,160,220,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 256);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const PLANKTON_VERT = /* glsl */ `
  attribute float phase;
  attribute float pointScale;
  varying float vPhase;
  uniform float uTime;
  void main() {
    vPhase = phase;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float twinkle = 0.8 + 0.2 * sin(uTime * 0.7 + phase * 7.0);
    gl_PointSize = pointScale * twinkle * (140.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const PLANKTON_FRAG = /* glsl */ `
  precision mediump float;
  varying float vPhase;
  uniform float uTime;
  uniform float uReveal;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float disc = smoothstep(0.5, 0.05, d);
    float pulse = 0.5 + 0.5 * sin(uTime * 0.9 + vPhase * 6.28318);
    // cyan to violet by phase
    vec3 color = mix(vec3(0.22, 0.88, 1.0), vec3(0.56, 0.42, 1.0), step(0.55, vPhase));
    gl_FragColor = vec4(color, disc * pulse * uReveal * 0.9);
  }
`;

export function createDeepLayer(container: HTMLElement): () => void {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: false,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    60,
  );
  camera.position.set(0, 0, 10);

  const disposables: Array<{ dispose: () => void }> = [];
  const glow = glowTexture();
  const ray = rayTexture();
  disposables.push(glow, ray);

  /* ---- light rays (sunlight zone, fade out with depth) ---- */
  const rays: Array<{ mat: THREE.MeshBasicMaterial; base: number }> = [];
  const rayGeo = new THREE.PlaneGeometry(3.6, 10);
  disposables.push(rayGeo);
  [
    { x: -4.5, y: 1.5, rot: 0.22, base: 0.5 },
    { x: 0.5, y: 2.2, rot: -0.08, base: 0.65 },
    { x: 5, y: 1.2, rot: -0.3, base: 0.45 },
  ].forEach((cfg) => {
    const mat = new THREE.MeshBasicMaterial({
      map: ray,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(rayGeo, mat);
    mesh.position.set(cfg.x, cfg.y - 3, -2);
    mesh.rotation.z = cfg.rot;
    scene.add(mesh);
    rays.push({ mat, base: cfg.base });
    disposables.push(mat);
  });

  /* ---- marine snow (parallax comes from real z spread) ---- */
  const snowGeo = new THREE.BufferGeometry();
  const snowPos = new Float32Array(SNOW_COUNT * 3);
  const snowVel = new Float32Array(SNOW_COUNT);
  for (let i = 0; i < SNOW_COUNT; i++) {
    snowPos[i * 3] = (Math.random() - 0.5) * 26;
    snowPos[i * 3 + 1] = 8 - Math.random() * (WORLD_DEPTH + 16);
    snowPos[i * 3 + 2] = 8 - Math.random() * 12; // z in [-4, 8]
    snowVel[i] = 0.12 + Math.random() * 0.25;
  }
  snowGeo.setAttribute("position", new THREE.BufferAttribute(snowPos, 3));
  const snowMat = new THREE.PointsMaterial({
    map: glow,
    color: 0xbee2f8,
    size: 0.09,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const snow = new THREE.Points(snowGeo, snowMat);
  scene.add(snow);
  disposables.push(snowGeo, snowMat);

  /* ---- bioluminescent plankton (ignites past the midnight zone) ---- */
  const plankGeo = new THREE.BufferGeometry();
  const plankPos = new Float32Array(PLANKTON_COUNT * 3);
  const plankPhase = new Float32Array(PLANKTON_COUNT);
  const plankScale = new Float32Array(PLANKTON_COUNT);
  for (let i = 0; i < PLANKTON_COUNT; i++) {
    plankPos[i * 3] = (Math.random() - 0.5) * 26;
    plankPos[i * 3 + 1] = -WORLD_DEPTH * 0.4 - Math.random() * (WORLD_DEPTH * 0.75);
    plankPos[i * 3 + 2] = 7 - Math.random() * 11;
    plankPhase[i] = Math.random();
    plankScale[i] = 2.5 + Math.random() * 4.5;
  }
  plankGeo.setAttribute("position", new THREE.BufferAttribute(plankPos, 3));
  plankGeo.setAttribute("phase", new THREE.BufferAttribute(plankPhase, 1));
  plankGeo.setAttribute("pointScale", new THREE.BufferAttribute(plankScale, 1));
  const plankMat = new THREE.ShaderMaterial({
    vertexShader: PLANKTON_VERT,
    fragmentShader: PLANKTON_FRAG,
    uniforms: { uTime: { value: 0 }, uReveal: { value: 0 } },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  scene.add(new THREE.Points(plankGeo, plankMat));
  disposables.push(plankGeo, plankMat);

  /* ---- abyssal glows (the hadal dark) ---- */
  const moteMats: THREE.SpriteMaterial[] = [];
  for (let i = 0; i < MOTE_COUNT; i++) {
    const violet = Math.random() > 0.5;
    const mat = new THREE.SpriteMaterial({
      map: glow,
      color: violet ? 0x7c4dff : 0x1690b8,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(mat);
    const scale = 2.5 + Math.random() * 4;
    sprite.scale.set(scale, scale, 1);
    sprite.position.set(
      (Math.random() - 0.5) * 24,
      -WORLD_DEPTH * 0.7 - Math.random() * (WORLD_DEPTH * 0.55),
      2 - Math.random() * 8,
    );
    sprite.userData = {
      base: 0.12 + Math.random() * 0.14,
      seed: Math.random() * Math.PI * 2,
      x0: sprite.position.x,
    };
    scene.add(sprite);
    moteMats.push(mat);
    disposables.push(mat);
  }
  const motes = scene.children.filter((c): c is THREE.Sprite => c instanceof THREE.Sprite);

  /* ---- scroll → camera depth (responds to scrolling, never controls it) ---- */
  let targetFrac = 0;
  let frac = 0;
  const readScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    targetFrac = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
  };
  readScroll();
  frac = targetFrac;

  const onResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    readScroll();
  };
  window.addEventListener("scroll", readScroll, { passive: true });
  window.addEventListener("resize", onResize);

  /* ---- frame loop with a self-enforcing FPS budget ---- */
  let raf = 0;
  let disposed = false;
  let last = performance.now();
  let fpsWindowStart = last + 2000; // 2s warm-up
  let fpsFrames = 0;
  const clock = new THREE.Clock();

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(raf);
    window.removeEventListener("scroll", readScroll);
    window.removeEventListener("resize", onResize);
    disposables.forEach((d) => d.dispose());
    renderer.dispose();
    renderer.domElement.remove();
  };

  const tick = (now: number) => {
    if (disposed) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const t = clock.getElapsedTime();

    // FPS guardrail: measured over a 3s window after warm-up, visible tab only.
    if (!document.hidden && now > fpsWindowStart) {
      fpsFrames++;
      if (now > fpsWindowStart + 3000) {
        const fps = fpsFrames / 3;
        if (fps < MIN_FPS) {
          dispose();
          return;
        }
        fpsWindowStart = Number.POSITIVE_INFINITY; // passed — stop measuring
      }
    }

    // Ease toward the scroll position (visual smoothing only).
    frac += (targetFrac - frac) * 0.06;
    camera.position.y = -frac * WORLD_DEPTH;

    // Snow falls; wrap points vertically around the camera's window.
    const pos = snowGeo.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < SNOW_COUNT; i++) {
      let y = pos.getY(i) - snowVel[i] * dt;
      const rel = y - camera.position.y;
      if (rel < -9) y += 18;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;

    // Rays live at the surface and dissolve by the twilight zone.
    const rayFade = Math.max(0, 1 - frac * 2.4);
    rays.forEach(({ mat, base }) => {
      mat.opacity = rayFade * base;
    });

    // Plankton ignites past midnight; motes breathe in the abyss.
    plankMat.uniforms.uTime.value = t;
    plankMat.uniforms.uReveal.value = THREE.MathUtils.smoothstep(frac, 0.38, 0.62);
    const moteReveal = THREE.MathUtils.smoothstep(frac, 0.55, 0.82);
    motes.forEach((s) => {
      const { base, seed, x0 } = s.userData as { base: number; seed: number; x0: number };
      (s.material as THREE.SpriteMaterial).opacity =
        base * moteReveal * (0.7 + 0.3 * Math.sin(t * 0.35 + seed));
      s.position.x = x0 + Math.sin(t * 0.12 + seed) * 1.4;
    });

    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return dispose;
}
