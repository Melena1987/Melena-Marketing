import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string; href?: string }> = ({ title, description, imageUrl, href }) => {
    const cardContent = (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group transform hover:-translate-y-2 transition-transform duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-800 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{title}</h3>
                <p className="text-gray-700 text-sm flex-grow">{description}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {cardContent}
            </a>
        );
    }
    
    // Fallback for projects without links.
    return cardContent;
};

const Testimonials: React.FC = () => {
  const t = useTranslations();
  
  // Specific images for the projects
  const projectImages = [
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1759258933122_idP_MARBELLA-116.jpg?alt=media&token=d1f9faf0-f992-49b4-b572-cac41ad9e7a3',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760372783660_ATALAYA-263.jpg?alt=media&token=ed30545d-d387-4330-abfc-fa67e97c7ab9',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757279516770_COPA-144.jpg?alt=media&token=cad899d1-3ef2-4b32-9644-b127058bfd37',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1758464596036_DSC_8149.JPG?alt=media&token=e4a6919b-2261-4d42-b558-65e1e230aae4',
    'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_1.jpg?alt=media&token=41a8229a-907d-42c5-9652-608fbba59b73'
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
              href={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;