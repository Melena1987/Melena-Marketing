
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
    <div className={`aspect-square ${bgColor} ${textColor} flex items-center justify-center p-4 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out cursor-pointer`}>
      <h3 className="text-center font-semibold uppercase tracking-wider text-xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
        {title}
      </h3>
    </div>
  );
};

export default ServiceCard;