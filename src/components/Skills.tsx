import { Laptop, Cpu, BookOpen, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend-core",
      title: "Frontend Core",
      description: "Building responsive, interactive React applications with clean component architecture and modern CSS.",
      icon: <Laptop className="w-5 h-5 text-primary group-hover:text-black transition-colors" />,
      skills: [
        { name: "React.js", level: "Proficient", pct: 85 },
        { name: "JavaScript (ES6+)", level: "Proficient", pct: 82 },
        { name: "HTML5 / CSS3", level: "Proficient", pct: 90 },
        { name: "Tailwind CSS", level: "Proficient", pct: 85 },
      ],
    },
    {
      id: "languages-backend",
      title: "Languages & Backend",
      description: "Writing Python scripts, C++ programs, and Node.js/Express APIs for data processing and full-stack apps.",
      icon: <Cpu className="w-5 h-5 text-primary group-hover:text-black transition-colors" />,
      skills: [
        { name: "Python", level: "Proficient", pct: 80 },
        { name: "C++", level: "Intermediate", pct: 70 },
        { name: "Node.js / Express.js", level: "Intermediate", pct: 72 },
      ],
    },
    {
      id: "cs-fundamentals",
      title: "CS Fundamentals",
      description: "Strong grounding in core CS theory — automata, data structures, operating systems, and databases.",
      icon: <BookOpen className="w-5 h-5 text-primary group-hover:text-black transition-colors" />,
      skills: [
        { name: "Data Structures & Algorithms", level: "Intermediate", pct: 75 },
        { name: "Theory of Automata (TAFL)", level: "Intermediate", pct: 78 },
        { name: "DBMS / OS Concepts", level: "Intermediate", pct: 68 },
      ],
    },
    {
      id: "tools-platforms",
      title: "Tools & Platforms",
      description: "Using Git for version control, Netlify/Vercel for deployment, and Supabase/MongoDB for data storage.",
      icon: <Wrench className="w-5 h-5 text-primary group-hover:text-black transition-colors" />,
      skills: [
        { name: "Git / GitHub", level: "Proficient", pct: 85 },
        { name: "Netlify / Vercel", level: "Proficient", pct: 88 },
        { name: "MongoDB / Supabase", level: "Intermediate", pct: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">// TECHNICAL_ARSENAL</span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">Capabilities</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 hover:border-primary hover:scale-[1.01] transition-all duration-300 bg-black flex flex-col justify-between group shadow-2xl"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-white">{cat.title}</h3>
                </div>
                <p className="text-white/60 text-sm font-light mb-8 leading-relaxed font-sans">{cat.description}</p>
                <div className="space-y-5">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white/90 font-sans">{skill.name}</span>
                        <span className="font-mono text-[10px] text-primary/95 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-primary/10 text-primary" />
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIdx * 0.05 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40">
                <span>Core Stack</span>
                <span className="font-bold text-primary group-hover:underline cursor-pointer">Active Node</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
