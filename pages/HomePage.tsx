import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // A timeout ensures the element is rendered and ready before scrolling.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="pt-24">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </div>
  );
};

export default HomePage;
