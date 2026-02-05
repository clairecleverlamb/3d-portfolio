import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import astroCorgiScene from "../assets/3d/astro_corgi.glb";

/**
 * 3D Astro Corgi with "running" motion:
 * - Uses GLB model; plays Run/Walk/Idle if the model has animations.
 * - useFrame adds bobbing (up/down), slight forward tilt, and slow spin for a 3D “running” effect.
 */
const RUN_SPEED = 0.38;
const IDLE_AFTER = 2;           // seconds without clicks before random drift
const IDLE_DRIFT_STRENGTH = 0.012;

const AstroCorgi = ({ turnOffset = 0, radius = 0.28 }) => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF(astroCorgiScene);
  const { actions } = useAnimations(animations, groupRef);
  const lastUserActionTime = useRef(0);
  const idleAngleOffset = useRef(0);
  const prevTurnOffset = useRef(turnOffset);
  const prevRadius = useRef(radius);

  useEffect(() => {
    const name = ["Run", "Walk", "Idle", "Running", "Walking"].find((n) => actions[n]) || Object.keys(actions)[0];
    if (name && actions[name]) {
      actions[name].play();
    }
  }, [actions]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Detect user action (arrow click) to pause random drift
    if (turnOffset !== prevTurnOffset.current || radius !== prevRadius.current) {
      lastUserActionTime.current = t;
      prevTurnOffset.current = turnOffset;
      prevRadius.current = radius;
    }
    const isIdle = t - lastUserActionTime.current > IDLE_AFTER;
    if (isIdle) {
      idleAngleOffset.current += (Math.random() - 0.5) * IDLE_DRIFT_STRENGTH;
    }

    // Run in a circle (slower); angle = time + turn from arrows + random drift when idle
    const angle = t * RUN_SPEED + turnOffset + idleAngleOffset.current;
    groupRef.current.position.x = radius * Math.cos(angle);
    groupRef.current.position.y = radius * Math.sin(angle);
    groupRef.current.position.z = 0;

    // Face the direction of travel (tangent to circle)
    groupRef.current.rotation.y = angle;

    // Slight forward tilt and bobbing for a natural run
    const bob = Math.sin(t * 5) * 0.025;
    groupRef.current.rotation.x = 0.1 + bob;
    groupRef.current.rotation.z = Math.sin(t * 2.5) * 0.015;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      <primitive object={scene} />
    </group>
  );
};

export default AstroCorgi;
