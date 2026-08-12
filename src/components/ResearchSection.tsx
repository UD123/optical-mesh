
import React, { useEffect } from 'react';
import Section from './Section';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { researchProjects } from '@/data/researchProjects';

const ResearchSection = () => {
  useEffect(() => {
    // Initialize IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Add animation classes when element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          (entry.target as HTMLElement).style.opacity = '1';
        }
      });
    }, observerOptions);

    // Get all elements with scroll-reveal class
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      // Set initial opacity
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <>
      <Section id="mission" className="py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl mb-4 scroll-reveal leading-tight font-bold">Our Mission</h2>
            <p className="text-foreground/70 text-xl scroll-reveal font-semibold md:text-2xl">
              Advancing robotics for construction and architecture
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-6">
            <p className="text-foreground/70 mb-6 text-lg scroll-reveal">
              We specialize in enhancing productivity, safety, and sustainability in the built environment through innovative robotic solutions.
            </p>
            <p className="text-foreground/70 text-lg scroll-reveal">
              Our interdisciplinary team comprises experts in robotics, engineering, and architecture, dedicated to translating innovations into practical solutions.
            </p>
          </div>
        </div>
      </Section>

      <Section id="research" className="bg-secondary/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="font-display text-4xl font-bold tracking-tight scroll-reveal">Research Areas</h2>
          <div className="h-px flex-grow mx-8 bg-primary/30 mb-4 hidden md:block"></div>
          <p className="text-muted-foreground max-w-xs scroll-reveal">Exploring the boundaries of computational theory and physical application.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group p-8 bg-card border border-border hover:border-primary transition-colors duration-300 scroll-reveal"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                {String(index + 1).padStart(2, '0')}. Research
              </span>
              <h3 className="font-display text-2xl font-semibold mb-4 text-card-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <Link to={`/research/${project.id}`} className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group/link no-underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="py-16 text-center scroll-reveal">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            <a href="#contact" onClick={scrollToContact} className="text-foreground hover:text-primary font-medium">Get in touch</a> to learn more about our research and collaboration opportunities.
          </p>
        </div>
      </Section>
    </>;
};

export default ResearchSection;
