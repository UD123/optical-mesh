import React from 'react';
import Section from './Section';

const MissionSection = () => {
  return (
    <Section id="mission" className="py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mission</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 leading-tight">
            Communication that cannot be jammed
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Current drone communication relies heavily on RF (Radio Frequency) technology, which faces
            critical limitations in capacity and interference in real operational environments.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            Optical Mesh replaces contested radio links with directional laser links between platforms.
            The result is a self-forming, multi-hop optical network that keeps robot swarms connected
            where the spectrum is saturated, denied, or actively jammed.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default MissionSection;
