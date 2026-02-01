
import React, { useEffect, useRef } from 'react';
import { User, Code2, Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const infoCards = [
    {
      icon: <Code2 className="text-blue-400" />,
      title: "Developer",
      desc: "Passionate about building responsive, functional web apps."
    },
    {
      icon: <Cpu className="text-violet-400" />,
      title: "Problem Solver",
      desc: "Loves diving into DSA and logical challenges."
    },
    {
      icon: <Globe className="text-emerald-400" />,
      title: "Tech Enthusiast",
      desc: "Constantly exploring Networking and new IT trends."
    }
  ];

  const stepsWrapperRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = stepsWrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stepRefs.current.forEach((card, idx) => {
              if (card) {
                setTimeout(() => card.classList.add('is-visible'), idx * 150);
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-flex items-center space-x-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <User size={18} />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Transforming Ideas into <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a 2nd-year B.Tech IT student with a drive for creating impact through software. 
            My journey in technology is fueled by curiosity and a commitment to continuous learning. 
            Whether it's crafting clean code or understanding complex network architectures, 
            I strive for excellence in every project I undertake.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="glass p-4 rounded-xl space-y-1">
              <span className="text-blue-400 font-bold">2+ Years</span>
              <p className="text-slate-500 text-sm">Learning Tech</p>
            </div>
            <div className="glass p-4 rounded-xl space-y-1">
              <span className="text-violet-400 font-bold">5+ Projects</span>
              <p className="text-slate-500 text-sm">Built & Designed</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative" ref={stepsWrapperRef}>
          <div className="absolute left-5 top-6 bottom-6 hidden sm:block">
            <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-400"></div>
          </div>
          <div className="space-y-6">
            {infoCards.map((card, idx) => (
              <div
                key={card.title}
                ref={(el) => (stepRefs.current[idx] = el)}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className="step-card relative flex items-start space-x-5 p-6 rounded-3xl glass border border-white/10 transition-all duration-500 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]"
              >
                <div className="absolute -left-9 top-7 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-white/10 text-xs font-bold text-white">
                  {idx + 1}
                </div>
                <div className="p-3 bg-slate-800/50 rounded-2xl text-white shadow-inner">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{card.title}</h4>
                  <p className="text-slate-400">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
