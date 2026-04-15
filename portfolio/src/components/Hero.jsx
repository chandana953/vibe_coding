import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-nav border border-cyan-500/30 text-cyan-400 text-sm font-medium">
            <Terminal size={16} />
            <span>Information Science Engineering Student</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow">
              C D Chandana
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            I'm an aspiring software engineer with a strong foundation in Java, SQL, and modern web development. Eager to build real-world projects, solve problems, and grow into a skilled developer in a collaborative environment.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Contact Me <ArrowRight size={20} />
            </a>
            {/* Keeping download link as placeholder for actual resume */}
            <a 
              href="#" 
              className="px-8 py-4 glass-nav rounded-full font-bold text-slate-200 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Resume <Download size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative justify-center hidden md:flex">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
          
          <div className="relative w-80 h-80 rounded-full border-2 border-slate-800 p-2 border-dashed animate-[spin_20s_linear_infinite]">
            <div className="w-full h-full rounded-full border border-slate-800 p-2 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Terminal size={80} className="text-cyan-500/50 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
