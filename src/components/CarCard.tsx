import { Link } from 'react-router-dom';
import { Clock, Activity, Eye } from 'lucide-react';
import { formatDistance, formatPrice } from '../utils/formatters';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  if (!car) return null;

  return (
    <Link to={`/listing/${car.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 sm:h-40 md:h-48">
          <img 
            src={car.image} 
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-full object-cover"
          />
          {typeof car.distance === 'number' && (
            <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-sm">
              {formatDistance(car.distance)} miles away
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
            <h3 className="text-lg font-semibold line-clamp-2">
              {car.year} {car.make} {car.model}
            </h3>
            <span className="text-xl font-bold text-accent whitespace-nowrap">
              {formatPrice(car.price)}
            </span>
          </div>
          <div className="text-grey text-sm mb-3">
            {car.mileage.toLocaleString()} miles
          </div>
          <div className="flex items-center justify-between text-sm text-grey mb-3">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {car.timeLeft}
            </div>
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-1" />
              {car.bids} bids
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {car.watchers}
            </div>
          </div>
          <button 
            className="w-full bg-accent text-white py-2 px-4 rounded hover:bg-accent/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Handle bid action
            }}
          >
            Place Bid
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;