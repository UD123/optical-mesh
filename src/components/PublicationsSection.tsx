
import React from 'react';
import Section from './Section';

const PublicationsSection = () => {
  const publications = [
    {
      title: "From Heritage to Robotic Fabrication: Lessons from Guastavino's Thin-Tile Vaulting for Non-Planar 3D-Printing",
      authors: "Ofer Finkelstein, Tom Shaked, Pavel Larianovsky, Aaron Sprecher",
      journal: "Humanistic Computation and Intelligence: Proceedings of the 31st International Conference of the Association for Computer-Aided Architectural Design Research in Asia (CAADRIA)",
      year: 2026,
      link: "https://papers.cumincad.org/cgi-bin/works/Show?caadria2026_568"
    },
    {
      title: "Trajectory-Based Observer Design: A Framework for Lightweight Sensor Fusion",
      authors: "Federico Oliva, Tom Shaked, Daniele Carnevale, Amir Degani",
      journal: "Control Engineering Practice, Elsevier",
      year: 2025,
      link: "https://doi.org/10.1016/j.conengprac.2025.106592"
    },
    {
      title: "Earth-Shaping with Heterogeneous Robotic Teams: From Sim to Real",
      authors: "Federico Oliva, Tom Shaked, Karen-Lee Bar-Sinai, Omer Shalev, Oren Elmakis, Ari Meles-Braverman, Amir Degani",
      journal: "Climbing and Walking Robots Conference, Springer",
      year: 2024,
      link: "https://www.researchgate.net/publication/384344853_Earth-Shaping_with_Heterogeneous_Robotic_Teams_From_Sim_to_Real"
    },
    {
      title: "Exploring Robotic Fabrication Using Stimulated Soil",
      authors: "Roni Hillel, Tom Shaked, Michael Tsesarsky, Aaron Sprecher",
      journal: "Proceedings of the International Conference on Education and Research in Computer Aided Architectural Design in Europe",
      year: 2024,
      link: "https://www.researchgate.net/publication/383999997_Exploring_Robotic_Fabrication_Using_Stimulated_Soil"
    },
    {
      title: "Stimulated Soil for Continuous Shell Structures",
      authors: "Roni Hillel, Tom Shaked, Michael Tsesarsky, Aaron Sprecher",
      journal: "The International Association for Shell and Spatial Structures (IASS)",
      year: 2024,
      link: "https://www.researchgate.net/publication/385131103_Stimulated_Soil_for_Continuous_Shell_Structures"
    },
    {
      title: "OS-BREEZE: Oil Spills Boundary Red Emission Zone Estimation Using Unmanned Surface Vehicles",
      authors: "Oren Elmakis, Sergei Polinov, Tom Shaked, Amir Degani",
      journal: "Sensors",
      year: 2024,
      link: "https://www.researchgate.net/publication/377614175_OS-BREEZE_Oil_Spills_Boundary_Red_Emission_Zone_Estimation_Using_Unmanned_Surface_Vehicles"
    },
  ];

  return (
    <Section id="publications" className="bg-secondary/50" withDivider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 animate-fade-in">Selected Publications</h2>
          <ul className="space-y-8">
            {publications.map((pub, index) => (
              <li key={index} className="border-b border-border pb-6 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{pub.year} • {pub.journal}</p>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-medium text-card-foreground hover:text-primary transition-colors no-underline"
                >
                  {pub.title}
                </a>
                <p className="text-sm text-muted-foreground mt-2 italic">{pub.authors}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:pl-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 animate-fade-in">Research Impact</h2>
          <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in">
            Our research has been published in top-tier conferences and journals in robotics, construction automation, and human-machine interaction. We collaborate with leading institutions worldwide to advance the field of architectural robotics.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="border-l-2 border-primary pl-4">
              <span className="font-display text-4xl font-bold text-card-foreground">50+</span>
              <p className="text-sm text-muted-foreground mt-1">Publications</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <span className="font-display text-4xl font-bold text-card-foreground">10+</span>
              <p className="text-sm text-muted-foreground mt-1">Research Grants</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PublicationsSection;
