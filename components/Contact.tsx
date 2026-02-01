
import React from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
              <MessageSquare size={18} />
              <span>Get in touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Let’s Work Together</h2>
            <p className="text-lg text-slate-400 max-w-md">
              Have a project or idea? Let’s collaborate and build something great. I'm always open to new opportunities and discussions.
            </p>
          </div>

          <div className="space-y-6 pt-6">
            <a href="mailto:dhipaksankar06@gmail.com" className="flex items-center space-x-4 group">
              <div className="p-4 glass rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all glow-blue">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest">Email</span>
                <span className="text-white font-medium">dhipaksankar06@gmail.com</span>
              </div>
            </a>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-4 glass rounded-2xl text-slate-300 hover:text-blue-400 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                <Github size={24} />
              </a>
              <a href="#" className="p-4 glass rounded-2xl text-slate-300 hover:text-blue-400 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 space-y-6 relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Dhipak S"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Your Message</label>
              <textarea 
                rows={4}
                placeholder="What can I help you with?"
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full py-5 bg-blue-600 rounded-2xl font-bold text-white flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] glow-blue group">
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
