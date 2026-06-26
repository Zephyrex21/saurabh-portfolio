import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, BookOpen, Target, Shield, Check, X, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "urban-heat",
      name: "Urban Heat Mitigation",
      category: "AI/ML Project",
      tagline: "AI-Powered Urban Heat Analysis for 20 Indian Cities.",
      description: "AI-powered urban heat island analysis and cooling-intervention simulator covering 20 Indian cities. Features an interactive heat map (Deck.gl + MapLibre), SHAP-based driver analysis showing what's causing heat in each grid cell, and a scenario builder to simulate cooling interventions like tree cover and reflective roofs.",
      imageUrl: "https://image.thum.io/get/width/1200/https://urban-heat-mitigation-mu.vercel.app/",
      liveUrl: "https://urban-heat-mitigation-mu.vercel.app/",
      codeUrl: "https://github.com/Zephyrex21/urban-heat-mitigation",
      tags: ["Python", "FastAPI", "XGBoost", "SHAP", "React", "Deck.gl", "MapLibre", "Recharts"],
      features: [
        "Interactive geospatial heat map",
        "SHAP-based driver analysis",
        "Cooling scenario builder",
        "20 Indian cities covered",
        "Before/after split view",
        "Light / Dark mode toggle",
        "LST vs Air Temp explainer",
        "Fully documented FastAPI"
      ],
      challenges: "Training a single model across 20 geographically diverse Indian cities with different climate patterns, while keeping accuracy fair for each city and not overfitting to any one region.",
      solutions: "Used a shared XGBoost model with a leave-cities-out cross-validation split — a fair test of generalization to entirely new cities rather than just in-distribution accuracy."
    },
    {
      id: "cryptex",
      name: "Cryptex",
      category: "Full-Stack App",
      tagline: "Secure Token-Based File Sharing Platform.",
      description: "A MERN-stack file sharing platform where users upload files, organize them into folders, generate unique share tokens, and control public/private access. File contents are stored in Supabase Storage while metadata is managed in MongoDB — all without requiring user accounts.",
      imageUrl: "https://image.thum.io/get/width/1200/https://cryptex-file-sharing.onrender.com/",
      liveUrl: "https://cryptex-file-sharing.onrender.com/",
      codeUrl: "https://github.com/Zephyrex21/Cryptex_File_Sharing",
      tags: ["Node.js", "Express.js", "MongoDB", "Supabase", "JavaScript", "HTML", "CSS"],
      features: [
        "File upload & download",
        "Folder organization system",
        "Unique share token per file",
        "Public / private visibility",
        "File preview support",
        "Rename & delete operations",
        "Token-based access without accounts",
        "REST API with full route coverage"
      ],
      challenges: "Designing a secure access-control system that allows sharing files with others without exposing raw database IDs or requiring full user authentication.",
      solutions: "Built an opaque-token system where every file and folder gets a unique share token. Database IDs never leave the server; Supabase Service Role Keys remain server-side only."
    },
    {
      id: "automata-lab",
      name: "Automata Lab",
      category: "Algorithm Visualizer",
      tagline: "Making Theory of Computation Visual & Intuitive.",
      description: "An interactive web-based Automata Lab for visualizing and simulating NFA, DFA, and their conversions. Step-by-step subset construction and DFA minimization are animated in real time — built to make Theory of Automata concepts explorable and hands-on for CS students.",
      imageUrl: "https://image.thum.io/get/width/1200/https://automata-lab.netlify.app/",
      liveUrl: "https://automata-lab.netlify.app/",
      codeUrl: "https://github.com/Zephyrex21/Automata-Visualizer",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Netlify"],
      features: [
        "NFA to DFA conversion",
        "Step-by-step subset construction",
        "DFA minimization algorithm",
        "Interactive state transition diagrams",
        "State simulation / step through",
        "Visual state highlighting",
        "Multiple automata examples"
      ],
      challenges: "Rendering complex state transition diagrams — especially with self-loops and bidirectional transitions — in a way that remains readable and uncluttered for larger automata.",
      solutions: "Implemented a custom graph layout with force-directed positioning and arc-curve interpolation for self-loops, ensuring transitions never visually overlap with state nodes."
    }
  ];

  const categories = ["All", "AI/ML Project", "Full-Stack App", "Algorithm Visualizer"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    const glow = card.querySelector(".card-glow-element") as HTMLDivElement;
    if (glow) { glow.style.left = `${x}px`; glow.style.top = `${y}px`; glow.style.opacity = "0.15"; }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    const glow = card.querySelector(".card-glow-element") as HTMLDivElement;
    if (glow) { glow.style.opacity = "0"; }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-black border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">// SELECTED_WORKS</span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">Project Showcase</h2>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 bg-[#0d0d0d] p-1 border border-white/10 rounded-lg self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded text-[10px] font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  filter === cat ? "bg-primary text-on-primary shadow-lg font-bold" : "text-white/60 hover:text-primary"
                }`}
              >
                {cat === "All" ? "All" : cat.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {filteredProjects.map((project, idx) => {
            const isImageLeft = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Block */}
                <div className={`lg:col-span-7 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bg-[#050505] border border-white/10 rounded-2xl p-4 shadow-2xl relative overflow-hidden group transition-all duration-300 ease-out cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="card-glow-element absolute w-64 h-64 bg-primary rounded-full blur-3xl pointer-events-none opacity-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300" style={{ left: "0px", top: "0px" }} />
                    <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/60 relative">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        src={project.imageUrl}
                        alt={`${project.name} preview`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white text-black px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-black shadow-2xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content Block */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/15 rounded text-[10px] font-mono uppercase tracking-wider mb-5 text-primary max-w-fit">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.category}
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">{project.name}</h3>
                  <p className="text-primary font-mono text-xs uppercase tracking-wider mb-4">// {project.tagline}</p>
                  <p className="text-white/60 text-sm md:text-base font-light mb-8 leading-relaxed font-sans">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-wide text-white/70">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="px-6 py-3 bg-[#0d0d0d] border border-white/25 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer"
                    >
                      View Case Study
                      <BookOpen className="w-4 h-4" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-on-primary hover:bg-white hover:text-black transition-all duration-300 rounded-full text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-white/20 hover:border-primary hover:bg-primary/10 rounded-full flex items-center justify-center text-white hover:text-primary transition-all duration-300"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#0b0b0b] border border-white/10 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-black">
                <div>
                  <div className="text-primary text-[10px] font-mono uppercase tracking-widest mb-1">// CASE_STUDY_ANALYSIS</div>
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-white">{selectedCaseStudy.name} Showcase</h3>
                </div>
                <button onClick={() => setSelectedCaseStudy(null)} className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-primary transition-all cursor-pointer">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-6 border-b border-white/5">
                  <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group bg-black">
                    <img src={selectedCaseStudy.imageUrl} alt={selectedCaseStudy.name} className="w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="space-y-4">
                    <div className="inline-block px-2.5 py-1 bg-primary/5 text-primary border border-primary/10 text-[10px] font-mono uppercase rounded">{selectedCaseStudy.category}</div>
                    <h4 className="font-display text-xl font-black uppercase tracking-tight text-white">Project Overview</h4>
                    <p className="text-sm text-white/60 leading-relaxed font-light">{selectedCaseStudy.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {selectedCaseStudy.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono uppercase rounded text-white/80">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedCaseStudy.features && (
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// KEY_CAPABILITIES</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedCaseStudy.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="p-1 bg-primary/10 border border-primary/20 text-primary rounded shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs text-white/80 leading-relaxed font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
                      <Target className="w-4 h-4" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{selectedCaseStudy.challenges}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
                      <Shield className="w-4 h-4" />
                      <span>The Solution</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{selectedCaseStudy.solutions}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
                      <Terminal className="w-4 h-4" />
                      <span>Core Logic</span>
                    </div>
                    <span className="text-[9px] font-mono text-white/40 uppercase">
                      {selectedCaseStudy.id === "urban-heat" ? "Python / FastAPI" : selectedCaseStudy.id === "cryptex" ? "Node.js / Express" : "React / JavaScript"}
                    </span>
                  </div>
                  <pre className="bg-black border border-white/10 p-5 rounded-xl text-xs overflow-x-auto font-mono text-primary leading-relaxed">
{selectedCaseStudy.id === "urban-heat" ? `# FastAPI endpoint — heat grid with SHAP driver scores
@app.get("/grid")
async def get_city_grid(city: str = "delhi"):
    df = load_city_data(city)
    preds = model.predict(df[FEATURES])
    shap_vals = explainer.shap_values(df[FEATURES])
    df["lst_pred"] = preds
    df["top_driver"] = pd.Series(shap_vals).apply(
        lambda row: FEATURES[np.argmax(np.abs(row))]
    )
    return df[["lat","lon","lst_pred","top_driver"]].to_dict("records")` : selectedCaseStudy.id === "cryptex" ? `// Generate a unique opaque share token for a file
const generateToken = () => crypto.randomBytes(16).toString("hex");

router.post("/upload", upload.single("file"), async (req, res) => {
  const { data, error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .upload(\`files/\${Date.now()}_\${req.file.originalname}\`, req.file.buffer);

  if (error) return res.status(500).json({ error: error.message });

  const file = await File.create({
    name: req.file.originalname,
    storagePath: data.path,
    shareToken: generateToken(),
    visibility: "private",
  });
  res.status(201).json(file);
});` : `// NFA to DFA subset construction (core algorithm)
function nfaToDfa(nfa) {
  const startClosure = epsilonClosure(nfa, [nfa.start]);
  const queue = [startClosure];
  const dfa = { states: new Map(), start: stateKey(startClosure) };

  while (queue.length > 0) {
    const current = queue.shift();
    const key = stateKey(current);
    dfa.states.set(key, { accepting: current.some(s => nfa.accepting.has(s)) });

    for (const symbol of nfa.alphabet) {
      const next = epsilonClosure(nfa, move(nfa, current, symbol));
      if (!dfa.states.has(stateKey(next))) queue.push(next);
      dfa.states.get(key)[symbol] = stateKey(next);
    }
  }
  return dfa;
}`}
                  </pre>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 flex justify-end gap-3 bg-black">
                <button onClick={() => setSelectedCaseStudy(null)} className="px-6 py-2 border border-white/20 text-white rounded-full text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors duration-200 font-bold cursor-pointer bg-transparent">
                  Close
                </button>
                <a href={selectedCaseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-on-primary rounded-full text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200 font-bold flex items-center gap-1.5 cursor-pointer">
                  View Live Site
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
