
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Omit<Service, 'id' | 'title'>;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, title }) => {
  const bgColor = service.color === 'blue' ? 'bg-blue-800' : 'bg-yellow-400';
  const textColor = service.color === 'blue' ? 'text-white' : 'text-blue-800';

  return (
    <div className={`relative aspect-square ${bgColor} ${textColor} flex items-center justify-center p-4 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out overflow-hidden`}>
      {service.isFree && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 transform rotate-45 translate-x-3 translate-y-1 shadow-md">
          GRATIS
        </div>
      )}
      <h3 className="text-center font-semibold uppercase tracking-wider text-xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
        {title}
      </h3>
    </div>
  );
};

export default ServiceCard;
