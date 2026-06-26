import { useEffect, useState, useRef } from "react";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "motion/react";

function Counter({ target, duration = 1.5, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) { requestAnimationFrame(animate); } else { setCount(target); }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-black tracking-tighter text-primary">
      {count}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Column 1: Image & Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm md:max-w-md"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-black border border-white/10 p-3 shadow-2xl shadow-black">
                <img
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer"
                  src="https://avatars.githubusercontent.com/u/178813961?v=4"
                  alt="Saurabh Raj Shekhar"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-4 md:-right-6 bg-black border border-white/10 p-5 md:p-6 rounded-xl shadow-2xl flex items-center gap-4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-primary font-display text-xl md:text-2xl font-black leading-none">NSUT</div>
                  <div className="text-white/40 font-mono text-[9px] uppercase tracking-widest mt-1">CSE (DS) '28</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Column 2: Content & Stats */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">// MY_STORY</span>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mb-6 leading-none">
                Learning Through <span className="text-primary">Building</span>
              </h2>

              <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed font-sans font-light">
                2nd year B.Tech CSE (Data Science) student at NSUT Delhi. I love turning abstract computer science concepts — automata, trees, scheduling — into interactive, visual tools that anyone can explore. From full-stack apps with the MERN stack to AI/ML experiments with Python and geospatial data, I build to learn and learn by building.
              </p>

              {/* Bullet points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-bold text-[10px] font-mono uppercase tracking-widest">Interactive Web Apps</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-bold text-[10px] font-mono uppercase tracking-widest">Algorithm Visualizers</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-bold text-[10px] font-mono uppercase tracking-widest">AI/ML Experiments</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-bold text-[10px] font-mono uppercase tracking-widest">Consistent DSA Practice</span>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="text-center md:text-left">
                  <Counter target={7} suffix="+" />
                  <div className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-1.5 font-sans">Projects Deployed</div>
                </div>
                <div className="text-center md:text-left">
                  <Counter target={157} suffix="+" />
                  <div className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-1.5 font-sans">DSA Problems</div>
                </div>
                <div className="text-center md:text-left">
                  <Counter target={18} suffix="" />
                  <div className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-1.5 font-sans">GitHub Repos</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
