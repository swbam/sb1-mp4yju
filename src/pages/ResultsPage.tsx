import React from 'react';
import { mockResults } from '../data/mockData';
import { formatDistanceToNow } from 'date-fns';

const ResultsPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-steel-grey">
      <div className="max-w-[1920px] mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Past Results</h1>
        
        <div className="bg-white rounded-[3px] shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-lightgrey">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Vehicle</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Final Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Total Bids</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-grey">Sold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steelgrey">
              {mockResults.map(result => (
                <tr key={result.id} className="hover:bg-steel-grey">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img 
                        src={result.car.image} 
                        alt={result.car.title}
                        className="w-12 h-12 rounded-[3px] object-cover mr-4"
                      />
                      <div>
                        <div className="font-medium text-black">{result.car.year} {result.car.title}</div>
                        <div className="text-sm text-grey">{result.car.mileage}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-accent font-medium">
                    ${result.finalPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-grey">
                    {result.totalBids} bids
                  </td>
                  <td className="px-6 py-4 text-grey">
                    {formatDistanceToNow(result.soldDate, { addSuffix: true })}
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

export default ResultsPage;