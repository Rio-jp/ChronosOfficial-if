"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * speed;
        meshRef.current.rotation.y = time * speed * 0.5;
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={position}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <FloatingShape position={[-3, 2, -5]} color="#00f0ff" speed={0.5} />
                <FloatingShape position={[3, -2, -4]} color="#7000ff" speed={0.4} />
                <FloatingShape position={[0, 0, -8]} color="#ffffff" speed={0.2} />
                <FloatingShape position={[-4, -3, -6]} color="#00f0ff" speed={0.3} />
                <FloatingShape position={[4, 3, -7]} color="#7000ff" speed={0.6} />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
