import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Clock, 
  Star, 
  Gauge, 
  Car, 
  Heart,
  History,
  Settings,
  HelpCircle
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <Clock className="w-5 h-5" />, label: 'Live Auctions', path: '/' },
    { icon: <Star className="w-5 h-5" />, label: 'Featured', path: '/featured' },
    { icon: <Gauge className="w-5 h-5" />, label: 'Past Results', path: '/results' },
    { icon: <Car className="w-5 h-5" />, label: 'Sell Your Car', path: '/sell' },
    { icon: <Heart className="w-5 h-5" />, label: 'Watchlist', path: '/watchlist' },
    { icon: <History className="w-5 h-5" />, label: 'Your Bids', path: '/bids' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/settings' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help Center', path: '/help' },
  ];

  return (
    <div className="hidden lg:block fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-steelgrey overflow-y-auto z-40">
      <div className="p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-[3px] transition-colors ${
                location.pathname === item.path
                  ? 'bg-accent/10 text-accent' 
                  : 'text-grey hover:bg-lightgrey'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;