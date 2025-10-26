import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/3d/spaceman.glb";
import CanvasLoader from "./Loader";
import FloatingObjects from "./FloatingObjects";
import ParticleField from "./ParticleField";

const Spaceman = ({ scale, position, rotationX, rotationY, mousePosition, scrollProgress }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  // Completely redesigned rotation system
  useFrame((state) => {
    if (spacemanRef.current) {
      const time = state.clock.elapsedTime;
      
      // Enhanced floating animation
      spacemanRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.15;
      spacemanRef.current.position.x = position[0] + Math.sin(time * 0.3) * 0.05;
      
      // Dramatic scroll-based rotation with multiple axes
      const scrollRotationX = rotationX * 2; // Much more dramatic
      const scrollRotationY = rotationY * 3; // Much more dramatic
      const scrollRotationZ = scrollProgress * Math.PI * 2; // Full rotation based on scroll
      
      // Enhanced mouse interaction
      const mouseRotationX = mousePosition.y * 0.5; // Increased sensitivity
      const mouseRotationY = mousePosition.x * 0.5; // Increased sensitivity
      
      // Continuous automatic rotation
      const autoRotationX = Math.sin(time * 0.2) * 0.1;
      const autoRotationY = time * 0.1; // Continuous slow rotation
      const autoRotationZ = Math.cos(time * 0.15) * 0.05;
      
      // Combine all rotations
      spacemanRef.current.rotation.x = scrollRotationX + mouseRotationX + autoRotationX;
      spacemanRef.current.rotation.y = 2.2 + scrollRotationY + mouseRotationY + autoRotationY;
      spacemanRef.current.rotation.z = scrollRotationZ + autoRotationZ;
      
      // Dynamic scaling based on scroll and time
      const baseScale = scale[0];
      const scrollScale = 1 - (scrollProgress * 0.3); // Shrinks as you scroll
      const pulseScale = 1 + Math.sin(time * 2) * 0.05; // Subtle pulsing
      const finalScale = baseScale * scrollScale * pulseScale;
      
      spacemanRef.current.scale.setScalar(finalScale);
    }
  });

  return (
    <mesh 
      ref={spacemanRef} 
      position={position} 
      rotation={[0, 2.2, 0]} // Base rotation, actual rotation handled in useFrame
    >
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer?.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        const maxScroll = scrollContainer.current.scrollHeight - scrollContainer.current.clientHeight;
        const progress = Math.min(scrollTop / maxScroll, 1);
        
        setScrollProgress(progress);
        
        // Much more dramatic scroll-based rotation - using radians for better effect
        const rotationXValue = (scrollTop * -0.02) % (Math.PI * 4); // Even more dramatic
        const rotationYValue = (scrollTop * -0.03) % (Math.PI * 4); // Even more dramatic
        setRotationX(rotationXValue);
        setRotationY(rotationYValue);
        
        // Scale effect based on scroll
        const scaleValue = 2 - (progress * 0.5); // Shrinks as you scroll
        setScale([scaleValue, scaleValue, scaleValue]);
        
        // Position effect based on scroll
        const positionY = -0.7 + (progress * 0.5); // Moves up as you scroll
        setPosition([0.2, positionY, 0]);
      }
    };

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([2, 2, 2]);
        setPosition([0.2, -0.7, 0]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scrollContainer]);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-10`} camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={3} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 5, 10]} intensity={3} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={3} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1.5} />
        
        {/* Enhanced lighting based on scroll and mouse */}
        <pointLight 
          position={[0, 0, 5]} 
          intensity={2 + scrollProgress * 3 + Math.abs(mousePosition.x) * 2} 
          color="#00D4FF"
        />
        
        {/* Additional dynamic lighting */}
        <pointLight 
          position={[mousePosition.x * 5, mousePosition.y * 5, 3]} 
          intensity={1 + scrollProgress * 2} 
          color="#FF6B6B"
        />

        <ParticleField />
        <Spaceman 
          rotationX={rotationX} 
          rotationY={rotationY} 
          scale={scale} 
          position={position} 
          mousePosition={mousePosition}
          scrollProgress={scrollProgress}
        />
        <FloatingObjects />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
