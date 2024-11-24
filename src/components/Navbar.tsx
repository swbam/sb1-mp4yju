import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="lg:hidden mr-4 p-2 hover:bg-lightgrey rounded-[3px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-grey" />
              ) : (
                <Menu className="h-6 w-6 text-grey" />
              )}
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="font-bold text-xl tracking-tight">
                <span className="text-black">Quick</span>
                <span className="text-accent">Auction</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl px-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search cars, brands, or models..."
                className="w-full pl-4 pr-4 py-2 rounded-[3px] border border-steelgrey focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 hover:bg-lightgrey rounded-[3px] transition-colors">
              <Bell className="h-5 w-5 text-grey" />
            </button>
            <button className="p-2 hover:bg-lightgrey rounded-[3px] transition-colors">
              <User className="h-5 w-5 text-grey" />
            </button>
            <Link 
              to="/sell" 
              className="hidden sm:block bg-accent text-white px-4 py-2 rounded-[3px] hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              List Your Car
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <input
          type="text"
          placeholder="Search cars, brands, or models..."
          className="w-full pl-4 pr-4 py-2 rounded-[3px] border border-steelgrey focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>
    </nav>
  );
};

export default Navbar;