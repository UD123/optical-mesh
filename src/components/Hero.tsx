
import React from 'react';
import { getAssetPath } from '@/utils/assetPaths';

const Hero = () => {
  return <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Full-page Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="object-cover w-full h-full">
          <source src={getAssetPath('/assets/videos/arca-hero.mp4')} type="video/mp4" />
        </video>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight md:leading-tight tracking-tight text-white">
            Architectural Robotics &amp; <span className="text-[#C5D1C9]">Construction Automation</span>
          </h1>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-24 text-center animate-bounce opacity-70 text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>;
};

export default Hero;
