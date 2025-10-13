
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Lo que Dicen Nuestros Clientes</h2>
          <p className="mt-4 text-lg text-blue-200 max-w-3xl mx-auto">
            La confianza y los resultados son la base de nuestra relación con cada PYME.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-blue-700 p-8 rounded-lg shadow-lg flex flex-col">
              <p className="text-blue-100 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-yellow-400">{testimonial.author}</p>
                <p className="text-sm text-blue-200">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
