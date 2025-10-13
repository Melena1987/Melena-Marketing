
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const About: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">{t.about_title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.about_subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title={t.about_feature1_title}
            description={t.about_feature1_desc}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>}
          />
          <FeatureCard
            title={t.about_feature2_title}
            description={t.about_feature2_desc}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
          <FeatureCard
            title={t.about_feature3_title}
            description={t.about_feature3_desc}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h4M5 8h2m4 0h2" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default About;