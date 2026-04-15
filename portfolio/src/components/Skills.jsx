import React from 'react';
import { Code2, Database, Layout, Lightbulb } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      icon: <Code2 className="text-cyan-400" size={24} />,
      skills: ["Java (Core)", "C++ (Basic)"]
    },
    {
      title: "Web Technologies",
      icon: <Layout className="text-purple-400" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React (Basic)", "Tailwind CSS"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-blue-400" size={24} />,
      skills: ["SQL (Basic)", "Firebase (Firestore, Auth)", "VS Code", "Canva"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="text-amber-400" size={24} />,
      skills: ["Problem-solving", "Quick learner", "Teamwork", "Communication", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500 inline-block">
            Technical Arsenal
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full md:mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="card-hover rounded-2xl p-6 group">
              <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
