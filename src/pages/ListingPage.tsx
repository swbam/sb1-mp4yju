import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Activity, Eye, Share2, Heart, Shield, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ListingPage = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would be fetched based on the ID
  const listing = {
    title: '2020 BMW M4 Competition',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800',
    ],
    currentBid: 65000,
    timeLeft: '2d 5h',
    watchers: 45,
    bids: 12,
    seller: {
      name: 'Premium Auto Gallery',
      rating: 4.9,
      sales: 128,
      location: {
        lat: 34.0522,
        lng: -118.2437,
        address: 'Los Angeles, CA'
      }
    },
    details: {
      year: 2020,
      mileage: '15,000 mi',
      engine: '3.0L Twin-Turbo Inline-6',
      transmission: '8-Speed Automatic',
      exteriorColor: 'Alpine White',
      interiorColor: 'Black w/ Blue Stitching',
      vin: 'WBS73AF02LBM00000',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold text-black">{listing.title}</h1>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                {Object.entries(listing.details).map(([key, value]) => (
                  <div key={key} className="border-b border-steelgrey pb-4">
                    <div className="text-sm text-grey capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="mt-1 text-black">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold">Vehicle Location</h2>
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden">
              <MapContainer 
                center={[listing.seller.location.lat, listing.seller.location.lng]} 
                zoom={13} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[listing.seller.location.lat, listing.seller.location.lng]}>
                  <Popup>{listing.seller.location.address}</Popup>
                </Marker>
              </MapContainer>
            </div>
            <p className="mt-4 text-grey">{listing.seller.location.address}</p>
          </div>
        </div>

        {/* Right Column - Bidding and Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-grey">Current Bid</div>
                <div className="text-3xl font-bold text-accent">
                  ${listing.currentBid.toLocaleString()}
                </div>
              </div>
              <div className="flex items-center text-grey">
                <Clock className="h-5 w-5 mr-2" />
                {listing.timeLeft} left
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <button className="w-full bg-accent text-white py-2 px-4 rounded-[3px] hover:bg-accent/90 transition-colors">
                Place Bid
              </button>
              <button className="w-full border border-accent text-accent py-2 px-4 rounded-[3px] hover:bg-accent/10 transition-colors">
                Make Offer
              </button>
            </div>

            <div className="mt-6 flex justify-between text-sm text-grey">
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {listing.watchers} watching
              </div>
              <div className="flex items-center">
                <Activity className="h-4 w-4 mr-1" />
                {listing.bids} bids
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="flex-1 flex items-center justify-center py-2 border border-steelgrey rounded-[3px] hover:bg-lightgrey transition-colors text-grey">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
              <button className="flex-1 flex items-center justify-center py-2 border border-steelgrey rounded-[3px] hover:bg-lightgrey transition-colors text-grey">
                <Heart className="h-5 w-5 mr-2" />
                Save
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="font-semibold text-black">{listing.seller.name}</div>
                <div className="mt-1 text-sm text-grey">
                  {listing.seller.rating} ★ • {listing.seller.sales} sales
                </div>
              </div>
              <button className="text-accent hover:text-accent/90">
                View Profile
              </button>
            </div>
          </div>

          <div className="bg-accent/10 rounded-lg p-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
              <div>
                <div className="font-semibold text-accent">Buyer Protection</div>
                <div className="mt-1 text-sm text-grey">
                  Full refund if item is not as described or doesn't arrive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;