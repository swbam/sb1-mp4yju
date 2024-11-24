import React from 'react';
import { Link } from 'react-router-dom';
import { mockBids } from '../data/mockData';
import { formatDistanceToNow } from 'date-fns';

const BidsPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-steel-grey">
      <div className="max-w-[1920px] mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Your Bids</h1>
        
        <div className="bg-white rounded-[3px] shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-lightgrey">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Vehicle</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Your Bid</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steelgrey">
              {mockBids.map(bid => (
                <tr key={bid.id} className="hover:bg-steel-grey">
                  <td className="px-6 py-4">
                    <Link to={`/listing/${bid.car.id}`} className="flex items-center">
                      <img 
                        src={bid.car.image} 
                        alt={bid.car.title}
                        className="w-12 h-12 rounded-[3px] object-cover mr-4"
                      />
                      <div>
                        <div className="font-medium text-black">{bid.car.year} {bid.car.title}</div>
                        <div className="text-sm text-grey">{bid.car.mileage}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-accent font-medium">
                    ${bid.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${bid.status === 'active' ? 'bg-mint/10 text-mint' :
                        bid.status === 'outbid' ? 'bg-orange/10 text-orange' :
                        bid.status === 'won' ? 'bg-accent/10 text-accent' :
                        'bg-grey/10 text-grey'
                      }`}>
                      {bid.status.charAt(0).toUpperCase() + bid.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-grey">
                    {formatDistanceToNow(bid.date, { addSuffix: true })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidsPage;