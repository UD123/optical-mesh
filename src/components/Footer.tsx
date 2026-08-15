
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const navigateToSection = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <footer className="bg-secondary text-foreground py-12 md:py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-bold mb-4">OPTICAL MESH</h2>
            <p className="text-muted-foreground max-w-sm">
              Jam-resistant optical mesh communication for robot swarms.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/company/101662726" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/optical.mesh/" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://github.com/ARCA-Laboratory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.77s-1.18-.37-3.91 1.48a13.38 13.38 0 0 0-3.91-.52 13.28 13.28 0 0 0-3.91.52c-2.73-1.85-3.91-1.48-3.91-1.48a5.07 5.07 0 0 0-.09 3.77 5.44 5.44 0 0 0-1.5 3.77c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61v3.87"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigateToSection('mission')} className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Mission</button></li>
              <li><button onClick={() => navigateToSection('customers')} className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Customers</button></li>
              <li><button onClick={() => navigateToSection('technology')} className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Technology</button></li>
              <li><button onClick={() => navigateToSection('product')} className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Product</button></li>
              <li><button onClick={() => navigateToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Contact</button></li>

            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: <a href="mailto:info@robotai.info" className="text-muted-foreground hover:text-primary">info@robotai.info</a></li>
              <li>Web: <a href="https://www.robotai.info" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">www.robotai.info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Optical Mesh by RobotAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
