import React from 'react';
import { mockWatchlist } from '../data/mockData';
import CarCard from '../components/CarCard';

const WatchlistPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-steel-grey">
      <div className="max-w-[1920px] mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Your Watchlist</h1>
        
        {mockWatchlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockWatchlist.map(item => (
              <CarCard key={item.id} car={item.car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-grey">Your watchlist is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;