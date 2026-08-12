import React from 'react';
import Section from './Section';
import antiJammingAsset from '@/assets/image4.png.asset.json';

const TechnologySection = () => {
  return (
    <Section id="technology">
      <div className="max-w-3xl mb-14">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technology</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
          Multi-hop laser links, anti-jamming by design
        </h2>
        <p className="text-muted-foreground font-light mt-5 leading-relaxed">
          Each platform carries a steerable optical transceiver. Narrow laser beams form point-to-point
          links that hop between drones and ground nodes, extending a dynamic mesh across the operational
          area — with a wired last leg to the dismounted operator when required.
        </p>
      </div>

      <div className="border border-border bg-white p-6 md:p-10">
        <img
          src={antiJammingAsset.url}
          alt="Diagram of laser link between an attack drone and a relay drone, with a wired connection to a ground operator through an urban environment"
          className="w-full h-auto"
          loading="lazy"
        />
        <p className="text-sm text-muted-foreground mt-6 font-light">
          Anti-jamming capabilities: directional optical links are extremely difficult to detect,
          intercept, or disrupt compared with omnidirectional RF transmission.
        </p>
      </div>
    </Section>
  );
};

export default TechnologySection;
