import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

export default function LiveBackground3D({ children }) {
  const vantaRef = useRef(null);
  const [vanta, setVanta] = useState(null);

  useEffect(() => {
    if (!vanta) {
      const effect = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0ea5e9,      // primary wave color
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 0.7,
        zoom: 0.9,
      });
      setVanta(effect);
    }
    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
