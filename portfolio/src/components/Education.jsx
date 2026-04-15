import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationTimeline = [
    {
      degree: "Bachelor of Engineering (Information Science)",
      institution: "Sambhram Institute of Technology | Bangalore",
      duration: "2023 – Present",
      score: "CGPA: 8.76 (till 5th Semester)",
      active: true
    },
    {
      degree: "Pre-University Course",
      institution: "Jindal Pre University College | Bangalore",
      duration: "Completed",
      score: "Score: 91.16%",
      active: false
    },
    {
      degree: "Class 10 (ICSE)",
      institution: "Triveni Public School | Bangalore",
      duration: "Completed",
      score: "Score: 91%",
      active: false
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full -translate-y-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500 inline-block">
            Education Journey
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full md:mx-auto"></div>
        </div>

        <div className="relative border-l border-slate-700/50 pl-8 ml-4 space-y-12">
          {educationTimeline.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-900 ${edu.active ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'bg-slate-700 group-hover:bg-purple-500 transition-colors'}`}></div>
              
              <div className="glass-nav rounded-2xl p-6 md:p-8 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 flex items-center gap-3">
                    <GraduationCap className={edu.active ? 'text-cyan-400' : 'text-purple-400'} size={24} />
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800 w-fit">
                    <Calendar size={14} />
                    {edu.duration}
                  </div>
                </div>
                
                <h4 className="text-lg text-slate-300 font-medium mb-4">{edu.institution}</h4>
                
                <div className="flex items-center gap-2 text-emerald-400 font-semibold bg-emerald-500/10 w-fit px-4 py-2 rounded-lg border border-emerald-500/20">
                  <Award size={18} />
                  {edu.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
