"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DirectionalLight, Group, Mesh, MeshStandardMaterial } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

interface FBXModelProps {
  scrollProgress: number;
}

function FBXModel({ scrollProgress }: FBXModelProps) {
  const fbx = useLoader(FBXLoader, "/logos.fbx"); // Load the FBX model
  const modelRef = useRef<Group>(null);
  const lightRef = useRef<DirectionalLight>(null);

  // Apply a standard material to the model
  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = new MeshStandardMaterial({
            roughness: 0.1, // Adjust roughness (0 = smooth, 1 = rough)
            metalness: 1, // Adjust metalness (0 = non-metal, 1 = metal)
            flatShading: false, // Enable smooth shading
            alphaToCoverage: true, // Enable alpha to coverage
            transparent: true, // Enable transparency
          });
        }
      });
    }
  }, [fbx]);

  useFrame(() => {
    if (modelRef.current) {
      // Scale the model based on scroll progress
      const scale = 0.5 + Math.sin(scrollProgress * Math.PI) * 1; // Scale up to 200% and back down
      modelRef.current.scale.set(scale, scale, scale);

      // Rotate the model based on scroll progress
      const rotation = scrollProgress * Math.PI * 2; // Full rotation
      modelRef.current.rotation.y = rotation;
      modelRef.current.rotation.z = rotation;
      modelRef.current.rotation.x = rotation;

      // Make the model 90 degrees on the x-axis to make it stand up on the ground on initial load
      modelRef.current.rotation.x = Math.PI / 2;
    }

    if (lightRef.current) {
      // Rotate the light based on scroll progress
      const rotation = scrollProgress * Math.PI * 2; // Full rotation
      lightRef.current.position.set(
        Math.sin(rotation) * 10,
        10,
        Math.cos(rotation) * 10
      );
      lightRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <primitive object={fbx} ref={modelRef} />
      <directionalLight
        ref={lightRef}
        castShadow
        position={[1, 1, 1]}
        intensity={40}
        color={"#ffd700"}
      />
    </>
  );
}

export default function ScrollAnimation() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -999,
      }}
    >
      <Canvas>
        <ambientLight intensity={1} /> {/* Increased ambient light intensity */}
        <directionalLight
          castShadow
          position={[0, -0.5, -1]}
          intensity={13}
          color={"#dbb549"}
        />
        <directionalLight
          castShadow
          position={[-1, 1, -1.5]}
          intensity={13}
          color={"#dbb549"}
        />
        <directionalLight
          castShadow
          position={[1, -1, -1.5]}
          intensity={13}
          color={"#dbb549"}
        />
        <directionalLight
          castShadow
          position={[0.5, 0.5, 2]}
          intensity={13}
          color={"#dbb549"}
        />
        <directionalLight
          castShadow
          position={[-1, -1, -1.5]}
          intensity={15}
          color={"#dbb549"}
        />{" "}
        {/* Second directional light from behind */}
        <FBXModel scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
