import { useEffect, useState, useRef } from "react";
import { ArrowDown, Code, Sparkles, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const roles = [
    "Frontend Developer",
    "AI/ML Enthusiast",
    "CS Undergrad @ NSUT",
    "Algo Visualizer Builder",
  ];

  // Dynamic Typing Effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Interactive Particle/Blob Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);
    const blobs = [
      { x: width * 0.3, y: height * 0.4, radius: Math.min(width, height) * 0.25, color: "rgba(0, 255, 102, 0.03)", vx: 0.5, vy: 0.3 },
      { x: width * 0.7, y: height * 0.6, radius: Math.min(width, height) * 0.2, color: "rgba(255, 255, 255, 0.02)", vx: -0.4, vy: 0.5 },
      { x: width * 0.5, y: height * 0.5, radius: Math.min(width, height) * 0.15, color: "rgba(0, 255, 102, 0.02)", vx: 0.3, vy: -0.3 },
    ];
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
      const radialGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
      radialGlow.addColorStop(0, "rgba(0, 255, 102, 0.02)");
      radialGlow.addColorStop(1, "rgba(0, 255, 102, 0)");
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
      ctx.fill();
      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        if (blob.x - blob.radius < 0 || blob.x + blob.radius > width) blob.vx *= -1;
        if (blob.y - blob.radius < 0 || blob.y + blob.radius > height) blob.vy *= -1;
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let y = 0; y < height; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-16">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute top-1/4 left-10 md:left-24 text-primary/5 animate-pulse">
        <Sparkles className="w-10 h-10 md:w-14 md:h-14" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-24 text-primary/5 animate-pulse">
        <Code className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-8 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-primary font-mono text-xs font-semibold tracking-widest rounded-full uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
              CSE Student &amp; FullStack Developer
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6">
            <h1 className="font-display text-5xl sm:text-7xl md:text-[90px] leading-[0.85] font-black tracking-tighter uppercase text-white mb-4">
              Hi, I'm <br />
              <span className="text-primary">Saurabh</span> <br />
              <span>Shekhar.</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center min-h-[40px] mb-6">
            <span className="font-mono text-xl sm:text-2xl font-bold text-white/80 uppercase tracking-widest typing-cursor">
              {typedText}
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-white/60 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-sans">
            Building interactive web apps, algorithm visualizers, and AI/ML tools. 2nd year CSE student at NSUT Delhi — learning through building.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-250 flex items-center gap-2 cursor-pointer">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors duration-250 flex items-center gap-2 cursor-pointer">
              Get In Touch
              <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Metrics Dashboard */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-4 hidden lg:block">
          <div className="border border-white/10 rounded-2xl bg-[#0d0d0d]/90 p-8 space-y-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-primary to-transparent" />
            <div className="absolute bottom-0 left-0 h-32 w-[1px] bg-gradient-to-t from-primary to-transparent" />
            <div className="font-mono text-[11px] text-primary tracking-widest uppercase pb-4 border-b border-white/10 flex justify-between items-center">
              <span>// STUDENT_STATS</span>
              <span className="text-[9px] text-white/30">NSUT.28</span>
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black tracking-tighter text-white mb-1">
                  7+ <span className="text-lg font-bold opacity-30 text-white">PROJECTS</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Deployed &amp; Live</div>
              </div>
              <div>
                <div className="text-5xl font-black tracking-tighter text-white mb-1">
                  157+ <span className="text-lg font-bold opacity-30 text-white">DSA</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Problems Solved</div>
              </div>
              <div>
                <div className="text-5xl font-black tracking-tighter text-white mb-1">
                  18 <span className="text-lg font-bold opacity-30 text-primary">REPOS</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">On GitHub</div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-white/40">
              <span>STATUS: BUILDING</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                NSUT'28
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[9px] font-bold font-sans uppercase tracking-widest text-white/40">Scroll Down</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
