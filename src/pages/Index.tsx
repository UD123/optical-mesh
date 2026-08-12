import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import CustomersSection from '@/components/CustomersSection';
import TechnologySection from '@/components/TechnologySection';
import ProductSection from '@/components/ProductSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            (entry.target as HTMLElement).style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll('.animate-on-scroll, .scroll-reveal');
    scrollElements.forEach((el) => {
      if (!(el as HTMLElement).style.opacity) {
        (el as HTMLElement).style.opacity = '0';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MissionSection />
      <CustomersSection />
      <TechnologySection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
