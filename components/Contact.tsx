import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Contact: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">{t.contact_title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.contact_subtitle}
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-lg shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{t.contact_info_title}</h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                29679, Benahavís, Málaga, España
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                660 532 823
              </p>
              <p className="flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@melenamarketing.com
              </p>
            </div>
          </div>
          <form>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">{t.contact_form_name}</label>
                <input type="text" id="name" placeholder={t.contact_form_name} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{t.contact_form_email}</label>
                <input type="email" id="email" placeholder={t.contact_form_email} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{t.contact_form_message}</label>
                <textarea id="message" rows={4} placeholder={t.contact_form_message} className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300">
                {t.contact_form_submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;