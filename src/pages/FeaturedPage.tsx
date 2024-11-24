import React from 'react';
import CarCard from '../components/CarCard';
import { useFeaturedCars } from '../hooks/useFeaturedCars';

const FeaturedPage = () => {
  const { cars, loading, error } = useFeaturedCars();

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error loading featured cars</div>;
  if (!cars?.length) return <div className="p-4">No featured cars available</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Featured Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;