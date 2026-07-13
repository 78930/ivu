import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// A lightweight Three.js background that renders a grid of metallic "chips".
// This provides a 3D chips visual without requiring a large video file.
export default function AnimatedBackground({ color = 0x00e0ff, bg = 0x071124 }) {
  const mountRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(bg);

    const width = el.clientWidth || window.innerWidth;
    const height = el.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 22, 40);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    el.appendChild(renderer.domElement);

    // lights
    const amb = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(amb);
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(10, 30, 20);
    scene.add(dir);

    // group of chips
    const group = new THREE.Group();
    scene.add(group);

    const cols = 10;
    const rows = 6;
    const spacingX = 3.8;
    const spacingZ = 3.4;

    const metallic = new THREE.MeshStandardMaterial({
      color: 0x0a1220,
      metalness: 0.85,
      roughness: 0.35,
      emissive: new THREE.Color(color),
      emissiveIntensity: 0.02,
    });

    const pinMaterial = new THREE.MeshStandardMaterial({ color: 0x00e0ff, metalness: 0.9, roughness: 0.2 });

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const w = 3.2;
        const h = 0.8 + Math.random() * 0.6;
        const d = 2.4;
        const geom = new THREE.BoxGeometry(w, h, d);
        const mesh = new THREE.Mesh(geom, metallic.clone());
        mesh.position.x = (i - cols / 2) * spacingX + (Math.random() - 0.5) * 0.6;
        mesh.position.z = (j - rows / 2) * spacingZ + (Math.random() - 0.5) * 0.4;
        mesh.position.y = h / 2 - 0.3;

        // small metallic trace on top
        const traceGeom = new THREE.BoxGeometry(w * 0.85, 0.06, d * 0.35);
        const trace = new THREE.Mesh(traceGeom, pinMaterial.clone());
        trace.position.y = h / 2 + 0.02;
        trace.position.z = -d * 0.18;
        mesh.add(trace);

        mesh.userData = { baseY: mesh.position.y, r: Math.random() * 0.6 };
        group.add(mesh);
      }
    }

    group.rotation.x = -0.25;

    function onResize() {
      const w = el.clientWidth || window.innerWidth;
      const h = el.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener('resize', onResize);

    function animate(t) {
      const now = t / 1000;
      group.rotation.y = Math.sin(now * 0.08) * 0.08;

      group.children.forEach((m, idx) => {
        const r = m.userData.r;
        m.position.y = m.userData.baseY + Math.sin(now * (0.8 + r)) * 0.08 * (1 + r);
        const emiss = 0.02 + Math.max(0, Math.sin(now * (1.4 + r) + idx)) * 0.06;
        if (m.material && m.material.emissive) m.material.emissiveIntensity = emiss;
      });

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      // dispose geometries/materials
      group.traverse((c) => {
        if (c.geometry) c.geometry.dispose();
        if (c.material) {
          if (Array.isArray(c.material)) c.material.forEach((m) => m.dispose());
          else c.material.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, [color, bg]);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }} />;
}
