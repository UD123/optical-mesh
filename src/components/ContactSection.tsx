import React from 'react';
import Section from './Section';

const ContactSection = () => {
  return <Section id="contact" className="bg-background" withDivider>
      <div className="max-w-3xl mx-auto bg-primary p-12 text-primary-foreground">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Inquiries & Collaboration</h2>
        <p className="text-primary-foreground/80 mb-8 font-light animate-fade-in">Interested in research opportunities or collaborations? We'd love to hear from you.</p>
        
        <form action="https://formspree.io/f/mdkenreg" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <input type="text" id="name" name="name" placeholder="Name" required className="bg-primary-foreground/10 border border-primary-foreground/20 p-4 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:bg-primary-foreground/20 transition-all" />
          <input type="email" id="email" name="email" placeholder="Email Address" required className="bg-primary-foreground/10 border border-primary-foreground/20 p-4 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:bg-primary-foreground/20 transition-all" />
          <input type="text" id="subject" name="subject" placeholder="Subject" className="md:col-span-2 bg-primary-foreground/10 border border-primary-foreground/20 p-4 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:bg-primary-foreground/20 transition-all" />
          <textarea id="message" name="message" rows={4} placeholder="Message" required className="md:col-span-2 bg-primary-foreground/10 border border-primary-foreground/20 p-4 h-32 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:bg-primary-foreground/20 transition-all"></textarea>
          <button type="submit" className="md:col-span-2 bg-background text-foreground font-bold py-4 px-8 hover:bg-white transition-colors font-display">
            Send Inquiry
          </button>
        </form>
      </div>
    </Section>;
};

export default ContactSection;
