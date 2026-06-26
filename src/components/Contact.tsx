import { useState, useEffect, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Trash2, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContactSubmission } from "../types";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Collaboration");
  const [message, setMessage] = useState("");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_submissions");
    if (saved) {
      try { setSubmissions(JSON.parse(saved)); } catch (e) { console.error(e); }
    }
  }, []);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email.trim()) { tempErrors.email = "Email is required"; }
    else if (!/\S+@\S+\.\S+/.test(email)) { tempErrors.email = "Email is invalid"; }
    if (!message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const newSubmission: ContactSubmission = {
      id: "msg-" + Date.now(), name, email, service, message,
      timestamp: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    };
    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem("portfolio_submissions", JSON.stringify(updated));
    setName(""); setEmail(""); setService("Collaboration"); setMessage("");
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleDeleteSubmission = (id: string) => {
    const updated = submissions.filter((s) => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem("portfolio_submissions", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 md:p-16 lg:p-20 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/2 opacity-[0.03] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">

            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">// GET_IN_TOUCH</span>
                <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                  Let's build something <span className="text-primary italic font-black">cool</span> together.
                </h2>
                <p className="text-white/60 text-base md:text-lg mb-10 leading-relaxed font-sans font-light">
                  Open to internship opportunities, interesting collaboration projects, open-source contributions, and anything that involves building cool things.
                </p>
              </div>
              <div className="space-y-6 lg:mb-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">Email Me Directly</p>
                    <a href="mailto:shekharsaurabhraj@gmail.com" className="font-bold text-white hover:text-primary transition-colors font-display text-base md:text-lg">
                      shekharsaurabhraj@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">Location</p>
                    <p className="font-bold text-white font-display text-base md:text-lg">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-[#0d0d0d] p-6 md:p-10 rounded-xl border border-white/10 shadow-lg relative">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-primary/10 border border-primary/20 text-primary rounded flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-bold text-sm uppercase font-mono tracking-wide">Message Sent!</p>
                      <p className="text-xs text-white/85 mt-0.5">Thanks for reaching out — Saurabh will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSendMessage} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-white/60 uppercase tracking-widest">Your Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rahul Verma"
                      className={`w-full bg-black border rounded-lg p-4 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary text-white ${errors.name ? "border-rose-500" : "border-white/10 focus:border-primary"}`}
                    />
                    {errors.name && <span className="text-xs font-mono text-rose-500">{errors.name}</span>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-white/60 uppercase tracking-widest">Email Address</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. you@example.com"
                      className={`w-full bg-black border rounded-lg p-4 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary text-white ${errors.email ? "border-rose-500" : "border-white/10 focus:border-primary"}`}
                    />
                    {errors.email && <span className="text-xs font-mono text-rose-500">{errors.email}</span>}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono text-white/60 uppercase tracking-widest">Reason for Reaching Out</label>
                  <select value={service} onChange={(e) => setService(e.target.value)}
                    className="w-full bg-black border border-white/10 focus:border-primary text-white rounded-lg p-4 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    <option value="Collaboration" className="bg-black text-white">Project Collaboration</option>
                    <option value="Internship" className="bg-black text-white">Internship Opportunity</option>
                    <option value="OpenSource" className="bg-black text-white">Open Source Contribution</option>
                    <option value="Other" className="bg-black text-white">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono text-white/60 uppercase tracking-widest">Your Message</label>
                  <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your idea, project, or opportunity..."
                    className={`w-full bg-black border rounded-lg p-4 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary text-white ${errors.message ? "border-rose-500" : "border-white/10 focus:border-primary"}`}
                  />
                  {errors.message && <span className="text-xs font-mono text-rose-500">{errors.message}</span>}
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {submissions.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-16 bg-[#050505] p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-black uppercase text-white tracking-tight">Your Sent Messages ({submissions.length})</h3>
                <p className="text-xs font-mono text-white/40 mt-0.5">Stored locally in your browser.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submissions.map((sub) => (
                <div key={sub.id} className="bg-black p-6 rounded-xl border border-white/10 shadow-md relative group">
                  <button onClick={() => handleDeleteSubmission(sub.id)} className="absolute top-4 right-4 text-white/30 hover:text-rose-500 p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer" title="Remove record">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="space-y-4 font-sans text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-white text-sm">{sub.name}</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/60">{sub.email}</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary font-mono font-bold uppercase rounded text-[9px] tracking-wide">{sub.service}</span>
                      <span className="text-white/40 flex items-center gap-1 font-mono text-[10px] uppercase">
                        <Calendar className="w-3.5 h-3.5" />
                        {sub.timestamp}
                      </span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded-lg text-white/85 leading-relaxed text-sm font-light">{sub.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
