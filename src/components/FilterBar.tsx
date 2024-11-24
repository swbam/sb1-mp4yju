import React from 'react';

interface FilterBarProps {
  onFilterChange: (filterType: string, value: string | number) => void;
  filters: {
    year: string;
    price: string;
    mileage: string;
    bodyStyle: string;
    distance: string;
  };
  showFilters: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, filters, showFilters }) => {
  if (!showFilters) return null;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <select 
        className="w-full rounded-[3px] border border-steelgrey p-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        value={filters.year}
        onChange={(e) => onFilterChange('year', e.target.value)}
      >
        <option value="">Year</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </select>

      <select 
        className="w-full rounded-[3px] border border-steelgrey p-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        value={filters.price}
        onChange={(e) => onFilterChange('price', e.target.value)}
      >
        <option value="">Price Range</option>
        <option value="0-5000">Under $5,000</option>
        <option value="5000-10000">$5,000 - $10,000</option>
        <option value="10000-15000">$10,000 - $15,000</option>
        <option value="15000-20000">$15,000 - $20,000</option>
        <option value="20000+">Over $20,000</option>
      </select>

      <select 
        className="w-full rounded-[3px] border border-steelgrey p-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        value={filters.mileage}
        onChange={(e) => onFilterChange('mileage', e.target.value)}
      >
        <option value="">Mileage</option>
        <option value="0-25000">Under 25,000</option>
        <option value="25000-50000">25,000 - 50,000</option>
        <option value="50000-75000">50,000 - 75,000</option>
        <option value="75000-100000">75,000 - 100,000</option>
        <option value="100000+">Over 100,000</option>
      </select>

      <select 
        className="w-full rounded-[3px] border border-steelgrey p-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        value={filters.bodyStyle}
        onChange={(e) => onFilterChange('bodyStyle', e.target.value)}
      >
        <option value="">Body Style</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="truck">Truck</option>
        <option value="coupe">Coupe</option>
        <option value="convertible">Convertible</option>
        <option value="wagon">Wagon</option>
        <option value="van">Van</option>
      </select>

      <select 
        className="w-full rounded-[3px] border border-steelgrey p-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        value={filters.distance}
        onChange={(e) => onFilterChange('distance', e.target.value)}
      >
        <option value="">Distance</option>
        <option value="25">Within 25 miles</option>
        <option value="50">Within 50 miles</option>
        <option value="100">Within 100 miles</option>
        <option value="250">Within 250 miles</option>
        <option value="500">Within 500 miles</option>
      </select>
    </div>
  );
};

export default FilterBar;