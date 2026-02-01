
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const typingText = "I’m Dhipak.S";
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      currentIndex += 1;
      setTypedText(typingText.slice(0, currentIndex));
      if (currentIndex === typingText.length) {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [typingText]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Available for Internships</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight space-y-2">
            <span className="flex items-center justify-center md:justify-start">
              <span className="gradient-text">{typedText}</span>
              <span
                className={`ml-1 h-10 w-1 bg-blue-400 rounded-sm transition-opacity duration-200 ${
                  cursorVisible ? 'opacity-100' : 'opacity-0'
                }`}
              ></span>
            </span>
            <span className="block text-white">IT Student & Aspiring Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
            Building modern web experiences and learning innovative technologies to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="#skills"
              className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-xl font-bold text-white hover:bg-blue-700 transition-all glow-blue shadow-lg shadow-blue-500/20"
            >
              View My Skills
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-4 glass rounded-xl font-bold text-slate-200 hover:bg-white/5 transition-all"
            >
              Contact to Work Together
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center relative">
          {/* Animated Tech Sphere */}
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute inset-2 border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute inset-6 border-2 border-dashed border-violet-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
            
            {/* Inner Core */}
            <div className="absolute inset-12 glass rounded-full overflow-hidden border border-blue-500/40 shadow-[0_0_60px_rgba(59,130,246,0.45)]">
              <img
                src="/Images/Profile.png"
                alt="Portrait of Dhipak"
                className="w-full h-full object-cover object-top saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent"></div>
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-12 right-12 w-10 h-10 glass rounded-full animate-bounce delay-75 border-blue-400/30"></div>
            <div className="absolute bottom-12 left-12 w-8 h-8 glass rounded-full animate-bounce delay-150 border-emerald-400/30"></div>
            <div className="absolute top-1/2 -left-5 w-12 h-12 glass rounded-full animate-pulse border-violet-400/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
