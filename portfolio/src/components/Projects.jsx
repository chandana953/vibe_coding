import React from 'react';
import { ExternalLink, Code, Monitor, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Tracker",
      description: "A web-based finance management tool to help users track expenses securely while visualizing their spending habits.",
      techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Chart.js"],
      features: [
        "Integrated Firebase (Firestore & Authentication) for secure data storage",
        "Visualized spending patterns using Chart.js",
        "Designed a responsive user interface for multiple devices"
      ],
      icon: <Smartphone className="text-emerald-400" size={32} />,
      color: "from-emerald-500/20 to-teal-900/20",
      borderColor: "group-hover:border-emerald-500/50"
    },
    {
      title: "Netflix Clone",
      description: "A Netflix-inspired web interface replicating the homepage layout and movie sections.",
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Designed a responsive UI replicating homepage layout",
        "Created an immersive movie browsing section",
        "Improved frontend development skills and UI design understanding"
      ],
      icon: <Monitor className="text-red-500" size={32} />,
      color: "from-red-500/20 to-rose-900/20",
      borderColor: "group-hover:border-red-500/50"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500 inline-block">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full md:mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`relative rounded-3xl overflow-hidden glass-nav border border-slate-800 transition-all duration-500 group hover:-translate-y-2 ${project.borderColor}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 md:p-10 z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                      <Code size={20} />
                    </button>
                    <button className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-slate-400">
                        <span className="text-cyan-500 mr-2 mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
