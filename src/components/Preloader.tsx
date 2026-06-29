import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Respect users who prefer reduced motion — skip preloader instantly
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = prefersReduced ? 0 : 1800;
    const t = setTimeout(() => setVisible(false), delay);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-6 pointer-events-none"
        >
          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="font-display text-3xl md:text-4xl font-black tracking-tighter uppercase text-white select-none"
          >
            ZEPHYREX<span className="text-primary">.21</span>
          </motion.div>

          {/* Loading bar track */}
          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              className="h-full w-full bg-primary rounded-full"
            />
          </div>

          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 select-none"
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
