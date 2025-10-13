import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

interface LegalPageProps {
  type: 'terms' | 'privacy';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const t = useTranslations();
  const content = type === 'terms' ? t.terms_content : t.privacy_content;
  const title = type === 'terms' ? t.footer_terms : t.footer_privacy_policy;

  // Scroll to top when the component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <article className="prose prose-lg max-w-none prose-h1:text-blue-900 prose-h2:text-blue-800 prose-h3:text-blue-900 prose-a:text-blue-600 hover:prose-a:text-yellow-500">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 border-b-4 border-yellow-400 pb-4">{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
