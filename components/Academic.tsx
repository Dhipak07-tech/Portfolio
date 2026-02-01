
import React, { useEffect, useRef } from 'react';
import { Award, BookOpen, GraduationCap, Calendar } from 'lucide-react';

const Academic: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 text-violet-400 font-bold uppercase tracking-widest text-sm">
          <GraduationCap size={18} />
          <span>Education</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Academic Performance</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800/50 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {/* B.Tech Card */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="relative flex flex-col sm:flex-row items-center justify-between group reveal-left"
            >
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 z-10"></div>
              
              <div className="w-full sm:w-[45%] glass p-8 rounded-3xl transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] border-t-4 border-t-blue-500 glow-blue">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <BookOpen className="text-blue-400" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full">Current</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">B.Tech – Information Technology</h3>
                <p className="text-slate-400 mb-4 font-medium italic">2nd Year Student</p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> 2024 - 2028</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">1st Semester</p>
                      <p className="text-2xl font-bold text-white">9.1</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">2nd Semester</p>
                      <p className="text-2xl font-bold text-white">8.9</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current CGPA</p>
                      <p className="text-2xl font-bold text-white">9.00</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Cumulative Progress</span>
                        <span className="text-white font-bold">9.00 / 10.0</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[90%] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-[45%]"></div>
            </div>

            {/* Schooling Card (Placeholder) */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="relative flex flex-col sm:flex-row-reverse items-center justify-between group reveal-right"
            >
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-900 z-10"></div>
              
              <div className="w-full sm:w-[45%] glass p-8 rounded-3xl transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] border-t-4 border-t-violet-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-violet-500/10 rounded-xl">
                    <Award className="text-violet-400" />
                  </div>
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-200 text-xs font-bold rounded-full">In Progress</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Honours in Data Science</h3>
                <p className="text-slate-400 mb-4 font-medium italic">Advanced analytics and AI foundations</p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> 2026</span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Progress Status</span>
                        <span className="text-white font-bold">Capstone & Research</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-violet-500 h-full w-full rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]"></div>
                    </div>
                </div>
              </div>
              <div className="hidden sm:block w-[45%]"></div>
            </div>
            {/* Key Subjects Card */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className="relative flex flex-col sm:flex-row items-center justify-between group reveal-left"
            >
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
              
              <div className="w-full sm:w-[45%] glass p-8 rounded-3xl transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] border-t-4 border-t-emerald-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <BookOpen className="text-emerald-400" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 text-xs font-bold rounded-full">Focus</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Key Subjects</h3>
                <p className="text-slate-400 mb-4 font-medium italic">Core areas strengthening my engineering foundation</p>
                <ul className="space-y-2 text-slate-300 list-disc list-inside">
                  <li>Data Structures</li>
                  <li>Computer Networks</li>
                  <li>Digital Logic Design</li>
                  <li>Computer Architecture</li>
                  <li>Programming in C &amp; Java</li>
                </ul>
              </div>
              <div className="hidden sm:block w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
