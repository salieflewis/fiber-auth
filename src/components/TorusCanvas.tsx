'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AsciiRenderer } from '@react-three/drei';

function Torus() {
  // rome-ignore lint:
  const ref = useRef(null!);

  const viewport = useThree((state) => state.viewport);

  useFrame(
    (state, delta) =>
      // @ts-ignore
      // rome-ignore lint:
      (ref.current.rotation.x = ref.current.rotation.y += delta / 2)
  );

  return (
    <mesh scale={Math.min(viewport.width, viewport.height) / 3} ref={ref}>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <meshMatcapMaterial />
    </mesh>
  );
}

export function TorusCanvas() {
  return (
    <Canvas>
      {/* Scene */}

      {/* Elements */}
      <Torus />
      <AsciiRenderer />
    </Canvas>
  );
}
