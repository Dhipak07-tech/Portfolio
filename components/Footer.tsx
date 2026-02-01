
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-black gradient-text">Dhipak.S</h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Aspiring IT Professional & Developer. Designing the future one pixel at a time.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Dhipak.S. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
