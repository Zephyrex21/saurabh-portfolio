import { Layers, BarChart2, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const servicesList = [
    {
      id: "frontend-engineering",
      name: "Frontend Engineering",
      description: "Building clean, interactive React applications with responsive layouts, smooth animations, and component-driven architecture. Deployed and live on Netlify or Vercel.",
      icon: <Layers className="w-6 h-6 text-primary group-hover:text-black transition-colors" />,
      tag: "REACT-FOCUSED",
    },
    {
      id: "algorithm-visualization",
      name: "Algorithm Visualization",
      description: "Turning abstract CS concepts — automata, self-balancing trees, scheduling, constraint-solving — into animated, step-by-step interactive visualizers for learning.",
      icon: <BarChart2 className="w-6 h-6 text-primary group-hover:text-black transition-colors" />,
      tag: "EDUCATIONAL-TOOLS",
    },
    {
      id: "ai-ml-development",
      name: "AI/ML Development",
      description: "Applying machine learning models (XGBoost, SHAP explainability) and geospatial data pipelines to build data-driven web applications that solve real problems.",
      icon: <Zap className="w-6 h-6 text-primary group-hover:text-black transition-colors" />,
      tag: "DATA-DRIVEN",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">// WHAT_I_BUILD</span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">
              My Focus Areas
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-2xl border border-white/10 hover:border-primary transition-all duration-300 bg-black flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-primary bg-primary/5 px-2.5 py-1 border border-primary/10 rounded">{service.tag}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-black tracking-tight uppercase text-white mb-4 group-hover:text-primary transition-colors duration-200">{service.name}</h3>
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed font-sans mb-8">{service.description}</p>
              </div>
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest group-hover:translate-x-1.5 transition-transform duration-300 mt-4">
                <span>See Projects</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
