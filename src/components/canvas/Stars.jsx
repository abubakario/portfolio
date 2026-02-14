import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import styled from 'styled-components';

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
`;

// --- 1. BRIGHTER BACKGROUND STARS ---
const BackgroundStars = (props) => {
  const ref = useRef();
  
  // 15,000 stars radius 3.5 (Dense coverage)
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 3.5 }));

  const randoms = useMemo(() => {
    const array = new Float32Array(15000); 
    for (let i = 0; i < 15000; i++) array[i] = Math.random();
    return array;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
    ref.current.material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#00E0FF") }, // Cyan
      uColor2: { value: new THREE.Color("#0047FF") }, // Deep Blue
      uColor3: { value: new THREE.Color("#945DD6") }, // Purple
      uColor4: { value: new THREE.Color("#E6F4FF") }  // White-Blue
    },
    vertexShader: `
      uniform float uTime;
      attribute float aRandom;
      varying float vRandom;
      void main() {
        vRandom = aRandom;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // VISIBILITY FIX: Increased base twinkle brightness (0.8 -> 1.0)
        float twinkle = 1.0 + 0.3 * sin(uTime * 1.0 + aRandom * 50.0);
        
        // SIZE FIX: Increased multiplier from 3.0 to 5.0 so they are clearly visible
        gl_PointSize = (5.0 * aRandom * twinkle) / -mvPosition.z; 
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform vec3 uColor4;
      varying float vRandom;
      void main() {
        float d = length(gl_PointCoord.xy - 0.5);
        if (d > 0.5) discard;
        
        vec3 color = uColor1;
        if (vRandom > 0.75) color = uColor2;
        else if (vRandom > 0.5) color = uColor3;
        else if (vRandom > 0.25) color = uColor4;
        
        // BRIGHTNESS FIX: Less aggressive fade-out
        float strength = 1.0 - (d * 1.8); 
        strength = pow(strength, 1.5); // Softer edge, bigger core
        
        gl_FragColor = vec4(color, strength);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} positions={sphere} stride={3} {...props}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={sphere.length / 3} array={sphere} itemSize={3} />
          <bufferAttribute attach="attributes-aRandom" count={randoms.length} array={randoms} itemSize={1} />
        </bufferGeometry>
        <shaderMaterial attach="material" args={[shaderArgs]} />
      </points>
    </group>
  );
};

// --- 2. THIN "LASER" SHOOTING STAR ---
const ShootingStar = () => {
  const ref = useRef();
  
  const [data] = useState(() => ({
    x: (Math.random() * 6) + 2, 
    y: (Math.random() * 6) - 3,   
    z: (Math.random() - 0.5) * 2,    
    speed: Math.random() * 2.0 + 1.5,
    offset: Math.random() * 10        
  }));

  useFrame((state) => {
    const t = state.clock.elapsedTime * data.speed + data.offset;
    const progress = (t % 6); 

    if (progress < 1.0) {
      ref.current.visible = true;
      const translateX = data.x - (progress * 15.0);
      const translateY = data.y - (progress * 5.0);
      ref.current.position.set(translateX, translateY, data.z);
      ref.current.rotation.z = Math.PI / 10; 
    } else {
      ref.current.visible = false;
    }
  });

  const tailShaderArgs = useMemo(() => ({
    uniforms: {
      uColorHead: { value: new THREE.Color("#FFFFFF") }, 
      uColorTail: { value: new THREE.Color("#00E0FF") }  
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColorHead;
      uniform vec3 uColorTail;
      varying vec2 vUv;
      void main() {
        vec3 color = mix(uColorTail, uColorHead, vUv.x);
        float alpha = smoothstep(0.0, 1.0, vUv.x);
        // SHARP TAIL: Creates a very thin line gradient
        float shape = 1.0 - abs(vUv.y - 0.5) * 4.0; // Higher multiplier = Thinner
        alpha *= smoothstep(0.0, 1.0, shape);
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), []);

  return (
    <mesh ref={ref} visible={false}>
      {/* THINNESS FIX: Reduced height from 0.05 to 0.01 */}
      <planeGeometry args={[3.0, 0.01]} />
      <shaderMaterial attach="material" args={[tailShaderArgs]} />
    </mesh>
  );
};

const StyledStarCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <BackgroundStars />
          <ShootingStar />
          <ShootingStar />
          <ShootingStar />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarCanvas;