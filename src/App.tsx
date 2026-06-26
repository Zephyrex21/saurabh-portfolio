/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import TopNavBar from "./components/TopNavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TechMarquee from "./components/TechMarquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Custom cursor mouse coordinate tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container/35 selection:text-primary">
      {/* Immersive Custom Cursor Glow Spot */}
      <div
        className="cursor-glow hidden md:block"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Navigation Header */}
      <TopNavBar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Section Blocks */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* Detailed About section */}
        <About />

        {/* Technical skills grid */}
        <Skills />

        {/* Tech horizontal marquee */}
        <TechMarquee />

        {/* Portfolio selected projects */}
        <Projects />

        {/* Interactive service list */}
        <Services />

        {/* Secure local Inquiry inbox */}
        <Contact />
      </main>

      {/* Footer information */}
      <Footer />

      {/* Fully printable Resume Lightbox Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
