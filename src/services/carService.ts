import { Car } from '../types';

const FEATURED_CARS: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
    price: 15999,
    mileage: 45000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
    distance: 5.2
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2018,
    price: 14500,
    mileage: 52000,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
    distance: 7.8
  },
  // Add more sample cars here
];

export const getFeaturedCars = async (): Promise<Car[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FEATURED_CARS);
    }, 500);
  });
};