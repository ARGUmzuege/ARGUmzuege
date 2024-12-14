import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import styles from './BackgroundAnimation.module.scss';

function WavePoints() {
  const points = useRef();
  const count = 50;
  const separation = 4;

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        positions[i] = x * separation - (count * separation) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = z * separation - (count * separation) / 2;
        i += 3;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count, separation]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      positions[i + 1] = Math.sin(x * 0.1 + time) * Math.cos(z * 0.1 + time) * 8;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={2}
        color="#64ffda"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ParticleField({ count = 5000 }) {
  const points = useRef();

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 150;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.x = time * 0.1;
    points.current.rotation.y = time * 0.15;
    points.current.position.y = Math.sin(time * 0.2) * 5;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.5}
        color="#00ff9d"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowRings() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.z = time * 0.2;
    group.current.position.y = Math.sin(time * 0.3) * 5;
  });

  return (
    <group ref={group}>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[0, 0, -i * 8]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[15 + i * 6, 15.5 + i * 6, 64]} />
          <meshBasicMaterial
            color="#00ff9d"
            transparent
            opacity={0.3 - i * 0.03}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export const BackgroundAnimation = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Canvas
        camera={{ position: [0, 30, 120], fov: 60 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <color attach="background" args={['#1B3C59']} />
        <fog attach="fog" args={['#1B3C59', 60, 200]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[0, 50, 20]} intensity={3} color="#00ff9d" />
        <WavePoints />
        <ParticleField />
        <GlowRings />
      </Canvas>
      <div className={styles.overlay} />
    </div>
  );
}; 