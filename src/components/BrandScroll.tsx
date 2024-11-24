import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Car } from 'lucide-react';
import { brands } from '../data/brands';

interface BrandScrollProps {
  selectedBrand: string;
  onBrandSelect: (brand: string) => void;
}

const BrandScroll: React.FC<BrandScrollProps> = ({ selectedBrand, onBrandSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-grey" />
      </button>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 py-2 px-12 scroll-smooth"
      >
        {brands.map(brand => {
          const IconComponent = typeof brand.icon === 'string' ? 'img' : Car;
          return (
            <button
              key={brand.name}
              onClick={() => onBrandSelect(brand.name)}
              className={`flex flex-col items-center min-w-[80px] transition-all ${
                selectedBrand === brand.name 
                  ? 'opacity-100 scale-110' 
                  : 'opacity-70 hover:opacity-90'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm
                ${selectedBrand === brand.name 
                  ? 'ring-2 ring-accent ring-offset-2' 
                  : 'hover:shadow-md'
                }`}
              >
                {typeof brand.icon === 'string' ? (
                  <img src={brand.icon} alt={brand.name} className="w-8 h-8" />
                ) : (
                  <IconComponent className="w-8 h-8 text-grey" />
                )}
              </div>
              <span className="mt-2 text-sm font-medium text-grey">
                {brand.name}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-grey" />
      </button>
    </div>
  );
};

export default BrandScroll;