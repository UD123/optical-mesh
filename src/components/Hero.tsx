import React from 'react';
import meshAsset from '@/assets/image3.png.asset.json';

const Hero = () => {
  return (
    <div className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={meshAsset.url}
          alt="Swarm of drones connected by green laser links forming a multi-hop optical mesh network over a battlefield"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      <div className="relative z-10 flex items-center h-full px-6 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">Optical Mesh</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mt-5">
              Optical Drone <span className="text-[#C5D1C9]">Communication</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-light mt-6 max-w-2xl">
              A jam-resistant, multi-hop laser mesh network for robot swarms — connectivity that holds
              where radio frequency fails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
