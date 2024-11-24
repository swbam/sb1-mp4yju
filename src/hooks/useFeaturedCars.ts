import { useState, useEffect } from 'react';
import { Car } from '../types';
import { getFeaturedCars } from '../services/carService';

export const useFeaturedCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await getFeaturedCars();
        setCars(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load cars');
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  return { cars, loading, error };
};