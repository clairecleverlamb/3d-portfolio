import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import AstroCorgi from "./AstroCorgi";
import CanvasLoader from "./Loader";

const TURN_AMOUNT = 0.35;   // radians per click (turn left/right)
const RADIUS_STEP = 0.04;  // bigger/smaller circle
const RADIUS_MIN = 0.12;
const RADIUS_MAX = 0.45;

const ArrowButton = ({ direction, onClick, "aria-label": ariaLabel, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className={`absolute z-10 w-10 h-10 flex items-center justify-center rounded-full bg-tertiary/80 border border-gray-600 hover:border-quaternary hover:bg-quaternary/20 text-quaternary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-quaternary/50 ${className}`}
  >
    {direction === "up" && (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    )}
    {direction === "down" && (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    )}
    {direction === "left" && (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    )}
    {direction === "right" && (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

/**
 * 3D corgi runs in a circle. Left/Right = turn left/right. Up/Down = bigger circle / faster run.
 */
const AstroCorgiCanvas = () => {
  const [turnOffset, setTurnOffset] = useState(0);
  const [radius, setRadius] = useState(0.28);

  return (
    <div className="relative w-full max-w-md mx-auto h-[200px] sm:h-[220px] flex items-center justify-center mb-6">
      {/* Up = bigger circle */}
      <ArrowButton
        direction="up"
        aria-label="Bigger circle"
        onClick={() => setRadius((r) => Math.min(RADIUS_MAX, r + RADIUS_STEP))}
        className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {/* Down = smaller circle */}
      <ArrowButton
        direction="down"
        aria-label="Smaller circle"
        onClick={() => setRadius((r) => Math.max(RADIUS_MIN, r - RADIUS_STEP))}
        className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
      />
      {/* Left = turn left */}
      <ArrowButton
        direction="left"
        aria-label="Turn left"
        onClick={() => setTurnOffset((o) => o - TURN_AMOUNT)}
        className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {/* Right = turn right */}
      <ArrowButton
        direction="right"
        aria-label="Turn right"
        onClick={() => setTurnOffset((o) => o + TURN_AMOUNT)}
        className="right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
      />

      <div className="w-full h-[160px] sm:h-[180px]">
        <Canvas
          className="w-full h-full bg-transparent"
          camera={{
          position: [0, 0.1, 1.4],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 2, 2]} intensity={2} />
            <pointLight position={[-1, 1, 1]} intensity={1} color="#00D4FF" />
            <pointLight position={[1, -0.5, 0.5]} intensity={0.8} color="#FF6B6B" />
            <AstroCorgi turnOffset={turnOffset} radius={radius} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default AstroCorgiCanvas;
