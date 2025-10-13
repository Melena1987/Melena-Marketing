
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 uppercase tracking-wider leading-tight">
          Impulsamos el Crecimiento de tu Pyme
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-blue-800">
          En el Mundo Digital
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          Somos una agencia de marketing digital especializada en ayudar a pequeñas y medianas empresas a mejorar su presencia en Internet y atraer más clientes potenciales.
        </p>
        <div className="mt-10">
          <a
            href="#contacto"
            className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Pide tu Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
