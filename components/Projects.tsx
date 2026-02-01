
import React from 'react';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cricket Updates Website Model",
      category: "Live Sports Feed",
      image: "/Images/cricket.jpg",
      desc: "Real-time cricket updates interface that streams scores, player stats, and match insights with responsive cards and highlight reels.",
      tags: ["APIs", "Realtime UI", "Responsive Design"]
    },
    {
      title: "Fitness Centre Website Design",
      category: "UI/UX & Web",
      image: "/Images/fitness.jpg",
      desc: "An attractive Landing Page for a fitness center with modern layouts and mobile-first design approach.",
      tags: ["HTML", "CSS", "UI Design"]
    },
    {
      title: "Networking Concept Pages",
      category: "Education",
      image: "/Images/network.jpg",
      desc: "Detailed explanatory web pages showcasing fundamental networking concepts with visual aids.",
      tags: ["Documentation", "Web Basics"]
    },
    {
      title: "Canva Poster Collection",
      category: "Design",
      image: "/Images/Poster.jpg",
      desc: "A series of creative posters and social media graphics designed using Canva for various events.",
      tags: ["Graphic Design", "Canva"]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
          <FolderOpen size={18} />
          <span>Showcase</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative glass rounded-3xl overflow-hidden hover:bg-slate-800/40 transition-all border border-white/5 hover:border-blue-500/30">
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass rounded-full text-xs font-bold text-blue-400 border-blue-500/30">
                        {project.category}
                    </span>
                </div>
            </div>
            
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-slate-800 rounded-md text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-6">
                <button className="flex items-center space-x-2 text-blue-400 font-bold text-sm hover:text-white transition-colors">
                  <ExternalLink size={18} />
                  <span>View Project</span>
                </button>
                <button className="text-slate-500 hover:text-white transition-colors">
                  <Github size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
          <button className="px-10 py-4 glass rounded-full text-slate-400 font-bold hover:bg-blue-500 hover:text-white transition-all">
            Browse All Work
          </button>
      </div>
    </div>
  );
};

export default Projects;
