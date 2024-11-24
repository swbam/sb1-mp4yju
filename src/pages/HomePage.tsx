import React, { useState, useEffect } from 'react';
import BrandScroll from '../components/BrandScroll';
import CarGrid from '../components/CarGrid';
import FilterBar from '../components/FilterBar';
import { mockCars } from '../data/mockData';
import { Filter } from 'lucide-react';
import { Car } from '../types';

const HomePage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [showFilters, setShowFilters] = useState(true);
  const [filteredCars, setFilteredCars] = useState<Car[]>(mockCars);
  const [filters, setFilters] = useState({
    year: '',
    price: '',
    mileage: '',
    bodyStyle: '',
    distance: ''
  });

  const handleFilterChange = (filterType: string, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  useEffect(() => {
    let filtered = mockCars;

    if (selectedBrand !== 'All') {
      filtered = filtered.filter(car => car.make === selectedBrand);
    }

    if (filters.year) {
      filtered = filtered.filter(car => car.year.toString() === filters.year);
    }

    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      filtered = filtered.filter(car => {
        if (max) {
          return car.price >= min && car.price <= max;
        }
        return car.price >= min;
      });
    }

    if (filters.mileage) {
      const [min, max] = filters.mileage.split('-').map(Number);
      filtered = filtered.filter(car => {
        if (max) {
          return car.mileage >= min && car.mileage <= max;
        }
        return car.mileage >= min;
      });
    }

    if (filters.distance) {
      const maxDistance = Number(filters.distance);
      filtered = filtered.filter(car => 
        car.distance !== undefined && car.distance <= maxDistance
      );
    }

    setFilteredCars(filtered);
  }, [selectedBrand, filters]);

  return (
    <div className="flex-1 bg-lightgrey min-h-screen pt-16">
      <div className="sticky top-16 z-10 bg-white border-b border-steelgrey">
        <div className="max-w-[1920px] w-full mx-auto">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold text-black">Browse Auctions</h1>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 text-grey hover:text-black transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              <BrandScroll 
                selectedBrand={selectedBrand} 
                onBrandSelect={setSelectedBrand} 
              />

              <div className="w-full">
                <FilterBar 
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  showFilters={showFilters}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] w-full mx-auto px-4 py-6">
        <CarGrid cars={filteredCars} />
      </div>
    </div>
  );
};

export default HomePage;