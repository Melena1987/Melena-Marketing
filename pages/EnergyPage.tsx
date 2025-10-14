import React from 'react';
import EnergyForm from '../components/EnergyForm';
import { useTranslations } from '../hooks/useTranslations';

const EnergyPage: React.FC = () => {
  const t = useTranslations();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <EnergyForm />
      <section id="energy-info-section" className="container mx-auto px-6 mt-16 scroll-mt-24">
        <article className="prose prose-lg max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md prose-a:text-blue-600 hover:prose-a:text-yellow-500">
          <h2 className="text-3xl font-bold text-blue-800" style={{fontFamily: "'Oswald', sans-serif"}}>{t.energy_page_content_title}</h2>
          <p>{t.energy_page_content_p1}</p>
          <p>{t.energy_page_content_p2}</p>
          <p>{t.energy_page_content_p3}</p>
          <h3 className="text-2xl font-bold text-blue-800" style={{fontFamily: "'Oswald', sans-serif"}}>{t.energy_page_content_how_title}</h3>
          <p dangerouslySetInnerHTML={{ __html: t.energy_page_content_how_p1 }} />
          <p>{t.energy_page_content_how_p2}</p>
        </article>
      </section>
    </div>
  );
};

export default EnergyPage;