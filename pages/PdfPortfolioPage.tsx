
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { SERVICES_STRUCTURE, PARTNERS_STRUCTURE } from '../constants';

const PdfPortfolioPage: React.FC = () => {
  const t = useTranslations();
  const tCustom = (t as any).custom_platforms;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-200 min-h-screen py-10 print:bg-white print:py-0">
      {/* Download FAB - Hidden when printing */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden flex flex-col items-end gap-2">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm text-blue-800 font-semibold mb-2">
          Sugerencia: "Guardar como PDF" en el menú de impresión
        </div>
        <button
          onClick={handlePrint}
          className="bg-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:bg-blue-900 transition-all transform hover:scale-105 flex items-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Generar PDF
        </button>
      </div>

      <div className="container mx-auto max-w-[210mm] shadow-2xl print:shadow-none bg-white">
        
        {/* PAGE 1: COVER */}
        <section className="h-[297mm] flex flex-col justify-between p-20 bg-blue-800 text-white relative overflow-hidden print:break-after-page" style={{ WebkitPrintColorAdjust: 'exact' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 transform rotate-45 translate-x-32 -translate-y-32"></div>
          
          <div className="z-10">
            <div className="flex flex-col mb-12">
              <span className="text-6xl font-bold text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>Melena.</span>
              <span className="text-xl text-yellow-400 tracking-widest font-semibold leading-none mt-2">MARKETING COMPANY</span>
            </div>
            
            <h1 className="text-7xl font-bold uppercase tracking-tighter leading-none mt-20" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Presentación <br/> Corporativa
            </h1>
            <div className="h-2 bg-yellow-400 w-32 mt-10"></div>
          </div>

          <div className="z-10 flex justify-between items-end border-t border-white/20 pt-10">
            <div>
              <p className="text-2xl font-light text-blue-100">{t.hero_subtitle}</p>
              <p className="text-yellow-400 font-bold mt-2">2025 Edition</p>
            </div>
            <div className="text-right text-sm text-blue-100">
              <p>www.melenamarketing.com</p>
              <p>info@melenamarketing.com</p>
              <p>+34 660 532 823</p>
            </div>
          </div>
        </section>

        {/* PAGE 2: ABOUT & SERVICES */}
        <section className="p-16 print:break-after-page print:min-h-[297mm]">
          <div className="mb-16 print:break-inside-avoid">
            <h2 className="text-4xl font-bold text-blue-800 uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.about_title}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
               <p dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
               <p dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-800 uppercase mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>Nuestros Servicios</h2>
            <div className="grid grid-cols-2 gap-4">
              {SERVICES_STRUCTURE.map((service) => (
                <div key={service.id} className="flex items-start gap-4 p-5 border border-gray-100 rounded-lg print:break-inside-avoid shadow-sm">
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${service.color === 'blue' ? 'bg-blue-800' : 'bg-yellow-400'}`}></div>
                  <div>
                    <h3 className="font-bold text-gray-800 uppercase text-sm leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.services[service.id]}</h3>
                    <p className="text-[11px] text-gray-500 mt-1.5 leading-snug">{t.services_descriptions[service.id]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAGE 3: CUSTOM SOFTWARE & SPORTS */}
        <section className="p-16 print:break-after-page print:min-h-[297mm]">
          <div className="bg-blue-900 text-white p-12 rounded-2xl mb-16 print:break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact' }}>
            <h2 className="text-4xl font-bold uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>{tCustom.title}</h2>
            <p className="text-yellow-400 font-medium mb-6 italic">{tCustom.subtitle}</p>
            <p className="text-blue-100 mb-8">{tCustom.description}</p>
            <div className="grid grid-cols-2 gap-6">
              {[tCustom.feature_forms, tCustom.feature_shifts, tCustom.feature_crm, tCustom.feature_custom].map((f: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-[10px]">✓</div>
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-800 uppercase mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.projects_title}</h2>
            <div className="space-y-6">
              {t.projects_list.slice(0, 5).map((project, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-6 py-2 print:break-inside-avoid">
                  <h3 className="text-xl font-bold text-blue-800 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  {project.link && (
                    <span className="text-blue-600 text-xs font-bold mt-2 inline-block">
                      {project.link.replace('https://', '')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAGE 4: NETWORK & CONTACT */}
        <section className="p-16 print:min-h-[297mm] flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 uppercase mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.group_services_title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {PARTNERS_STRUCTURE.map((partner) => (
                <div key={partner.id} className="p-6 bg-gray-50 rounded-xl print:break-inside-avoid border border-gray-100">
                  <h3 className="font-bold text-blue-800 uppercase text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {t.partners[partner.id]?.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                    {t.partners[partner.id]?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-400 p-12 rounded-2xl flex flex-col items-center text-center mt-12 print:break-inside-avoid" style={{ WebkitPrintColorAdjust: 'exact' }}>
            <h2 className="text-3xl font-bold text-blue-800 uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>¿Hablamos?</h2>
            <p className="text-blue-900 font-medium mb-8">Estamos listos para impulsar tu negocio al siguiente nivel.</p>
            <div className="flex gap-10">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-blue-800 mb-1">WhatsApp</p>
                <span className="text-xl font-bold text-blue-900">+34 660 532 823</span>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-blue-800 mb-1">Email</p>
                <span className="text-xl font-bold text-blue-900">info@melenamarketing.com</span>
              </div>
            </div>
            <p className="mt-10 text-blue-800 font-bold text-sm">www.melenamarketing.com</p>
          </div>
        </section>

      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          html, body {
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .container {
            width: 210mm !important;
            max-width: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          section {
            width: 210mm !important;
            box-sizing: border-box !important;
          }
          h1, h2, h3, p, span {
            orphans: 3;
            widows: 3;
          }
        }
      `}</style>
    </div>
  );
};

export default PdfPortfolioPage;
