import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Torus } from "@react-three/drei";

// Placeholder component for new 3D models
const ModernModel = ({ modelPath, position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  // For now, using a placeholder shape until you add new models
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <Box args={[1, 1, 1]} />
      <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.2} />
    </mesh>
  );
};

// Component to easily add new 3D models
const Modern3DScene = ({ scrollContainer }) => {
  return (
    <>
      {/* Add your new 3D models here */}
      {/* Example: <ModernModel modelPath="/path/to/your/model.glb" position={[0, 0, 0]} scale={[1, 1, 1]} /> */}
      
      {/* Placeholder models for now */}
      <ModernModel position={[-1, 0, -1]} scale={[0.5, 0.5, 0.5]} />
      <ModernModel position={[1, 0, -1]} scale={[0.3, 0.3, 0.3]} />
    </>
  );
};

export default Modern3DScene;
