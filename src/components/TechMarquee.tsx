import { Sparkles } from "lucide-react";

export default function TechMarquee() {
  const techs = [
    "REACT", "PYTHON", "TAILWIND", "NODE.JS", "C++",
    "EXPRESS", "FASTAPI", "MONGODB", "SUPABASE", "DSA", "GIT", "VERCEL",
  ];
  const fullList = [...techs, ...techs];

  return (
    <div className="py-14 bg-[#080808] overflow-hidden whitespace-nowrap relative border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee inline-flex items-center gap-16 md:gap-24">
        {fullList.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-6 md:gap-8 select-none">
            <span className="text-3xl md:text-5xl font-black text-white/20 font-display hover:text-primary hover:opacity-100 transition-colors duration-300 tracking-tighter uppercase">
              {tech}
            </span>
            <Sparkles className="w-5 h-5 text-primary/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
