import { Terminal, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-2 mb-6 text-emerald-400">
          <Terminal className="w-5 h-5" />
          <span className="font-mono text-sm">$ whoami</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono">
          <span className="text-emerald-400">&lt;</span>
          VIre
          <span className="text-emerald-400"> /&gt;</span>
        </h1>

        <div className="font-mono text-xl md:text-2xl text-slate-300 mb-8">
          <span className="text-emerald-400">const</span> role ={' '}
          <span className="text-amber-400">"Full-Stack Software Engineer"</span>;
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Building elegant solutions to complex problems. Passionate about clean code,
          scalable architecture, and creating exceptional user experiences.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-mono font-semibold rounded transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-mono font-semibold rounded transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-emerald-400" />
      </a>
    </section>
  );
}
