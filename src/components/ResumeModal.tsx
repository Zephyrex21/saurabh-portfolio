import { useState } from "react";
import { X, Printer, Copy, Check, GraduationCap, Award, Code } from "lucide-react";
import { motion } from "motion/react";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const text = `
SAURABH RAJ SHEKHAR
CSE (Data Science) Student & Frontend Developer
Email: shekharsaurabhraj@gmail.com | GitHub: github.com/Zephyrex21
New Delhi, India | LeetCode: leetcode.com/u/Zephyrex_21

SUMMARY
2nd year B.Tech CSE (Data Science) student at NSUT Delhi (2028). Frontend developer passionate about building interactive web applications, algorithm visualizers, and AI/ML tools. Active on LeetCode (62 problems) and Code360 (95 problems, 41-day streak).

EDUCATION
B.Tech CSE (Data Science) — Netaji Subhas University of Technology (NSUT), Delhi | 2024–2028
Higher Secondary — Kendriya Vidyalaya Gole Market, Delhi | 2023

PROJECTS
1. Urban Heat Mitigation (AI/ML) — Python, FastAPI, XGBoost, SHAP, React, Deck.gl, MapLibre
   AI-powered urban heat island analysis covering 20 Indian cities.
   Live: urban-heat-mitigation-mu.vercel.app | GitHub: github.com/Zephyrex21/urban-heat-mitigation

2. Cryptex — File Sharing Platform (Full-Stack) — Node.js, Express, MongoDB, Supabase
   Token-based secure file sharing without user accounts.
   Live: cryptex-file-sharing.onrender.com | GitHub: github.com/Zephyrex21/Cryptex_File_Sharing

3. Automata Lab (Visualizer) — React.js, Tailwind CSS, JavaScript
   Interactive NFA→DFA visual converter with step-by-step subset construction.
   Live: automata-lab.netlify.app | GitHub: github.com/Zephyrex21/Automata-Visualizer

4. Red Blackify (Visualizer) — React.js, Tailwind CSS
   Interactive RBT & AVL Tree visualizer with animations and pseudocode.
   Live: rbt-visualizer.netlify.app

5. CFG Studio — React.js, Tailwind CSS
   Context-Free Grammar tool with derivation visualization and parse trees.
   Live: cfgstudio.netlify.app

TECHNICAL SKILLS
Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
Backend/Languages: Python, C++, Node.js, Express.js, FastAPI
Databases: MongoDB, Supabase
CS Theory: Theory of Automata, DSA, OS, DBMS
Tools: Git, GitHub, Netlify, Vercel, Postman

CODING PROFILES
LeetCode: 62 problems (38 Easy / 21 Medium / 3 Hard) | leetcode.com/u/Zephyrex_21
Code360: 95 problems (70E / 21M / 4H) | Max streak: 41 days

CERTIFICATIONS
- Designing Blockchain Solutions using Amazon Managed Blockchain, AWS (Nov 2025)
- Fundamentals of Machine Learning and Artificial Intelligence, AWS (Nov 2025)
- Soft Skills and Personality Development, NPTEL Swayam (Aug–Nov 2025)
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => { window.print(); };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 print:p-0 print:bg-white"
    >
      <motion.div
        initial={{ scale: 0.95, y: 15 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-[#0b0b0b] w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/10 print:shadow-none print:border-none print:w-full print:h-full print:max-h-full"
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-black print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-black uppercase text-white tracking-tight">Curriculum Vitae</h3>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleCopyText} className="px-4 py-2 bg-[#0d0d0d] border border-white/20 text-white rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-1.5" title="Copy as Plain Text">
              {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy Text"}
            </button>
            <button onClick={handlePrint} className="px-4 py-2 bg-[#0d0d0d] border border-white/20 text-white rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-1.5" title="Download or Print PDF">
              <Printer className="w-3.5 h-3.5" />
              PDF
            </button>
            <div className="w-px h-6 bg-white/10 mx-1" />
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-primary transition-all cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div id="resume-printable-area" className="p-8 md:p-12 overflow-y-auto flex-1 font-sans space-y-8 bg-[#0b0b0b] text-white print:bg-white print:text-black print:p-0">

          {/* Header */}
          <div className="border-b-2 border-primary pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-black tracking-tighter uppercase text-white print:text-black">SAURABH RAJ SHEKHAR</h1>
              <p className="text-primary font-mono text-xs tracking-widest uppercase mt-1">CSE (Data Science) Student · Frontend Developer · AI/ML Enthusiast</p>
            </div>
            <div className="text-xs text-white/60 print:text-black/70 space-y-1 md:text-right font-medium font-mono uppercase tracking-wide">
              <p>shekharsaurabhraj@gmail.com</p>
              <p>github.com/Zephyrex21</p>
              <p>New Delhi, India</p>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// ABOUT</h4>
            <p className="text-sm text-white/70 print:text-black/80 leading-relaxed font-light">
              2nd year B.Tech CSE (Data Science) student at NSUT Delhi (Class of 2028). I build interactive web apps, algorithm visualizers, and AI/ML experiments. Active problem-solver with 157+ DSA problems solved across LeetCode and Code360, and 18+ GitHub repositories.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// EDUCATION</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <div className="font-bold text-white print:text-black text-sm flex items-center gap-1.5 font-display uppercase tracking-tight">
                    <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                    B.Tech CSE (Data Science) — NSUT Delhi
                  </div>
                  <p className="text-xs text-white/50 print:text-black/60 ml-6 mt-1 font-light">Netaji Subhas University of Technology, New Delhi</p>
                </div>
                <span className="text-[10px] font-mono border border-primary/20 bg-primary/5 text-primary px-2 py-0.5 rounded uppercase">2024–2028</span>
              </div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <div className="font-bold text-white print:text-black text-sm flex items-center gap-1.5 font-display uppercase tracking-tight">
                    <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                    Higher Secondary — Kendriya Vidyalaya Gole Market
                  </div>
                  <p className="text-xs text-white/50 print:text-black/60 ml-6 mt-1 font-light">Mathematics & Science stream, New Delhi</p>
                </div>
                <span className="text-[10px] font-mono border border-primary/20 bg-primary/5 text-primary px-2 py-0.5 rounded uppercase">2023</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// KEY_PROJECTS</h4>
            <div className="space-y-4">
              {[
                { name: "Urban Heat Mitigation", stack: "Python · FastAPI · XGBoost · SHAP · React · Deck.gl", desc: "AI-powered urban heat island analysis & cooling-intervention simulator for 20 Indian cities.", url: "urban-heat-mitigation-mu.vercel.app" },
                { name: "Cryptex — File Sharing Platform", stack: "Node.js · Express · MongoDB · Supabase", desc: "Secure token-based file sharing platform — upload, organize, share without user accounts.", url: "cryptex-file-sharing.onrender.com" },
                { name: "Automata Lab", stack: "React.js · Tailwind CSS · JavaScript", desc: "Interactive NFA→DFA converter with step-by-step subset construction & DFA minimization.", url: "automata-lab.netlify.app" },
                { name: "Red Blackify", stack: "React.js · Tailwind CSS", desc: "Interactive Red-Black Tree & AVL Tree visualizer with animations and pseudocode.", url: "rbt-visualizer.netlify.app" },
              ].map((p) => (
                <div key={p.name} className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 border border-primary/20 text-primary rounded shrink-0 mt-0.5">
                    <Code className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white print:text-black text-sm font-display uppercase tracking-tight">{p.name}</div>
                    <div className="text-[10px] font-mono text-primary/80 mt-0.5 uppercase tracking-wide">{p.stack}</div>
                    <p className="text-xs text-white/60 print:text-black/70 mt-1 font-light leading-relaxed">{p.desc}</p>
                    <p className="text-[10px] font-mono text-white/40 print:text-black/40 mt-0.5">🔗 {p.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// TECHNICAL_SKILLS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-white/60 print:text-black/70">
              <div>
                <span className="font-mono text-white print:text-black font-bold block mb-1 uppercase tracking-wider">// FRONTEND</span>
                React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design
              </div>
              <div>
                <span className="font-mono text-white print:text-black font-bold block mb-1 uppercase tracking-wider">// BACKEND / LANGUAGES</span>
                Python, C++, Node.js, Express.js, FastAPI, MongoDB, Supabase
              </div>
              <div>
                <span className="font-mono text-white print:text-black font-bold block mb-1 uppercase tracking-wider">// CS THEORY</span>
                Theory of Automata, Data Structures & Algorithms, OS, DBMS
              </div>
              <div>
                <span className="font-mono text-white print:text-black font-bold block mb-1 uppercase tracking-wider">// TOOLS</span>
                Git, GitHub, Netlify, Vercel, Postman, VS Code
              </div>
            </div>
          </div>

          {/* DSA Profiles */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// CODING_PROFILES</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white/60 print:text-black/70">
              <div>
                <span className="font-bold text-white print:text-black block mb-1 font-mono uppercase">LeetCode</span>
                62 problems · 38 Easy / 21 Medium / 3 Hard · Max streak: 29 days
              </div>
              <div>
                <span className="font-bold text-white print:text-black block mb-1 font-mono uppercase">Code360 (Coding Ninjas)</span>
                95 problems · 70E / 21M / 4H · Max streak: 41 days · 602 submissions
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-white/10 flex justify-end gap-3 bg-black print:hidden">
          <button onClick={onClose} className="px-6 py-2 border border-white/20 text-white rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors font-bold cursor-pointer bg-transparent">
            Close
          </button>
          <button onClick={handlePrint} className="px-6 py-2 bg-primary text-on-primary rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors font-bold flex items-center gap-1.5 cursor-pointer">
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
