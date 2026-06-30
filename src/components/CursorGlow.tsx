import { useEffect, useRef } from "react";

// Isolated component: tracks mouse position and moves the glow via direct
// DOM manipulation (ref) instead of React state. This means mouse movement
// never triggers a re-render of this component, let alone the rest of the
// app tree (Hero, About, Projects, etc.) — which is what happens when
// mousePos lives in App.tsx state instead.
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (glowRef.current) {
          // transform is GPU-composited — no layout reflow, unlike left/top
          glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}
