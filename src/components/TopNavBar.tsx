import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TopNavBarProps {
  onOpenResume: () => void;
}

export default function TopNavBar({ onOpenResume }: TopNavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <nav id="top-navbar" className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12">
          <a href="#home" className="font-display text-2xl md:text-3xl font-black tracking-tighter uppercase text-white hover:text-primary transition-colors duration-200">
            ZEPHYREX<span className="text-primary">.21</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className={`relative font-sans text-xs font-bold uppercase tracking-widest transition-opacity py-1 ${activeSection === link.id ? "text-primary opacity-100" : "text-white opacity-60 hover:opacity-100"}`}>
                {link.name}
                {activeSection === link.id && (
                  <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={onOpenResume} className="px-6 py-2 border border-white/20 text-white rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors duration-250 font-bold cursor-pointer flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
            <a href="#contact" className="px-6 py-2 bg-primary text-on-primary rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-250 font-bold cursor-pointer">
              Hire Me
            </a>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button onClick={onOpenResume} className="p-2 border border-white/20 text-white hover:bg-white hover:text-black rounded-full font-bold transition-colors flex items-center justify-center cursor-pointer" title="Resume">
              <FileText className="w-4 h-4" />
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white hover:text-primary transition-colors cursor-pointer" aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg md:hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a key={link.id} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display text-sm font-extrabold uppercase tracking-widest py-1 transition-colors ${activeSection === link.id ? "text-primary pl-2 border-l-2 border-primary" : "text-white/60 hover:text-primary"}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button onClick={() => { setIsMobileMenuOpen(false); onOpenResume(); }}
                  className="w-full py-3 border border-white/20 text-white rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200 font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </button>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-primary text-on-primary rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black text-center font-bold block cursor-pointer transition-colors">
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
