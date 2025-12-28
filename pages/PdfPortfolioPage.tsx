
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
    <div className="bg-gray-200 min-h-screen py-10 print:bg-white print:py-0 font-sans">
      {/* Download FAB - Hidden when printing */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden flex flex-col items-end gap-2">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm text-blue-800 font-semibold mb-2">
          Sugerencia: Selecciona "Guardar como PDF" en el menú de impresión
        </div>
        <button
          onClick={handlePrint}
          className="bg-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:bg-blue-900 transition-all transform hover:scale-105 flex items-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Generar PDF / Imprimir
        </button>
      </div>

      <div className="container mx-auto max-w-[210mm] shadow-2xl print:shadow-none bg-white">
        
        {/* PÁGINA 1: PORTADA */}
        <section className="h-[297mm] flex flex-col justify-between p-20 bg-blue-800 text-white relative overflow-hidden print:break-after-page" style={{ WebkitPrintColorAdjust: 'exact' }}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 transform rotate-45 translate-x-40 -translate-y-40"></div>
          
          <div className="z-10 mt-10">
            <div className="flex flex-col mb-16">
              <span className="text-7xl font-bold text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>Melena.</span>
              <span className="text-2xl text-yellow-400 tracking-[0.2em] font-semibold leading-none mt-3">MARKETING COMPANY</span>
            </div>
            
            <h1 className="text-[80px] font-bold uppercase tracking-tighter leading-[0.9] mt-24" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Presentación <br/> Corporativa
            </h1>
            <div className="h-2.5 bg-yellow-400 w-40 mt-12"></div>
          </div>

          <div className="z-10 flex justify-between items-end border-t border-white/20 pt-12">
            <div>
              <p className="text-3xl font-light text-blue-100">{t.hero_subtitle}</p>
              <p className="text-yellow-400 font-bold text-xl mt-3">2025 Edition</p>
            </div>
            <div className="text-right text-base text-blue-100 space-y-1">
              <p>www.melenamarketing.com</p>
              <p>info@melenamarketing.com</p>
              <p>+34 660 532 823</p>
            </div>
          </div>
        </section>

        {/* PÁGINA 2: QUIÉNES SOMOS & NUESTROS SERVICIOS */}
        <section className="h-[297mm] p-12 print:break-after-page flex flex-col bg-white">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-800 uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>¿QUIÉNES SOMOS?</h2>
            <div className="text-gray-700 leading-relaxed text-[11px] space-y-2 text-justify">
               <p dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
               <p dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
            </div>
          </div>

          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-blue-800 uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>NUESTROS SERVICIOS</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {SERVICES_STRUCTURE.map((service) => (
                <div key={service.id} className="flex items-start gap-2 p-2 border border-gray-100 rounded-lg bg-gray-50/40">
                  <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${service.color === 'blue' ? 'bg-blue-800' : 'bg-yellow-400'}`}></div>
                  <div>
                    <h3 className="font-bold text-blue-900 uppercase text-[10px] leading-tight mb-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.services[service.id]}</h3>
                    <p className="text-[9px] text-gray-500 leading-tight line-clamp-2">{t.services_descriptions[service.id]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PÁGINA 3: SOFTWARE A MEDIDA & PROYECTOS DEPORTIVOS */}
        <section className="h-[297mm] p-12 print:break-after-page flex flex-col bg-white">
          <div className="bg-blue-900 text-white p-8 rounded-2xl mb-8" style={{ WebkitPrintColorAdjust: 'exact' }}>
            <h2 className="text-3xl font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{tCustom.title}</h2>
            <p className="text-yellow-400 font-medium mb-2 italic text-[11px]">{tCustom.subtitle}</p>
            <p className="text-blue-100 mb-4 text-[10px] leading-relaxed text-justify">{tCustom.description}</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[tCustom.feature_forms, tCustom.feature_shifts, tCustom.feature_crm, tCustom.feature_custom].map((f: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-[8px] flex-shrink-0">✓</div>
                  <span className="text-[9px] font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-blue-800 uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>PROYECTOS DEPORTIVOS</h2>
            <div className="grid grid-cols-1 gap-3">
              {t.projects_list.map((project, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-4 py-0.5">
                  <h3 className="text-[13px] font-bold text-blue-800 uppercase leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>{project.title}</h3>
                  <p className="text-[10px] text-gray-600 mt-1 leading-snug text-justify">{project.description}</p>
                  {project.link && (
                    <span className="text-blue-600 text-[9px] font-bold mt-0.5 block">
                      {project.link.replace('https://', '')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PÁGINA 4: RED DE COLABORADORES & CONTACTO */}
        <section className="h-[297mm] p-12 flex flex-col bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-800 uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>RED DE COLABORADORES</h2>
            <div className="grid grid-cols-2 gap-3">
              {PARTNERS_STRUCTURE.map((partner) => (
                <div 
                  key={partner.id} 
                  className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-center"
                >
                  <h3 className="font-bold text-blue-800 uppercase text-[11px] leading-tight mb-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {t.partners[partner.id]?.name}
                  </h3>
                  <p className="text-[9px] text-gray-500 leading-tight">
                    {t.partners[partner.id]?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto bg-yellow-400 p-10 rounded-[2rem] flex flex-col items-center text-center" style={{ WebkitPrintColorAdjust: 'exact' }}>
            <h2 className="text-4xl font-bold text-blue-800 uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>¿HABLAMOS?</h2>
            <p className="text-blue-900 font-semibold mb-8 text-base">Estamos listos para impulsar tu negocio al siguiente nivel.</p>
            <div className="grid grid-cols-2 gap-12 w-full max-w-md">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-blue-800 mb-1 tracking-widest">WHATSAPP</p>
                <p className="text-xl font-bold text-blue-900">+34 660 532 823</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-blue-800 mb-1 tracking-widest">EMAIL</p>
                <p className="text-lg font-bold text-blue-900">info@melenamarketing.com</p>
              </div>
            </div>
            <p className="mt-8 text-blue-800 font-bold text-base">www.melenamarketing.com</p>
          </div>
        </section>

      </div>

      <style>{`
        @media screen {
          .container {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
        }
        @media print {
          @page {
            size: 210mm 297mm;
            margin: 0;
          }
          html, body {
            height: 297mm;
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
            height: 297mm !important;
            box-sizing: border-box !important;
            page-break-after: always !important;
            overflow: hidden !important;
            position: relative;
          }
        }
      `}</style>
    </div>
  );
};

export default PdfPortfolioPage;
