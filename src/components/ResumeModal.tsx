import { useState } from "react";
import { X, Printer, Copy, Check, GraduationCap, Award, Code } from "lucide-react";
import { motion } from "motion/react";

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const plainText = `SAURABH RAJ SHEKHAR
+91 96435 49110 | shekharsaurabhraj@gmail.com
GitHub: github.com/Zephyrex21 | LeetCode: leetcode.com/u/Zephyrex_21

EDUCATION
B.Tech (CSE – Data Science) — Netaji Subhas University of Technology | 2024–Present
CGPA: 7.36

PROJECTS
1. UrbanHeat — Urban Heat Island Analyzer
   Python, FastAPI, XGBoost, SHAP, GeoPandas, React, Vite, Deck.gl, MapLibre GL, Recharts
   AI/ML full-stack web app analyzing urban heat islands across 20 Indian cities using
   Landsat satellite data; single XGBoost model trained with leave-cities-out cross-validation
   for generalization to unseen cities. SHAP-based driver analysis explaining per-grid heat
   contributors; interactive Scenario Builder simulates cooling interventions with live
   before/after split-view map. Submitted to ISRO BAH 2026 hackathon. Deployed on Vercel
   (frontend) and Render (FastAPI backend); GeoParquet flat files for zero-infrastructure
   data storage.
   Live: urban-heat-mitigation-mu.vercel.app | GitHub: Zephyrex21/urban-heat-mitigation

2. GitHub Radar — GitHub Contribution Analyzer
   React, Vite, GitHub REST API, Recharts, Tailwind CSS
   Dashboard that fetches and visualizes any user's GitHub profile data — repositories,
   commit history, language distribution, and contribution streaks — via the GitHub REST API.
   Interactive Recharts visualizations for language breakdown and activity graphs; clean
   Apple-inspired UI built with React and Tailwind CSS.
   Live: github-contribution-radar.vercel.app | GitHub: Zephyrex21/github-contribution-radar

3. Cryptex — Token-Based File Sharing Platform
   Node.js, Express.js, MongoDB Atlas, Supabase Storage, HTML, CSS, JavaScript
   Secure file sharing platform with upload, download, folder organization, and file preview —
   generating unique share tokens per item so database IDs are never exposed to end users.
   Public/private visibility toggle; 9 REST API modules; MongoDB for metadata, Supabase
   Storage for file content. Deployed on Render with production-grade environment
   configuration and ISC-licensed open source release.
   Live: cryptex-file-sharing.onrender.com | GitHub: Zephyrex21/Cryptex_File_Sharing

4. Automata Lab — Interactive Automata Visualizer
   JavaScript, HTML, CSS (Vanilla — zero dependencies)
   Web-based simulation tool for visualizing DFA, NFA, and model conversions — making Theory
   of Automata concepts interactive with step-by-step input processing and state transition
   diagrams. Supports NFA-to-DFA conversion with live diagram rendering; deployed on Netlify
   with zero build tooling overhead. Widely used by NSUT CSDS peers for TAFL coursework practice.
   Live: automata-lab.netlify.app | GitHub: Zephyrex21/Automata-Visualizer

TECHNICAL SKILLS
Languages: Python, JavaScript, HTML, CSS, C++
Frameworks: React.js, Node.js, Express.js, Tailwind CSS, FastAPI, Flask
ML / Data: XGBoost, SHAP, GeoPandas, NumPy, Pandas, Scikit-learn
Tools: Git, VS Code, Postman, Jupyter Notebook, Vercel, Netlify, Render
Soft Skills: Quick Learner, Communication, Team Collaboration, Adaptability

OTHER INFORMATION
Languages Known: Hindi, English
LeetCode Profile: leetcode.com/u/Zephyrex_21`;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Couldn't copy automatically — please select and copy the text manually.");
    }
  };

  const projects = [
    {
      name: "UrbanHeat — Urban Heat Island Analyzer",
      stack: "Python · FastAPI · XGBoost · SHAP · GeoPandas · React · Vite · Deck.gl · MapLibre GL · Recharts",
      desc: "AI/ML full-stack app analyzing urban heat islands across 20 Indian cities using Landsat data. Single XGBoost model with leave-cities-out cross-validation. Submitted to ISRO BAH 2026 hackathon.",
      url: "urban-heat-mitigation-mu.vercel.app",
    },
    {
      name: "GitHub Radar — GitHub Contribution Analyzer",
      stack: "React · Vite · GitHub REST API · Recharts · Tailwind CSS",
      desc: "Dashboard that fetches and visualizes any GitHub user's profile data — repos, commit history, language distribution, and contribution streaks. Apple-inspired UI.",
      url: "github-contribution-radar.vercel.app",
    },
    {
      name: "Cryptex — Token-Based File Sharing Platform",
      stack: "Node.js · Express.js · MongoDB Atlas · Supabase Storage",
      desc: "Secure file sharing with upload, download, folders & preview. 9 REST API modules. ISC-licensed open source release on Render.",
      url: "cryptex-file-sharing.onrender.com",
    },
    {
      name: "Automata Lab — Interactive Automata Visualizer",
      stack: "JavaScript · HTML · CSS (Vanilla, zero dependencies)",
      desc: "Web-based DFA/NFA simulation tool with step-by-step input processing. Widely used by NSUT CSDS peers for TAFL coursework.",
      url: "automata-lab.netlify.app",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div initial={{ scale: 0.95, y: 15 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="t-card w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border t-bdr"
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b t-bdr flex justify-between items-center t-bg">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-black uppercase t-txt tracking-tight">Curriculum Vitae</h3>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleCopy}
              className="px-4 py-2 t-card border t-bdr2 t-txt rounded-full text-[10px] font-mono uppercase tracking-widest t-btn-inv transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy Text"}
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 t-card border t-bdr2 t-txt rounded-full text-[10px] font-mono uppercase tracking-widest t-btn-inv transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />Download PDF
            </a>
            <div className="w-px h-6 t-surface mx-1" />
            <button onClick={onClose} className="p-2 hover:bg-primary/10 rounded-full t-txt60 hover:text-primary transition-all cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12 overflow-y-auto flex-1 font-sans space-y-8 t-card">
          {/* Header block */}
          <div className="border-b-2 border-primary pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-black tracking-tighter uppercase t-txt">SAURABH RAJ SHEKHAR</h1>
              <p className="text-primary font-mono text-xs tracking-widest uppercase mt-1">Full-Stack Developer · CSE (Data Science) Student · AI/ML Enthusiast</p>
            </div>
            <div className="text-xs t-txt60 space-y-1 md:text-right font-medium font-mono uppercase tracking-wide">
              <p>+91 96435 49110</p>
              <p>shekharsaurabhraj@gmail.com</p>
              <p>github.com/Zephyrex21</p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// EDUCATION</h4>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <div className="font-bold t-txt text-sm flex items-center gap-1.5 font-display uppercase tracking-tight">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />B.Tech CSE (Data Science) — NSUT Delhi
                </div>
                <p className="text-xs t-txt50 ml-6 mt-1 font-light">Netaji Subhas University of Technology, New Delhi · CGPA: 7.36</p>
              </div>
              <span className="text-[10px] font-mono border border-primary/20 bg-primary/5 text-primary px-2 py-0.5 rounded uppercase">2024–Present</span>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// KEY_PROJECTS</h4>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.name} className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 border border-primary/20 text-primary rounded shrink-0 mt-0.5">
                    <Code className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold t-txt text-sm font-display uppercase tracking-tight">{p.name}</div>
                    <div className="text-[10px] font-mono text-primary/80 mt-0.5 uppercase tracking-wide">{p.stack}</div>
                    <p className="text-xs t-txt60 mt-1 font-light leading-relaxed">{p.desc}</p>
                    <p className="text-[10px] font-mono t-txt40 mt-0.5">🔗 {p.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// TECHNICAL_SKILLS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed t-txt60">
              {[
                { label: "LANGUAGES", val: "Python, JavaScript, HTML, CSS, C++" },
                { label: "FRAMEWORKS", val: "React.js, Node.js, Express.js, Tailwind CSS, FastAPI, Flask" },
                { label: "ML / DATA", val: "XGBoost, SHAP, GeoPandas, NumPy, Pandas, Scikit-learn" },
                { label: "TOOLS", val: "Git, VS Code, Postman, Jupyter Notebook, Vercel, Netlify, Render" },
                { label: "SOFT SKILLS", val: "Quick Learner, Communication, Team Collaboration, Adaptability" },
              ].map((sk) => (
                <div key={sk.label}>
                  <span className="font-mono t-txt font-bold block mb-1 uppercase tracking-wider text-[10px]">// {sk.label}</span>
                  {sk.val}
                </div>
              ))}
            </div>
          </div>

          {/* Other Information */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest border-l-2 border-primary pl-2">// OTHER_INFORMATION</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs t-txt60">
              <div><span className="font-bold t-txt block mb-1 font-mono uppercase">Languages Known</span>Hindi, English</div>
              <div><span className="font-bold t-txt block mb-1 font-mono uppercase">LeetCode</span>leetcode.com/u/Zephyrex_21</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t t-bdr flex justify-end gap-3 t-bg">
          <button onClick={onClose} className="px-6 py-2 border t-bdr2 t-txt rounded-full text-xs uppercase tracking-widest font-bold cursor-pointer t-btn-inv transition-all duration-200">
            Close
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 bg-primary text-on-primary rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 cursor-pointer t-btn-inv transition-all duration-200"
          >
            <Printer className="w-4 h-4" />Download PDF
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
