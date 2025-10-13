import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
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
