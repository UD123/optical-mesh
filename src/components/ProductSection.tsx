import React from 'react';
import Section from './Section';

const benefits = [
  {
    title: 'Enhanced Reliability',
    description: 'Reduced susceptibility to environmental interference and jamming.',
  },
  {
    title: 'Improved Security',
    description:
      'Greater resistance to eavesdropping and anti-jamming, ensuring data integrity.',
  },
  {
    title: 'Scalability',
    description: 'Supports high-density deployments without frequency saturation.',
  },
  {
    title: 'Extended Range',
    description: 'Potential for longer operational ranges.',
  },
  {
    title: 'Flexible Coverage',
    description:
      'Dynamic mesh network provides localized and wide-area coverage, ensuring continuous connectivity.',
  },
  {
    title: 'Cost Efficiency',
    description:
      'Low implementation cost makes it feasible for large-scale adoption across extensive drone fleets.',
  },
];

const ProductSection = () => {
  return (
    <Section id="product" className="bg-secondary/50">
      <div className="max-w-3xl mb-14">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Product</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
          Robot Swarm Optical Communication
        </h2>
        <p className="text-muted-foreground font-light mt-5 leading-relaxed">
          Optical Mesh is a communication layer for robot swarms — a laser link payload plus mesh
          networking software that keeps every platform connected in contested environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {benefits.map((b) => (
          <div key={b.title} className="bg-background p-8 border-t-2 border-primary">
            <h3 className="font-display text-lg font-bold mb-3">{b.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProductSection;
