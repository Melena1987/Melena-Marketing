import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
    <div className="bg-blue-700 rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-yellow-400 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{title}</h3>
            <p className="text-blue-100 text-sm flex-grow">{description}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  const t = useTranslations();
  
  // Placeholder images for the projects
  const projectImages = [
    'https://picsum.photos/seed/marathon/600/400',
    'https://picsum.photos/seed/golf/600/400',
    'https://picsum.photos/seed/voley/600/400',
    'https://picsum.photos/seed/basketball/600/400'
  ];

  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">{t.projects_title}</h2>
          <p className="mt-4 text-lg text-blue-200 max-w-3xl mx-auto">
            {t.projects_subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.projects_list.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              imageUrl={projectImages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;