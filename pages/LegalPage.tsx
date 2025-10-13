import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const LegalPage: React.FC = () => {
  const t = useTranslations();

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // A timeout ensures the element is rendered before scrolling.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <article className="prose prose-lg max-w-none prose-h1:text-blue-900 prose-h2:text-blue-800 prose-h3:text-blue-900 prose-a:text-blue-600 hover:prose-a:text-yellow-500 prose-table:w-full prose-th:bg-gray-100 prose-th:p-2 prose-td:p-2">
            <section id="terms-and-conditions">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 border-b-4 border-yellow-400 pb-4">{t.footer_terms}</h1>
              <div dangerouslySetInnerHTML={{ __html: t.terms_content }} />
            </section>

            <div className="my-16 border-t-2 border-gray-200"></div>

            <section id="privacy-policy">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 border-b-4 border-yellow-400 pb-4">{t.footer_privacy_policy}</h1>
              <div dangerouslySetInnerHTML={{ __html: t.privacy_content }} />
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;