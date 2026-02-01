
import React from 'react';
import networkTexture from './network.jpg';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Gradient Background */}
      <div className="absolute inset-0 bg-[#050816]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-violet-600/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-emerald-600/5 blur-[120px] rounded-full animate-pulse delay-1000"></div>
      
      {/* Network Line Texture */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-screen"
        style={{
          backgroundImage: `url(${networkTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.8)'
        }}
      ></div>

      {/* Subtle Grid Reinforcement */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-radial-at-t from-transparent via-[#050816]/60 to-[#050816]"></div>
    </div>
  );
};

export default BackgroundEffect;
