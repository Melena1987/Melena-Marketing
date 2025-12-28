import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const DashboardPreview: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto h-[400px] hidden md:block">
      {/* Background Main Card */}
      <div className="absolute top-10 left-0 w-full h-[320px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden p-6">
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-20 bg-blue-500/30 rounded-lg animate-pulse"></div>
            <div className="h-20 bg-yellow-500/30 rounded-lg animate-pulse delay-75"></div>
            <div className="h-20 bg-green-500/30 rounded-lg animate-pulse delay-150"></div>
          </div>
          <div className="h-4 bg-white/10 rounded w-full"></div>
          <div className="h-4 bg-white/10 rounded w-5/6"></div>
        </div>
      </div>

      {/* Floating Elements */}
      {/* Employee Shift Module */}
      <div className="absolute -top-4 -right-6 w-56 bg-white rounded-xl shadow-2xl p-4 transform hover:-translate-y-2 transition-transform duration-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xs font-bold text-gray-800 uppercase tracking-tighter">Turnos Staff</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
            <span className="text-[10px] text-gray-500">Juan Pérez</span>
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded">Mañana</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
            <span className="text-[10px] text-gray-500">Maria García</span>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Tarde</span>
          </div>
        </div>
      </div>

      {/* Online Form Module */}
      <div className="absolute bottom-4 -left-10 w-64 bg-yellow-400 rounded-xl shadow-2xl p-4 transform hover:-translate-y-2 transition-transform duration-500 delay-150">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-yellow-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xs font-bold text-blue-900 uppercase tracking-tighter">Nuevo Lead</span>
        </div>
        <div className="bg-white/30 h-10 rounded-lg flex items-center px-3 mb-2">
            <div className="h-2 bg-white/50 w-full rounded"></div>
        </div>
        <div className="bg-blue-800 text-white text-[10px] font-bold py-2 rounded-lg text-center uppercase">
            Enviar Solicitud
        </div>
      </div>
    </div>
  );
};

const CustomPlatforms: React.FC = () => {
  const t = (useTranslations() as any).custom_platforms;

  return (
    <section className="bg-blue-900 py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Gestión 4.0</span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t.title}
            </h2>
            <p className="text-xl text-blue-200 mb-8 font-light italic border-l-4 border-yellow-400 pl-6">
              {t.subtitle}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {t.description}
            </p>
            
            <ul className="space-y-4 mb-12">
              {[t.feature_forms, t.feature_shifts, t.feature_crm, t.feature_custom].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 transform group-hover:scale-125 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/send?phone=34660532823&text=Hola, quiero digitalizar mi empresa con una plataforma a medida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-blue-900 font-bold py-4 px-12 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              {t.cta}
            </a>
          </div>

          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default CustomPlatforms;