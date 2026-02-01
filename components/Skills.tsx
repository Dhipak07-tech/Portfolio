
import React, { useCallback, useEffect, useRef } from 'react';
import { Terminal, Layout, Settings, Layers, Monitor, MessageCircle, Users, CalendarCheck, Trophy, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const techGridRef = useRef<HTMLDivElement | null>(null);
  const softGridRef = useRef<HTMLDivElement | null>(null);

  const animateSkills = useCallback(() => {
    const techCards = techGridRef.current?.querySelectorAll<HTMLElement>('.skill-card') ?? [];
    const softCards = softGridRef.current?.querySelectorAll<HTMLElement>('.skill-card-soft') ?? [];

    const playTech = (cards: Iterable<HTMLElement>) => {
      Array.from(cards).forEach((card, idx) => {
        card.classList.remove('is-visible');
        void card.offsetWidth;
        card.style.transitionDelay = `${idx * 120}ms`;
        card.classList.add('is-visible');
      });
    };

    const playSoft = (cards: Iterable<HTMLElement>) => {
      Array.from(cards).forEach((card, idx) => {
        card.classList.remove('is-visible');
        void card.offsetWidth;
        card.style.transitionDelay = `${idx * 120}ms`;
        card.classList.add('is-visible');
      });
    };

    playTech(techCards);
    playSoft(softCards);
  }, []);

  useEffect(() => {
    const observerTarget = sectionRef.current;
    let observer: IntersectionObserver | null = null;
    let hasAnimated = false;

    if (observerTarget) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              animateSkills();
            }
          });
        },
        { threshold: 0.35 }
      );
      observer.observe(observerTarget);
    }

    const links = Array.from(document.querySelectorAll('a[href="#skills"]'));
    links.forEach((link) => link.addEventListener('click', () => {
      hasAnimated = false;
      animateSkills();
    }));

    return () => {
      if (observer) observer.disconnect();
      links.forEach((link) => link.removeEventListener('click', animateSkills));
    };
  }, [animateSkills]);

  const skillGroups = [
    {
      title: "Programming",
      icon: <Terminal className="text-blue-400" />,
      skills: ["C", "C++", "Java (Basic)", "Python (Learning)"]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="text-emerald-400" />,
      skills: ["GitHub", "VS Code", "Canva"]
    },
    {
      title: "Core Concepts",
      icon: <Layers className="text-pink-400" />,
      skills: ["Networking Basics", "DSA Fundamentals", "OS Concepts"]
    },
    {
      title: "Currently learning",
      icon: <Cloud className="text-orange-400" />,
      skills: ["AWS", "Cybersecurity", "Fullstack Development"]
    }
  ];

  const softSkills = [
    {
      title: "Communication",
      icon: <MessageCircle className="text-amber-400" />,
      description: "Present ideas clearly in team discussions and on-stage events."
    },
    {
      title: "Leadership",
      icon: <Users className="text-emerald-400" />,
      description: "Serve as Class Representative guiding peers through projects."
    },
    {
      title: "Event Co-ordination",
      icon: <CalendarCheck className="text-sky-400" />,
      description: "Plan college tech meets, manage schedules, and mentor volunteers."
    },
    {
      title: "Sportsmanship",
      icon: <Trophy className="text-rose-400" />,
      description: "Active participant in athletics, bringing discipline and resilience."
    }
  ];

  return (
    <div ref={sectionRef} className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-emerald-400 font-bold uppercase tracking-widest text-sm">
            <Monitor size={18} />
            <span>Abilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">My Technical Skills</h2>
          <p className="text-slate-400">
            A diverse toolkit focusing on both fundamental computer science principles and modern frontend technologies.
          </p>
        </div>
      </div>

      <div ref={techGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skill-card group glass p-8 rounded-3xl transition-all duration-500 border-b-2 border-b-transparent hover:border-b-blue-500 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
            <div className="w-14 h-14 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {group.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-6">{group.title}</h3>
            <ul className="space-y-3">
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                  <span className="text-slate-300 text-sm font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-widest text-sm">
              <MessageCircle size={18} />
              <span>My Soft Skills</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">People-first Strengths</h3>
            <p className="text-slate-400 max-w-2xl">
              Beyond code, I contribute through communication, leadership, and community-driven roles that keep teams energised and organised.
            </p>
          </div>
        </div>
        <div ref={softGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, idx) => (
            <div key={idx} className="skill-card-soft glass p-6 rounded-3xl border border-slate-800 hover:border-amber-400/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(251,191,36,0.25)]">
              <div className="w-12 h-12 bg-slate-900/60 rounded-2xl flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
