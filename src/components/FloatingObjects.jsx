import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";

const FloatingObject = ({ position, type, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const geometry = () => {
    switch (type) {
      case 'sphere':
        return <Sphere args={[0.1, 16, 16]} />;
      case 'box':
        return <Box args={[0.15, 0.15, 0.15]} />;
      case 'torus':
        return <Torus args={[0.1, 0.05, 8, 16]} />;
      default:
        return <Sphere args={[0.1, 16, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {geometry()}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
};

const FloatingObjects = () => {
  const objects = [
    { position: [-2, 1, -1], type: 'sphere', color: '#00D4FF' },
    { position: [2, 0.5, -1.5], type: 'box', color: '#FF6B6B' },
    { position: [-1, 2, -2], type: 'torus', color: '#4ECDC4' },
    { position: [1.5, 1.5, -1], type: 'sphere', color: '#FFE66D' },
    { position: [-2.5, 0.5, -2], type: 'box', color: '#00D4FF' },
  ];

  return (
    <>
      {objects.map((obj, index) => (
        <FloatingObject
          key={index}
          position={obj.position}
          type={obj.type}
          color={obj.color}
        />
      ))}
    </>
  );
};

export default FloatingObjects;
