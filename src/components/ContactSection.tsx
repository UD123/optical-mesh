import React from 'react';
import Section from './Section';

const ContactSection = () => {
  return <Section id="contact" className="bg-background" withDivider>
      <div className="max-w-3xl mx-auto bg-primary p-12 text-primary-foreground">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Get in Touch</h2>
        <p className="text-primary-foreground/80 mb-8 font-light animate-fade-in">Interested in a demo, integration, or pilot deployment of Optical Mesh? Send a message below.</p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScX88k4DJgjskGMp__Hd2wed2ToVKPCWpl7M3OvgmGfLP0ZQg/viewform?embedded=true"
          title="Optical Mesh contact form"
          width="100%"
          height="900"
          className="w-full border-0"
        />
      </div>
    </Section>;
};

export default ContactSection;
