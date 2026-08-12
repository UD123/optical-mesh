import React from 'react';
import Section from './Section';

const customers = [
  {
    title: 'Defense & Special Operations',
    description:
      'Units operating in electronic-warfare environments where RF links are jammed, monitored, or forbidden.',
  },
  {
    title: 'Drone Swarm Operators',
    description:
      'High-density fleets that cannot scale on shared spectrum without frequency saturation and mutual interference.',
  },
  {
    title: 'Robotics & UAV Manufacturers',
    description:
      'OEMs integrating a resilient communication payload into existing airframes and ground platforms.',
  },
  {
    title: 'Critical Infrastructure & First Response',
    description:
      'Teams needing localized, secure connectivity in urban, underground, or disaster environments.',
  },
];

const CustomersSection = () => {
  return (
    <Section id="customers" className="bg-secondary/50">
      <div className="max-w-3xl mb-14">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Customers</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">Who Optical Mesh is built for</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {customers.map((c) => (
          <div key={c.title} className="bg-background p-8 md:p-10">
            <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CustomersSection;
